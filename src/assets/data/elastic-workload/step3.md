### Getting Started with OpenEBS

Let's start the installation of OpenEBS using the Kubera platform.

**Installing OpenEBS using Kubera**

Signup [here](https://director.mayadata.io/) for your free Kubera account. Then click on **Go to Kubera**.

![Go to kubera](assets/data/elastic-workload/images/kubera.png)

![Getstarted1](assets/data/elastic-workload/images/getstarted_1.png)
Follow the instructions to connect your cluster to your Kubera account.

![Getstarted2](assets/data/elastic-workload/images/getstarted_2.png)
It will open a window with the command to connect your K8s cluster with the Kubera SaaS version. Copy
and execute the command on your own Kubernetes cluster.

![Getstarted3](assets/data/elastic-workload/images/getstarted_3.png)
If OpenEBS was already installed using Kubera in your cluster, skip this process. If OpenEBS was not
installed using Kubera, then click on **`Begin Installation`**, which will lead to a page where you can choose
how to install OpenEBS.

![Getstarted4](assets/data/elastic-workload/images/getstarted_4.png)
Follow the on-screen instructions titled **`Basic Installation`** for the default installation of OpenEBS
Enterprise Edition on your K8s cluster.

![Getstarted5](assets/data/elastic-workload/images/getstarted_5.png)
Click on **`Deploy OpenEBS`** on the next screen and verify the installation status from the next screen. After
successful installation of OpenEBS, click on **`Continue`**. If you run into any errors or have questions,
[community support](http://kubera-community.slack.com) for Kubera is available on Slack.

![Getstarted6](assets/data/elastic-workload/images/getstarted_6.png)
Now, you will see OpenEBS control-plane has been enabled on your Kubernetes cluster.

![Getstarted7](assets/data/elastic-workload/images/getstarted_7.png)



### Configuring GCP Project

If you are on GCP, you need to select your project before you can attach disks to the nodes.

```
$ gcloud config set project <your-project-name-here>

```
Create three 100Gi disks for each node.

```

$ gcloud compute disks create disk-1 disk-2 disk-3 disk-4 disk-5 disk-6 disk-7 disk8 disk-9 --size=100G --zone=us-central1-c

```

**Note:** Provide the required size initially as currently Local PV volume will not allow you to expand the
capacity later


### Attaching disks to each Node

Now, we will add 3 additional devices to each node. Disks will be later consumed by Elastic. This step can
be done through your cloud vendor's web user interface, or if you are running in a VM, you can use your
hypervisor to add 3 additional virtual devices to each node. In this example, we have used GCP and
added the disks using the gcloud CLI tool.

**Get list of Instance IDs per each Zone**

```
$ gcloud compute instances list --zones us-central1-c
NAME ZONE MACHINE_TYPE PREEMPTIBLE INTERNAL_IP EXTERNAL_IP STATUS
gke-cluster-2-default-pool-c8c74720-65nf us-central1-c e2-standard-4
10.128.15.193 34.70.58.139 RUNNING
gke-cluster-2-default-pool-c8c74720-90r9 us-central1-c e2-standard-4
10.128.15.194 35.188.38.187 RUNNING
gke-cluster-2-default-pool-c8c74720-cjjc us-central1-c e2-standard-4
10.128.15.196 35.224.255.199 RUNNING

```

Now, attach the disks to each node.

```
$ gcloud compute instances attach-disk gke-cluster-2-default-pool-c8c74720-65nf --
disk disk-1 --device-name disk-1 --zone us-central1-c
$ gcloud compute instances attach-disk gke-cluster-2-default-pool-c8c74720-65nf --
disk disk-2 --device-name disk-2 --zone us-central1-c
$ gcloud compute instances attach-disk gke-cluster-2-default-pool-c8c74720-65nf --
disk disk-3 --device-name disk-3 --zone us-central1-c
$ gcloud compute instances attach-disk gke-cluster-2-default-pool-c8c74720-90r9 --
disk disk-4 --device-name disk-4 --zone us-central1-c
$ gcloud compute instances attach-disk gke-cluster-2-default-pool-c8c74720-90r9 --
disk disk-5 --device-name disk-5 --zone us-central1-c
$ gcloud compute instances attach-disk gke-cluster-2-default-pool-c8c74720-90r9 --
disk disk-6 --device-name disk-6 --zone us-central1-c
$ gcloud compute instances attach-disk gke-cluster-2-default-pool-c8c74720-cjjc --disk
disk-7 --device-name disk-7 --zone us-central1-c
$ gcloud compute instances attach-disk gke-cluster-2-default-pool-c8c74720-cjjc --disk
disk-8 --device-name disk-8 --zone us-central1-c
$ gcloud compute instances attach-disk gke-cluster-2-default-pool-c8c74720-cjjc --disk
disk-9 --device-name disk-9 --zone us-central1-c

```
### Verify the Block Device information

You can verify the attached Block Device information from Kubera portal under **Management > Block Devices** from the corresponding cluster page.
![Getstarted8](assets/data/elastic-workload/images/getstarted_8.png)

### Verify default Storage Class
You can verify the installed Storage Class information from Kubera portal under **Management > Storage Classes** from the corresponding cluster page.
![Getstarted9](assets/data/elastic-workload/images/getstarted_9.png)

From the default StorageClass, we use **`openebs-device`** for using persistent storage for running EFK pods.
