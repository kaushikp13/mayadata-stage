import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benchmarking-resource',
  templateUrl: './benchmarking-resource.component.html',
  styleUrls: ['./benchmarking-resource.component.scss']
})
export class BenchmarkingResourceComponent implements OnInit {
  resources: any;


  constructor() { }

  ngOnInit() {
    this.resources = {
      title: `Resources`,
      // subtitle: `Kubera built on top of OpenEBS simplifies the usage of Kubernetes as a data plane. If you are running stateful applications like Cassandra on Kubernetes, then Kubera can help simplifying it many ways.`,
      resourceList: [
        {
          title: `The basics and more are available from Storage Network Industry Association.`,
          description: [
          ],
          CTA: {
            ctaText: "Read more",
            ctaLink: "https://www.snia.org"
          },
          image: {
            imageAlt: `SNIA`,
            imageLink: `assets/images/benchmark/1final.svg`
          }
        },
        {
          title: `Kubernetes Storage Performance Myths.`,
          description: [
          ],
          CTA: {
            ctaText: "Read more",
            ctaLink: "https://blog.mayadata.io/kubernetes-storage-performance"
          },
          image: {
            imageAlt: `Myths`,
            imageLink: `assets/images/workloads/cassandra/monitoring-cassandra.svg`
          }
        },
        {
          title: `Draft of whitepaper from the CNCF Storage SIG.`,
          description: [
          ],
          CTA: {
            ctaText: "Read more",
            ctaLink: "https://docs.google.com/document/d/1ayeALoU5jrO5x96N7bqXmLx0O-rAIh2HllZBgtYwz3Q/edit?pli=1#heading=h.uvwp1nxx8pio"
          },
          image: {
            imageAlt: `CNCF`,
            imageLink: `assets/images/benchmark/2final.svg`
          }
        },
        {
          title: `Recent benchmarks of OpenEBS include the following:`,
          description: [
            `<div class="bullet-circle"></div> <a href="https://mayadata.io/casestudies/intel-and-mayadata-benchmarking-of-openEBS-mayastor">Intel</a>`,
            `<div class="bullet-circle"></div> Volterra`,
            `<div class="bullet-circle"></div> <a href="https://www.2ndquadrant.com/en/blog/local-persistent-volumes-and-postgresql-usage-in-kubernetes/">2ndQuadrant PostgreSQL (now part of EDB)</a>`,
            `<div class="bullet-circle"></div> <a href="https://www.percona.com/community-blog/2020/10/23/mayastor-lightning-fast-storage-for-kubernetes/">Percona</a>`
          ],
          image: {
            imageAlt: `benchmarks of OpenEBS`,
            imageLink: `assets/images/benchmark/3final.svg`
          }
        },
        {
          title: `Common workload benchmarks:`,
          description: [
            `<div class="bullet-circle"></div> PG`,
            `<div class="bullet-circle"></div> Kafka`,
            `<div class="bullet-circle"></div> AI`,
            `<div class="bullet-circle"></div> MySQL`,
          ],
          image: {
            imageAlt: `workload`,
            imageLink: `assets/images/benchmark/4final.svg`
          }
        },
        // {
        //   title: `From the CNCF storage SIG draft whitepaper on benchmarking`,
        //   description: [
        //     `<div class="bullet-circle"></div> FIO`
        //   ],
        //   image: {
        //     imageAlt: `Cassandra Chaos Engineering`,
        //     imageLink: `assets/images/workloads/cassandra/cassandra-chaos-engineering.svg`
        //   }
        // }
      ],
      // cta: {
      //   ctaText: "Get Started with Kubera",
      //   ctaLink: `${this.signUpUrl || 'https://account.mayadata.io/signup'}`
      // }
    };
  }

}
