## Getting Started

Let’s start the installation of OpenEBS using the Kubera platform.

### Installing OpenEBS using Kubera

Signup [here](https://director.mayadata.io/) for your free Kubera account. Then click on `Go to Kubera`.

![Login to Free Kubera](assets/data/magento-workload/images/2.png)

![magento_3](assets/data/magento-workload/images/3.png)

Follow the instructions to connect your cluster to your Kubera account. 

![magento_4](assets/data/magento-workload/images/4.png)

It will open a window with the command to connect your K8s cluster with the Kubera SaaS version. Copy and execute the command on your own Kubernetes cluster.

![magento_5](assets/data/magento-workload/images/5.png)

If OpenEBS was already installed using Kubera in your cluster, skip this process. If OpenEBS was not installed using Kubera, then click on `Begin Installation`, which will lead to a page where you can choose how to install OpenEBS.

![magento_6](assets/data/magento-workload/images/6.png)

Follow the on-screen instructions titled `Basic Installation` for the default installation of OpenEBS Enterprise Edition on your K8s cluster.

![magento_7](assets/data/magento-workload/images/7.png)

Click on `Deploy OpenEBS` on the next screen and verify the installation status from the next screen. After successful installation of OpenEBS, click on `Continue`. If you run into any errors or have questions, [community support](http://kubera-community.slack.com) for Kubera is available on Slack.

![magento_8](assets/data/magento-workload/images/8.png)

Now, you will see OpenEBS control-plane has been enabled on your Kubernetes cluster.

![magento_9](assets/data/magento-workload/images/9.png)

It will go to the list of OpenEBS pods information when click on `Continue`.

![magento_10](assets/data/magento-workload/images/10.png)

### Creating and Attaching disks to nodes

The following commands will create 100GiB capacity disks in the ap-south-1 region.

```

$ aws ec2 create-volume --volume-type gp2 --size 100 --region ap-south-1 --availability-zone ap-south-1a
$ aws ec2 create-volume --volume-type gp2 --size 100 --region ap-south-1 --availability-zone ap-south-1b
$ aws ec2 create-volume --volume-type gp2 --size 100 --region ap-south-1 --availability-zone ap-south-1c

```

The above created disks will be attached to each node using the steps provided below. These disks will be later consumed to create CSI based cStor storage pools and then it will be consumed as the backend storage for OpenEBS NFS provisioners. Using this NFS provisioner, Magento persistent volumes will be created on cStor storage and data can be shared by multiple Magento pods. The disk attachment can be done through your cloud vendor's web user interface, or if you are running in a VM you can use your hypervisor to add additional virtual devices to each node. In this example, we have used AWS and added the disks using the aws CLI tool.


Get list of InstanceId:

```
$ aws ec2 describe-instances  --region ap-south-1 --query 'Reservations[*].Instances[*].{Instances:InstanceId,AZ:Placement.AvailabilityZone}' --output table


----------------------------------------
|           DescribeInstances          |
+--------------+-----------------------+
|      AZ      |       Instances       |
+--------------+-----------------------+
|  ap-south-1c |  i-0e4953125f9419c19  |
|  ap-south-1a |  i-05daada5cf2780773  |
|  ap-south-1b |  i-0a5bd47123ff63fc6  |
+--------------+-----------------------+
```



Get list of VolumeIds:

```
$ aws ec2 describe-volumes --region ap-south-1 --filters Name=status,Values=available --query "Volumes[*].{VolId:VolumeId,AZ:AvailabilityZone,Size:Size}" --output table
--------------------------------------------------
|                 DescribeVolumes                |
+--------------+-------+-------------------------+
|      AZ      | Size  |          VolId          |
+--------------+-------+-------------------------+
|  ap-south-1b |  100  |  vol-07607d4405155796b  |
|  ap-south-1c |  100  |  vol-0e30e90bd264b1d44  |
|  ap-south-1a |  100  |  vol-03dfa520bc4e300c8  |
+--------------+-------+-------------------------+
```
 
Note: Please choose the right region to list the instances and volumes.

Perform the following commands to attach the devices to each node.

```
# Disk 1 to worker node 1

$ aws ec2 attach-volume --volume-id vol-024bb15a3f4d135bf --instance-id i-0b534e5504e6ddc31 --device /dev/sdf

# Disk 2 to worker node 2

$ aws ec2 attach-volume --volume-id vol-0c9c3107eba99fe13 --instance-id i-096536fe655cf23f7 --device /dev/sdf

# Disk 3 to worker node 3

$ aws ec2 attach-volume --volume-id vol-05bd9172e672481d3 --instance-id i-048528319d31e012f --device /dev/sdf
```


### Verify the BlockDevice information

You can verify the attached block device information from Kubera portal under `Management > Block` Devices from the corresponding cluster page.

![magento_11](assets/data/magento-workload/images/11.png)

The above block device management section has the details of the blockdevice present in the cluster.

#### Create a cStor pool 

In this section, we will create a storage pool for Magento and its dependencies. We will create a CSI based cStor storage pool using these 100GiB disks from each node.This storage pool will be used as the backend storage for OpenEBS NFS provisioners. So whichever application uses the storage class with provisioner as OpenEBS NFS provisioner, they can use shared storage lying on cStor storage.  We will install Magento on highly available shared persistent volume. The remaining applications such as ElasticSearch and MariaDB application will consume cStor storage as the persistent storage.


Go to `Management > Storage` Pools  section.

![magento_12](assets/data/magento-workload/images/12.png)


Click on `Create a new Pool`.

![magento_13](assets/data/magento-workload/images/13.png)

Select the pool type, disks name of cStor pool and replica details.

![magento_14](assets/data/magento-workload/images/14.png)

**Note:** [NDM](https://docs.openebs.io/docs/next/ndm.html) will not select formatted disk for cStor pool creation. So, NDM will not list those devices. If users need to use these disks for cStor pool creation, users can delete the filesystem and format it.

![magento_15](assets/data/magento-workload/images/15.png)

Click on `Create` to create the pool.

![magento_16](assets/data/magento-workload/images/16.png)

View the cStor storage pool details by clicking on `View created pool`.

![magento_17](assets/data/magento-workload/images/17.png)

Users can check the pool details from the `Pool Management` section as well.

#### Create a cStor Storage Class

You can verify the installed Storage Class information from Kubera portal under `Management > Storage Classes` from the corresponding cluster page.

Also, you can create a new cStor class from this section. This Storage Class will be used to instal components other than Magento pods.

Get the details of the current Storage Class in the cluster.

![magento_18](assets/data/magento-workload/images/18.png)

Click on Create a new Storage Class to create a new one.

![magento_19](assets/data/magento-workload/images/19.png)

![magento_20](assets/data/magento-workload/images/20.png)

Now, select the cStor pool name and replica count of cStor volume.  Click on `Generate SC config` to create and view the Storage Class configuration.

![magento_21](assets/data/magento-workload/images/21.png)

Click on Create to create the Storage Class.

![magento_22](assets/data/magento-workload/images/22.png)

![magento_23](assets/data/magento-workload/images/23.png)

From the above Storage Class management list, we use `cstorsc-ccyur` as the backend storage for OpenEBS NFS provisioner. This same storage class will be used for persistent storage for ElasticSearch and MariaDB applications.

#### Setting OpenEBS Storage Class as default

Change the default storage class from your current setting to OpenEBS. For example, in our case, using AWS default storage class is set to gp2. Unset the default gp2 storage class.

This is required for using OpenEBS cStor storage class as default so that ElasticSearch and MariaDB will be provisioning with OpenEBS cStor volume. We don’t need to mention the storage class for these applications separately. 

```
$ kubectl patch storageclass gp2 -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}'
```

Now define `cstorsc-ccyur` as the default StorageClass.

```
$ kubectl patch storageclass cstorsc-ccyur -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'

```

#### Verify default Storage Class

List the storage classes and verify `cstorsc-ccyur` is set to default.

```
$ kubectl get sc

NAME                        PROVISIONER                                                RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
cstorsc-ccyur (default)     cstor.csi.openebs.io                                       Delete          Immediate              true                   5m59s
gp2                         kubernetes.io/aws-ebs                                      Delete          WaitForFirstConsumer   false                  140m
openebs-device              openebs.io/local                                           Delete          WaitForFirstConsumer   false                  19m
openebs-hostpath            openebs.io/local                                           Delete          WaitForFirstConsumer   false                  19m
openebs-jiva-default        openebs.io/provisioner-iscsi                               Delete          Immediate              false                  19m
openebs-snapshot-promoter   volumesnapshot.external-storage.k8s.io/snapshot-promoter   Delete          Immediate              false                  19m

```