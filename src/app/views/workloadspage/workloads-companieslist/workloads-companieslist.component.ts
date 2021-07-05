import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-workloads-companieslist',
  templateUrl: './workloads-companieslist.component.html',
  styleUrls: ['./workloads-companieslist.component.scss']
})
export class WorkloadsCompanieslistComponent implements OnInit {

  @Input('companies') companies: any;

  constructor() { }

  ngOnInit() {
  }

}
