### Perform pre-configuration

We will use GKE, where we will install Elasticsearch stack (EFK) with OpenEBS storage engine. The Local
PV volume will be provisioned on a node where elastic pod is getting scheduled and uses one of the
matching unclaimed block devices, which will then use the entire block device for storing data. No other
application can use this device. If users have limited blockdevices attached to some nodes, they can use
nodeSelector in the application YAML to provision applications on particular nodes where the available
block device is present. The recommended configuration is to have at least three nodes and three
unclaimed external disks to be attached per node.

Let's review our setup used for the configuration. 


#### Our setup: 

- 3 Nodes in GKE

- 4 vCPUs / node

- Ubuntu 18.04

- 16 GB memory / node

- 3 Local SSD(100Gi) / node

- GCP instance type: e2-standard-4

- Kubernetes version: v1.18
