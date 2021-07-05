## Monitoring Kafka

#### Installing Prometheus Operator

##### Download Prometheus operator using Helm v3. 

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

##### Verify Prometheus related pod installed under monitoring namespace

```
$ kubectl get pods -n monitoring

NAME                                                     READY   STATUS    RESTARTS   AGE
alertmanager-prometheus-kube-prometheus-alertmanager-0   2/2     Running   0          13h
prometheus-grafana-6b87549fff-nsdbq                      2/2     Running   0          13h
prometheus-kube-prometheus-operator-75f4ff9c69-qjz64     1/1     Running   0          13h
prometheus-kube-state-metrics-6df5d44568-m5f5j           1/1     Running   0          13h
prometheus-prometheus-kube-prometheus-prometheus-0       2/2     Running   1          13h
prometheus-prometheus-node-exporter-67rf7                1/1     Running   0          13h
prometheus-prometheus-node-exporter-lgbnk                1/1     Running   0          13h
prometheus-prometheus-node-exporter-thdr9                1/1     Running   0          13h
```


##### Verify Prometheus related services installed under monitoring namespace

```
$ kubectl get svc -n monitoring

NAME                                      TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)                      AGE
alertmanager-operated                     ClusterIP   None           <none>        9093/TCP,9094/TCP,9094/UDP   13h
prometheus-grafana                        ClusterIP   10.24.11.192   <none>        80/TCP                       13h
prometheus-kube-prometheus-alertmanager   ClusterIP   10.24.6.147    <none>        9093/TCP                     13h
prometheus-kube-prometheus-operator       ClusterIP   10.24.4.213    <none>        443/TCP                      13h
prometheus-kube-prometheus-prometheus     ClusterIP   10.24.6.198    <none>        9090/TCP                     13h
prometheus-kube-state-metrics             ClusterIP   10.24.0.164    <none>        8080/TCP                     13h
prometheus-operated                       ClusterIP   None           <none>        9090/TCP                     13h
prometheus-prometheus-node-exporter       ClusterIP   10.24.11.40    <none>        9100/TCP                     13h
```


##### Change Prometheus service to NodePort from ClusterIP:
```
$ kubectl patch svc prometheus-kube-prometheus-prometheus -n monitoring -p '{"spec": {"type": "NodePort"}}'
```

##### Change prometheus-grafana service to LoadBalancer/NodePort from ClusterIP:
```
$ kubectl patch svc prometheus-grafana -n monitoring -p '{"spec": {"type": "NodePort"}}'
```

**Note:** If the user needs to access Prometheus and Grafana outside the network, their service type can be changed or a new service should be added to use LoadBalancer or create Ingress resources for production deployment.

For ease of simplicity in testing the deployment, we are going to use NodePort. Please be advised to consider using LoadBalancer or Ingress, instead of NodePort, for  production deployment. 

##### Sample output after changing above 2 changes in services:

```
$ kubectl get svc -n monitoring
NAME                                      TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)                      AGE
alertmanager-operated                     ClusterIP   None           <none>        9093/TCP,9094/TCP,9094/UDP   13h
prometheus-grafana                        NodePort    10.24.11.192   <none>        80:30437/TCP                 13h
prometheus-kube-prometheus-alertmanager   ClusterIP   10.24.6.147    <none>        9093/TCP                     13h
prometheus-kube-prometheus-operator       ClusterIP   10.24.4.213    <none>        443/TCP                      13h
prometheus-kube-prometheus-prometheus     NodePort    10.24.6.198    <none>        9090:30210/TCP               13h
prometheus-kube-state-metrics             ClusterIP   10.24.0.164    <none>        8080/TCP                     13h
prometheus-operated                       ClusterIP   None           <none>        9090/TCP                     13h
prometheus-prometheus-node-exporter       ClusterIP   10.24.11.40    <none>        9100/TCP                     13h
```


##### Get the node details using the following command:

```
$ kubectl get node -o wide
NAME                                   STATUS   ROLES    AGE   VERSION            INTERNAL-IP   EXTERNAL-IP     OS-IMAGE             KERNEL-VERSION   CONTAINER-RUNTIME
gke-kafka-default-pool-a691e3fc-46n9   Ready    <none>   24h   v1.17.15-gke.800   10.128.0.4    34.69.174.168   Ubuntu 18.04.5 LTS   5.4.0-1029-gke   docker://19.3.2
gke-kafka-default-pool-a691e3fc-j7kh   Ready    <none>   24h   v1.17.15-gke.800   10.128.0.2    35.238.146.71   Ubuntu 18.04.5 LTS   5.4.0-1029-gke   docker://19.3.2
gke-kafka-default-pool-a691e3fc-xr1r   Ready    <none>   24h   v1.17.15-gke.800   10.128.0.3    35.223.116.76   Ubuntu 18.04.5 LTS   5.4.0-1029-gke   docker://19.3.2
```


Verify Prometheus service is accessing over web browser using `<any_node_external-ip:<NodePort>>`
Example:
http://34.69.174.168:30210

**Note:** It may be required to allow the Node Port number in the Firewall to access the above Grafana and Prometheus URL on the web browser.


### Install Kafka Service Monitor

Create a service monitor for Kafka so that Prometheus can monitor the Kafka services.
The following is the sample YAML specification for Kafka service monitor. Save the config and apply it. The following sample YAML is saved as `servicemonitor.yaml`.

```
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  labels:
    release: prometheus
  name: kafka-cluster-monitor
spec:
  endpoints:
  - interval: 30s
    #port: metrics
    port: metrics
  - interval: 30s
    port: ne-metrics
  namespaceSelector:
    matchNames:
    - default
  selector:
    matchLabels:
      kudo.dev/servicemonitor: "true"
```
                                         
##### Apply the service monitor for Kafka using the following command:

```
$ kubectl apply -f servicemonitor.yaml
```

##### Launch Grafana using External IP of prometheus-grafana with port 80 on Web browser:

```
<External IP_prometheus-grafana-svc>:<NodePort>
```

Example:
http://34.69.174.168:30437/

Username: `admin`
Password: `prom-operator`

##### The above is the default credentials when you install Prometheus stack with default values. Password can be obtained using the following command:

```
$ kubectl get secret \
    --namespace monitoring prometheus-grafana \
    -o jsonpath="{.data.admin-password}" \
    | base64 --decode ; echo
```

The above credentials need to be provided when you need to access the Grafana console. 
Login to your Grafana console using the above credentials.

Meanwhile, download the grafana json file for Kudo Kafka from the following link and upload into Grafana. 
https://raw.githubusercontent.com/kudobuilder/operators/master/repository/kafka/docs/v1.3/resources/grafana-dashboard.json

Now, on your Grafana Console on your web browser, goto + sign and click `Import`. Then paste downloaded `grafana-dashboard.json` file into the form. Then `Load` it. In the next page, select `Prometheus` as a `data source` against the Prometheus data field and then import it. 
Now, you can see that Kafka metrics are displayed in your Grafana console. The following is a sample Grafana monitoring dashboard of Kudo Kafka cluster.
