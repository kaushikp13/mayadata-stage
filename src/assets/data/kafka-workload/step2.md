## Perform pre-configuration

We will use GKE, where we will install Kudo Kafka with OpenEBS storage engine. The Local PV volume will be provisioned on a node where Kafka pod is getting scheduled and uses one of the matching unclaimed block devices, which will then use the entire block device for storing data. Another application cannot use this block device. If users have limited blockdevices attached to some nodes, they can use `nodeSelector` in the application YAML to provision applications on particular nodes where the available block device is present. The recommended configuration is to have at least three nodes and two unclaimed external disks to be attached on each of these nodes. One device will be used for Zookeeper and the other for Kafka.Let’s review our setup used for the configuration. 

#### Our setup:
- 3 Nodes in GKE 
- 2 vCPUs / node 
- Ubuntu 18.04
- 8 GB memory / node
- 2 SSDs(100Gi) / node
- GCP instance type: e2-standard-2
- Kubernetes version: v1.17
