export interface contactDetails {
    name: string;
    email: string;
    company: string;
    tag: string;
}

export interface contactDetailsWithoutCompany {
    name: string;
    email: string;
    tag: string;
}

export interface contactDetailsForPricing {
    firstName: string;
    lastName: string;
    jobTitle: string;
    company: string;
    email: string;
    contactNumber: string;
    tag: string;
}
export interface contactDetailsWithLargeDetails {
    first_name: string;
    last_name: string;
    company: string;
    job_title: string;
    email: string;
    contact_number: number;
    message: string;
    tag: string;
}

export interface FormDetails {
    name: string;
    email: string;
    contact_number: number;
    company: string;
    tag: string;
}