### Get Started

In this section, we will install the KUDO operator for Apache Cassandra.

### Prerequisites for KUDO

You need go utility to be installed in your setup. Install go utility in your environment if it is not installed.


Ensure the following ENV variable are set correctly:

```
GOROOT
GOPATH
PATH
```

The above ENV variables have been configured in our setup using the following way:

```
$ export GOROOT=/usr/local/go
$ export GOPATH=$HOME/gopath
$ export PATH=$GOPATH/bin:$GOROOT/bin:$PATH
```

Sample command and output:

```
$ echo $GOROOT
/usr/local/go
```

```
$ echo $GOPATH
/home/username/gopath
```

```
$ echo $PATH
/home/username/gopath/bin:/google/gopath/bin:/home/username/.gems/bin:/usr/local/go/bin:/opt/gradle/bin:/opt/maven/bin:/google/google-cloud-sdk/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/local/nvm/versions/node/v10.14.2/bin:/google/go_appengine:/google/google_appengine:/google/migrate/anthos/
```

Use  the latest stable version of KUDO CLI. KUDO v0.14.0 was the latest stable version when we update this article last time. The same version will be used for installing KUDO server as well. The latest version of KUDO can be checked from [here](https://github.com/kudobuilder/kudo/releases). 

### Assign the variables
```
$ VERSION=0.14.0
$ OS=$(uname | tr '[:upper:]' '[:lower:]')
$ ARCH=$(uname -m)

$ wget -O kubectl-kudo https://github.com/kudobuilder/kudo/releases/download/v${VERSION}/kubectl-kudo_${VERSION}_${OS}_${ARCH}

$chmod +x kubectl-kudo
```

### Add to your path

```
$ sudo mv kubectl-kudo /usr/local/bin/kubectl-kudo
```

Verify if KUDO CLI is installed

```
$ kubectl-kudo version

KUDO Version: version.Info{GitVersion:"0.14.0", GitCommit:"5a542514", BuildDate:"2020-06-05T20:24:26Z", GoVersion:"go1.14.3", Compiler:"gc", Platform:"linux/amd64"}
```

### Verify if cert-manager is installed

Before installing the KUDO operator, the cert-manager must be already installed in your cluster. If not, install the cert-manager.
The instruction can be found from [here](https://cert-manager.io/docs/installation/kubernetes/#installing-with-regular-manifests). Since our K8s version is v1.16.0, we have installed cert-manager using the following command.

```
$ kubectl apply --validate=false -f https://github.com/jetstack/cert-manager/releases/download/v0.15.1/cert-manager.yaml
```


### Installing KUDO into cluster

Once prerequisites are installed, you will need to initialize the KUDO operator. The following command will install KUDO v0.14.0.

```
$ kubectl-kudo init --version 0.14.0

$KUDO_HOME has been configured at /root/.kudo
✅ installed crds
✅ installed namespace
✅ installed service account
✅ installed webhook
✅ installed kudo controller
```

Verify pods in the `kudo-system` namespace:

```
$ kubectl get pod -n kudo-system

NAME                        READY   STATUS    RESTARTS   AGE
kudo-controller-manager-0   1/1     Running   0          2m40s
```

## Installing the Cassandra Operator

The following command installs a KUDO Cassandra operator instance named **cassandra-openebs** in the **cassandra** namespace. Omitting the `--namespace` parameter will cause the instance to be installed in the **default** namespace, and omitting the `--instance` parameter will cause the instance name to be **cassandra**. If providing a namespace, make sure it exists.

Set instance and namespace variables:

```
$ export instance_name=cassandra-openebs
$ export namespace_name=cassandra
```

Create the namespace for Cassandra

```
$ kubectl create ns cassandra
```

Install Cassandra operator with KUDO:

```
$ kubectl kudo install cassandra --namespace=$namespace_name --instance $instance_name -p NODE_STORAGE_CLASS=openebs-device

operator cassandra/cassandra created
operatorversion cassandra/cassandra-1.0.0 created
instance cassandra/cassandra-openebs created
```
