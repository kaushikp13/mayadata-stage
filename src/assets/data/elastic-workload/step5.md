### Install Elastic - Get Elastic Up and Running

In this section, we will install the Elastic operator using KUDO.

`Installing Kudo Elastic operator`
##### Set instance and namespace variables:
```
$ export instance_name=elastic
$ export namespace_name=default

$ kubectl-kudo install elastic --namespace=$namespace_name --instance $instance_name
operator default/elastic created
operatorversion default/elastic-7.0.0-0.2.1 created
instance default/elastic created

```

##### Verifying Elastic pods

```
$ kubectl get pods -n $namespace_name
NAME                    READY   STATUS    RESTARTS   AGE
elastic-coordinator-0   1/1     Running   0          31s
elastic-data-0          1/1     Running   0          56s
elastic-data-1          1/1     Running   0          44s
elastic-master-0        1/1     Running   0          2m31s
elastic-master-1        1/1     Running   0          119s
elastic-master-2        1/1     Running   0          90s
```

##### Verifying Services

```
$ kubectl get svc -n $namespace_name
NAME                     TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)    AGE
elastic-coordinator-hs   ClusterIP   None         <none>        9200/TCP   62s
elastic-data-hs          ClusterIP   None         <none>        9200/TCP   87s
elastic-ingest-hs        ClusterIP   None         <none>        9200/TCP   50s
elastic-master-hs        ClusterIP   None         <none>        9200/TCP   3m2s
kubernetes               ClusterIP   10.48.0.1    <none>        443/TCP    5h18m
```

##### Verifying Elastic instance status

```
$ kubectl kudo plan status --namespace=$namespace_name \
 --instance $instance_name
Plan(s) for "elastic" in namespace "default":
.
└── elastic (Operator-Version: "elastic-7.0.0-0.2.1" Active-Plan: "deploy")
    └── Plan deploy (serial strategy) [COMPLETE], last updated 2021-02-22 16:18:17
        ├── Phase deploy-master (parallel strategy) [COMPLETE]
        │   └── Step deploy-master [COMPLETE]
        ├── Phase deploy-data (parallel strategy) [COMPLETE]
        │   └── Step deploy-data [COMPLETE]
        ├── Phase deploy-coordinator (parallel strategy) [COMPLETE]
        │   └── Step deploy-coordinator [COMPLETE]
        └── Phase deploy-ingest (parallel strategy) [COMPLETE]
            └── Step deploy-ingest [COMPLETE]
```

We have upgraded all elastic StatefulSets images to elasticsearch:7.10.1 from elasticsearch:7.0.0. You can find the latest release of ElasticSearch from [here](https://www.docker.elastic.co/).


#### Accessing Elastic instance

##### Enter into one of the master pod using exec command:

```
$ kubectl exec -it elastic-master-0 -- bash
[root@elastic-master-0 elasticsearch]#
```

##### Run below command inside Elastic master pod:
```
$ curl -X POST "elastic-coordinator-hs:9200/twitter/_doc/" -H 'Content-Type: application/json' -d'
 {
     "user" : "openebs",
     "post_date" : "2021-03-02T14:12:12",
     "message" : "Test data entry"
 }
 '
{"_index":"twitter","_type":"_doc","_id":"LoliyXcBg9iVzVnOj5QL","_version":1,"result":"created","_shards":{"total":2,"successful":1,"failed":0},"_seq_no":0,"_primary_term":1}[root@elastic-master-0 elasticsearch]#
```

##### Get test results for the above test:
```
$ curl -X GET "elastic-coordinator-hs:9200/twitter/_search?q=user:openebs&pretty"
```

##### Get the details of ElasticSearch cluster:
```
$  curl localhost:9200
{
  "name" : "elastic-master-0",
  "cluster_name" : "elastic-cluster",
  "cluster_uuid" : "A0qErYmCS2OpJtmgR_j3ow",
  "version" : {
    "number" : "7.10.1",
    "build_flavor" : "default",
    "build_type" : "docker",
    "build_hash" : "1c34507e66d7db1211f66f3513706fdf548736aa",
    "build_date" : "2020-12-05T01:00:33.671820Z",
    "build_snapshot" : false,
    "lucene_version" : "8.7.0",
    "minimum_wire_compatibility_version" : "6.8.0",
    "minimum_index_compatibility_version" : "6.0.0-beta1"
  },
  "tagline" : "You Know, for Search"
}
```