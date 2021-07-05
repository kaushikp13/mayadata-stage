### Monitoring ElasticSearch

### Set up Prometheus and Grafana

In this section, we will install Prometheus Operator and use ElasticSearch Service Monitor to add a ElasticSearch Dashboard to Grafana.

#### Installing Prometheus Operator
Installation of the Prometheus operator using Helm, will install both Prometheus and Grafana. Download Prometheus operator using Helm v3.

```
$ helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
$ kubectl create ns monitoring
$ helm repo update
```

This following command will install both Prometheus and Grafana components.

```
$ helm install prometheus prometheus-community/kube-prometheus-stack --namespace monitoring
```

**Note:** Check compatibility for your Kubernetes version and Prometheus stack from here.

##### Verify if Prometheus related pods are installed successfully under monitoring namespace:

```
$ kubectl get pods -n monitoring
NAME                                                     READY   STATUS    RESTARTS   AGE
alertmanager-prometheus-kube-prometheus-alertmanager-0   2/2     Running   0          2m17s
prometheus-grafana-7666764f44-v58cp                      2/2     Running   0          2m21s
prometheus-kube-prometheus-operator-8bfdd5bcf-7dt98      1/1     Running   0          2m21s
prometheus-kube-state-metrics-6bfcd6f648-mw48q           1/1     Running   0          2m21s
prometheus-prometheus-kube-prometheus-prometheus-0       2/2     Running   1          2m16s
prometheus-prometheus-node-exporter-fxhdj                1/1     Running   0          2m21s
prometheus-prometheus-node-exporter-mn72f                1/1     Running   0          2m21s
prometheus-prometheus-node-exporter-v782r                1/1     Running   0          2m21s
```

##### Verify if Prometheus related services are installed successfully under `monitoring` namespace:

```
$ kubectl get svc -n monitoring
NAME                                      TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)                      AGE
alertmanager-operated                     ClusterIP   None            <none>        9093/TCP,9094/TCP,9094/UDP   2m50s
prometheus-grafana                        ClusterIP   10.112.23.251   <none>        80/TCP                       2m54s
prometheus-kube-prometheus-alertmanager   ClusterIP   10.112.25.4     <none>        9093/TCP                     2m54s
prometheus-kube-prometheus-operator       ClusterIP   10.112.17.237   <none>        443/TCP                      2m54s
prometheus-kube-prometheus-prometheus     ClusterIP   10.112.16.119   <none>        9090/TCP                     2m54s
prometheus-kube-state-metrics             ClusterIP   10.112.23.8     <none>        8080/TCP                     2m54s
prometheus-operated                       ClusterIP   None            <none>        9090/TCP                     2m49s
prometheus-prometheus-node-exporter       ClusterIP   10.112.22.35    <none>        9100/TCP                     2m54s
```


Change `prometheus-prometheus-oper-prometheus` service to LoadBalancer/NodePort from ClusterIP. This change is for accessing Prometheus service from your Web browser.

```
$ kubectl patch svc prometheus-kube-prometheus-prometheus -n monitoring -p '{"spec": {"type": "NodePort"}}'
```


Change `prometheus-grafana` service to LoadBalancer/NodePort from ClusterIP. This change is for accessing Grafana service from your Web browser

```
$ kubectl patch svc prometheus-grafana -n monitoring -p '{"spec": {"type": "NodePort"}}'
```

**Note:** If the user needs to access Prometheus and Grafana outside the network, the service type can be changed or a new service should be added to use LoadBalancer or create Ingress resources for production deployment.

For ease of simplicity in testing the deployment, we are going to use NodePort. Please be advised to consider using LoadBalancer or Ingress, instead of NodePort, for  production deployment. 

##### Sample output after changing above 2 services:
 
```
$ kubectl get svc -n monitoring
NAME                                      TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)                      AGE
alertmanager-operated                     ClusterIP   None            <none>        9093/TCP,9094/TCP,9094/UDP   5m19s
prometheus-grafana                        NodePort    10.112.23.251   <none>        80:30029/TCP                 5m23s
prometheus-kube-prometheus-alertmanager   ClusterIP   10.112.25.4     <none>        9093/TCP                     5m23s
prometheus-kube-prometheus-operator       ClusterIP   10.112.17.237   <none>        443/TCP                      5m23s
prometheus-kube-prometheus-prometheus     NodePort    10.112.16.119   <none>        9090:31784/TCP               5m23s
prometheus-kube-state-metrics             ClusterIP   10.112.23.8     <none>        8080/TCP                     5m23s
prometheus-operated                       ClusterIP   None            <none>        9090/TCP                     5m18s
prometheus-prometheus-node-exporter       ClusterIP   10.112.22.35    <none>        9100/TCP                     5m23s
```


