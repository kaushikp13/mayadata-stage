### Perform pre-configuration

We will use GKE, where we will install CockroachDB with OpenEBS storage engine. The Local PV volume
will be provisioned on a node where the CockroachDB pod is getting scheduled and uses one of the
matching unclaimed block devices, which will then use the entire block device for storing data. No other
application can use this device. If users have limited block devices attached to some nodes, they can use
nodeSelector in the application YAML to provision applications on particular nodes where the available
block device is present. The recommended configuration is to have at least three nodes and one
unclaimed Local SSDs to be attached per node. Users can mention the required number of Local SSDs
during the cluster creation time or provision the additional disks as described in the steps shown below.

As per CockroachDB’s recommendation, it is better to use node-local storage instead of using external or
replicated storage provisioners [[2]](https://www.cockroachlabs.com/docs/stable/orchestrate-cockroachdb-with-kubernetes.html#storage). Since OpenEBS LocalPV Devices is using the unclaimed block device of
the node where the application pod is getting scheduled, as mentioned above, it gives higher
performance as compared to other storage provisioners.


#### Our setup: 

- 3 Nodes in GKE

- 4 vCPUs / node

- Ubuntu 18.04

- 16 GB memory / node

- 1 gpd with minimum 100Gi / node

- GCP instance type: e2-standard-4

- Kubernetes version: v1.18.15

![pre-configuration](assets/data/cockroach-workload/images/1.jpg)
