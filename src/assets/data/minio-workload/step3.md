In this section, we will verify the block device information using Kubera and default storage classes created as part of OpenEBS installation.
 

### Verify the BlockDevice information

You can verify the attached Block Device information from Kubera under Management > Block Devices from corresponding cluster page.

![Block Device Information](assets/data/minio-workload/images/block-device-information.png)


### Verify the default storage class

```
$ kubectl get sc
NAME                        PROVISIONER                                                AGE
gp2 (default)               kubernetes.io/aws-ebs                                      6h1m
openebs-device              openebs.io/local                                           157m
openebs-hostpath            openebs.io/local                                           157m
openebs-jiva-default        openebs.io/provisioner-iscsi                               157m
openebs-snapshot-promoter   volumesnapshot.external-storage.k8s.io/snapshot-promoter   157m
```

From the default StorageClass, we use `openebs-device` for using Persistent storage for running MinIO.
