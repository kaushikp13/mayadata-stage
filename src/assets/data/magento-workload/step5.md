### Installing Magento

In this section, we will install Magento using the Helm chart from the Bitnami Helm chart repository.

#### Add Bitnami Helm repository

First, add Bitnami repository to your local Helm repositories list:

```
$ helm repo add bitnami https://charts.bitnami.com
```

#### Install Magento using Helm

We will use RWX storage for Magento, therefore we need to set related storage classes as `openebs-rwx`. For Elasticsearch and MariaDB the default cStor based storage class `cstorsc-ccyur` will be used.

Create namespace for Magento application.

``` 
$ kubectl create ns magento
$ helm repo update
```

The following command directly used required Magento parameters in the helm command. If you need to use through values.yaml, it can be downloaded from here and update the required parameter change.

```
$ helm install  my-magento -n magento --set magentoUsername=admin,magentoPassword=password123,mariadb.rootUser.password=secretpassword123,mariadb.auth.password=mariapassword123,persistence.storageClass=openebs-rwx,metrics.enabled=true,persistence.accessMode=ReadWriteMany,volumePermissions.enabled=true,magentoMode=production bitnami/magento
```

**Note 1:** Ensure the Prometheus operator is already installed in your cluster if you are enabling metrics for Magento. If Prometheus is not installed and Metrics is enabled for magento, then the installation of Magento will fail. The steps for Prometheus operator installation can be obtained from here.

**Note 2:** Ensure all required ports for Magento installation are open. For this demonstration purpose, we have allowed the `source` as `Anywhere` for `Inbound` traffic in `ClusterSharedNodeSecurityGroup` of this cluster to allow the communication between nodes in EC2-> Security Groups section. In EKS, if you didn’t allow the above mentioned traffic, Magento installation can be failed.

**Note 3:** Ensure NFS client utilities are already installed prior to above Magento installation.
   
Once you apply the above command, it will display execution on some commands in the output. Copy and paste the mentioned commands in your cluster.

##### Sample output:

```
NAME: my-magento
LAST DEPLOYED: Thu Apr 22 12:08:18 2021
NAMESPACE: magento
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
###############################################################################
### ERROR: You did not provide an external host in your 'helm install' call ###
###############################################################################
```

This deployment will be incomplete until you configure Magento with a resolvable
host. To configure Magento with the URL of your service:
 
1. Get the Magento URL by running:

``` 
  NOTE: It may take a few minutes for the LoadBalancer IP to be available.
        Watch the status with: 'kubectl get svc --namespace magento -w my-magento'
 
  export APP_HOST=$(kubectl get svc --namespace magento my-magento --template "{{ range (index .status.loadBalancer.ingress 0) }}{{ . }}{{ end }}")
  export APP_PASSWORD=$(kubectl get secret --namespace magento my-magento -o jsonpath="{.data.magento-password}" | base64 --decode)
  export DATABASE_ROOT_PASSWORD=$(kubectl get secret --namespace magento my-magento-mariadb -o jsonpath="{.data.mariadb-root-password}" | base64 --decode)
  export APP_DATABASE_PASSWORD=$(kubectl get secret --namespace magento my-magento-mariadb -o jsonpath="{.data.mariadb-password}" | base64 --decode)
```
 
2. Complete your Magento deployment by running:

``` 
  helm upgrade my-magento bitnami/magento \
    --set magentoHost=$APP_HOST,magentoPassword=$APP_PASSWORD,mariadb.auth.rootPassword=$DATABASE_ROOT_PASSWORD,mariadb.auth.password=$APP_DATABASE_PASSWORD
```

Check if the ElasticSearch and MariaDB applications are running successfully.

```
$ kubectl get pod -n magento
 
NAME                                                         READY   STATUS    RESTARTS   AGE
my-magento-elasticsearch-coordinating-only-d546b5ccb-znmm4   1/1     Running   0          4m4s
my-magento-elasticsearch-data-0                              1/1     Running   0          4m4s
my-magento-elasticsearch-master-0                            1/1     Running   0          4m4s
my-magento-mariadb-0                                         1/1     Running   0          4m4s
```

The following commands are needed to execute. This commands will be displayed in the output once the above Magento installation command has been executed.

```
$ export APP_HOST=$(kubectl get svc --namespace magento my-magento --template "{{ range (index .status.loadBalancer.ingress 0) }}{{ . }}{{ end }}")
 
$ export APP_PASSWORD=$(kubectl get secret --namespace magento my-magento -o jsonpath="{.data.magento-password}" | base64 --decode)
 
$ export DATABASE_ROOT_PASSWORD=$(kubectl get secret --namespace magento my-magento-mariadb -o jsonpath="{.data.mariadb-root-password}" | base64 --decode)
 
$ export APP_DATABASE_PASSWORD=$(kubectl get secret --namespace magento my-magento-mariadb -o jsonpath="{.data.mariadb-password}" | base64 --decode)
```
 
Once the above commands executed successfully, upgrade the Magento helm package using the following command. 
 
```
$ helm upgrade my-magento -n magento --set magentoUsername=admin,magentoHost=$APP_HOST,magentoPassword=$APP_PASSWORD,mariadb.auth.rootPassword=$DATABASE_ROOT_PASSWORD,mariadb.auth.password=$APP_DATABASE_PASSWORD,persistence.storageClass=openebs-rwx,persistence.accessMode=ReadWriteMany,metrics.enabled=true,volumePermissions.enabled=true bitnami/magento
```

##### Sample output:
 
Release "my-magento" has been upgraded. Happy Helming!

```
NAME: my-magento
LAST DEPLOYED: Mon May 10 16:12:27 2021
NAMESPACE: magento
STATUS: deployed
REVISION: 2
TEST SUITE: None
```

