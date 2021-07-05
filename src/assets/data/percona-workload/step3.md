<!-- ### Getting Started -->

Let’s start the installation of OpenEBS using the Kubera platform.

#### Installing OpenEBS using Kubera

Signup [here](https://director.mayadata.io) for your free Kubera account. Then click on **Go to Kubera**.

![Go to Kubera](assets/data/percona-workload/images/go-to-kubera.png)

![Connect to cluster](assets/data/percona-workload/images/get-started1.png)

Follow the instructions to connect your cluster to your Kubera account. 

![Connecting cluster](assets/data/percona-workload/images/get-started2.png)

It will open a window with the command to connect your K8s cluster with the Kubera SaaS version. Copy and execute the command on your own Kubernetes cluster.

![Active cluster](assets/data/percona-workload/images/get-started3.png)

If OpenEBS was already installed using Kubera in your cluster, skip this process. If OpenEBS was not installed using Kubera, then click on **Begin Installation**, which will lead to a page where you can choose how to install OpenEBS.

![Begin Installation](assets/data/percona-workload/images/get-started4.png)

Follow the on-screen instructions titled **Basic Installation** for the default installation of OpenEBS Enterprise Edition on your K8s cluster.

![Install OpenEBS Enterprise Edition](assets/data/percona-workload/images/get-started5.png)

Click on **Deploy OpenEBS** on the next screen and verify the installation status from the next screen. After successful installation of OpenEBS, click on **Continue**. If you run into any errors or have questions, [community support](http://kubera-community.slack.com)  for Kubera is available on Slack.

![Install OpenEBS Enterprise Edition Completed](assets/data/percona-workload/images/get-started6.png)

Now, you will see OpenEBS control-plane has been enabled on your Kubernetes cluster.

![OpenEBS Control Plane](assets/data/percona-workload/images/get-started7.png)


### Attaching disks to nodes

Now, we will add an additional device to each node. Disks will be later consumed by Percona instances using the `openebs-device` StorageClass, and these will be used as persistent storage for Percona. This step can be done through your cloud vendor's web user interface, or if you are running in a virtual machine (VM), you can use your hypervisor to add an additional virtual device to each node. In this example, we have used AWS and added the disks using the AWS CLI tool.

Create a 100Gi volume for each node. 

```
$ aws ec2 create-volume --volume-type gp2 --size 100 --region ap-southeast-1 --availability-zone ap-southeast-1a

$ aws ec2 create-volume --volume-type gp2 --size 100 --region ap-southeast-1 --availability-zone ap-southeast-1b

$ aws ec2 create-volume --volume-type gp2 --size 100 --region ap-southeast-1 --availability-zone ap-southeast-1c

```

**Note**: Provide the required size initially as Local PV storage will not allow you to expand the capacity later. 

Get list of Instance IDs per each Zone:

```
$ aws ec2 describe-instances \
    --query 'Reservations[*].Instances[*].{Instances:InstanceId,AZ:Placement.AvailabilityZone,State:State.Name}' \
    --output table


-------------------------------------------------------
|                  DescribeInstances                  |
+------------------+-----------------------+----------+
|        AZ        |       Instances       |  State   |
+------------------+-----------------------+----------+
|  ap-southeast-1a |  i-0eadbaf593512e050  |  running |
|  ap-southeast-1b |  i-0fc7f7b6ed1ec71f5  |  running |
|  ap-southeast-1c |  i-0654356706d3242f9  |  running |
+------------------+-----------------------+----------+

```

**Note**: If instances and other resources are running on the default region which you have configured using the `aws configure` command, then you don’t need to specify the region in the above command. Otherwise, you may have to specify the region while running the above commands where the instances are created.



Get the list of Volume IDs for each Zone:

```
$ aws ec2 describe-volumes --filters Name=status,Values=available --query "Volumes[*].{VolId:VolumeId,AZ:AvailabilityZone,Size:Size,State:State}" --output table


-------------------------------------------------------------------
|                         DescribeVolumes                         |
+------------------+-------+------------+-------------------------+
|        AZ        | Size  |   State    |          VolId          |
+------------------+-------+------------+-------------------------+
|  ap-southeast-1c |  100  |  available |  vol-0a1dd818dfd3ba188  |
|  ap-southeast-1b |  100  |  available |  vol-0d1e2842e586ddf8f  |
|  ap-southeast-1a |  10   |  available |  vol-0fb93ca2f4229a884  |
+------------------+-------+------------+-------------------------+
```

Repeat the comment below for each device created and attach a device to each node.

```
# Disk 1 to worker node 1
$ aws ec2 attach-volume --volume-id vol-0fb93ca2f4229a884 --instance-id i-0eadbaf593512e050 --device /dev/sdf

# Disk 2 to worker node 2
$ aws ec2 attach-volume --volume-id vol-0d1e2842e586ddf8f --instance-id i-0fc7f7b6ed1ec71f5 --device /dev/sdf

# Disk 3 to worker node 3
$ aws ec2 attach-volume --volume-id vol-0a1dd818dfd3ba188 --instance-id i-0654356706d3242f9 --device /dev/sdf
```

### Verify the BlockDevice information

You can verify the attached Block Device information from Kubera portal under **Management > Block Devices** from the corresponding cluster page.

![Block Device Information](assets/data/percona-workload/images/get-started8.png)


### Verify default Storage Class

You can verify the installed Storage Class information from Kubera portal under **Management > Storage** Classes from the corresponding cluster page.

![Storage classes](assets/data/percona-workload/images/get-started9.png)

From the default StorageClass, we use `openebs-device` for using Persistent storage for running Percona XtraDB Cluster.