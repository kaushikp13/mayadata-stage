import { Injectable, isDevMode } from '@angular/core';
import { Websites } from '../../models/websites.model';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  domain: string;
  constructor() {
    this.domain = this.getRightDomain(window.location.hostname);
  }

  websites(): Websites {
    if (isDevMode()) {
      return {
        "marketingUrl": 'http://localhost:3000',
        "portalUrl": 'http://localhost:5000',
        "productUrl": 'http://localhost:8080',
        "accountUrl": 'http://localhost:4200'
      }
    } else {
      return {
        "marketingUrl": `https://${this.domain}.io`,
        "portalUrl": `https://portal.${this.domain}.io`,
        "productUrl": `https://director.${this.domain}.io`,
        "accountUrl": `https://account.${this.domain}.io`
      }
    }
  }

  getRightDomain(hostname) {
    const hostnameChunks = hostname.split('.');
    if (hostnameChunks.length < 2) {
      // This condition will never arise
      return 'mayadata'
    } else {
      return hostnameChunks[hostnameChunks.length - 2];
    }
  }
}
