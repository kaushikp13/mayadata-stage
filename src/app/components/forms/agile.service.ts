import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  contactDetails, contactDetailsWithoutCompany, contactDetailsForPricing, contactDetailsWithLargeDetails,
  FormDetails
} from './agile.model';

@Injectable()

export class AgileService {
  private contactAdd: contactDetails[] = [];
  // private contactUpdated = new Observable<contactDetails[]>();
  private contactAddForPricing: contactDetailsForPricing[] = [];
  private contactDetailsForContactus: contactDetailsWithLargeDetails[] = [];
  private formDetails: FormDetails[] = [];
  private contactDetailsForDemo: contactDetailsWithLargeDetails[] = [];
  private apiurl: string;
  private host: string;
  public tag = '';
  public heading = '';
  public subheading = '';

  constructor(private http: HttpClient) {
    this.host = window.location.host;
    if (this.host === 'mayadata.io' || this.host === 'www.mayadata.io') {
      this.apiurl = 'https://mayadata.io/api/';
    } else if ((this.host) === 'staging.mayadata.io') {
      this.apiurl = 'https://mayadata.io/api/';
    } else {
      this.apiurl = 'http://localhost:3000/';
    }
  }

  getPosts() {
    this.http
      .get<{ message: string; posts: contactDetails[] }>(
        this.apiurl + 'formsubmit'
      )
      .subscribe(postData => {
        this.contactAdd = postData.posts;
      });
  }


  seTag(tag) {
    this.tag = tag;
  }
  getTag() {
    return this.tag;
  }

  setHeading(heading) {
    this.heading = heading;
  }
  getHeading() {
    return this.heading;
  }

  setSubHeading(subheading) {
    this.subheading = subheading;
  }

  getSubHeading() {
    return this.subheading;
  }

  addPost(firstName: string, emailId: string, companyName: string, addtag: string) {
    const contactAdd: contactDetails = { name: firstName, email: emailId, company: companyName, tag: addtag };
    this.http
      .post<{ message: string }>(this.apiurl + 'formsubmit', contactAdd)
      .subscribe(responseData => {
        this.contactAdd.push(contactAdd);
      });
  }


  sendToAgileForPricingContact(name: string, email: string, company: string, addtag: string) {
    const contactAddForPricing: contactDetails = { name: name, email: email, company: company, tag: addtag };
    this.http
      .post<{ message: string }>(this.apiurl + "requestademo/formsubmit", contactAddForPricing)
      .subscribe(responseData => {
        this.contactAdd.push(contactAddForPricing);
      });
  }
  sendToAgileForDemo(first_name: string, last_name: string,
    company: string, job_title: string, email: string, contact_number: number, message: string, addTag: string) {
    const contactDetails: contactDetailsWithLargeDetails = {
      first_name: first_name,
      last_name: last_name,
      company: company,
      job_title: job_title,
      email: email,
      contact_number: contact_number,
      message: message,
      tag: addTag
    }
    this.http
      .post<{ message: string }>(this.apiurl + "requestademo/formsubmit", contactDetails)
      .subscribe(responseData => {
        this.contactDetailsForDemo.push(contactDetails);
      })
  }

  sendToAgileForContactUs(first_name: string, last_name: string,
    company: string, job_title: string, email: string, contact_number: number, message: string, addtag: string) {
    const contactDetails: contactDetailsWithLargeDetails = {
      first_name: first_name,
      last_name: last_name,
      company: company,
      job_title: job_title,
      email: email,
      contact_number: contact_number,
      message: message,
      tag: addtag
    };

    this.http.post<{ message: string }>(this.apiurl + 'contactus/formsubmit', contactDetails)
      .subscribe(response => {
        this.contactDetailsForContactus.push(contactDetails);
      });
  }
  formDetailsToMayaDataBackend(name: string, email: string, contact_number: number, company: string, addtag: string) {
    const formDetails: FormDetails = {
      name: name,
      email: email,
      contact_number: contact_number,
      company: company,
      tag: addtag
    };
    this.http.post<{ message: string }>(this.apiurl + 'submitform/submit', formDetails)
      .subscribe(response => {
        this.formDetails.push(formDetails);
      });
  }
}