##### Sample output details of Nodes:

```
$ kubectl get node -o wide
NAME                                       STATUS   ROLES    AGE     VERSION             INTERNAL-IP     EXTERNAL-IP      OS-IMAGE             KERNEL-VERSION   CONTAINER-RUNTIME
gke-cluster-2-default-pool-c8c74720-65nf   Ready    <none>   5h48m   v1.18.12-gke.1210   10.128.15.193   34.70.58.139     Ubuntu 18.04.5 LTS   5.4.0-1030-gke   docker://19.3.6
gke-cluster-2-default-pool-c8c74720-90r9   Ready    <none>   5h48m   v1.18.12-gke.1210   10.128.15.194   35.188.38.187    Ubuntu 18.04.5 LTS   5.4.0-1030-gke   docker://19.3.6
gke-cluster-2-default-pool-c8c74720-cjjc   Ready    <none>   5h48m   v1.18.12-gke.1210   10.128.15.196   35.224.255.199   Ubuntu 18.04.5 LTS   5.4.0-1030-gke   docker://19.3.6
```

##### Verify if Prometheus service is accessible over the web using `<any_node_external-ip>:<NodePort>` if Service Type of Prometheus is NodePort.

##### Example:

```
http://34.70.58.139:31784
```

#### Installing ElasticSearch service monitor

This is how your `servicemonitor.yaml` should look like:

```
$ cat servicemonitor.yaml
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  labels:
    release: prometheus
  name: elastic-cluster-monitor
spec:
  endpoints:
  - interval: 10s
    path: /metrics
    targetPort: 9114
  namespaceSelector:
    matchNames:
    - default
  selector:
    matchLabels:
      app: elasticsearch-exporter
```

##### Create a ServiceMonitor:

```
$ kubectl apply -f servicemonitor.yaml
```


###### Deploy ElasticSearch exporter to get the metrics:
###### Get the values.yaml:
```
$ wget https://raw.githubusercontent.com/prometheus-community/helm-charts/main/charts/prometheus-elasticsearch-exporter/values.yaml
```


###### Edit the following parameters in `values.yaml`:
```
service.httpPort: 9114
es.uri:  http://elastic-coordinator-hs:9200   # Provide the service name of Elastic coordinator
es.cluster_settings: true
serviceAccount.create: true
podSecurityPolicies.enabled:true
```

##### Now, install ElasticSearch exporter:
```
$ helm install es-monitor -f values.yaml prometheus-community/prometheus-elasticsearch-exporter
```

Launch Grafana using External IP of prometheus-grafana with port 80 on your browser, similar to the format here http://:<80>. This is applicable if the service is being created using Load Balancer. If it is NodePort, then use :< Nodeport of prometheus-grafana>.

##### Example:
```
http://34.67.160.246:30029
```

##### Username: admin Password: prom-operator
##### Password can be get using the command
```
(kubectl get secret \
    --namespace monitoring prometheus-grafana \
    -o jsonpath="{.data.admin-password}" \
    | base64 --decode ; echo
)
```

#### Adding ElasticSearch Dashboard

Meanwhile, either you can download the grafana json file for Elasticsearch from the following link and upload into Grafana or you can mention Apache grafana dashboard id 7259 in `Import via grafana.com` section.
https://grafana.com/api/dashboards/7259/revisions/1/download

If you download the dashboard, then in your Grafana Console, goto + sign and click `Import`. Then, use the downloaded `elasticsearch_rev1.json` file into the form and click on `Load`. In the next page, select `Prometheus` as a data source against the `Prometheus` data field and then import it. Now, you can see the Monitoring dashboard of Elasticsearch workload.

![prometheus_1](assets/data/elastic-workload/images/prometheus_1.png)
![prometheus_2](assets/data/elastic-workload/images/prometheus_2.png)
![prometheus_3](assets/data/elastic-workload/images/prometheus_3.png)

### CONCLUSION

Elasticsearch provides distributed, scalable, multitenant-capable full text search engines for all kinds of documents. In this tutorial, we have deployed EFK stack using openEBS Local PV devices storage engine to provide a persistent storage solution for Elasticsearch, Fluentd and Kibana in Kubernetes environment. We used Kubera to deploy openEBS on the k8 cluster. We showed how to check metrics and monitoring of elasticsearch instances using Prometheus and Grafana.





