Each and every DevOps and SRE are looking for ease of deployment of their applications in Kubernetes. After successful installation, they will be looking for how easily it can be monitored to maintain the availability of applications in a real-time manner. They can take proactive measures before an issue arise.

In this document, we will explain how you can easily set up a monitoring environment in your K8s cluster using Prometheus and use OpenEBS cStor as the persistent storage for storing the metrics.

This guide provides the installation of **Prometheus** using **Helm** on dynamically provisioned OpenEBS volumes. It also provides the basic instructions on how users can monitor the Prometheus parameters.

### Before Starting

All you need is a Kubernetes cluster. Kubernetes provide platform abstraction, cloud native software runs and behaves the same whether it is on a managed Kubernetes service like AWS, EKS, Google Cloud GKE, Microsoft AKS, DigitalOcean Kubernetes Service or self managed based on Red Hat OpenShift and Rancher. You can also use kubeadm, kubespray, minikube,etc.

Since you made it here, we assume you already have one configured. MayaData team has proudly over 50 CKAs, years of experience in building for enterprises, and running Kubernetes in production.

If you need professional help to decide, we can connect you with one of our trusted partners. In case you want to learn more, [schedule a call](https://calendly.com/mayadata/15min) with us and we will send you a best-selling  “Kubernetes - A Complete DevOps Cookbook”, also written by one of our own experts.
