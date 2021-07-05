### Installing CockroachDB Operator

In this section, we are installing the CockroachDB operator and then configuring CockroachDB cluster using
OpenEBS LocalPV device as the storage engine.

##### RBAC policy configuration
CockroachDB requires cluster-admin privileges on GKE [4], hence we are going to configure the RBAC
policies for the same

```
$ gcloud info | grep Account
 Account: [username@mayadata.io]

 ```

##### Create the cluster rolebinding
```
$ kubectl create clusterrolebinding $USER-cluster-admin-binding \
 --clusterrole=cluster-admin \
 --user=username@mayadata.io
clusterrolebinding.rbac.authorization.k8s.io/k8s-cluster-admin-binding created

```

#### Deploy CRD

We are going to use a Cockroachdb Operator. It is required to install the dependent CRDs to be
deployed first.

```

$ kubectl apply -f https://raw.githubusercontent.com/cockroachdb/cockroachoperator/master/config/crd/bases/crdb.cockroachlabs.com_crdbclusters.yaml
customresourcedefinition.apiextensions.k8s.io/crdbclusters.crdb.cockroachlabs
.com created

```


#### Deploy CockroachDB operator

Install CockroachDB operator using the following command.

```

$ kubectl apply -f
https://raw.githubusercontent.com/cockroachdb/cockroachoperator/master/manifests/operator.yaml
clusterrole.rbac.authorization.k8s.io/cockroach-database-role created
serviceaccount/cockroach-database-sa created
clusterrolebinding.rbac.authorization.k8s.io/cockroach-database-rolebinding created
role.rbac.authorization.k8s.io/cockroach-operator-role created
clusterrolebinding.rbac.authorization.k8s.io/cockroach-operator-rolebinding created
clusterrole.rbac.authorization.k8s.io/cockroach-operator-role created
serviceaccount/cockroach-operator-sa created
rolebinding.rbac.authorization.k8s.io/cockroach-operator-default created
deployment.apps/cockroach-operator created

```

Check Operator deployment pod status

```
$ kubectl get pods
NAME READY STATUS RESTARTS AGE
cockroach-operator-599465988d-k6ffx 1/1 Running 0 48s

```

#### CockroachDB cluster configuration

Download the cluster configuration file and make the necessary changes as per your requirement.

```
$ curl -O https://raw.githubusercontent.com/cockroachdb/cockroachoperator/master/examples/example.yaml

```

We will update the storage class to use openebs-device, as shown below. Please note that for the
production environment, make necessary other changes as per your requirement.
Sample `example.yaml` changes


```
apiVersion: crdb.cockroachlabs.com/v1alpha1
kind: CrdbCluster
metadata:
 name: cockroachdb
spec:
 dataStore:
 pvc:
 spec:
 accessModes:
- ReadWriteOnce
 resources:
 requests:
 storage: "60Gi"
 volumeMode: Filesystem
 storageClassName: openebs-device
 tlsEnabled: true
 image:
 name: cockroachdb/cockroach:v20.2.5
 nodes: 3

```

Apply the cluster configuration file

```
$ kubectl apply -f example.yaml
```

Check cluster pod status

```
$ kubectl get pod,pv,pvc,sc
NAME READY STATUS RESTARTS AGE
pod/cockroach-operator-599465988d-fkgv6 1/1 Running 0 5m20s
pod/cockroachdb-0 1/1 Running 0 2m17s
pod/cockroachdb-1 1/1 Running 0 110s
pod/cockroachdb-2 1/1 Running 0 81s
```

```
NAME CAPACITY ACCESS MODES RECLAIM POLICY
STATUS CLAIM STORAGECLASS REASON AGE
persistentvolume/pvc-6f0a99a2-504a-4ab7-b865-200f96bfc6cb 60Gi RWO
Delete Bound default/datadir-cockroachdb-1 openebs-device 104s
persistentvolume/pvc-a71b5078-f56f-4e1f-9237-43cfd854195e 60Gi RWO
Delete Bound default/datadir-cockroachdb-0 openebs-device 2m12s
persistentvolume/pvc-de6ec858-0106-4454-8190-66cd2a9b465f 60Gi RWO
Delete Bound default/datadir-cockroachdb-2 openebs-device 76s
```

```
NAME STATUS VOLUME CAPACITY
ACCESS MODES STORAGECLASS AGE
persistentvolumeclaim/datadir-cockroachdb-0 Bound pvc-a71b5078-f56f-4e1f-9237-
43cfd854195e 60Gi RWO openebs-device 2m19s
persistentvolumeclaim/datadir-cockroachdb-1 Bound pvc-6f0a99a2-504a-4ab7-
b865-200f96bfc6cb 60Gi RWO openebs-device 111s
persistentvolumeclaim/datadir-cockroachdb-2 Bound pvc-de6ec858-0106-4454-
8190-66cd2a9b465f 60Gi RWO openebs-device 82s
NAME PROVISIONER
RECLAIMPOLICY VOLUMEBINDINGMODE ALLOWVOLUMEEXPANSION AGE
storageclass.storage.k8s.io/openebs-device openebs.io/local
Delete WaitForFirstConsumer false 25m
storageclass.storage.k8s.io/openebs-hostpath openebs.io/local
Delete WaitForFirstConsumer false 25m
storageclass.storage.k8s.io/openebs-jiva-default openebs.io/provisioner-iscsi
Delete Immediate false 25m
storageclass.storage.k8s.io/openebs-snapshot-promoter volumesnapshot.externalstorage.k8s.io/snapshot-promoter Delete Immediate false 25m
storageclass.storage.k8s.io/premium-rwo pd.csi.storage.gke.io
Delete WaitForFirstConsumer true 38m
storageclass.storage.k8s.io/standard (default) kubernetes.io/gce-pd
Delete Immediate true 38m
storageclass.storage.k8s.io/standard-rwo pd.csi.storage.gke.io
Delete WaitForFirstConsumer true 38m
```
