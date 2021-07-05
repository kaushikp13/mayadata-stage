import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page-platforms',
  templateUrl: './product-page-platforms.component.html',
  styleUrls: ['./product-page-platforms.component.scss']
})
export class ProductPagePlatformsComponent implements OnInit {
  platformPartners: any = [
    {
      imgUrl: 'assets/images/product/aws.png',
      imgAlt: 'aws',
      cta: {
        ctaLink: `/partners`,
        fragment: `workload-partners`
      }
    },
    {
      imgUrl: 'assets/images/product/azure.png',
      imgAlt: 'azure',
      cta: {
        ctaLink: `/partners`,
        fragment: `workload-partners`
      }
    },
    {
      imgUrl: 'assets/images/product/pivota.png',
      imgAlt: 'alibaba',
      cta: {
        ctaLink: `/partners`,
        fragment: `workload-partners`
      }
    },
    {
      imgUrl: 'assets/images/product/google.png',
      imgAlt: 'Digital Ocean',
      cta: {
        ctaLink: `/partners`,
        fragment: `workload-partners`
      }
    },
    {
      imgUrl: 'assets/images/product/kublr.png',
      imgAlt: 'gcp',
      cta: {
        ctaLink: `/partners`,
        fragment: `workload-partners`
      }
    },
    {
      imgUrl: 'assets/images/product/redhat.png',
      imgAlt: 'gke',
      cta: {
        ctaLink: `/partners`,
        fragment: `workload-partners`
      }
    },
    {
      imgUrl: 'assets/images/product/oracle.png',
      imgAlt: 'IBM-Cloud',
      cta: {
        ctaLink: `/partners`,
        fragment: `workload-partners`
      }
    },
    {
      imgUrl: 'assets/images/product/d2iq.png',
      imgAlt: 'D2iQ Konvoy',
      cta: {
        ctaLink: `/partners`,
        fragment: `workload-partners`
      }
    },
  ];


  orchestrators: any = [
    {
      imgUrl: 'assets/images/product/docker.png',
      imgAlt: 'IBM-Cloud'
    },

    {
      imgUrl: 'assets/images/product/nomad.png',
      imgAlt: 'D2iQ Konvoy'
    },
  ];;


  constructor() { }

  ngOnInit() {
  }

}
