## Monitoring Magento Web Service with Prometheus

### Installing Prometheus operator

Download Prometheus operator using Helm v3. 
```
$ helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
$ kubectl create ns monitoring
$ helm repo update
```

The following command will install both Prometheus and Grafana components.

```

$ helm install prometheus prometheus-community/kube-prometheus-stack --namespace monitoring
```

**Note:** Check compatibility for your Kubernetes version and Prometheus stack from here.

Verify Prometheus related pod installed under `monitoring` namespace

```

$ kubectl get pods -n monitoring
NAME                                                     READY   STATUS    RESTARTS   AGE
alertmanager-prometheus-kube-prometheus-alertmanager-0   2/2     Running   0          17m
prometheus-grafana-5dfb9cf69f-l4992                      2/2     Running   0          17m
prometheus-kube-prometheus-operator-5c8b6f657c-4xr74     1/1     Running   0          17m
prometheus-kube-state-metrics-685b975bb7-ctf98           1/1     Running   0          17m
prometheus-prometheus-kube-prometheus-prometheus-0       2/2     Running   1          17m
prometheus-prometheus-node-exporter-bt9n7                1/1     Running   0          17m
prometheus-prometheus-node-exporter-ckwth                1/1     Running   0          17m
prometheus-prometheus-node-exporter-l8h42                1/1     Running   0          17m
```


Verify Prometheus related services installed under `monitoring` namespace

```
$ kubectl get svc -n monitoring

NAME                                      TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                      AGE
alertmanager-operated                     ClusterIP   None             <none>        9093/TCP,9094/TCP,9094/UDP   59m
prometheus-grafana                        ClusterIP   10.100.57.106    <none>        80/TCP                 59m
prometheus-kube-prometheus-alertmanager   ClusterIP   10.100.57.50     <none>        9093/TCP                     59m
prometheus-kube-prometheus-operator       ClusterIP   10.100.91.10     <none>        443/TCP                      59m
prometheus-kube-prometheus-prometheus     ClusterIP   10.100.161.233   <none>        9090/TCP               59m
prometheus-kube-state-metrics             ClusterIP   10.100.171.91    <none>        8080/TCP                     59m
prometheus-operated                       ClusterIP   None             <none>        9090/TCP                     59m
prometheus-prometheus-node-exporter       ClusterIP   10.100.99.150    <none>        9100/TCP                     59m
```






For ease of simplicity in testing the deployment, we are going to use NodePort for prometheus-kube-prometheus-prometheus and prometheus-grafana services . Please be advised to consider using LoadBalancer or Ingress, instead of NodePort, for production deployment.

Change Prometheus service to NodePort from ClusterIP:

```
$ kubectl patch svc prometheus-kube-prometheus-prometheus -n monitoring -p '{"spec": {"type": "NodePort"}}'

Change prometheus-grafana service to LoadBalancer/NodePort from ClusterIP:

$ kubectl patch svc prometheus-grafana -n monitoring -p '{"spec": {"type": "NodePort"}}'
```

**Note:** If the user needs to access Prometheus and Grafana outside the network, the service type can be changed or a new service should be added to use LoadBalancer or create Ingress resources for production deployment.


Sample output after changing above 2 changes in services:

```
$ kubectl get svc -n monitoring

NAME                                      TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                      AGE
alertmanager-operated                     ClusterIP   None             <none>        9093/TCP,9094/TCP,9094/UDP   59m
prometheus-grafana                        NodePort    10.100.57.106    <none>        80:32531/TCP                 59m
prometheus-kube-prometheus-alertmanager   ClusterIP   10.100.57.50     <none>        9093/TCP                     59m
prometheus-kube-prometheus-operator       ClusterIP   10.100.91.10     <none>        443/TCP                      59m
prometheus-kube-prometheus-prometheus     NodePort    10.100.161.233   <none>        9090:32594/TCP               59m
prometheus-kube-state-metrics             ClusterIP   10.100.171.91    <none>        8080/TCP                     59m
prometheus-operated                       ClusterIP   None             <none>        9090/TCP                     59m
prometheus-prometheus-node-exporter       ClusterIP   10.100.99.150    <none>        9100/TCP                     59m
```



