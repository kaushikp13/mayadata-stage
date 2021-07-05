import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HubspotService {

  private host: string;
  apiurl = '';
  constructor(private http: HttpClient) {
    this.host = window.location.host;
    if (this.host === 'mayadata.io' || this.host === 'www.mayadata.io') {
      this.apiurl = 'https://mayadata.io/api/';
    } else if (this.host === 'mayadatastaging.io' || this.host === 'www.mayadatastaging.io') {
      this.apiurl = 'https://mayadatastaging.io/api/';
    } else {
      this.apiurl = 'http://localhost:3000/';
    }
  }

  postData(data, responseType) {
    const headers = new HttpHeaders({ 'ContentType': 'application/json' });
    const endPoint = `hubspot`
    return this.http.post(`${this.apiurl}${endPoint}`, data, { headers: headers, responseType: responseType })
  }

  mayadataHubspotAPI(data, responseType, endPoint) {
    // const endPoint = `mayadata-partnership`
    const headers = new HttpHeaders({ 'ContentType': 'application/json' })
    // return "success";
    return this.http.post(`${this.apiurl}${endPoint}`, data, { headers: headers, responseType: responseType });
  }

}
