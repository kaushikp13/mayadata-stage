### Conclusion

As described at the beginning of this guide, CockroachDB is a distributed SQL database built on a
transactional and strongly-consistent key-value store. Since it is a stateful application, in this guide we
have used OpenEBS LocalPV to provide node local storage to the CockroachDB statefulset deployment.
We used Kubera to deploy OpenEBS on the k8 cluster. We showed how to check metrics and monitoring
of CockroachDB instances using Prometheus and Grafana.
