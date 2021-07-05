import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AgileService {

  headers: HttpHeaders;
  options: any;

  baseUrl = "https://ui-pttrns.agilecrm.com/dev/api/contacts ";

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic aW50YWtoYWIuYWxpQG9wZW5lYnMuaW86SW5zcGlyb24xNQ=='
    });
    // this.options = ({ headers: this.headers });
  }


  form() {
    return this.http.get(this.baseUrl);
  }





}