Get the node details using the following command:

```
$ kubectl get node -o wide

NAME                                            STATUS   ROLES    AGE    VERSION   INTERNAL-IP      EXTERNAL-IP    OS-IMAGE             KERNEL-VERSION   CONTAINER-RUNTIME
ip-192-168-11-233.ap-south-1.compute.internal   Ready    <none>   144m   v1.19.5   192.168.11.233   13.233.70.79   Ubuntu 20.04.2 LTS   5.4.0-1037-aws   docker://19.3.8
ip-192-168-54-232.ap-south-1.compute.internal   Ready    <none>   144m   v1.19.5   192.168.54.232   65.2.55.94     Ubuntu 20.04.2 LTS   5.4.0-1037-aws   docker://19.3.8
ip-192-168-74-106.ap-south-1.compute.internal   Ready    <none>   144m   v1.19.5   192.168.74.106   13.127.14.85   Ubuntu 20.04.2 LTS   5.4.0-1037-aws   docker://19.3.8
```

Verify Prometheus service is accessing over web browser using 
<any_node_external-ip:<NodePort>>

Example:
```
http://13.233.70.79:32594/
```

**Note:** It may be required to allow the Node Port number in the Firewall to access the above Grafana and Prometheus URL on the web browser.

### Installing Magento service monitor

Create a service monitor for Magento so that Prometheus can monitor the Magento services.
The following is the sample YAML specification for Magento service monitor. Save the config and apply it. The following sample YAML is saved as servicemonitor.yaml.

This is how your servicemonitor.yaml should look like:
```
$ cat > servicemonitor.yaml
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  labels:
    release: prometheus
  name: apache-monitor
spec:
  endpoints:
  - interval: 10s
    path: /metrics
    targetPort: 9117
  namespaceSelector:
    matchNames:
    - magento
  selector:
    matchLabels:
      app.kubernetes.io/name: magento
 
 
Create a ServiceMonitor.
$ kubectl apply -f servicemonitor.yaml
 
Verify the Service Monitor is created successfully.
$ kubectl get servicemonitor
NAME             AGE
apache-monitor   13s
```
 
Launch Grafana using External IP of prometheus-grafana with port 80 on Web browser 
<External IP_prometheus-grafana-svc>:<NodePort>.

Example:

```
http://13.233.70.79:32531
Username: admin 
Password: prom-operator
Password can be get using the command
(kubectl get secret \
    --namespace monitoring prometheus-grafana \
    -o jsonpath="{.data.admin-password}" \
    | base64 --decode ; echo)
```   

The above credentials need to be provided when you need to access the Grafana console. Login to your Grafana console using the above credentials.

Users can upload a Grafana dashboard for Apache in 2 ways.
 1. One by providing the Grafana id of this dashboard and then load it.
 2. Another approach is download the required Grafana dashboard and then paste in the console and then load it. 

### First approach:

![magento_27](assets/data/magento-workload/images/27.png)



The above is as per the first method. Goto + sign and click `Import`. Just find the [Grafana dashboard](https://grafana.com/grafana/dashboards/9069) id of the Apache and then just mention this id and then load it. The Grafana dashboard id of Apache is  `9069`.

### Second approach:

In the second approach, download the Grafana JSON file for Apache from the following link and upload into Grafana. 

https://grafana.com/api/dashboards/9069/revisions/1/download

Now, on your Grafana Console on your web browser, goto + sign and click `Import`. Then paste downloaded `apache_rev1.json` file into the form. Then `Load` it. In the next page, select `Prometheus` as a `data source` against the Prometheus data field and then import it. 
Now, you can see that PostgreSQL metrics are displayed in your Grafana console. The following is a sample Grafana monitoring dashboard of Apache.

![magento_28](assets/data/magento-workload/images/28.png)

![magento_29](assets/data/magento-workload/images/29.png)


**Note:** If you are not able to see the metrics, please check and edit the Security Groups to allow the traffic if you are using EKS.

![magento_30](assets/data/magento-workload/images/30.png)
