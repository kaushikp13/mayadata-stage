import { Injectable, Inject } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { SEO } from "../../models/common.model"
import { DOCUMENT } from '@angular/common';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta, private title: Title, @Inject(DOCUMENT) private doc) { }

  updateTitle(title: string) {
    this.title.setTitle(title);
  }

  updateOgMeta(seo: SEO) {
    this.meta.updateTag({ property: 'og:url', content: seo.url })
    this.meta.updateTag({ property: 'og:title', content: seo.title });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
    this.meta.updateTag({ property: 'og:image', content: seo.image });

  }

  updateDescription(desc: string) {
    this.meta.updateTag({ name: 'description', content: desc })
  }

  updateTwitterMeta(seo: SEO) {
    this.meta.updateTag({ property: "twitter:card", content: "summary_large_image" });
    this.meta.updateTag({ property: 'twitter:title', content: seo.title });
    this.meta.updateTag({ property: 'twitter:description', content: seo.description });
    this.meta.updateTag({ property: 'twitter:image', content: seo.image });
  }

  updateMainrMeta(seo: SEO) {
    this.meta.updateTag({ name: 'title', content: seo.title });
    this.meta.updateTag({ name: 'description', content: seo.description });
    this.meta.updateTag({ name: 'image', content: seo.image });
  }

  updateMeta(seo: SEO) {
    // this.updateMainrMeta(seo);
    this.updateDescription(seo.description);
    this.updateTwitterMeta(seo);
    this.updateOgMeta(seo);
  }

  updateMetaTags(metaTags: MetaDefinition[]) {
    metaTags.forEach(m => this.meta.updateTag(m));
  }

  createLinkForCanonicalURL(url: string) {
    const head = this.doc.getElementsByTagName('head')[0];
    var element: HTMLLinkElement = this.doc.querySelector(`link[rel='canonical']`) || null
    if (element == null) {
      element = this.doc.createElement('link') as HTMLLinkElement;
      head.appendChild(element);
    }
    element.setAttribute('rel', 'canonical')
    element.setAttribute('href', url)
  }

}
