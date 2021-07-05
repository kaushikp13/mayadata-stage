import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-workloads',
  templateUrl: './homepage-workloads.component.html',
  styleUrls: ['./homepage-workloads.component.scss']
})
export class HomepageWorkloadsComponent implements OnInit {

  workloads = {
    title: `Kubera powers your <strong>workloads</strong>`,
    subtitle: `The data capability to empower a Kubernetes SRE for any workload`,
    list: [
      {
        name: 'Kafka',
        imageSrc: 'assets/images/workloads/kafka.png',
        page: {
          url: `/workloads/kafka`
        }
      },
      {
        name: 'Elasticsearch',
        imageSrc: 'assets/images/workloads/elasticsearch.png',
        page: {
          url: `/workloads/elasticsearch`
        }
      },
      {
        name: 'Magento',
        imageSrc: 'assets/images/workloads/magento.png',
        page: {
          url: `/workloads/magento`
        }
      },
      {
        name: 'Cassandra',
        imageSrc: 'assets/images/workloads/cassandra.png',
        page: {
          url: `/workloads/cassandra`
        }
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
