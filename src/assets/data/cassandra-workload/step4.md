## Cassandra up and running

Let’s check if the Cassandra pods are up and running.

### Verifying Cassandra pods status

```
$ kubectl get pod -n cassandra

NAME                                    READY   STATUS    RESTARTS   AGE
cassandra-openebs-node-0   2/2          Running     0                   10m
cassandra-openebs-node-1   2/2          Running     0                   9m2s
cassandra-openebs-node-2   2/2          Running     0                   8m24s
```

### Verify Database health

Login to one of the Cassandra pod.

```
$ kubectl exec -it cassandra-openebs-node-0 bash -n cassandra
```

```
# nodetool status
Datacenter: datacenter1
=======================
Status=Up/Down
|/ State=Normal/Leaving/Joining/Moving
--  Address         Load       Tokens       Owns (effective)  Host ID                               Rack
UN  192.168.42.154  69.98 KiB  256          68.6%             ccbcd58b-0e35-48f6-bffe-d6e3f9c9f737  rack1
UN  192.168.20.126  103.7 KiB  256          66.3%             a9051cd3-5001-408d-ae25-1b79c9ef070a  rack1
UN  192.168.77.85   103.67 KiB  256          65.1%             7b0930b4-769b-44eb-a06d-f65ab18ce165  rack1


# cqlsh --version
cqlsh 5.0.1
```

### Accessing Cassandra database

Run following command from a cassandra pod

```
$ cqlsh <svc-name>.<namespace>.svc.cluster.local
```

Example command:

```
$ cqlsh cassandra-openebs-svc.cassandra.svc.cluster.local
```

Sample output:

```
Warning: Cannot create directory at `/home/cassandra/.cassandra`. Command history will not be saved.

Connected to cassandra-openebs at cassandra-openebs-svc.cassandra.svc.cluster.local:9042.
[cqlsh 5.0.1 | Cassandra 3.11.5 | CQL spec 3.4.4 | Native protocol v4]
Use HELP for help.

cqlsh>
```

Now, let’s create a Keyspace and add a table with some entries into it.

Creating a Keyspace

```
$ cqlsh> create keyspace dev
   ... with replication = {'class':'SimpleStrategy','replication_factor':1};
```

Creating Data Objects

```
$ cqlsh> use dev;
$ cqlsh:dev> create table emp (empid int primary key,
       ... emp_first varchar, emp_last varchar, emp_dept varchar);
```

Inserting and Querying Data

```
$ cqlsh:dev> insert into emp (empid, emp_first, emp_last, emp_dept)
       ... values (1,'fred','smith','eng');

$ cqlsh:dev> select * from emp;
 empid | emp_dept | emp_first | emp_last
-------+----------+-----------+----------
     1 |      eng |      fred |    smith
(1 rows)
```

Updating the Data in a Table

```
$ cqlsh:dev> update emp set emp_dept = 'fin' where empid = 1;
$ cqlsh:dev> select * from emp;

 empid | emp_dept | emp_first | emp_last
-------+----------+-----------+----------
     1 |      fin |      fred |    smith
(1 rows)
```

#### Sample Load Generation

Login to one of the cassandra pod

```
$ kubectl exec -it cassandra-openebs-node-0 bash -n cassandra
```

Get the cassandra node status

```
$ nodetool status
Datacenter: datacenter1
=======================
Status=Up/Down
|/ State=Normal/Leaving/Joining/Moving
--  Address        Load       Tokens       Owns (effective)  Host ID                               Rack
UN  192.168.52.94  135.39 MiB  256          32.6%             68206664-b1e7-4e73-9677-14119536e42d  rack1
UN  192.168.7.79   189.98 MiB  256          36.3%             5f6176f5-c47f-4d12-bd16-c9427baf68a0  rack1
UN  192.168.70.87  127.46 MiB  256          31.2%             da31ba66-42dd-4c85-a212-a0cb828bbefb  rack1
```
Now, change the directory where `cassandra-stress` binary file is located. The following command will go to the exact location.

```
cd $CASSANDRA_HOME/tools/bin/
```

Run Write load 

```
$ cassandra@cassandra-openebs-node-0:/opt/cassandra/tools/bin$ ./cassandra-stress write n=1000000 -rate threads=50 -node 192.168.52.94
```

Run Read Load

```
$ cassandra@cassandra-openebs-node-0:/opt/cassandra/tools/bin$ ./cassandra-stress read n=200000 -rate threads=50 -node 192.168.52.94
```

Verifying ServiceMonitor

By default, a ServiceMonitor has been installed for monitoring Cassandra services for Prometheus. But to get the metrics by Prometheus, we need to edit the default label for pre built ServiceMonitor. The following will overwrite existing labels to get the metrics by Prometheus. Since we have installed the Prometheus operator using Helm, it will fetch for all ServiceMonitors using a `labelSelector` as `release: prometheus`. 

```
$ kubectl label servicemonitor cassandra-openebs-monitor -n cassandra release=prometheus --overwrite
```
