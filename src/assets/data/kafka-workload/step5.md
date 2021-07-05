## Install Kafka

In this section, we will install the Kafka using KUDO.
Installing Kafka operator

```
$ kubectl-kudo install kafka --instance=kafka -p STORAGE_CLASS=openebs-device
operator default/kafka created
operatorversion default/kafka-2.5.1-1.3.3 created
instance default/kafka created
```

**Note:** Below is a list of parameters that can only be configured during bootstrap time. These storage-related parameters cannot be changed after initial deployment. So configure these values in the Kafka deployment command. More details about Kafka parameters can be found [here](https://github.com/kudobuilder/operators/blob/master/repository/kafka/operator/params.yaml).

- DISK_SIZE
- STORAGE_CLASS
- PERSISTENT_STORAGE

#### Verifying Kafka pods
The output will include the Pods of Zookeeper as well.

```
$ kubectl get pod
NAME                             READY   STATUS    RESTARTS   AGE
kafka-kafka-0                    2/2     Running   0          3m27s
kafka-kafka-1                    2/2     Running   0          2m47s
kafka-kafka-2                    2/2     Running   0          2m11s
zookeeper-instance-zookeeper-0   1/1     Running   0          25m
zookeeper-instance-zookeeper-1   1/1     Running   0          25m
zookeeper-instance-zookeeper-2   1/1     Running   0          25m
```

#### Verifying Kafka PVCs
The output will include the PVCs of Zookeeper as well.

```
$ kubectl get pvc     
NAME                                                        STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS     AGE
kafka-datadir-kafka-kafka-0                                 Bound    pvc-e541a05c-ce65-4e1f-959c-3324b0a21849   5Gi        RWO            openebs-device   2m14s
kafka-datadir-kafka-kafka-1                                 Bound    pvc-88607fe0-da45-4bf1-a595-88c5d8f9818d   5Gi        RWO            openebs-device   94s
kafka-datadir-kafka-kafka-2                                 Bound    pvc-506a9f97-6388-4a2c-9610-b01fb93f88c4   5Gi        RWO            openebs-device   58s
zookeeper-instance-datadir-zookeeper-instance-zookeeper-0   Bound    pvc-5b061f45-76dc-4430-ae4e-3fae4848f3bc   5Gi        RWO            openebs-device   24m
zookeeper-instance-datadir-zookeeper-instance-zookeeper-1   Bound    pvc-f5c2f6ba-0ca2-4056-b379-08a365c8a814   5Gi        RWO            openebs-device   24m
zookeeper-instance-datadir-zookeeper-instance-zookeeper-2   Bound    pvc-97274e83-9154-4568-97cf-ddfa2ecb7bc3   5Gi        RWO            openebs-device   24m
```

#### Verifying Kafka PVs
The output will include the PVs of Zookeeper as well.

```
$ kubectl get pv

NAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                                                               STORAGECLASS     REASON   AGE
pvc-506a9f97-6388-4a2c-9610-b01fb93f88c4   5Gi        RWO            Delete           Bound    default/kafka-datadir-kafka-kafka-2                                 openebs-device            2m41s
pvc-5b061f45-76dc-4430-ae4e-3fae4848f3bc   5Gi        RWO            Delete           Bound    default/zookeeper-instance-datadir-zookeeper-instance-zookeeper-0   openebs-device            26m
pvc-88607fe0-da45-4bf1-a595-88c5d8f9818d   5Gi        RWO            Delete           Bound    default/kafka-datadir-kafka-kafka-1                                 openebs-device            3m18s
pvc-97274e83-9154-4568-97cf-ddfa2ecb7bc3   5Gi        RWO            Delete           Bound    default/zookeeper-instance-datadir-zookeeper-instance-zookeeper-2   openebs-device            26m
pvc-e541a05c-ce65-4e1f-959c-3324b0a21849   5Gi        RWO            Delete           Bound    default/kafka-datadir-kafka-kafka-0                                 openebs-device            3m58s
pvc-f5c2f6ba-0ca2-4056-b379-08a365c8a814   5Gi        RWO            Delete           Bound    default/zookeeper-instance-datadir-zookeeper-instance-zookeeper-1   openebs-device            26m
```

Now, verify that all blockdevices are consumed by Kafka and Zookeeper using OpenEBS Local PV device Storage Class.

```
$ kubectl get bd -n openebs
NAME                                           NODENAME                               SIZE           CLAIMSTATE   STATUS   AGE
blockdevice-3438e702b3ccf3312c75ec55c2aeabc1   gke-kafka-default-pool-a691e3fc-xr1r   107373116928   Claimed      Active   5h14m
blockdevice-5169c3cf271921fd824be287e6ea843b   gke-kafka-default-pool-a691e3fc-j7kh   107373116928   Claimed      Active   5h14m
blockdevice-8df5f1cde3c19b5a048af1e305bcfb5d   gke-kafka-default-pool-a691e3fc-46n9   107373116928   Claimed      Active   5h14m
blockdevice-af3a5076d46878c5ac41049bc8d53400   gke-kafka-default-pool-a691e3fc-j7kh   107373116928   Claimed      Active   5h14m
blockdevice-b06df60a11f0e62f91e3bb8da2ed9ad8   gke-kafka-default-pool-a691e3fc-xr1r   107373116928   Claimed      Active   5h14m
blockdevice-f07f34df09296395f900e79be4e33a70   gke-kafka-default-pool-a691e3fc-46n9   107373116928   Claimed      Active   5h14m
```


### Creating Load Generator and Consumer

#### Generate Load using Producer

Here is how `producer.yaml` should look like:
```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: kudo-kafka-generator
  labels:
    app: kudo-kafka-generator
spec:
  replicas: 1
  selector:
    matchLabels:
      app: kudo-kafka-generator
  template:
    metadata:
      name: kudo-kafka-generator
      labels:
        app: kudo-kafka-generator
    spec:
      containers:
      - name: kudo-kafka-generator
        image: mesosphere/flink-generator:0.1
        command: ["/generator-linux"]
        imagePullPolicy: Always
        args: ["--broker", "kafka-kafka-0.kafka-svc:9092"]
```

Apply the YAML manifest to create the load generator.

```
$ kubectl apply -f producer.yaml
```

#### Consume the generated load using Consumer
Here is how `consumer.yaml` should looks like:

```
apiVersion: apps/v1
kind: Deployment
metadata:
 name: kudo-kafka-consumer
spec:
 replicas: 1
 selector:
   matchLabels:
     app: kudo-kafka-consumer
 template:
   metadata:
     name: kudo-kafka-consumer
     labels:
       app: kudo-kafka-consumer
   spec:
     containers:
     - name: kudo-kafka-consumer
       image: tbaums/kudo-kafka-demo
       imagePullPolicy: Always
       env:
        - name: BROKER_SERVICE
          value: kafka-kafka-0.kafka-svc:9092
```

Apply consumer YAML manifest.

```
$ kubectl apply -f consumer.yaml
Verify producer and consumer pods are in running
$ kubectl get pod
NAME                                    READY   STATUS    RESTARTS   AGE
kafka-kafka-0                           2/2     Running   0          11m
kafka-kafka-1                           2/2     Running   0          10m
kafka-kafka-2                           2/2     Running   0          10m
kudo-kafka-consumer-647f649657-hnn87    1/1     Running   0          101s
kudo-kafka-generator-5fbf9884ff-fbjxx   1/1     Running   0          117s
zookeeper-instance-zookeeper-0          1/1     Running   0          33m
zookeeper-instance-zookeeper-1          1/1     Running   0          33m
zookeeper-instance-zookeeper-2          1/1     Running   0          33m
```

##### Verify if messages are generating at the Producer:

```
$ kubectl logs kudo-kafka-generator-5fbf9884ff-fbjxx --follow
time="2021-01-19T14:12:32Z" level=info msg="&sarama.ProducerMessage{Topic:"transactions", Key:sarama.Encoder(nil), Value:"2021-01-19T14:12:31Z;6;5;4789", Metadata:interface {}(nil), Offset:0, Partition:2, Timestamp:time.Time{sec:0, nsec:0, loc:(*time.Location)(nil)}, retries:0, flags:0}"
time="2021-01-19T14:12:33Z" level=info msg="&sarama.ProducerMessage{Topic:"transactions", Key:sarama.Encoder(nil), Value:"2021-01-19T14:12:33Z;3;6;9686", Metadata:interface {}(nil), Offset:1, Partition:2, Timestamp:time.Time{sec:0, nsec:0, loc:(*time.Location)(nil)}, retries:0, flags:0}"
time="2021-01-19T14:12:34Z" level=info msg="&sarama.ProducerMessage{Topic:"transactions", Key:sarama.Encoder(nil), Value:"2021-01-19T14:12:34Z;6;8;282", Metadata:interface {}(nil), Offset:0, Partition:1, Timestamp:time.Time{sec:0, nsec:0, loc:(*time.Location)(nil)}, retries:0, flags:0}"
time="2021-01-19T14:12:35Z" level=info msg="&sarama.ProducerMessage{Topic:"transactions", Key:sarama.Encoder(nil), Value:"2021-01-19T14:12:35Z;2;0;4495", Metadata:interface {}(nil), Offset:2, Partition:2, Timestamp:time.Time{sec:0, nsec:0, loc:(*time.Location)(nil)}, retries:0, flags:0}"
time="2021-01-19T14:12:36Z" level=info msg="&sarama.ProducerMessage{Topic:"transactions", Key:sarama.Encoder(nil), Value:"2021-01-19T14:12:36Z;8;6;2992", Metadata:interface {}(nil), Offset:0, Partition:0, Timestamp:time.Time{sec:0, nsec:0, loc:(*time.Location)(nil)}, retries:0, flags:0}"
time="2021-01-19T14:12:37Z" level=info msg="&sarama.ProducerMessage{Topic:"transactions", Key:sarama.Encoder(nil), Value:"2021-01-19T14:12:37Z;1;0;3437", Metadata:interface {}(nil), Offset:1, Partition:1, Timestamp:time.Time{sec:0, nsec:0, loc:(*time.Location)(nil)}, retries:0, flags:0}"
time="2021-01-19T14:12:38Z" level=info msg="&sarama.ProducerMessage{Topic:"transactions", Key:sarama.Encoder(nil), Value:"2021-01-19T14:12:38Z;9;4;4657", Metadata:interface {}(nil), Offset:2, Partition:1, Timestamp:time.Time{sec:0, nsec:0, loc:(*time.Location)(nil)}, retries:0, flags:0}"
time="2021-01-19T14:12:39Z" level=info msg="&sarama.ProducerMessage{Topic:"transactions", Key:sarama.Encoder(nil), Value:"2021-01-19T14:12:39Z;0;9;7130", Metadata:interface {}(nil), Offset:3, Partition:1, Timestamp:time.Time{sec:0, nsec:0, loc:(*time.Location)(nil)}, retries:0, flags:0}"
time="2021-01-19T14:12:40Z" level=info msg="&sarama.ProducerMessage{Topic:"transactions", Key:sarama.Encoder(nil), Value:"2021-01-19T14:12:40Z;3;1;7565", Metadata:interface {}(nil), Offset:4, Partition:1, Timestamp:time.Time{sec:0, nsec:0, loc:(*time.Location)(nil)}, retries:0, flags:0}"
time="2021-01-19T14:12:41Z" level=info msg="&sarama.ProducerMessage{Topic:"transactions", Key:sarama.Encoder(nil), Value:"2021-01-19T14:12:41Z;0;3;6387", Metadata:interface {}(nil), Offset:5, Partition:1, Timestamp:time.Time{sec:0, nsec:0, loc:(*time.Location)(nil)}, retries:0, flags:0}"
time="2021-01-19T14:12:42Z" level=info msg="&sarama.ProducerMessage{Topic:"transactions", Key:sarama.Encoder(nil), Value:"2021-01-19T14:12:42Z;9;0;5590", Metadata:interface {}(nil), Offset:3, Partition:2, Timestamp:time.Time{sec:0, nsec:0, loc:(*time.Location)(nil)}, retries:0, flags:0}"
time="2021-01-19T14:12:43Z" level=info msg="&sarama.ProducerMessage{Topic:"transactions", Key:sarama.Encoder(nil), Value:"2021-01-19T14:12:43Z;4;9;3048", Metadata:interface {}(nil), Offset:4, Partition:2, Timestamp:time.Time{sec:0, nsec:0, loc:(*time.Location)(nil)}, retries:0, flags:0}"
time="2021-01-19T14:12:44Z" level=info msg="&sarama.ProducerMessage{Topic:"transactions", Key:sarama.Encoder(nil), Value:"2021-01-19T14:12:44Z;1;7;3899", Metadata:interface {}(nil), Offset:5, Partition:2, Timestamp:time.Time{sec:0, nsec:0, loc:(*time.Location)(nil)}, retries:0, flags:0}"
```


##### Verify if messages are consumed at the Consumer

```
$ kubectl logs kudo-kafka-consumer-647f649657-hnn87 --follow
App started X
E
Message: b'2021-01-19T14:12:34Z;6;8;282'
Message: b'2021-01-19T14:12:37Z;1;0;3437'
Message: b'2021-01-19T14:12:38Z;9;4;4657'
Message: b'2021-01-19T14:12:39Z;0;9;7130'
Message: b'2021-01-19T14:12:40Z;3;1;7565'
Message: b'2021-01-19T14:12:41Z;0;3;6387'
Message: b'2021-01-19T14:12:45Z;5;0;5670'
Message: b'2021-01-19T14:12:50Z;8;4;6431'
Message: b'2021-01-19T14:12:53Z;1;8;9729'
Message: b'2021-01-19T14:12:54Z;7;4;358'
Message: b'2021-01-19T14:12:57Z;3;6;6214'
Message: b'2021-01-19T14:12:59Z;5;4;2859'
```