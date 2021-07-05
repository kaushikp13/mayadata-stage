## Perform pre-configuration

There are multiple ways to provision Magento on Kubernetes. For simplicity of this tutorial, we will be using a Magento Helm installation on our cluster deployed using AWS EKS using the Ubuntu 20.04 LTS, amd64 focal image (ami-065262c424458e1ed) and 1.19 Kubernetes version. As an alternative, [Magento DevBox](https://github.com/magento/magento2-kubernetes-devbox) is another option we would recommend which aims to support multi-service multi-instance Magento deployment.

This guide will help you to install Magento 2, MariaDB and provision ReadWriteMany support (RWX) dynamic persistent volume to access the same media files across Magento web servers. It is mandatory that NFS client utilities are installed prior to Magento installation on your worker nodes.  Let’s review our setup used for the configuration.


### Our setup:

- 3 Nodes in AWS (t3.xlarge)

- 4 vCPUs / node 

- 16 GiB memory / node

- 1 x 100 GiB GP2 volumes / node

- Kubernetes version: v1.19

- Installed `nfs-common` packages on all worker nodes

![Login to Free Kubera](assets/data/magento-workload/images/1.png)

