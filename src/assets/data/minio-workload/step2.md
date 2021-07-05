We will be using EKS, where we will install MinIO on OpenEBS. This guide will help you to install MinIO in distributed mode using stable Helm charts. In this case, Local PV volume will be provisioned on one of the matching unclaimed blockdevices which will use the entire blockdevice for storing the data. The blockdevice can be mounted or be a raw device on the node where the application is scheduled and this blockdevice cannot be used by another application. If users have limited blockdevices attached to some nodes, then they can use `nodeSelector` in the application YAML to provision applications on particular nodes where the available blockdevice is present. Since setup is in distributed mode, it requires a minimum of four nodes and at least a single unclaimed external disk should be attached to each of these nodes. Let’s review our setup used for the configuration. 


**Our setup**:

- 4 nodes in EKS

- 4 vCPUs / node

- 16 GB memory / node

- 1 SSD (100Gi) / node

- AWS instance type: t3.x.large

- Kubernetes version: v1.16


### Getting Started

Let’s start the installation of OpenEBS using the Kubera platform.

#### Installing OpenEBS using Kubera

Login to your free [Kubera account](https://account.mayadata.io/login) and click on **Go to Kubera**.

![Go to Kubera](assets/data/minio-workload/images/go-to-kubera.png)


Follow the instructions to connect your cluster to your Kubera account. 

![Connect to cluster](assets/data/minio-workload/images/connect-to-cluster.png)


It will pop up a window with a command to connect your K8s cluster with the Kubera platform. Copy and execute the command on your own Kubernetes cluster.

![Connecting cluster](assets/data/minio-workload/images/connecting-cluster.png)


Click on **Begin Installation** which will lead to a page where you can choose a way to install OpenEBS.

![Begin Installation](assets/data/minio-workload/images/begin-installation.png)



Follow the **Basic Installation** setup for the default installation of OpenEBS Enterprise Edition on your K8s cluster.

![Install OpenEBS Enterprise Edition](assets/data/minio-workload/images/install-openebs-ee.png)


Click on **Deploy OpenEBS** on the next screen and verify the installation status from the next screen. Click on **Continue** once OpenEBS installation is completed.

![Install OpenEBS Enterprise Edition Completed](assets/data/minio-workload/images/install-openebs-ee-completed.png)


OpenEBS installation will complete shortly and you will see OpenEBS control-plane enabled on your cluster.

![OpenEBS Control Plane](assets/data/minio-workload/images/openebs-control-plane.png)


### Attaching disks to nodes

Now, we will add an additional device to each node. Disks will be later consumed by MinIO instances using `openebs-device` StorageClass and these will be used as a persistent storage for MinIO. This step can be done through your cloud vendor's web user interface, or if you are running in a VM you can use your hypervisor to add an additional virtual device to each node. In this example, we have used AWS and added the disks using the aws CLI tool.

Create a 100Gi volume for each Node.

```
$ aws ec2 create-volume --volume-type gp2 --size 100 --region ap-south-1 --availability-zone ap-south-1a

$ aws ec2 create-volume --volume-type gp2 --size 100 --region ap-south-1 --availability-zone ap-south-1a

$ aws ec2 create-volume --volume-type gp2 --size 100 --region ap-south-1 --availability-zone ap-south-1b

$ aws ec2 create-volume --volume-type gp2 --size 100 --region ap-south-1 --availability-zone ap-south-1c
```

**Note**: Provide the required size initially as Local PV storage will not allow you to expand the capacity later. 


Get list of InstanceIds per each Zone:

```
$ aws ec2 describe-instances --query 'Reservations[*].Instances[*].{Instances:InstanceId,AZ:Placement.AvailabilityZone}' --output table

----------------------------------------
|           DescribeInstances          |
+--------------+-----------------------+
|      AZ      |       Instances       |
+--------------+-----------------------+
|  ap-south-1c |  i-0ca8bf39174d9502d  |
|  ap-south-1a |  i-01d9731e293b9c17c  |
|  ap-south-1a |  i-0a28e97856d1913d7  |
|  ap-south-1b |  i-014fade5471b237f7  |
+--------------+-----------------------+
```


Get the list of VolumeIds per each Zone:

```
$ aws ec2 describe-volumes --filters Name=status,Values=available --query "Volumes[*].{VolId:VolumeId,AZ:AvailabilityZone,Size:Size}" --output table


--------------------------------------------------
|                 DescribeVolumes                |
+--------------+-------+-------------------------+
|      AZ      | Size  |          VolId          |
+--------------+-------+-------------------------+
|  ap-south-1b |  100  |  vol-010abdfe068af344e  |
|  ap-south-1c |  100  |  vol-097e69f98dc6cee9b  |
|  ap-south-1a |  100  |  vol-02cc9059204394a56  |
|  ap-south-1a |  100  |  vol-07792635bee10d7c4  |
+--------------+-------+-------------------------+
```

Perform the following commands to attach the above-created devices to each node in the corresponding zone.

```
# Disk 1 to worker node 1
$ aws ec2 attach-volume --volume-id vol-02cc9059204394a56 --instance-id i-01d9731e293b9c17c --device /dev/sdf

# Disk 2 to worker node 2
$ aws ec2 attach-volume --volume-id vol-010abdfe068af344e --instance-id i-014fade5471b237f7 --device /dev/sdf

# Disk 3 to worker node 3
$ aws ec2 attach-volume --volume-id vol-097e69f98dc6cee9b --instance-id i-0ca8bf39174d9502d --device /dev/sdf

# Disk 4 to worker node 1
$ aws ec2 attach-volume --volume-id vol-07792635bee10d7c4 --instance-id i-0a28e97856d1913d7 --device /dev/sdg
```
