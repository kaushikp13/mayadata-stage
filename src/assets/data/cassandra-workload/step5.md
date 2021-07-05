## Set up Prometheus and Grafana

In this section, we will install Prometheus Operator and use Cassandra Service Monitor to get the metrices to Prometheus and show in Grafana.

## Monitoring Cassandra

Installation of Prometheus operator using Helm will install both Prometheus and Grafana. Download Prometheus operator using either Helm v2 or Helm v3.

### For Helm V2

```
$ helm init
```

Patch tiller deployment

```
$ kubectl -n kube-system create sa tiller

$ kubectl create clusterrolebinding tiller --clusterrole cluster-admin --serviceaccount=kube-system:tiller

$ kubectl -n kube-system patch deploy/tiller-deploy -p '{"spec": {"template": {"spec": {"serviceAccountName": "tiller"}}}}'
```

Update Helm repo

```
$ helm repo update
```

Install Prometheus operator

```
$ kubectl create ns monitoring 

$ helm install stable/prometheus-operator --name prometheus --namespace monitoring
```

### For Helm v3

```
$ helm repo update

$ kubectl create ns monitoring

$ helm install prometheus stable/prometheus-operator --namespace monitoring
```

### Verifying Prometheus related pods installed under monitoring namespace

Verify if Prometheus related pods are installed successfully under `monitoring` namespace:

```
$ kubectl get pods -n monitoring
```

Sample output

```
NAME                                                     READY   STATUS    RESTARTS   AGE
alertmanager-prometheus-prometheus-oper-alertmanager-0   2/2     Running   0          40m
prometheus-grafana-67b8b86688-nwbpm                      2/2     Running   0          40m
prometheus-kube-state-metrics-5496457bd-z6twp            1/1     Running   0          40m
prometheus-prometheus-node-exporter-dlf85                1/1     Running   0          40m
prometheus-prometheus-node-exporter-fntbz                1/1     Running   0          40m
prometheus-prometheus-node-exporter-qmhnq                1/1     Running   0          40m
prometheus-prometheus-oper-operator-cbc4b567f-9cxqc      2/2     Running   0          40m
prometheus-prometheus-prometheus-oper-prometheus-0       3/3     Running   1          40m
```

### Verify Prometheus related services installed under monitoring namespace

Verify if Prometheus related services are installed successfully under `monitoring` namespace:

```
$ kubectl get svc -n monitoring
```

Sample output

```
NAME                                      TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                      AGE
alertmanager-operated                     ClusterIP   None             <none>        9093/TCP,9094/TCP,9094/UDP   40m
prometheus-grafana                        ClusterIP   10.100.39.55     <none>        80/TCP                       40m
prometheus-kube-state-metrics             ClusterIP   10.100.24.165    <none>        8080/TCP                     40m
prometheus-operated                       ClusterIP   None             <none>        9090/TCP                     40m
prometheus-prometheus-node-exporter       ClusterIP   10.100.162.102   <none>        9100/TCP                     40m
prometheus-prometheus-oper-alertmanager   ClusterIP   10.100.205.227   <none>        9093/TCP                     40m
prometheus-prometheus-oper-operator       ClusterIP   10.100.37.144    <none>        8080/TCP,443/TCP             40m
prometheus-prometheus-oper-prometheus     ClusterIP   10.100.178.107   <none>        9090/TCP                     40m
```

Change `prometheus-prometheus-oper-prometheus` service to LoadBalancer/NodePort from ClusterIP. This change is for accessing Prometheus service from your Web browser.

```
$ kubectl edit svc prometheus-prometheus-oper-prometheus -n monitoring
```

Change `prometheus-grafana` service to LoadBalancer/NodePort from ClusterIP. This change is for accessing Grafana service from your Web browser.

```
$ kubectl edit svc prometheus-grafana -n monitoring 
```

Sample output after changing above 2 services:

```
NAME                                      TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                      AGE
alertmanager-operated                     ClusterIP   None             <none>        9093/TCP,9094/TCP,9094/UDP   41m
prometheus-grafana                        NodePort    10.100.39.55     <none>        80:32702/TCP                 42m
prometheus-kube-state-metrics             ClusterIP   10.100.24.165    <none>        8080/TCP                     42m
prometheus-operated                       ClusterIP   None             <none>        9090/TCP                     41m
prometheus-prometheus-node-exporter       ClusterIP   10.100.162.102   <none>        9100/TCP                     42m
prometheus-prometheus-oper-alertmanager   ClusterIP   10.100.205.227   <none>        9093/TCP                     42m
prometheus-prometheus-oper-operator       ClusterIP   10.100.37.144    <none>        8080/TCP,443/TCP             42m
prometheus-prometheus-oper-prometheus     NodePort    10.100.178.107   <none>        9090:32701/TCP               42m
```

Sample output details of Nodes:

```
$ kubectl get node -o wide
NAME                                            STATUS   ROLES    AGE   VERSION   INTERNAL-IP      EXTERNAL-IP     OS-IMAGE             KERNEL-VERSION    CONTAINER-RUNTIME
ip-192-168-30-207.ap-south-1.compute.internal   Ready    <none>   55m   v1.14.8   192.168.30.207   15.206.149.84   Ubuntu 18.04.3 LTS   4.15.0-1054-aws   docker://17.3.2
ip-192-168-37-215.ap-south-1.compute.internal   Ready    <none>   55m   v1.14.8   192.168.37.215   3.6.87.183      Ubuntu 18.04.3 LTS   4.15.0-1054-aws   docker://17.3.2
ip-192-168-78-138.ap-south-1.compute.internal   Ready    <none>   55m   v1.14.8   192.168.78.138   3.7.255.10      Ubuntu 18.04.3 LTS   4.15.0-1054-aws   docker://17.3.2
```

### Verify Prometheus service

Verify if Prometheus service is accessing over web using `<any_node_external-ip>:<NodePort>` if Service Type of Prometheus is NodePort.

Example:

```
http://15.206.149.84:32701/
```

### Launch Grafana Dashboard

Launch Grafana using External IP of prometheus-grafana with port 80 on your browser, similar to the format here `http://<external_IP_prometheus-grafana-svc>:<80>`. This is applicable if the service is being created using Loadbalancer. If it is NodePort, then use `<any-node-external-IP>:< Nodeport of prometheus-grafana>`.

Example:

```
http://15.206.149.84:32702/
```

Grafana Credentials

```
Username: admin
Password: prom-operator
```

Password can be get using the command

```
(kubectl get secret \
    --namespace monitoring prometheus-grafana \
    -o jsonpath="{.data.admin-password}" \
    | base64 --decode ; echo
)
```

### Adding Cassandra Dashboard

Download JSON file of Cassandra dashboard on your system. The location of Cassandra dashboard can be obtained from below:

https://grafana.com/api/dashboards/10849/revisions/1/download

Now, login to the Grafana console using the credentials. Then, click on the `+` sign in the Grafana console and click `Import`. Then, use the downloaded `cassandra-mimarpe_rev1.json` file into the form and click on `Load`. In the next page, select `Prometheus` as a data source against the `Prometheus` data field and then import it. Now, you can see the monitoring dashboard of Cassandra workload.
