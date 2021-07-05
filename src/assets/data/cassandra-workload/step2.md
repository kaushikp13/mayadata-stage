## Perform pre-configuration

We will be using AWS setup to deploy Cassandra on OpenEBS. This guide will help you to install the Apache Cassandra using Kudo operator on OpenEBS. Let’s review our setup used for the configuration.

### Our setup:

- 3 Nodes in EKS

- 4 vCPUs / node 

- 16 GB memory / node

- AWS instance type: t3.xlarge

- 1 SSD / node

- Kubernetes Version: 1.16 (Recommended) or above

### Installing OpenEBS

Run the following command using kubectl where you have access to your own Kubernetes cluster.

```bash
$ kubectl apply -f https://openebs.github.io/charts/openebs-operator.yaml
```

### Verifying OpenEBS Storage Class 

Verify the StorageClass details

```bash
$ kubectl get sc
```

Sample output

```
NAME                        PROVISIONER                                                AGE
gp2 (default)               kubernetes.io/aws-ebs                                      56m
openebs-device              openebs.io/local                                           35s
openebs-hostpath            openebs.io/local                                           35s
openebs-jiva-default        openebs.io/provisioner-iscsi                               35s
openebs-snapshot-promoter   volumesnapshot.external-storage.k8s.io/snapshot-promoter   35s
```


Attaching disks to nodes

Now, we will add an additional device to each node. Disks will be later consumed by Apache Cassandra using `openebs-device` StorageClass and used as a persistent storage for Cassandra. This step can be done through your cloud vendor's web user interface, or if you are running in a VM you can use your hypervisor to add an additional virtual device to each node. In this example, we have used AWS and added the disks using the aws CLI tool.

Get list of InstanceId:

```
$ aws ec2 describe-instances --region ap-south-1 --instance-ids |grep InstanceId
                    "InstanceId": "i-0992310878caa7a5c",
                    "InstanceId": "i-040e1c05121456b5e",
                    "InstanceId": "i-03dd0356192e772b1",
```


Repeat the following step to create a 100 GiB volumes for each Availability Zone:

```
$ aws ec2 create-volume --volume-type gp2 --size 100 --region ap-south-1 --availability-zone ap-south-1a
{
    "VolumeType": "gp2",
    "Size": 100,
    "Iops": 100,
    "SnapshotId": "",
    "AvailabilityZone": "ap-south-1a",
    "VolumeId": "vol-0e6de21701e245d23",
    "State": "creating",
    "Tags": [],
    "Encrypted": false,
    "CreateTime": "2020-06-02T06:01:59.000Z"
```

Perform the following commands to add a single disk to each node.

```
# Disk 1 to worker node 1
$ aws ec2 attach-volume --volume-id vol-0e6de21701e245d23 --instance-id i-03dd0356192e772b1 --device /dev/sdf
# Disk 2 to worker node 2
$ aws ec2 attach-volume --volume-id vol-07903526bbb0e2cd7 --instance-id i-040e1c05121456b5e --device /dev/sdf
# Disk 3 to worker node 3
$ aws ec2 attach-volume --volume-id vol-08516f92525bdb28e --instance-id i-0992310878caa7a5c --device /dev/sdf
```
