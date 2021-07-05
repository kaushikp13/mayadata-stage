Magento is a feature-rich flexible e-commerce solution. It includes transaction options, multi-store functionality, loyalty programs, product categorization and shopper filtering, promotion rules, and more. Deploying Bitnami applications as Helm Charts is the easiest way to get started on Kubernetes. It also packages the Bitnami MariaDB chart which is required for bootstrapping a MariaDB deployment as a database for the Magento application. 

A Magento deployment consists of several components such as a web server (Apache or Nginx), a database (MySQL DB perhaps MariaDB or Percona), Elasticsearch used as a site search tool, an optional Redis for web caching or Varnish as HTTP cache and finally a message queue such as RabbitMQ. Generally, Web Servers are stateless application and databases are stateful applications that require persistent storage such as OpenEBS. We are using ReadWriteMany persistent volumes for deployment scaling of Magento applications to access the same media files across Magento web servers.

In this guide, we will create a CSI based cStor storage pool and storage class. The OpenEBS NFS provisioner will consume this cStor storage as the backend storage and create a new storage class with NFS volume support. This new storage class will provide shared volume support to multiple Magento web servers. The remaining applications such as ElasticSearch and MariaDB application will consume cStor storage as the persistent storage.

The following are the advantage of using NFS provisioner over OpenEBS cStor volumes: 

 - NFS data on OpenEBS cStor volumes are replicated, CSI supported, highly available across zones if configured accordingly. 

 - Data can be thin provisioned. Persistent volume mounts are configured at the required size, can be expanded and physical pools can be started with as low as one disk per pool instance and increased as the storage is consumed 

## Before Starting

You require an existing  Kubernetes cluster. Kubernetes provides platform abstraction, cloud-native software runs, and behaves the same way on a managed Kubernetes service like AWS EKS, Google Cloud GKE, Microsoft AKS, DigitalOcean Kubernetes Service, or self-managed based on Red Hat OpenShift and Rancher. You can also use kubeadm, kubespray, minikube. 

Since you made it here, we assume you already have one configured. MayaData team has proudly over 50 CKAs, years of experience building for enterprises, and running Kubernetes in production. 

If you need professional help to decide, we can connect you with one of our trusted partners. In case you want to learn more, just schedule a call [schedule a call](https://calendly.com/mayadata/15min) with us and we will send you a best-selling  “Kubernetes - A Complete DevOps Cookbook,” also written by one of our own experts.

| [![mangentocookbook](assets/data/kafka-workload/images/cookbook.png)](https://www.amazon.com/Kubernetes-applications-orchestrate-containers-cloud-native-ebook/dp/B08537GMYW)  | *Free book*: **Kubernetes A Complete DevOps Cookbook**| 
| ------ | ------ |
| Schedule a 15-minute call today to speak with one of our partners and receive a FREE copy of our new book. ||
