### Monitoring CockroachDB

CockroachDB generates detailed time series metrics of each cluster node. Prometheus can be used for
scrapping these metrics and grafana can be used for plotting graphs for the same.

### Set up Prometheus and Grafana

In this section, we will install Prometheus Operator and use cockroachdb Service Monitor.We will install
the community edition of Prometheus operator using Helm.This will install both Prometheus and
Grafana.

Download Prometheus operator using Helm v3.

```
$ helm repo add prometheus-community https://prometheuscommunity.github.io/helm-charts
$ helm repo update
$ kubectl create namespace monitoring

```

The following command will install both Prometheus and Grafana components.

```
$ helm install prometheus prometheus-community/kube-prometheus-stack
--namespace monitoring

```

**Note:** Check compatibility for your Kubernetes version and Prometheus stack from here.

Verify if Prometheus related pods are installed successfully:

```
$ kubectl get pods -n monitoring
NAME READY STATUS RESTARTS AGE
alertmanager-prometheus-kube-prometheus-alertmanager-0 2/2
Running 0 54s
prometheus-grafana-6f5448f95b-qqsvc 2/2 Running 0
59s
prometheus-kube-prometheus-operator-8556f58759-hpldk 1/1
Running 0 59s
prometheus-kube-state-metrics-6bfcd6f648-r89kk 1/1 Running
0 59s
prometheus-prometheus-kube-prometheus-prometheus-0 2/2
Running 1 53s
prometheus-prometheus-node-exporter-766l9 1/1 Running 0
59s
prometheus-prometheus-node-exporter-8q6pm 1/1 Running
0 60s
prometheus-prometheus-node-exporter-lst6v 1/1 Running 0
60s

```

Verify if Prometheus related services are installed successfully:

```
$ kubectl get svc -n monitoring
NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S)
AGE
alertmanager-operated ClusterIP None <none>
9093/TCP,9094/TCP,9094/UDP 97s
prometheus-grafana ClusterIP 10.68.1.15 <none> 80/TCP
103s
prometheus-kube-prometheus-alertmanager ClusterIP 10.68.11.16 <none>
9093/TCP 103s
prometheus-kube-prometheus-operator ClusterIP 10.68.10.115 <none>
443/TCP 103s
prometheus-kube-prometheus-prometheus ClusterIP 10.68.1.120 <none>
9090/TCP 103s
prometheus-kube-state-metrics ClusterIP 10.68.3.147 <none> 8080/TCP
103s
prometheus-operated ClusterIP None <none> 9090/TCP
97s
prometheus-prometheus-node-exporter ClusterIP 10.68.6.139 <none>
9100/TCP 103s

```

Change `prometheus-prometheus-oper-prometheus` service to LoadBalancer/NodePort from ClusterIP.
This change is for accessing Prometheus service from your Web browser.

```
$ kubectl patch svc prometheus-kube-prometheus-prometheus -n monitoring -p '{"spec":
{"type": "NodePort"}}'

```

Change `prometheus-grafana` service to LoadBalancer/NodePort from ClusterIP. This change is for
accessing Grafana service from your Web browser.

```

$ kubectl patch svc prometheus-grafana -n monitoring -p '{"spec":
 {"type": "NodePort"}}'

```

**Note:** If the user needs to access Prometheus and Grafana outside the network, the service type can be
changed or a new service should be added to use LoadBalancer or create Ingress resources for
production deployment.

For ease of simplicity in testing the deployment, we are going to use NodePort. Please be advised to
consider using LoadBalancer or Ingress, instead of NodePort, for production deployment.

```
$ kubectl get svc -n monitoring
NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S)
AGE
alertmanager-operated ClusterIP None <none>
9093/TCP,9094/TCP,9094/UDP 11m
prometheus-grafana NodePort 10.68.1.15 <none> 80:31360/TCP
11m
prometheus-kube-prometheus-alertmanager ClusterIP 10.68.11.16 <none>
9093/TCP 11m
prometheus-kube-prometheus-operator ClusterIP 10.68.10.115 <none>
443/TCP 11m
prometheus-kube-prometheus-prometheus NodePort 10.68.1.120 <none>
9090:32515/TCP 11m
prometheus-kube-state-metrics ClusterIP 10.68.3.147 <none> 8080/TCP
11m
prometheus-operated ClusterIP None <none> 9090/TCP
11m
prometheus-prometheus-node-exporter ClusterIP 10.68.6.139 <none>
9100/TCP 11m
```

