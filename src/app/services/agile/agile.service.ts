import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactDetails, ContactDetailsForContactUs, NewsletterSubscriber, ContactDetailsOfPartners } from './agile.model';

@Injectable({
  providedIn: 'root'
})
export class AgileService {

  private apiurl: string;
  private host: string;
  public tag = '';
  public heading = '';
  public subheading = '';
  private contactAdd: ContactDetails[] = [];
  private newsletterSubscriber: NewsletterSubscriber[] = [];
  private contactDetailsForContactUs: ContactDetailsForContactUs[] = [];
  private contactDetailsOfPartners: ContactDetailsOfPartners[] = [];
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


  getPosts() {
    this.http
      .get<{ message: string; posts: ContactDetails[] }>(
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

  sendDatasToMayaDataBackend(data) {
    // getting data and storing it to ContactDetailsForContactUs Object
    const contactDetails: ContactDetailsForContactUs = {
      name: data.name,
      email: data.email,
      contact_number: data.contact_number,
      company: data.company,
      message: data.message,
      tag: data.addTag
    };
    // Send data to MayaData Backend at end point of /submitform/submit
    this.http.post<{ message: string }>(this.apiurl + 'submitform/submit', contactDetails)
      .subscribe(response => {
        this.contactDetailsForContactUs.push(contactDetails);
      });
  }


  sendPartnersDataToMayaDataBackend(data) {
    // getting data and storing it to ContactDetailsForContactUs Object
    const contactDetails: ContactDetailsOfPartners = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      company: data.company,
      jobtitle: data.jobtitle,
      contact_number: data.contact_number,
      comments: data.comments,
      technologypartner: data.technologypartner,
      platformpartner: data.platformpartner,
      workloadpartner: data.workloadpartner,
      reseller: data.reseller,
      serviceprovider: data.serviceprovider,
      tag: data.addTag
    };
    // Send data to MayaData Backend at end point of /submitform/submit
    this.http.post<{ message: string }>(this.apiurl + 'mayadatapartners/submit', contactDetails)
      .subscribe(response => {
        this.contactDetailsOfPartners.push(contactDetails);
      });
  }
  subscribeNewsletter(emailId: string, addtag: string) {
    const newsletterSubscriber: NewsletterSubscriber = { email: emailId, tag: addtag };
    this.http
      .post<{ message: string }>(this.apiurl + 'openebs/formsubmit', newsletterSubscriber)
      .subscribe(responseData => {
        this.newsletterSubscriber.push(newsletterSubscriber);
      });
  }

}
