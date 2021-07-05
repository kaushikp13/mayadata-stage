import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started-with-workloads',
  templateUrl: './get-started-with-workloads.component.html',
  styleUrls: ['./get-started-with-workloads.component.scss']
})
export class GetStartedWithWorkloadsComponent implements OnInit {

  getStartedWithWorkloads = [
    {
      title: `Get started with Kafka on Kubernetes`,
      img_url: `assets/images/workloads/get-started/kafka-and-mayadata.svg`,
      img_alt: `MayaData and Kafka`,
      cta_link: `/workloads/kafka`,
      cta_text: `Try Now`
    },
    {
      title: `Get started with Elasticsearch on Kubernetes`,
      img_url: `assets/images/workloads/get-started/elasticsearch-and-mayadata.svg`,
      img_alt: `MayaData and Elasticsearch`,
      cta_link: `/workloads/elasticsearch`,
      cta_text: `Try Now`
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
