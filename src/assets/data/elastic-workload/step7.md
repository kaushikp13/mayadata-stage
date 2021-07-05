### Installing Fluentd-ES

Fetch the values.yaml:
```
$ wget https://raw.githubusercontent.com/bitnami/charts/master/bitnami/fluentd/values.yaml
$ helm repo add bitnami https://charts.bitnami.com/bitnami & helm repo update
```

Replace the following section in the values.yaml file with new content:
Old:   
     # Send the logs to the standard output
      <match **>
        @type stdout
      </match>
New:
      # Send the logs to the elasticsearch output
      <match **>
        @type elasticsearch
        include_tag_key true
        host elastic-coordinator-hs
        port 9200
        logstash_format true

        <buffer>
          @type file
          path /opt/bitnami/fluentd/logs/buffers/logs.buffer
          flush_thread_count 2
          flush_interval 5s
        </buffer>
      </match>

Install Fluentd- ElasticSearch DaemonSet using the new values:

```
$ helm install fluentd -f values.yaml bitnami/fluentd

```

Verify Fluentd Daemonset, Pods and Services:

```
$ kubectl get ds
NAME      DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
fluentd   3         3         3       3            3           <none>          74m

```

```
$ kubectl get pod
NAME                                 READY   STATUS    RESTARTS   AGE
pod/elastic-coordinator-0            1/1     Running   0          67m
pod/elastic-data-0                   1/1     Running   0          66m
pod/elastic-data-1                   1/1     Running   0          67m
pod/elastic-master-0                 1/1     Running   0          66m
pod/elastic-master-1                 1/1     Running   0          66m
pod/elastic-master-2                 1/1     Running   0          66m
pod/fluentd-0                        1/1     Running   0          6m5s
pod/fluentd-4sbs4                    1/1     Running   2          6m5s
pod/fluentd-5mvv9                    1/1     Running   2          6m5s
pod/fluentd-z2sxt                    1/1     Running   2          6m5s
pod/kibana-kibana-74cbc4d654-h8djr        1/1     Running   0          9m46s

```

### Getting logs from the indices

1. Goto Kibana dashboard.
2. Click on `Management` which is placed at left side bottom most.
3. Click on `index patterns` listed under `Kibana` and then click on `Create Index pattern`.
4. Provide `logstash-*` inside the index pattern box and then select `Next` step.
5. In the next step, inside the `Time Filter field name`, select the `@timestamp` field from the dropdown menu, and click `Create index pattern`.
6. Now click on the `Discover` button listed on the top left of side menu bar.
7. There will be a dropdown menu where you can select the available indices. In this case, select the indices created in the above step.
8. In this case, you have to select `logstash-*` from the dropdown menu.
9. Now let's do some test: If you want to get the logs of NDM pods, type the following text inside the Filters field.
    `kubernetes.labels.openebs_io/component-name.keyword : "ndm"` and then choose the required date and time period. After that, click `Apply`.
10. You will see the ndm pod logs listed on the page.

![fluented_1](assets/data/elastic-workload/images/fluented_1.png)