#### Installing Cockroachdb Service Monitor

We will label CockroachDB service, so that only cockroachdb (and not cockroachdb-public or
cockroachdb-public-nodeport) service is monitored by the Prometheus.

```
$ kubectl label svc cockroachdb prometheus=cockroachdb
```

Deploy the following cockroachdb service monitor

```
$ cat cockroachdb-prometheus-sm.yaml
# Select any services with the prometheus:cockroachdb label
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
 name: cockroachdb
 labels:
 app: cockroachdb
 prometheus: cockroachdb
 release: prometheus
spec:
 selector:
 matchLabels:
 prometheus: cockroachdb
 namespaceSelector:
 matchNames:
- default
 endpoints:
- port: http
path: /_status/vars
tlsConfig:
 # The HTTPS certs are signed by the kubernetes internal
 # certificate authority.
 caFile: "/var/run/secrets/kubernetes.io/serviceaccount/ca.crt"
 insecureSkipVerify: true
 # This overrides the hostname verification check for the admin
 # UI port to match our quickstart secure-mode cluster setup.
 serverName: "127.0.0.1"

```

Please note that CockroachDB pod internally uses a self signed certificate with CA Cockroach CA and
prometheus uses cert generated by kubernetes. For this deployment guide, we have added

```
insecureSkipVerify: true
```

Please consider using the appropriate CA certs for production environments.

Apply the service monitor for CockroachDB.

```
$ kubectl apply -f cockroachdb-prometheus-sm.yaml

servicemonitor.monitoring.coreos.com/cockroachdb created

```

Verify if the service monitor for CockroachDB is created successfully.

```
$ kubectl get servicemonitor
NAME AGE
cockroachdb 55s

```

Launch Grafana using External IP of prometheus-grafana with port 80 on your browser, similar to the
format here http://:<80>. This is applicable if the service is being created using Load Balancer. If it is
NodePort, then use :

```
<External IP of Node>:< Nodeport of prometheus-grafana>.
```

Example:

```
http://35.224.42.110:31360/
```

Username: admin Password: prom-operator

Password can be obtained by using the command

```
(kubectl get secret \
 --namespace monitoring prometheus-grafana \
-o jsonpath="{.data.admin-password}" \
| base64 --decode ; echo
)


```

Add the following dashboards to Grafana for various metrics such as Run time info, storage level info,
SQL info, Replica info, etc, by uploading them using the 'Upload JSON option and selecting the
prometheus as datasource.

1. Runtime dashboard: node status, including uptime, memory, and cpu.

```
https://raw.githubusercontent.com/cockroachdb/cockroach/master/monitoring/grafan
a-dashboards/runtime.json

``` 

2. Storage dashboard: storage availability.

```
https://raw.githubusercontent.com/cockroachdb/cockroach/master/monitoring/grafan
a-dashboards/storage.json

```

3. SQL dashboard: sql queries/transactions.

```
https://raw.githubusercontent.com/cockroachdb/cockroach/master/monitoring/grafan
a-dashboards/sql.json

```

4. Replicas dashboard: replica information and operations.

```
https://raw.githubusercontent.com/cockroachdb/cockroach/master/monitoring/grafan
a-dashboards/replicas.json

```

### Benchmarking 

Let's create a SysBench pod for the performance benchmark of the CockroachDB database.

```
$ kubectl run -it --rm sysbench-client --image=perconalab/sysbench:latest --
restart=Never -- bash
If you don't see a command prompt, try pressing Enter.
root@sysbench-client:/sysbench#

```

The above command will create a temporary pod for SysBench. This pod will be used to run the
benchmark commands. In this example, we are using the cockroachdb-public service name as the
cockroachdb host in the test command.

### Prepare the data

