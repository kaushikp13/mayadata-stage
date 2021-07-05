MinIO is a high performance distributed object storage server, designed for large-scale private cloud infrastructure. MinIO is designed in a cloud-native manner to scale sustainably in multi-tenant environments. Orchestration platforms like Kubernetes provide a perfect cloud-native environment to deploy and scale MinIO. MinIO can be provisioned with OpenEBS volumes using various OpenEBS storage engines such as Local PV, cStor, or Jiva based on the application requirement. In this document, we are installing a MinIO distributed setup on OpenEBS Local PV.


## Before Starting

All you need is a Kubernetes cluster. Kubernetes provide platform abstraction, cloud native software runs and behaves the same whether it is on a managed Kubernetes service like AWS, EKS, Google Cloud GKE, Microsoft AKS, DigitalOcean Kubernetes Service or self managed based on Red Hat OpenShift and Rancher. You can also use kubeadm, kubespray, minikube.

Since you made it here, we assume you already have one configured. MayaData team has proudly over 50 CKAs, years of experience building for enterprises and running Kubernetes in production.

If you need professional help to decide, we can connect you with one of our trusted partners. In case you want to learn more, [schedule a call](https://calendly.com/mayadata/15min) with us and we will send you a best-selling  “Kubernetes - A Complete DevOps Cookbook”, also written by one of our own experts.
