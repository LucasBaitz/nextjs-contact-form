export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  queryType: QueryType;
  message: string;
  consentContact: boolean;
}

export interface FormDataErrors {
  firstName: string;
  lastName: string;
  email: string;
  queryType: string;
  message: string;
  consentContact: string;
}

export enum QueryType {
  None,
  GeneralEnquiry,
  SupportRequest,
}