Ensure that the database has already been created before running the tests. In this example, we have
created a database called “sbtest” in the `previous section` and used it in the performance benchmark
tests. Please remember to use the corresponding CockroachDB password throughout the performance
benchmark tests.

The root password used in the following command can be obtained from the `previous section`.

Run the following tests from the SysBench pod.

```

root@sysbench-client:/sysbench# pass=Q7gc8rEdS
root@sysbench-client:/sysbench# # cocroachdb init
root@sysbench-client:/sysbench# sysbench --db-driver=pgsql --tables=10 --
table_size=1000000 --pgsql-host=cockroachdb-public --pgsql-port=26257 --pgsqluser=roach --pgsql-password=$pass --time=0 --events=10000000 --report-interval=1 --
threads=128 oltp_write_only prepare

```

Sample output:

```
sysbench 1.0.20 (using bundled LuaJIT 2.1.0-beta2)
Initializing worker threads...
Creating table 'sbtest4'...
Creating table 'sbtest1'...
Creating table 'sbtest2'...
Creating table 'sbtest5'...
Creating table 'sbtest6'...
Inserting 1000000 records into 'sbtest1'
Inserting 1000000 records into 'sbtest4'
Inserting 1000000 records into 'sbtest5'
Creating table 'sbtest8'...
Inserting 1000000 records into 'sbtest6'
Creating table 'sbtest9'...
Creating table 'sbtest10'...
Creating table 'sbtest3'...
Creating table 'sbtest7'...
Inserting 1000000 records into 'sbtest9'
Inserting 1000000 records into 'sbtest2'
Inserting 1000000 records into 'sbtest8'
Inserting 1000000 records into 'sbtest7'
Inserting 1000000 records into 'sbtest10'
Inserting 1000000 records into 'sbtest3'
Creating a secondary index on 'sbtest5'...
Creating a secondary index on 'sbtest1'...
Creating a secondary index on 'sbtest6'...
Creating a secondary index on 'sbtest4'...
Creating a secondary index on 'sbtest2'...
Creating a secondary index on 'sbtest9'...
Creating a secondary index on 'sbtest3'...
Creating a secondary index on 'sbtest8'...
Creating a secondary index on 'sbtest7'...
Creating a secondary index on 'sbtest10'.

```

In the following series of commands, we are going to generate Read Only, Write Only and Read/Write
traffic using different concurrent client threads.

```
root@sysbench-client:/sysbench# pass=Q7gc8rEdS
root@sysbench-client:/sysbench# timeinterval=120
root@sysbench-client:/sysbench# cooloff=15
root@sysbench-client:/sysbench# logfile="cockroachdb-benchmark.txt"
root@sysbench-client:/sysbench# for i in 2 4 8 16 32 64 128
do
```

```
echo "Number of threads $i" >> $logfile
date >> $logfile
sysbench oltp_read_only --db-driver=pgsql --tables=10 --table_size=1000000 --pgsqlhost=cockroachdb-public --pgsql-port=26257 --pgsql-user=roach --pgsqlpassword=$pass --time=0 --events=10000000 --report-interval=1 --threads=$i --
time=$timeinterval run >> $logfile
sleep $cooloff
sysbench oltp_write_only --db-driver=pgsql --tables=10 --table_size=1000000 --pgsqlhost=cockroachdb-public --pgsql-port=26257 --pgsql-user=roach --pgsqlpassword=$pass --time=0 --events=10000000 --report-interval=1 --threads=$i --
time=$timeinterval run >> $logfile
```

```
sleep $cooloff
sysbench oltp_read_write --db-driver=pgsql --tables=10 --table_size=1000000 --pgsqlhost=cockroachdb-public --pgsql-port=26257 --pgsql-user=roach --pgsqlpassword=$pass --time=0 --events=10000000 --report-interval=1 --threads=$i --
time=$timeinterval run >> $logfile
sleep 30
done

```


Following is Grafana screenshots after the benchmark runs

![Access13](assets/data/cockroach-workload/images/13.jpg)

![Access14](assets/data/cockroach-workload/images/14.jpg)

![Access15](assets/data/cockroach-workload/images/15.jpg)

![Access16](assets/data/cockroach-workload/images/16.jpg)
