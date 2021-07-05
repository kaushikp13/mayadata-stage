### Installing KUDO Operator

In this section, we will install the KUDO operator. We will later deploy the latest available version of elasticsearch applications through KUDO operator. Check the [release](https://github.com/kudobuilder/kudo/releases) section for getting the latest Kudo version.

You need **`go`** utility to be installed in your setup as a prerequisite. Install go utility in your environment if it is not installed.

##### Check the version of Go using the following command:
```
$ go version
go version go1.15.7 linux/amd64
```

##### Ensure the following ENV variable are set correctly:

- GOROOT
- GOPATH
- PATH


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
/home/k8s/gopath
$ echo $PATH
/home/k8s/maya/elastic/es-mon/google-cloud-sdk/bin:/home/k8s/gopath/bin:/usr/local/go/bin:/home/k8s/.local/bin:/home/k8s/bin:/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin

```

Use the latest stable version of KUDO CLI. KUDO v0.18.2 was the latest stable version when we updated this article. The same version will be used for installing KUDO server as well. The latest version of KUDO can be checked from here.


```
$ VERSION=0.18.2
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
KUDO Version: version.Info{GitVersion:"0.18.2", GitCommit:"43929950", BuildDate:"2021-01-20T08:26:44Z", GoVersion:"go1.13.4", Compiler:"gc", Platform:"linux/amd64", KubernetesClientVersion:"v0.19.2"}
```


### Verify if Cert-manager is installed

For installing KUDO operator, the Cert-manager must be already installed in your cluster. If not, install the Cert-manager. The instruction can be found from here. Since our K8s version is v1.18.12, we have installed Cert-manager using the following command.

```
$ kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v1.2.0/cert-manager.yaml
```

```
$ kubectl get pods --namespace cert-manager
NAME                                      READY   STATUS    RESTARTS   AGE
cert-manager-7747db9d88-7qjnm             1/1     Running   0          81m
cert-manager-cainjector-87c85c6ff-whnzr   1/1     Running   0          81m
cert-manager-webhook-64dc9fff44-qww8s     1/1     Running   0          81m
```

### Installing KUDO operator into cluster

Once prerequisites are installed you will need to initialize the KUDO operator. The following command will install KUDO v0.18.0.

```
$ kubectl-kudo init --version 0.18.2
$KUDO_HOME has been configured at /home/k8s/.kudo
- installed crds
- installed namespace
- installed service account
- installed webhook
- installed kudo controller
```


##### Verify pods in the `kudo-system` namespace:

```
$ kubectl get pod -n kudo-system
NAME                        READY   STATUS    RESTARTS   AGE
kudo-controller-manager-0   1/1     Running   0          25s
```

#### Setting OpenEBS Storage Class as default

Change the default storage class from your current setting to OpenEBS LocalPV Device. For example, in this tutorial default storage class is used as **`openebs-device`** from **`standard`**.

```
$ kubectl patch storageclass standard -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}'

$ kubectl patch storageclass openebs-device -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'
```

##### Verify default Storage Class
 
List the storage classes and verify openebs-device is set to default.

```
$ kubectl get sc
NAME                        PROVISIONER                                                RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
openebs-device (default)    openebs.io/local                                           Delete          WaitForFirstConsumer   false                  4h30m
openebs-hostpath            openebs.io/local                                           Delete          WaitForFirstConsumer   false                  4h30m
openebs-jiva-default        openebs.io/provisioner-iscsi                               Delete          Immediate              false                  4h30m
openebs-snapshot-promoter   volumesnapshot.external-storage.k8s.io/snapshot-promoter   Delete          Immediate              false                  4h30m
premium-rwo                 pd.csi.storage.gke.io                                      Delete          WaitForFirstConsumer   true                   5h13m
standard                    kubernetes.io/gce-pd                                       Delete          Immediate              true                   5h13m
standard-rwo                pd.csi.storage.gke.io                                      Delete          WaitForFirstConsumer   true                   5h13
```
