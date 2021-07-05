## Installing KUDO Operator

In this section, we will install the KUDO operator. We will later deploy the latest available version of Zookeeper and Kafka applications through KUDO operator. Check the [release](https://github.com/kudobuilder/kudo/releases) section for getting the latest Kudo version.
You need **`go`** utility to be installed in your setup as a prerequisite. Install go utility in your environment if it is not installed.

##### Check the version of Go using the following command:

```
$ go version
go version go1.15.6 linux/amd64
```

##### Ensure the following ENV variable are set correctly:

```
GOROOT
GOPATH
PATH
```

##### The above environments have been configured in our setup using the following way:

```
$ export GOROOT=/usr/local/go
$ export GOPATH=$HOME/gopath
$ export PATH=$GOPATH/bin:$GOROOT/bin:$PATH
```

##### The following is a sample output to verify the configured ENV variables:

```
$ echo $GOROOT
/usr/local/go
$ echo $GOPATH
/home/mynode/gopath
$ echo $PATH
/home/mynode/gopath/bin:/usr/local/go/bin:/usr/local/go/bin:/opt/gradle/bin:/opt/maven/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/local/nvm/versions/node/v10.17.0/bin:/usr/local/rvm/bin:/google/go_appengine:/google/google_appengine:/google/migrate/anthos/:/home/mynode/.gems/bin:/usr/local/rvm/bin:/home/mynode/gopath/bin:/google/gopath/bin

```

Use the latest stable version of KUDO CLI. KUDO v0.18.0 was the latest stable version when we updated this article. The same version will be used for installing KUDO server as well. The latest version of KUDO can be checked from [here](https://github.com/kudobuilder/kudo/releases).

```
$ VERSION=0.18.0
$ OS=$(uname | tr '[:upper:]' '[:lower:]')
$ ARCH=$(uname -m)
$ wget -O kubectl-kudo https://github.com/kudobuilder/kudo/releases/download/v${VERSION}/kubectl-kudo_${VERSION}_${OS}_${ARCH}
$ chmod +x kubectl-kudo

```
Now, add the downloaded kubectl-kudo binary to your path.
```
$ sudo mv kubectl-kudo /usr/local/bin/kubectl-kudo
```

##### Verify the version of kubectl-kudo CLI using the following command:

```
$ kubectl-kudo version
KUDO Version: version.Info{GitVersion:"0.18.0", GitCommit:"63fbe531", BuildDate:"2021-01-14T14:10:11Z", GoVersion:"go1.15.5", Compiler:"gc", Platform:"linux/amd64", KubernetesClientVersion:"v0.19.2"}
```

##### Verify if Cert-manager is installed

For installing KUDO operator, the Cert-manager must be already installed in your cluster. If not, install the Cert-manager. The instruction can be found from [here](https://cert-manager.io/docs/installation/kubernetes/#installing-with-regular-manifests). Since our K8s version is v1.17.0, we have installed Cert-manager using the following command.

```
$ kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v1.1.0/cert-manager.yaml
```

Verify that all cert-manager pods are installed successfully.
 
```
$ kubectl get pods --namespace cert-manager
 
NAME                                      READY   STATUS    RESTARTS   AGE
cert-manager-64887fb9d6-tv984             1/1     Running   0          3h2m
cert-manager-cainjector-99977ff45-dwrmz   1/1     Running   0          3h2m
cert-manager-webhook-64c5d4c9db-zv66x     1/1     Running   0          3h2m
```

### Installing KUDO operator into cluster

Once prerequisites are installed you will need to initialize the KUDO operator. The following command will install KUDO v0.18.0.

```
$ kubectl-kudo init --version 0.18.0
$KUDO_HOME has been configured at /home/mynode/.kudo
✅ installed crds
✅ installed namespace
✅ installed service account
✅ installed webhook
✅ installed kudo controller
```

##### Verify pods in the `kudo-system` namespace:

```
$ kubectl get pod -n kudo-system
 
NAME                        READY   STATUS    RESTARTS   AGE
kudo-controller-manager-0   1/1     Running   0          36s
```
 
### Installing Zookeeper

After successfully installing KUDO operator and Cert-manager, we will use KUDO to install Zookeeper Operator.

```
$ kubectl-kudo install zookeeper --instance=zookeeper-instance -p STORAGE_CLASS=openebs-device
operator default/zookeeper created
operatorversion default/zookeeper-3.4.14-0.3.1 created
instance default/zookeeper-instance created
```

##### Verify the Zookeeper pods running status:

```
$ kubectl get pod
NAME                             READY   STATUS    RESTARTS   AGE
zookeeper-instance-zookeeper-0   1/1     Running   0          20m
zookeeper-instance-zookeeper-1   1/1     Running   0          20m
zookeeper-instance-zookeeper-2   1/1     Running   0          20m
```

##### Verify PVCs created for Zookeeper pods:

```
$ kubectl get pvc
NAME                                                        STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS     AGE
zookeeper-instance-datadir-zookeeper-instance-zookeeper-0   Bound    pvc-5b061f45-76dc-4430-ae4e-3fae4848f3bc   5Gi        RWO            openebs-device   20m
zookeeper-instance-datadir-zookeeper-instance-zookeeper-1   Bound    pvc-f5c2f6ba-0ca2-4056-b379-08a365c8a814   5Gi        RWO            openebs-device   20m
zookeeper-instance-datadir-zookeeper-instance-zookeeper-2   Bound    pvc-97274e83-9154-4568-97cf-ddfa2ecb7bc3   5Gi        RWO            openebs-device   20m
```

##### Verifying Zookeeper PVs:

```
$ kubectl get pv
NAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                                                               STORAGECLASS     REASON   AGE
pvc-5b061f45-76dc-4430-ae4e-3fae4848f3bc   5Gi        RWO            Delete           Bound    default/zookeeper-instance-datadir-zookeeper-instance-zookeeper-0   openebs-device            20m
pvc-97274e83-9154-4568-97cf-ddfa2ecb7bc3   5Gi        RWO            Delete           Bound    default/zookeeper-instance-datadir-zookeeper-instance-zookeeper-2   openebs-device            20m
pvc-f5c2f6ba-0ca2-4056-b379-08a365c8a814   5Gi        RWO            Delete           Bound    default/zookeeper-instance-datadir-zookeeper-instance-zookeeper-1   openebs-device            20m
```
Also, verify the current status of the blockdevice. Three of the blockdevice should be claimed for Zookeeper pods.
```
$ kubectl get bd -n openebs
NAME                                           NODENAME                               SIZE           CLAIMSTATE   STATUS   AGE
blockdevice-3438e702b3ccf3312c75ec55c2aeabc1   gke-kafka-default-pool-a691e3fc-xr1r   107373116928   Claimed      Active   5h
blockdevice-5169c3cf271921fd824be287e6ea843b   gke-kafka-default-pool-a691e3fc-j7kh   107373116928   Unclaimed    Active   5h
blockdevice-8df5f1cde3c19b5a048af1e305bcfb5d   gke-kafka-default-pool-a691e3fc-46n9   107373116928   Unclaimed    Active   5h
blockdevice-af3a5076d46878c5ac41049bc8d53400   gke-kafka-default-pool-a691e3fc-j7kh   107373116928   Claimed      Active   5h
blockdevice-b06df60a11f0e62f91e3bb8da2ed9ad8   gke-kafka-default-pool-a691e3fc-xr1r   107373116928   Unclaimed    Active   5h
blockdevice-f07f34df09296395f900e79be4e33a70   gke-kafka-default-pool-a691e3fc-46n9   107373116928   Claimed      Active   5h
```
