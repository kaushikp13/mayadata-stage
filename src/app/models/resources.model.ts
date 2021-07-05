export interface TypeWhitepaper {
  title: string;
  subtitle?: string;
  url: string;
  externalLink: true,
  image_url: string;
  image_alt: string;
  actionText: string;
  className: string; // useful for GTM tracking
  type: string;
  itme: string;
}

export interface TypeWebinar {
  title: string;
  subtitle?: string;
  url: string;
  image_url: string;
  image_alt: string;
  actionText: string;
  className: string; // useful for GTM tracking
  type: string;
  externalLink: true,
}


export interface TypeSolutionDocs {
  title: string;
  subtitle?: string;
  url: string;
  image_url: string;
  image_alt: string;
  actionText: string;
  className: string; // useful for GTM tracking
  type: string;
  externalLink: true,
}
