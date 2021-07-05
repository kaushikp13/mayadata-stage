export interface ContactDetails {
    name: string;
    email: string;
    company: string;
    tag: string;
}

export interface ContactDetailsForContactUs {
    name: string;
    email: string;
    contact_number: number;
    company: string;
    message: string;
    tag: string;
}

export interface ContactDetailsOfPartners {
    firstname: string;
    lastname: string;
    email: string;
    company: string;
    jobtitle: string;
    contact_number: number;
    comments: string;
    technologypartner: boolean,
    platformpartner: boolean,
    workloadpartner: boolean,
    reseller: boolean,
    serviceprovider: boolean,
    tag: string;
}
export interface NewsletterSubscriber {
    email: string;
    tag: string;
}
