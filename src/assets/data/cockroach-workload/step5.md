### Accessing CockroachDB

After the pod status reaches running state, we can start using the database cluster. We will be using the
built in sql-client for accessing and running some sql queries.

Enter into one of the cockroadb pod by using exec command

```
$ kubectl exec -it cockroachdb-2 -- ./cockroach sql --certs-dir cockroach-certs
#
# Welcome to the CockroachDB SQL shell.
# All statements must be terminated by a semicolon.
# To exit, type: \q.
#
# Server version: CockroachDB CCL v20.2.5 (x86_64-unknown-linux-gnu, built
2021/02/16 12:52:58, go1.13.14) (same version as client)
# Cluster ID: e51bfde5-2e75-4991-844e-d769f4b9b684
#
# Enter \? for a brief introduction.
#
root@:26257/defaultdb>

```

Run some basic SQL queries

```
root@:26257/defaultdb> CREATE DATABASE bank;
root@:26257/defaultdb> CREATE TABLE bank.accounts (id INT PRIMARY KEY, balance
DECIMAL);
root@:26257/defaultdb> INSERT INTO bank.accounts VALUES (1, 1000.50);
root@:26257/defaultdb> SELECT * FROM bank.accounts;
 id | balance
-----+----------
 1 | 1000.50
(1 row)

```

Create database user with password for accessing the database using web UI

```
root@:26257/defaultdb> CREATE USER roach WITH PASSWORD 'Q7gc8rEdS';
root@:26257/defaultdb> GRANT admin TO roach;

```

We are also going to create one more database, which we will use later for running benchmark load

```
root@:26257/defaultdb> CREATE DATABASE sbtest;
root@:26257/defaultdb> \q

```

In order to access the database , check the services.

```

$ kubectl get svc
NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE
cockroachdb ClusterIP None <none> 26257/TCP,8080/TCP 5m3s
cockroachdb-public ClusterIP 10.68.5.179 <none> 26257/TCP,8080/TCP 5m3s
kubernetes ClusterIP 10.68.0.1 <none> 443/TCP 41m

```

For the demonstration purpose, we will be using NodePort for accessing the service.

In production environment either use loadbalancer or ingress services as per your requirement
Create a new node port service using the following.

```
$ cat cockroachdb-public-node-port.yaml
apiVersion: v1
kind: Service
metadata:
 name: cockroachdb-public-nodeport
 namespace: default
spec:
 ports:
- name: grpc
port: 26257
protocol: TCP
targetPort: 26257
- name: http
port: 8080
protocol: TCP
targetPort: 8080
 selector:
 app.kubernetes.io/component: database
 app.kubernetes.io/instance: cockroachdb
 app.kubernetes.io/name: cockroachdb
 sessionAffinity: None
 type: NodePort
```

Apply the nodeport service

```
$ kubectl apply -f cockroachdb-public-node-port.yaml
```

Get the services status

```
$ kubectl get svc
NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE
cockroachdb ClusterIP None <none> 26257/TCP,8080/TCP
6m57s
cockroachdb-public ClusterIP 10.68.5.179 <none> 26257/TCP,8080/TCP
6m57s
cockroachdb-public-nodeport NodePort 10.68.4.195 <none>
26257:30324/TCP,8080:31937/TCP 5s
kubernetes ClusterIP 10.68.0.1 <none> 443/TCP 43m
```

Verify that the cockroachDB Dashboard is accessible using web interface

```
https://<any_node_external-ip>:<NodePort>

```

Example:

```
https://35.224.42.110:31937

```

Login credentials for the web UI

Username: roach

Password: Q7gc8rEdS

![Access12](assets/data/cockroach-workload/images/12.jpg)