NOTES:
1. Get the Magento URL by running:
 
```
  echo "Store URL: http://a09bf0368ea7e42c58caad99d8f29b75-2085977010.ap-south-1.elb.amazonaws.com:8080/"
  echo "Admin URL: http://a09bf0368ea7e42c58caad99d8f29b75-2085977010.ap-south-1.elb.amazonaws.com:8080/"
```
 
2. Get your Magento login credentials by running:

``` 
  echo Username : admin
  echo Password : $(kubectl get secret --namespace magento my-magento -o jsonpath="{.data.magento-password}" | base64 --decode)
```

#### Verify Magento Pods

``` 
$ kubectl get pod -n magento
 
NAME                                                         READY   STATUS    RESTARTS   AGE
my-magento-5cdb45779-4gv5t                                   2/2     Running   0          45m
my-magento-elasticsearch-coordinating-only-d546b5ccb-znmm4   1/1     Running   0          48m
my-magento-elasticsearch-data-0                              1/1     Running   0          48m
my-magento-elasticsearch-master-0                            1/1     Running   0          48m
my-magento-mariadb-0                                         1/1     Running   0          48m
``` 
 
 
#### Verify Magento PVCs

```
$ kubectl get pvc -n magento

NAME                                     STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS    AGE
data-my-magento-elasticsearch-data-0     Bound    pvc-e8f8c8a4-5f44-4c3f-9999-62ba31aaf11b   8Gi        RWO            cstorsc-jaavc   5m39s
data-my-magento-elasticsearch-master-0   Bound    pvc-112f006e-4e5a-4f7f-a027-84ba2fe6db15   8Gi        RWO            cstorsc-jaavc   5m39s
data-my-magento-mariadb-0                Bound    pvc-99ee9c8d-7219-4a96-adaa-ec3f87adc88b   8Gi        RWO            cstorsc-jaavc   5m39s
my-magento-magento                       Bound    pvc-e290a4a3-d3f8-4bdc-b527-50610318d373   8Gi        RWX            openebs-rwx     5m39s
```

#### Verify Magento and other PVs

```
$ kubectl get pv

NAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                                                  STORAGECLASS    REASON   AGE
pvc-01ce0f5b-4a28-4df1-84a3-9ac44cfcd0c8   2Gi        RWO            Delete           Bound    maya-system/queue-data-octane-collector-0              gp2                      75m
pvc-112f006e-4e5a-4f7f-a027-84ba2fe6db15   8Gi        RWO            Delete           Bound    magento/data-my-magento-elasticsearch-master-0         cstorsc-jaavc            5m55s
pvc-8c0a4c00-b691-4018-a575-2dc2e3a330d6   8Gi        RWO            Delete           Bound    openebs/nfs-pvc-e290a4a3-d3f8-4bdc-b527-50610318d373   cstorsc-jaavc            5m55s
pvc-99ee9c8d-7219-4a96-adaa-ec3f87adc88b   8Gi        RWO            Delete           Bound    magento/data-my-magento-mariadb-0                      cstorsc-jaavc            5m55s
pvc-e290a4a3-d3f8-4bdc-b527-50610318d373   8Gi        RWX            Delete           Bound    magento/my-magento-magento                             openebs-rwx              5m55s
pvc-e8f8c8a4-5f44-4c3f-9999-62ba31aaf11b   8Gi        RWO            Delete           Bound    magento/data-my-magento-elasticsearch-data-0           cstorsc-jaavc            5m55s
```

#### Verify Magento Services

```
$ kubectl get svc -n magento

NAME                                         TYPE           CLUSTER-IP      EXTERNAL-IP                                                                PORT(S)                         AGE
my-magento                                   LoadBalancer   10.100.238.1    a09bf0368ea7e42c58caad99d8f29b75-2085977010.ap-south-1.elb.amazonaws.com   8080:31649/TCP,8443:32279/TCP   6m7s
my-magento-elasticsearch-coordinating-only   ClusterIP      10.100.126.84   <none>                                                                     9200/TCP,9300/TCP               6m7s
my-magento-elasticsearch-data                ClusterIP      10.100.29.142   <none>                                                                     9200/TCP,9300/TCP               6m7s
my-magento-elasticsearch-master              ClusterIP      10.100.148.68   <none>                                                                     9200/TCP,9300/TCP               6m7s
my-magento-mariadb                           ClusterIP      10.100.96.189   <none>                                                                     3306/TCP                        6m7s
my-magento-metrics                           ClusterIP      10.100.86.209   <none>                                                                     9117/TCP                        6m7s
```

#### Accessing to your Magento Store

Get the Magento URL by running:

```
$ helm status my-magento -n magento
```

Helm status will return your store URL, Admin URL, username and password to connect in the notes section similar to below:

```
 echo "Store URL: http://a09bf0368ea7e42c58caad99d8f29b75-2085977010.ap-south-1.elb.amazonaws.com:8080/"
  echo "Admin URL: http://a09bf0368ea7e42c58caad99d8f29b75-2085977010.ap-south-1.elb.amazonaws.com:8080/admin"

echo Username: admin
echo Password:  $(kubectl get secret --namespace magento my-magento -o jsonpath="{.data.magento-password}" | base64 --decode)
```

Use this URL in your web browser and the login to the admin console by providing credentials.

pen admin URL and login using the credentials above. It should look similar to below:

![magento_24](assets/data/magento-workload/images/24.png)

![magento_25](assets/data/magento-workload/images/25.png)

The above is a sample homepage of Admin. 

![magento_26](assets/data/magento-workload/images/26.png)

The above is a sample homepage of the User console.
