import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intel-benchmark',
  templateUrl: './intel-benchmark.component.html',
  styleUrls: ['./intel-benchmark.component.scss']
})
export class IntelBenchmarkComponent implements OnInit {

  constructor() { }
  pdfData = "/assets/pdf/product/intel-and-mayadata-benchmarking-of-openEBS-mayastor.pdf";
  ngOnInit() {
  }

}
