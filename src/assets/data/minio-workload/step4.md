In this section, we will install the MinIO in distributed mode using a stable Helm chart on OpenEBS Local PV. The MinIO will be deployed in `default` namespace.

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


Install MinIO

```
$ helm install --name minio-test stable/minio --set mode=distributed,accessKey=minio,secretKey=minio123,persistence.storageClass=openebs-device,service.type=NodePort,persistence.enabled=true,persistence.size=100Gi
```


### Using Helm v3

```
$ helm repo update
$ helm install minio-test stable/minio --set mode=distributed,accessKey=minio,secretKey=minio123,persistence.storageClass=openebs-device,service.type=NodePort,persistence.enabled=true,persistence.size=100Gi
```


### Verifying MinIO pods

```
$ kubectl get pod
NAME           READY   STATUS    RESTARTS   AGE
minio-test-0   1/1     Running   0          5m55s
minio-test-1   1/1     Running   0          5m55s
minio-test-2   1/1     Running   0          5m55s
minio-test-3   1/1     Running   0          5m55s
```


### Verify the status of block devices 

Make sure that status of block devices that you intent to show as Claimed:

```
$ kubectl get bd -n openebs
NAME                                           NODENAME                                        SIZE           CLAIMSTATE   STATUS   AGE
blockdevice-7e971c2197366c1dad79204a8efdab3a   ip-192-168-92-66.ap-south-1.compute.internal    107374182400   Claimed      Active   81m
blockdevice-8c76c9458eab10ab3ea2f536f7f033ba   ip-192-168-42-149.ap-south-1.compute.internal   107374182400   Claimed      Active   81m
blockdevice-d63aefd158c19437d2d618efc020592c   ip-192-168-18-205.ap-south-1.compute.internal   107374182400   Claimed      Active   83m
blockdevice-e34f67fdfd1ebdc0712088beb63916b4   ip-192-168-19-123.ap-south-1.compute.internal   107374182400   Claimed      Active   15m
```


### Verify MinIO PVCs

Verify the PVC status. Make sure all new PVCs are using the correct StorageClass and status is Bound:

```
$ kubectl get pvc
NAME                  STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS     AGE
export-minio-test-0   Bound    pvc-9bd6f1af-ad30-4e8e-94ab-3961149d5e16   100Gi      RWO            openebs-device   6m22s
export-minio-test-1   Bound    pvc-9b45af7f-e8a4-4b77-82e9-83a084741c41   100Gi      RWO            openebs-device   6m22s
export-minio-test-2   Bound    pvc-f80cacad-eb95-40e1-a096-22efeb44cc9a   100Gi      RWO            openebs-device   6m22s
export-minio-test-3   Bound    pvc-98a4b681-ce0c-4d65-8362-92dd43841db5   100Gi      RWO            openebs-device   6m22s
```

### Verify MinIO SVCs

Verify the service status:

```
$ kubectl get svc
NAME             TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
kubernetes       ClusterIP   10.100.0.1       <none>        443/TCP          6h9m
minio-test       NodePort    10.100.138.112   <none>        9000:32000/TCP   6m39s
minio-test-svc   ClusterIP   None             <none>        9000/TCP         6m39s
```

### Access MinIO Object Storage

The MinIO StatefulSet application is created using `NodePort` as the service type. To access MinIO over a web browser, use `<Node_External_Ip>:<NodePort_MinIO_service>` this way.

Get the details of Node


```
$ kubectl get node -o wide

NAME                                            STATUS   ROLES    AGE    VERSION   INTERNAL-IP      EXTERNAL-IP      OS-IMAGE             KERNEL-VERSION    CONTAINER-RUNTIME
ip-192-168-18-205.ap-south-1.compute.internal   Ready    <none>   6h5m   v1.15.9   192.168.18.205   52.66.208.41     Ubuntu 18.04.4 LTS   4.15.0-1065-aws   docker://17.3.2
ip-192-168-19-123.ap-south-1.compute.internal   Ready    <none>   78m    v1.15.9   192.168.19.123   13.233.204.81    Ubuntu 18.04.4 LTS   4.15.0-1065-aws   docker://17.3.2
ip-192-168-42-149.ap-south-1.compute.internal   Ready    <none>   6h5m   v1.15.9   192.168.42.149   13.235.54.113    Ubuntu 18.04.4 LTS   4.15.0-1065-aws   docker://17.3.2
ip-192-168-92-66.ap-south-1.compute.internal    Ready    <none>   6h5m   v1.15.9   192.168.92.66    13.127.235.209   Ubuntu 18.04.4 LTS   4.15.0-1065-aws   docker://17.3.2
```

Now, access the MinIO service over browser using the following way

[http://52.66.208.41:32000](http://52.66.208.41:32000)


**Note**: Ensure Inbound Rules under VPC-> Security Groups are properly configured to allow the traffic.

