### Installing Kibana 

First, add helm repository of Elastic

```
$ helm repo add elastic https://helm.elastic.co & helm repo update
```


Install Kibana deployment using helm command. Ensure to meet required prerequisites corresponding to your helm version. Fetch the Kibana values.yaml:

```
$ wget https://raw.githubusercontent.com/elastic/helm-charts/master/kibana/values.yaml
```


Edit the following parameters:

- edit `elasticsearchHosts` as "http://elastic-coordinator-hs:9200" # service name of Elastic search
- edit `service.type` as "NodePort"
- edit `service.nodePort` as "30295"  # since this port is already added in firewall rules.
- edit `imageTag` as "7.7.1"  # it should be the same image tag of ElasticSearch. In our case, both ElasticSearch image tag is 7.7.1

Now install Kibana using Helm:

```
$ helm install --name kibana -f values.yaml elastic/kibana 
```

### Verifying Kibana Pods and Services:

```
$ kubectl get pod
NAME                             READY   STATUS    RESTARTS   AGE
elastic-coordinator-0            1/1     Running   0          8h
elastic-data-0                   1/1     Running   0          8h
elastic-data-1                   1/1     Running   0          8h
elastic-master-0                 1/1     Running   0          8h
elastic-master-1                 1/1     Running   0          8h
elastic-master-2                 1/1     Running   0          8h
kibana-kibana-796b8ff979-h9j79   1/1     Running   0          20s
```

```
$ kubectl get svc
NAME                     TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)          AGE
elastic-coordinator-hs   ClusterIP   None         <none>        9200/TCP         8h
elastic-data-hs          ClusterIP   None         <none>        9200/TCP         8h
elastic-ingest-hs        ClusterIP   None         <none>        9200/TCP         8h
elastic-master-hs        ClusterIP   None         <none>        9200/TCP         8h
kibana-kibana            NodePort    10.8.2.244   <none>        5601:30295/TCP   18s
kubernetes               ClusterIP   10.8.0.1     <none>        443/TCP          9h
```


### Accessing Kibana dashboard

Verify Kibana service is accessing over web using `<any_node_external-ip>:<NodePort>`

Example:

```
http://34.67.160.246:30295/
```