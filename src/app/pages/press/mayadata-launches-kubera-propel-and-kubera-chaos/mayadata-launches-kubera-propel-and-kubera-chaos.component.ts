import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mayadata-launches-kubera-propel-and-kubera-chaos',
  templateUrl: './mayadata-launches-kubera-propel-and-kubera-chaos.component.html',
  styleUrls: ['./mayadata-launches-kubera-propel-and-kubera-chaos.component.scss']
})
export class MayadataLaunchesKuberaPropelAndKuberaChaosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  news = {
    title: `MayaData launches Kubera Propel and Kubera Chaos`,
    subtitle: `MayaData, a leading developer of open-source software for using Kubernetes as a data layer, announces the commercial availability of Kubera Propel and Kubera Chaos. Kubera Propel is based on the most popular open-source Container Attached Storage project, OpenEBS, which MayaData started and continues to lead.`,
    date: `Nov 17, 2020, 09:00 ET`,
    markdownSrc: `./assets/data/press/mayadata-launches-kubera-propel-and-kubera-chaos.md`
  }

}
