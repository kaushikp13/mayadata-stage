import { Component, OnInit } from '@angular/core';
import { companies } from '../../../../app/contents/pages/home';

@Component({
  selector: 'app-homepage-companieslist',
  templateUrl: './homepage-companieslist.component.html',
  styleUrls: ['./homepage-companieslist.component.scss']
})
export class HomepageCompanieslistComponent implements OnInit {

  companies = companies;


  constructor() { }

  ngOnInit() {
  }

}
