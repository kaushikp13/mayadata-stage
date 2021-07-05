We will use EKS, where we will install Percona using OpenEBS. This guide will help you to install the Percona XtraDB Cluster using OpenEBS Local PV. The Local PV volume will be provisioned on one of the matching unclaimed block devices, which will then use the entire block device for storing data. The blockdevice can be mounted or be a raw device on the node where the application is scheduled. Another application cannot use this block device. If users have limited blockdevices attached to some nodes, they can use `nodeSelector` in the application YAML to provision applications on particular nodes where the available block device is present. The recommended configuration is to have at least three nodes and a single unclaimed external disk to be attached to each of these nodes.Let’s review our setup used for the configuration. 



**Our setup**:

- 3 nodes in EKS

- 4 vCPUs / node

- Ubuntu 20.04

- 16 GB memory / node

- 1 SSD (100Gi) / node

- AWS instance type: t3.x.large

- Kubernetes version: v1.18


![Pre-config](assets/data/percona-workload/images/pre-config.png)
The above shows the setup diagram of Percona XtraDB Cluster on OpenEBS Local PV volume.