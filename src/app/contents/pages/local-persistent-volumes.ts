export let local_persistent_companies = {
    title: `Dynamic LocalPV Provisioners are the preferred solution for many popular workloads`,
    list: [
        {
            name: 'elastic-search',
            imageSrc: 'assets/images/local-persistent-volumes/elastic-search.png'
        },
        {
            name: 'prometheus',
            imageSrc: 'assets/images/local-persistent-volumes/prometheus-logo.png'
        },
        {
            name: 'redis',
            imageSrc: 'assets/images/local-persistent-volumes/redis.png'
        },
        {
            name: 'postageSQL',
            imageSrc: 'assets/images/local-persistent-volumes/postage-sql.png'
        },
        {
            name: 'minio',
            imageSrc: 'assets/images/local-persistent-volumes/minio-logo.png'
        },
        {
            name: 'kafka',
            imageSrc: 'assets/images/local-persistent-volumes/kafka.png'
        },
        {
            name: 'gitlab',
            imageSrc: 'assets/images/local-persistent-volumes/gitlab-logo.png'
        }
    ],
    // bloomberg: 'Bloomberg' //  Donot change the case of text.
};

export let local_persistent_features = [
    {
        imageSrc: "assets/images/local-persistent-volumes/autonomylogo.png",
        imageAlt: "Autonomy to K8s teams",
        featureTitle: "Autonomy to K8s teams",
        featureContent: `Just the storage your workloads need, without the blast radius and noisy neighbor problems of shared storage.`
    },
    {
        imageSrc: "assets/images/openebs-support/k8s.png",
        imageAlt: "Built on Kubernetes",
        featureTitle: "Built on Kubernetes",
        featureContent: `Simple to deploy and operate - leveraging Kubernetes itself for orchestration.`
    },
    {
        imageSrc: "assets/images/openebs-support/built-speed.png",
        imageAlt: "Fast Storage",
        featureTitle: "Fast Storage",
        featureContent: `The largest, most active Kubernetes storage project with the biggest user base and community. OpenEBS is built by K8s SREs, and by experts just like you, tailored to their needs.`
    },

];