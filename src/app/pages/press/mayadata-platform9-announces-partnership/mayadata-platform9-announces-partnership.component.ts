import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mayadata-platform9-announces-partnership',
  templateUrl: './mayadata-platform9-announces-partnership.component.html',
  styleUrls: ['./mayadata-platform9-announces-partnership.component.scss']
})
export class MayadataPlatform9AnnouncesPartnershipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  news = {
    title: `Platform9 and MayaData announce partnership to optimize high-performance workload delivery with managed Kubernetes`,
    subtitle: `Key vertical customer edge use cases include ISV, telco, and retail.`,
    date: `Dec 3, 2020, 09:00 ET`,
    markdownSrc: `./assets/data/press/mayadata-platform9-announces-partnership.md`
  }

}
