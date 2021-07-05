## Monitor your Prometheus Instance

Verify Prometheus service is accessing over web using
`<any_node_external-ip>:<Prometheus_SVC_NodePort>`

Example:

[http://35.193.112.228:32702/](http://35.193.112.228:32702/)


Launch Grafana using Node External IP of with corresponding nodeport of prometheus-grafana service

`<any_node_external-ip>:<Grafana_SVC_NodePort>`

Example:

[http://35.193.112.228:32701/](http://35.193.112.228:32701/)


Grafana Credentials

```
Username: admin
Password: prom-operator
```


Password can be get using the command

```
(kubectl get secret \
    --namespace monitoring prometheus-grafana \
    -o jsonpath="{.data.admin-password}" \
    | base64 --decode ; echo
)
```


Download the Prometheus dashboard from the following location.

[https://raw.githubusercontent.com/FUSAKLA/Prometheus2-grafana-dashboard/master/dashboard/prometheus2-dashboard.json](https://raw.githubusercontent.com/FUSAKLA/Prometheus2-grafana-dashboard/master/dashboard/prometheus2-dashboard.json)


Goto + sign in the Grafana console and click Import. Then paste the downloaded `prometheus2-dashboard.json` file into the form. Then Load it. In the next page, select **Prometheus** as a data source against the Prometheus data field and then import it.

The other way to monitor Prometheus Operator is by using the inbuilt Prometheus dashboard. This can be obtained by searching on the Grafana dashboard and finding the ` Prometheus` dashboard under the General category.
