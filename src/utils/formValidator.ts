import { FormData, FormDataErrors, QueryType } from "@/interfaces/FormData";

export const validateForm = (formData: FormData): FormDataErrors => {
  const formErrors: FormDataErrors = {
    firstName: isValidateName(formData.firstName),
    lastName: isValidateName(formData.lastName),
    email: isValidEmail(formData.email),
    message: isValidateMessage(formData.message),
    consentContact: isConsenting(formData.consentContact),
    queryType: isValidQueryType(formData.queryType),
  };

  return formErrors;
};

const isFieldEmpty = (value: string): boolean => {
  return value === null || value === undefined || value.trim() === "";
};

const isValidateName = (name: string): string => {
  if (isFieldEmpty(name)) return "This field is required";
  return "";
};

const isValidEmail = (email: string): string => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) ? "" : "Please enter a valid email address";
};

const isValidateMessage = (message: string): string => {
  if (isFieldEmpty(message)) return "This field is required";
  return "";
};

const isValidQueryType = (queryType: QueryType): string => {
  if (queryType === QueryType.None) return "Please select a query type";
  return "";
};

const isConsenting = (consent: boolean): string => {
  if (!consent) return "To submit this form, please consent to being contacted";
  return "";
};
