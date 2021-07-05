CockroachDB is a cloud-native SQL database for building global, scalable cloud services that survive
disasters. It is a distributed SQL database built on a transactional and strongly-consistent key-value
store. It scales horizontally; survives disk, machine, rack, and even datacenter failures with minimal
latency disruption and no manual intervention; supports strongly-consistent ACID transactions; and
provides a familiar SQL API for structuring, manipulating, and querying data.[[1]](https://github.com/cockroachdb/cockroach) [[2]](https://www.cockroachlabs.com/docs/stable/orchestrate-cockroachdb-with-kubernetes.html).

This guide explains the basic installation for CockroachDB operators on OpenEBS Local PV devices. The
guide will also provide a way to monitor the health of cockroachDB using Prometheus and Grafana tools.

![BlogAutomation](assets/data/cockroach-workload/images/BlogAutomation.jpg)



## Before starting

You require an existing Kubernetes cluster. Kubernetes provides platform abstraction, cloud-native
software runs, and behaves the same way on a managed Kubernetes service like AWS EKS, Google Cloud
GKE, Microsoft AKS, DigitalOcean Kubernetes Service, or self-managed based on Red Hat OpenShift and
Rancher. You can also use kubeadm, kubespray, minikube. Since you made it here, we assume you
already have one configured.
MayaData team has proudly over 50 CKAs, years of experience building for enterprises, and running
Kubernetes in production. If you need professional help to decide, we can connect you with one of our
trusted partners. In case you want to learn more, just [schedule a call](https://calendly.com/mayadata/15min?month=2021-05) with us and we will send you a best-selling “Kubernetes - A Complete DevOps Cookbook,” also
written by one of our own experts.

| [![cookbook](assets/data/kafka-workload/images/cookbook.png)](https://www.amazon.com/Kubernetes-applications-orchestrate-containers-cloud-native-ebook/dp/B08537GMYW)  | *Free book*: **Kubernetes A Complete DevOps Cookbook**| 
| ------ | ------ |
| Schedule a 15-minute call today to speak with one of our partners and receive a FREE copy of our new book. ||