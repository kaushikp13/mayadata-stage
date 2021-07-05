It is essential to monitor your Percona MySQL database regularly to validate the database metrics and take appropriate action in order to keep the database service always running and accessible. Percona has built a monitoring utility called **Percona Monitoring and Management(PMM)** . We can use it to monitor the database that we have created. It is simple to build the monitoring service and it utilizes the underlying Prometheus service as the package.

We have already enabled the monitoring service in the PXC YAML spec and deployed a PMM server as well. Let’s discuss how to access the Percona Monitoring and Management console to view the PXC database metrics.

The PMM console can be accessed through the PMM monitoring service. Get the PMM monitoring service details using the following command:

```
$ kubectl get svc
NAME                        TYPE           CLUSTER-IP       EXTERNAL-IP                                                                    PORT(S)                       AGE
cluster1-haproxy            ClusterIP      10.100.136.90    <none>                                                                         3306/TCP,3309/TCP,33062/TCP   13m
cluster1-haproxy-replicas   ClusterIP      10.100.244.115   <none>                                                                         3306/TCP                      13m
cluster1-pxc                ClusterIP      None             <none>                                                                         3306/TCP,33062/TCP            13m
cluster1-pxc-unready        ClusterIP      None             <none>                                                                         3306/TCP,33062/TCP            13m
kubernetes                  ClusterIP      10.100.0.1       <none>                                                                         443/TCP                       5h27m
monitoring-service          LoadBalancer   10.100.32.246    a543e9e1d189644f9bf4f7fdf0ba15b3-1159960729.ap-southeast-1.elb.amazonaws.com   443:30317/TCP                 120m

```

From the above service information, we need to use the **monitoring-service** to access the PMM service outside of the cluster. Since the deployment is on EKS, the **monitoring-service** will get assigned with an External-IP. Use that URL to access the UI. In this case, the external IP is:  "`a543e9e1d189644f9bf4f7fdf0ba15b3-1159960729.ap-southeast-1.elb.amazonaws.com`". One of the IP addresses of the LoadBalancer is 52.74.161.204 and uses this IP in the web browser to login to the PMM console.

![Grafana](assets/data/percona-workload/images/monitor1.png)

In this example, we have used [https://52.74.161.204/graph/login](https://52.74.161.204/graph/login) and provided the given credentials which were provided during the PMM server deployment. We have used **admin** as username and **test123** as a password to login to the PMM console.

![Monitoring Applications](assets/data/percona-workload/images/monitor2.png)

Some of the sample screenshots of the PMM console.

This is a sample Home Dashboard.

![Monitoring Applications](assets/data/percona-workload/images/monitor3.png)

The following shows some of Disk related statistics.

![Disk detail 1](assets/data/percona-workload/images/monitor4.png)

![Disk detail 2](assets/data/percona-workload/images/monitor5.png)

![Disk detail 3](assets/data/percona-workload/images/monitor6.png)
