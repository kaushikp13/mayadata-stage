In this section, we will verify the block device information using Kubera and default storage classes created as part of OpenEBS installation.

### Verify the BlockDevice information

You can verify the attached block device information from Kubera under Management > Block Devices from corresponding cluster page.

![Block Device Information](assets/data/prometheus-workload/images/block-device-information.png)


### Verify the default storage class

```
$ kubectl get sc

NAME                        PROVISIONER                                                AGE
openebs-device              openebs.io/local                                           45m
openebs-hostpath            openebs.io/local                                           45m
openebs-jiva-default        openebs.io/provisioner-iscsi                               45m
openebs-snapshot-promoter   volumesnapshot.external-storage.k8s.io/snapshot-promoter   45m
standard (default)          kubernetes.io/gce-pd                                       75m
```

From the default StorageClass, we use `openebs-device` in Prometheus values.yaml for provisioning Prometheus and Alertmanager on OpenEBS local PV device. Since we use replica count as 3 for Prometheus and Alertmanager, 3 Prometheus pods will consume 3 devices and the other 3 devices will be consumed by Alertmanager. 
