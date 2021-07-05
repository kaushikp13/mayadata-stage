There are multiple ways to provision Prometheus on Kubernetes. In this tutorial, we will be using the OpenEBS Local PV device as the persistent storage on a GKE cluster.

Prometheus using Helm installation from the stable repository will install a Prometheus operator which installs Prometheus and Grafana components. It will use OpenEBS Local PV device as the persistent storage for storing the metrics. Let’s review our setup used for the configuration.

**Our setup:**

- 3 nodes in GKE

- 2 vCPUs / node 

- 7.5 GiB memory / node

- 2x 100 GiB volumes / node


### Getting Started

Let’s start the installation of OpenEBS using the Kubera Platform.


### Installing OpenEBS using Kubera

Login to your free [Kubera account](https://account.mayadata.io/login) and click on **Go to Kubera**.

![Go to Kubera](assets/data/prometheus-workload/images/go-to-kubera.png)


Follow the instructions to connect your cluster to your Kubera account.

![Connect to cluster](assets/data/prometheus-workload/images/connect-to-cluster.png)


Copy and execute the command on your own Kubernetes cluster.

![Connecting cluster](assets/data/prometheus-workload/images/connecting-cluster.png)


Click on **Begin Installation** which will lead to a page where you can choose a way to install OpenEBS.

Follow the **Basic Installation** setup for the default installation of OpenEBS Enterprise Edition on your cluster.

![Install OpenEBS Enterprise Edition](assets/data/prometheus-workload/images/install-openebs-ee.png)


Click on **Deploy OpenEBS** on the next screen and verify the installation status from the next screen. Click on **Continue** once OpenEBS installation is completed.

![Install OpenEBS Enterprise Edition Completed](assets/data/prometheus-workload/images/install-openebs-ee-completed.png)


OpenEBS installation will complete shortly and you will see OpenEBS control-plane enabled on your cluster.

![OpenEBS Control Plane](assets/data/prometheus-workload/images/openebs-control-plane.png)


### Attaching disks to nodes

Now, we will add additional two Disks to each node. Disks will be consumed by Prometheus and Alert manager instances using OpenEBS local PV device storage engine. This step can be done through your cloud vendor's web user interface, or if you are running in a VM you can use your hypervisor to add additional virtual devices to each node. In this example, we have used GKE and added the disks using the GKE CLI console.


Create disks in the specified zones where nodes are created:

```
$ gcloud compute disks create prometheus-disk1 prometheus-disk2 prometheus-disk3 prometheus-disk4 prometheus-disk5 prometheus-disk6 --size=100G --zone=us-central1-c
```

Get a list of Instances:

```
$ kubectl get node

NAME                                        STATUS   ROLES    AGE   VERSION
gke-prometheus-default-pool-8ba1a274-k6cj   Ready    <none>   74m   v1.16.11-gke.5
gke-prometheus-default-pool-8ba1a274-t76h   Ready    <none>   74m   v1.16.11-gke.5
gke-prometheus-default-pool-8ba1a274-zhk3   Ready    <none>   74m   v1.16.11-gke.5
```

Run the following commands to attach each disk to each node:

```
$ gcloud compute instances attach-disk gke-prometheus-default-pool-8ba1a274-k6cj --disk prometheus-disk1 --device-name prometheus-disk1 --zone=us-central1-c


$ gcloud compute instances attach-disk gke-prometheus-default-pool-8ba1a274-t76h --disk prometheus-disk2 --device-name prometheus-disk2 --zone=us-central1-c


$ gcloud compute instances attach-disk gke-prometheus-default-pool-8ba1a274-zhk3 --disk prometheus-disk3 --device-name prometheus-disk3 --zone=us-central1-c


$ gcloud compute instances attach-disk gke-prometheus-default-pool-8ba1a274-k6cj --disk prometheus-disk4 --device-name prometheus-disk4 --zone=us-central1-c


$ gcloud compute instances attach-disk gke-prometheus-default-pool-8ba1a274-t76h --disk prometheus-disk5 --device-name prometheus-disk5 --zone=us-central1-c


$ gcloud compute instances attach-disk gke-prometheus-default-pool-8ba1a274-zhk3 --disk prometheus-disk6 --device-name prometheus-disk6 --zone=us-central1-c
```
