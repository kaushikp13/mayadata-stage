### Getting Started with OpenEBS

Let’s start the installation of OpenEBS using the Kubera platform.
Installing OpenEBS using Kubera
[Signup](https://director.mayadata.io/) here for your free Kubera account. Then click on **Go to Kubera**.


![Go to kubera](assets/data/kafka-workload/images/gotokubera.png)


![Getstarted1](assets/data/kafka-workload/images/getstarted_1.png)
Follow the instructions to connect your cluster to your Kubera account.

![Getstarted2](assets/data/kafka-workload/images/getstarted_2.png)
It will open a window with the command to connect your K8s cluster with the Kubera SaaS version. Copy and execute the command on your own Kubernetes cluster.

![Getstarted3](assets/data/kafka-workload/images/getstarted_3.png)
If OpenEBS was already installed using Kubera in your cluster, skip this process. If OpenEBS was not installed using Kubera, then click on **`Begin Installation`**, which will lead to a page where you can choose how to install OpenEBS.

![Getstarted4](assets/data/kafka-workload/images/getstarted_4.png)
Follow the on-screen instructions titled **`Basic Installation`** for the default installation of OpenEBS Enterprise Edition on your K8s cluster.

![Getstarted5](assets/data/kafka-workload/images/getstarted_5.png)
Click on **`Deploy OpenEBS`** on the next screen and verify the installation status from the next screen. After successful installation of OpenEBS, click on **`Continue`**. If you run into any errors or have questions, [community support](http://kubera-community.slack.com) for Kubera is available on Slack.

![Getstarted6](assets/data/kafka-workload/images/getstarted_6.png)
Now, you will see OpenEBS control-plane has been enabled on your Kubernetes cluster.

![Getstarted7](assets/data/kafka-workload/images/getstarted_7.png)

### Attaching disks to nodes

Now, we will add two additional disks to each node. These Disks will be later consumed by Kudo Kafka and Zookeeper instances using the openebs-device StorageClass, and these will be used as persistent storage for both applications. This step can be done through your cloud vendor's web user interface, or if you are running in a virtual machine (VM), you can use your hypervisor to add an additional virtual device to each node. In this example, we have used GCP and added the disks using the GCP CLI console.

##### Create two 100Gi disks for each node.

```
$ gcloud compute disks create kafka-disk1 kafka-disk2 kafka-disk3 kafka-disk4 kafka-disk5 kafka-disk6 --size=100G --zone=us-central1-a
```

**Note:** Provide the required size initially as currently Local PV volume will not allow you to expand the capacity later. 

##### Get list of Instance IDs per each Zone:

```
$ gcloud compute instances list --zones us-central1-a

NAME                                  ZONE           MACHINE_TYPE   PREEMPTIBLE  INTERNAL_IP  EXTERNAL_IP    STATUS
gke-kafka-default-pool-a691e3fc-46n9  us-central1-a  e2-standard-2               10.128.0.4   34.69.174.168  RUNNING
gke-kafka-default-pool-a691e3fc-j7kh  us-central1-a  e2-standard-2               10.128.0.2   35.238.146.71  RUNNING
gke-kafka-default-pool-a691e3fc-xr1r  us-central1-a  e2-standard-2               10.128.0.3   35.223.116.76  RUNNING
```

##### Get the list of Volume IDs for each Zone:

```
$ gcloud compute disks list --zones us-central1-a
WARNING: Flag `--zones` is deprecated. Use `--filter="zone:( ZONE ... )"` instead.
For example `--filter="zone:( europe-west1-b europe-west1-c )"`.

NAME                                  LOCATION       LOCATION_SCOPE  SIZE_GB  TYPE         STATUS
gke-kafka-default-pool-a691e3fc-46n9  us-central1-a  zone            50       pd-standard  READY
gke-kafka-default-pool-a691e3fc-j7kh  us-central1-a  zone            50       pd-standard  READY
gke-kafka-default-pool-a691e3fc-xr1r  us-central1-a  zone            50       pd-standard  READY
kafka-disk1                           us-central1-a  zone            100      pd-standard  READY
kafka-disk2                           us-central1-a  zone            100      pd-standard  READY
kafka-disk3                           us-central1-a  zone            100      pd-standard  READY
kafka-disk4                           us-central1-a  zone            100      pd-standard  READY
kafka-disk5                           us-central1-a  zone            100      pd-standard  READY
kafka-disk6                           us-central1-a  zone            100      pd-standard  READY
```

Repeat the following commands for attaching each device to the nodes.
```
# Disk 1 to worker node 1

gcloud compute instances attach-disk gke-kafka-default-pool-a691e3fc-46n9 --disk  kafka-disk1 --device-name kafka-disk1 --zone us-central1-a

# Disk 2 to worker node 2

$ gcloud compute instances attach-disk gke-kafka-default-pool-a691e3fc-j7kh --disk kafka-disk2 --device-name kafka-disk2 --zone us-central1-a

# Disk 3 to worker node 3

$ gcloud compute instances attach-disk gke-kafka-default-pool-a691e3fc-xr1r \
--disk kafka-disk3 --device-name kafka-disk3 --zone us-central1-a

# Disk 4 to worker node 1

$ gcloud compute instances attach-disk gke-kafka-default-pool-a691e3fc-46n9 \
--disk kafka-disk4 --device-name kafka-disk4 --zone us-central1-a

# Disk 5 to worker node 2

$ gcloud compute instances attach-disk gke-kafka-default-pool-a691e3fc-j7kh \
--disk kafka-disk5 --device-name kafka-disk5 --zone us-central1-a

# Disk 6 to worker node 3


$ gcloud compute instances attach-disk gke-kafka-default-pool-a691e3fc-xr1r \
--disk kafka-disk6 --device-name kafka-disk6 --zone us-central1-a
```

#### Verify the BlockDevice information

You can verify the attached Block Device information from Kubera portal under **`Management > Block`** Devices from the corresponding cluster page.

![Getstarted8](assets/data/kafka-workload/images/getstarted_8.png)

#### Verify default Storage Class

You can verify the installed Storage Class information from Kubera portal under **`Management > Storage`** Classes from the corresponding cluster page.

![Getstarted9](assets/data/kafka-workload/images/getstarted_9.png)

From the default StorageClass, we use openebs-device for using persistent storage for running Kudo Kafka and Zookeeper pod.