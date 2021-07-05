Elasticsearch is a distributed, free and open search and analytics engine for all types of data, including textual, numerical, geospatial, structured, and unstructured. Elasticsearch is built on Apache Lucene and was first released in 2010 by Elasticsearch N.V. (now known as Elastic). Known for its simple REST APIs, distributed nature, speed, and scalability, Elasticsearch is the central component of the Elastic Stack, a set of free and open tools for data ingestion, enrichment, storage, analysis, and visualization. Commonly referred to as the ELK Stack (after Elasticsearch, Logstash, and Kibana), the Elastic Stack now includes a rich collection of lightweight shipping agents known as Beats for sending data to Elasticsearch.[[1]](https://www.elastic.co/what-is/elasticsearch).

This guide explains the basic installation for Elasticsearch operators on OpenEBS Local PV devices using KUDO. We will be installing Fluentd and Kibana to form the EFK stack. The guide will also provide a way to monitor the health of Elasticsearch using Prometheus and Grafana.



## Before starting

You require an existing Kubernetes cluster. Kubernetes provides platform abstraction, cloud-native
software runs, and behaves the same way on a managed Kubernetes service like AWS EKS, Google Cloud
GKE, Microsoft AKS, DigitalOcean Kubernetes Service, or self-managed based on Red Hat OpenShift and
Rancher. You can also use kubeadm, kubespray, minikube. Since you made it here, we assume you
already have one configured.

MayaData team has proudly over 50 CKAs, years of experience building for enterprises, and running
Kubernetes in production. If you need professional help to decide, we can connect you with one of our
trusted partners. In case you want to learn more, just [schedule a call](https://calendly.com/mayadata/15min) with us and we will send you a best-selling “Kubernetes - A
Complete DevOps Cookbook,” also written by one of our own experts.

| [![cookbook](assets/data/kafka-workload/images/cookbook.png)](https://www.amazon.com/Kubernetes-applications-orchestrate-containers-cloud-native-ebook/dp/B08537GMYW)  | *Free book*: **Kubernetes A Complete DevOps Cookbook**| 
| ------ | ------ |
| Schedule a 15-minute call today to speak with one of our partners and receive a FREE copy of our new book. ||