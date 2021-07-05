## Deploy OpenEBS NFS Provisioner

Get the OpenEBS NFS provisioner manifest:

```
$ wget https://raw.githubusercontent.com/openebs/dynamic-nfs-provisioner/develop/deploy/kubectl/openebs-nfs-provisioner.yaml
```

Modify the Storage Class section by uncommenting the BackendStorageClass and its value and add the corresponding storage class name. In this example, we are using `cstorsc-ccyur` as the backend storage for OpenEBS NFS provisioner.

```
#Sample storage class for NFS provisioner

apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: openebs-rwx
  annotations:
    openebs.io/cas-type: nfsrwx
    cas.openebs.io/config: |
      - name: NFSServerType
        value: "kernel"
      - name: BackendStorageClass
        value: "cstorsc-ccyur"
provisioner: openebs.io/nfsrwx
reclaimPolicy: Delete
```

So, any application which uses `openebs-rwx` storage class, it will create a persistent volume on cStor storage with NFS support.

Apply the modified `openebs-nfs-provisioner.yaml` specification.

```
$ kubectl apply -f openebs-nfs-provisioner.yaml
```

### Verify OpenEBS NFS provisioner is running:

```
$ kubectl get pod -n openebs -l name=openebs-nfs-provisioner

NAME                                       READY   STATUS    RESTARTS   AGE
openebs-nfs-provisioner-7b4c9b87d9-k7nss   1/1     Running   0          24s
```

### Verify if NFS supported new StorageClass is created successfully:


```
$ kubectl get sc

NAME                        PROVISIONER                                                RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
cstorsc-ccyur (default)     cstor.csi.openebs.io                                       Delete          Immediate              true                   12m
gp2                         kubernetes.io/aws-ebs                                      Delete          WaitForFirstConsumer   false                  146m
openebs-device              openebs.io/local                                           Delete          WaitForFirstConsumer   false                  25m
openebs-hostpath            openebs.io/local                                           Delete          WaitForFirstConsumer   false                  25m
openebs-jiva-default        openebs.io/provisioner-iscsi                               Delete          Immediate              false                  25m
openebs-rwx                 openebs.io/nfsrwx                                          Delete          Immediate              false                  48s
openebs-snapshot-promoter   volumesnapshot.external-storage.k8s.io/snapshot-promoter   Delete          Immediate              false                  25m

```

From the above output, `openebs-rwx` is the storage class that supports shared storage using OpenEBS NFS provisioner.

**Note:** Don’t forget to install nfs client packages in all worker nodes. In this setup as the base OS is Ubuntu, `nfs-common` packages are installed on all worker nodes and then enabled the NFS service. It will fail to provision the Magento application in the next step if NFS client packages are not installed.
