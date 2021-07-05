### Preconfiguration 

Download `values.yaml` which will modify later before installing Prometheus using Helm.

```
wget https://raw.githubusercontent.com/helm/charts/master/stable/prometheus-operator/values.yaml
```

 Perform the following changes on the downloaded `values.yaml`:

- Update `fullnameOverride` as `new`

- Update `prometheus.prometheusSpec.serviceMonitorSelectorNilUsesHelmValues` as `false`

- Update `prometheus.prometheusSpec.replicas` as `3`

- Update `prometheus.prometheusSpec.podAntiAffinity` as `hard`

- Uncomment the following spec in the values.yaml for enabling nodeAffinity for Prometheus `prometheus.prometheusSpec.affinity` using a custom node label which will be configured in the next section.
    ```
    affinity:
      nodeAffinity:
        requiredDuringSchedulingIgnoredDuringExecution:
          nodeSelectorTerms:
          - matchExpressions:
            - key: node
              operator: In
              values:
              - prometheus
    ```

- (Optional in case of GKE) Update `prometheusOperator.admissionWebhooks.enabled` as `false` and `prometheusOperator.tlsProxy.enabled` as `false`. More details can be found from [here](https://github.com/helm/charts/issues/19147).

- Update `alertmanager.alertmanagerSpec.replicas` as `3`

- Update `alertmanager.alertmanagerSpec.podAntiAffinity` as `hard`

- Uncomment the following spec in the values.yaml for enabling NodeAffinity for AlertManager `alertmanager.alertmanagerSpec.affinity` using a custom node label which will be configured in the next section.
   ```
    affinity: 
      nodeAffinity:
        requiredDuringSchedulingIgnoredDuringExecution:
          nodeSelectorTerms:
          - matchExpressions:
            - key: node
              operator: In
              values:
              - prometheus
   ```

-  Uncomment the following spec in the `values.yaml` for
 	`prometheus.prometheusSpec.storageSpec` and change the StorageClass name
of Prometheus with the required StorageClass and required volume
capacity. In this case, StorageClass used as `openebs-device` and
provided the volume capacity as `100Gi`. Ensure to provide the capacity 
less than equal to the maximum capacity of the blockdevice which is
going to use it.
  ```
  storageSpec:
      volumeClaimTemplate:
        spec:
          storageClassName: openebs-device
          accessModes: ["ReadWriteOnce"]
          resources:
            requests:
              storage: 100Gi
  ```

- Uncomment the following spec in the `values.yaml` for `alertmanager.alertmanagerSpec.storage` and change the StorageClass name of Alertmanager with the required StorageClass and required volume capacity. In this case, StorageClass used as `openebs-device` and provided the volume capacity as `100Gi`.

    ```
    storage:
      volumeClaimTemplate:
        spec:
          storageClassName: openebs-device
          accessModes: ["ReadWriteOnce"]
          resources:
            requests:
              storage: 100Gi

    ```

### Installing Prometheus operator

Label the nodes with custom label so that Prometheus application will be deployed only on the matched Nodes.

```
$ kubectl get node

NAME                                        STATUS   ROLES    AGE   VERSION
gke-prometheus-default-pool-8ba1a274-k6cj   Ready    <none>   85m   v1.16.11-gke.5
gke-prometheus-default-pool-8ba1a274-t76h   Ready    <none>   85m   v1.16.11-gke.5
gke-prometheus-default-pool-8ba1a274-zhk3   Ready    <none>   85m   v1.16.11-gke.5
```

Label each node with `node=prometheus`. We have used this label in the NodeAffinity for Prometheus and AlertManager instances. This will ensure to schedule the Prometheus and AlertManager pods to deploy only on the labelled nodes.


```
$ kubectl label nodes gke-prometheus-default-pool-8ba1a274-k6cj node=prometheus
node/gke-prometheus-default-pool-8ba1a274-k6cj labeled

$ kubectl label nodes gke-prometheus-default-pool-8ba1a274-t76h node=prometheus
node/gke-prometheus-default-pool-8ba1a274-t76h labeled

$ kubectl label nodes gke-prometheus-default-pool-8ba1a274-zhk3 node=prometheus
node/gke-prometheus-default-pool-8ba1a274-zhk3 labeled
```

Now, install the Prometheus operator using either Helm v2 or Helm v3.

### Using Helm V2

Initialize Helm:

```
$ helm init
```


Patch tiller deployment:

```
$ kubectl -n kube-system create sa tiller
$ kubectl create clusterrolebinding tiller --clusterrole cluster-admin --serviceaccount=kube-system:tiller
$ kubectl -n kube-system patch deploy/tiller-deploy -p '{"spec": {"template": {"spec": {"serviceAccountName": "tiller"}}}}'
```


Update helm repo:

```
$ helm repo update
```


Install Prometheus:

```
helm install stable/prometheus-operator --name prometheus --namespace monitoring -f prometheus-values.yaml
```

This command will install the Prometheus operator version of 8.15.7. 


### Using Helm v3

```
$ helm repo update
$ kubectl create ns monitoring
$ helm install prometheus stable/prometheus-operator --namespace monitoring -f values.yaml
```

### Verify Prometheus related pod installed under monitoring namespace

```
$ kubectl get pods -n monitoring

NAME                                             READY   STATUS    RESTARTS   AGE
alertmanager-new-alertmanager-0                  2/2     Running   0          7m56s
alertmanager-new-alertmanager-1                  2/2     Running   0          7m56s
alertmanager-new-alertmanager-2                  2/2     Running   0          7m56s
new-operator-5bfb4dc869-tkzxl                    1/1     Running   0          8m5s
prometheus-grafana-85b4dbb556-lmsdr              2/2     Running   0          8m5s
prometheus-kube-state-metrics-6df5d44568-b22bh   1/1     Running   0          8m5s
prometheus-new-prometheus-0                      3/3     Running   1          7m45s
prometheus-new-prometheus-1                      3/3     Running   1          7m45s
prometheus-new-prometheus-2                      3/3     Running   1          7m45s
prometheus-prometheus-node-exporter-dklvk        1/1     Running   0          8m5s
prometheus-prometheus-node-exporter-pd2nt        1/1     Running   0          8m5s
prometheus-prometheus-node-exporter-rmprg        1/1     Running   0          8m5s
```

### Verify PVC associated with Prometheus installed under monitoring namespace

```
$ kubectl get pvc -n monitoring

NAME                                                               STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS     AGE
alertmanager-new-alertmanager-db-alertmanager-new-alertmanager-0   Bound    pvc-b947139a-6e60-4d76-bb6b-95f1803f4882   100Gi      RWO            openebs-device   8m9s
alertmanager-new-alertmanager-db-alertmanager-new-alertmanager-1   Bound    pvc-76426ffd-fec5-41a2-aa19-20a91349b0c9   100Gi      RWO            openebs-device   8m9s
alertmanager-new-alertmanager-db-alertmanager-new-alertmanager-2   Bound    pvc-b55023a0-7f94-41a1-8f37-108b2f432297   100Gi      RWO            openebs-device   8m9s
prometheus-new-prometheus-db-prometheus-new-prometheus-0           Bound    pvc-4829833c-994e-445c-9b16-4a40d81f95b1   100Gi      RWO            openebs-device   7m58s
prometheus-new-prometheus-db-prometheus-new-prometheus-1           Bound    pvc-4580c6df-759d-4a0a-9459-b9737a01f10b   100Gi      RWO            openebs-device   7m58s
prometheus-new-prometheus-db-prometheus-new-prometheus-2           Bound    pvc-df1e8ec1-7de0-427e-9bdb-03014265e608   100Gi      RWO            openebs-device   7m58s
```

### Verify Prometheus related services installed under monitoring namespace

```
$ kubectl get svc -n monitoring

NAME                                  TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)                      AGE
alertmanager-operated                 ClusterIP   None           <none>        9093/TCP,9094/TCP,9094/UDP   8m26s
new-alertmanager                      ClusterIP   10.85.13.251   <none>        9093/TCP                     8m36s
new-operator                          ClusterIP   10.85.5.128    <none>        8080/TCP                     8m36s
new-prometheus                        ClusterIP   10.85.12.54    <none>        9090/TCP                     8m36s
prometheus-grafana                    ClusterIP   10.85.8.165    <none>        80/TCP                       8m36s
prometheus-kube-state-metrics         ClusterIP   10.85.1.31     <none>        8080/TCP                     8m36s
prometheus-operated                   ClusterIP   None           <none>        9090/TCP                     8m15s
prometheus-prometheus-node-exporter   ClusterIP   10.85.12.41    <none>        9100/TCP                     8m36s
```

### Verify if BlockDevices are claimed under OpenEBS namespace

```
$ kubectl get bd -n openebs

NAME                                           NODENAME                                    SIZE           CLAIMSTATE   STATUS   AGE
blockdevice-4f51859193d333687a873af7acf8ad78   gke-prometheus-default-pool-8ba1a274-t76h   107374182400   Claimed      Active   31m
blockdevice-630ae186f095cd94d9158bdaa0005ae4   gke-prometheus-default-pool-8ba1a274-k6cj   107374182400   Claimed      Active   31m
blockdevice-747a07ffae7a6a53762b3ce262c3307a   gke-prometheus-default-pool-8ba1a274-zhk3   107374182400   Claimed      Active   31m
blockdevice-967d7816c2a2d73b91c8c6310dc70465   gke-prometheus-default-pool-8ba1a274-k6cj   107374182400   Claimed      Active   31m
blockdevice-ddfc782ea661fc9007a896438f483e3d   gke-prometheus-default-pool-8ba1a274-zhk3   107374182400   Claimed      Active   31m
blockdevice-e5265da8a790a2374758ec4600cd4bd7   gke-prometheus-default-pool-8ba1a274-t76h   107374182400   Claimed      Active   31m
```

### Change Prometheus service to NodePort from ClusterIP

```
$ kubectl edit svc prometheus-grafana -n monitoring
```

### Change prometheus-grafana service to LoadBalancer/NodePort from ClusterIP

```
$ kubectl edit svc new-prometheus -n monitoring 
```

### Sample output after changing above 2 changes in services

```
$ kubectl get svc -n monitoring

NAME                                  TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)                      AGE
alertmanager-operated                 ClusterIP   None           <none>        9093/TCP,9094/TCP,9094/UDP   9m58s
new-alertmanager                      ClusterIP   10.85.13.251   <none>        9093/TCP                     10m
new-operator                          ClusterIP   10.85.5.128    <none>        8080/TCP                     10m
new-prometheus                        NodePort    10.85.12.54    <none>        9090:32701/TCP               10m
prometheus-grafana                    NodePort    10.85.8.165    <none>        80:32702/TCP                 10m
prometheus-kube-state-metrics         ClusterIP   10.85.1.31     <none>        8080/TCP                     10m
prometheus-operated                   ClusterIP   None           <none>        9090/TCP                     9m47s
prometheus-prometheus-node-exporter   ClusterIP   10.85.12.41    <none>        9100/TCP                     10m
```

### Get the node details

```
$ kubectl get node -o wide

NAME                                        STATUS   ROLES    AGE    VERSION          INTERNAL-IP   EXTERNAL-IP      OS-IMAGE             KERNEL-VERSION   CONTAINER-RUNTIME
gke-prometheus-default-pool-8ba1a274-k6cj   Ready    <none>   106m   v1.16.11-gke.5   10.128.0.59   35.225.65.78     Ubuntu 18.04.4 LTS   5.3.0-1016-gke   docker://19.3.2
gke-prometheus-default-pool-8ba1a274-t76h   Ready    <none>   106m   v1.16.11-gke.5   10.128.0.61   34.66.41.150     Ubuntu 18.04.4 LTS   5.3.0-1016-gke   docker://19.3.2
gke-prometheus-default-pool-8ba1a274-zhk3   Ready    <none>   106m   v1.16.11-gke.5   10.128.0.62   35.193.112.228   Ubuntu 18.04.4 LTS   5.3.0-1016-gke   docker://19.3.2
```

### Run some stress test

Download the Avalanche application YAML spec which will do some stress tests and the metrics can be captured through Prometheus and Grafana.

```
wget https://raw.githubusercontent.com/open-fresh/avalanche/master/k8s/kubernetes-deployment.yaml
```


Run the stress test

```
$ kubectl apply -f kubernetes-deployment.yaml
```


Verify the stress tool pod

```
$ kubectl get pod -n avalanche

NAME                         READY   STATUS    RESTARTS   AGE
avalanche-6469c4db9b-lrv2j   1/1     Running   0          6s
```


Verify the logs from the Stress tool

```
$ kubectl logs -f avalanche-6469c4db9b-lrv2j -n avalanche

Serving ur metrics at localhost:9001/metrics
2020-07-21 13:36:42.66675416 +0000 UTC m=+31.029747326: refreshing metric values
2020-07-21 13:37:12.666803012 +0000 UTC m=+61.029796156: refreshing metric values
2020-07-21 13:37:12.666816077 +0000 UTC m=+61.029809239: refreshing series cycle
2020-07-21 13:37:42.666755529 +0000 UTC m=+91.029748688: refreshing metric values
2020-07-21 13:38:12.666822572 +0000 UTC m=+121.029815723: refreshing metric cycle
2020-07-21 13:38:12.66682122 +0000 UTC m=+121.029814378: refreshing series cycle
2020-07-21 13:38:12.666805663 +0000 UTC m=+121.029798826: refreshing metric values
2020-07-21 13:38:42.666763463 +0000 UTC m=+151.029756636: refreshing metric values
2020-07-21 13:39:12.666748771 +0000 UTC m=+181.029741941: refreshing metric values
2020-07-21 13:39:12.666770062 +0000 UTC m=+181.029763278: refreshing series cycle
2020-07-21 13:39:42.66682611 +0000 UTC m=+211.029819285: refreshing metric values
2020-07-21 13:40:12.666733215 +0000 UTC m=+241.029726372: refreshing metric cycle
2020-07-21 13:40:12.666721648 +0000 UTC m=+241.029714808: refreshing metric values
2020-07-21 13:40:12.666732183 +0000 UTC m=+241.029725345: refreshing series cycle
2020-07-21 13:40:42.666755965 +0000 UTC m=+271.029749157: refreshing metric values
2020-07-21 13:41:12.66674091 +0000 UTC m=+301.029734066: refreshing metric values
2020-07-21 13:41:12.666754641 +0000 UTC m=+301.029747802: refreshing series cycle
2020-07-21 13:41:42.66681727 +0000 UTC m=+331.029810426: refreshing metric values
2020-07-21 13:42:12.666778571 +0000 UTC m=+361.029771728: refreshing metric values
```
