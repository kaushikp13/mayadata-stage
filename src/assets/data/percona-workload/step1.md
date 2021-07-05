The Percona XtraDB Cluster (PXC) is a fully open-source high-availability solution for MySQL. It integrates Percona Server for MySQL and Percona XtraBackup with the Galera library to enable synchronous multi-master replication.
A cluster consists of nodes, where each node contains the same set of data synchronized across nodes. The recommended configuration is to have at least three nodes. Each node is a regular Percona Server for MySQL instances. 
PXC implements ProxySQL in front of the cluster to assist with several functions, such as splitting read and write traffic among nodes, as needed.
Percona XtraDB Cluster can be provisioned with OpenEBS volumes using various OpenEBS storage engines such as Local PV, cStor, or Jiva based on the application requirement. In this document, we will be installing a PXC environment on OpenEBS Local PV.


## Before Starting

You require an existing  Kubernetes cluster. Kubernetes provides platform abstraction, cloud-native software runs, and behaves the same way on a managed Kubernetes service like AWS EKS, Google Cloud GKE, Microsoft AKS, DigitalOcean Kubernetes Service, or self-managed based on Red Hat OpenShift and Rancher. You can also use kubeadm, kubespray, minikube. 
Since you made it here, we assume you already have one configured. MayaData team has proudly over 50 CKAs, years of experience building for enterprises, and running Kubernetes in production. 
If you need professional help to decide, we can connect you with one of our trusted partners. In case you want to learn more, just [schedule a call](https://calendly.com/mayadata/15min) with us and we will send you a best-selling  “Kubernetes - A Complete DevOps Cookbook,” also written by one of our own experts.
