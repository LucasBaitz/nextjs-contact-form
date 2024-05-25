"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Textarea } from "../ui/textarea";
import { FormData, FormDataErrors, QueryType } from "@/interfaces/FormData";
import ErrorLine from "../ErrorLine/ErrorLine";
import { validateForm } from "@/utils/formValidator";
import { RadioGroup } from "../ui/radio-group";
import QueryRadio from "../QueryRadio/QueryRadio";
import RequiredFieldIndicator from "../RequiredFieldIndicator/RequiredFieldIndicator";
import { useToast } from "../ui/use-toast";

const Form: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    queryType: QueryType.None,
    message: "",
    consentContact: false,
  });

  const [formErrors, setFormErrors] = useState<FormDataErrors>({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consentContact: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormErrors((prevData) => ({
      ...prevData,
      [name]: "",
    }));

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: any) => {
    setFormErrors((prevData) => ({
      ...prevData,
      consentContact: "",
    }));

    setFormData((prevData) => ({
      ...prevData,
      consentContact: !formData.consentContact,
    }));
  };

  const handleQueryTypeChange = (queryType: QueryType) => {
    setFormErrors((prevData) => ({
      ...prevData,
      queryType: "",
    }));

    setFormData((prevData) => ({
      ...prevData,
      queryType: queryType,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formValidationResult = validateForm(formData);

    setFormErrors(formValidationResult);

    if (Object.values(formValidationResult).every((error) => error === "")) {
      toast({
        title: `Message Sent!`,
        description:
          "Thanks for completing the form. We'll be in touch soon!",
        variant: "success",
      });
    } else {
      toast({
        title: `Unable to send message.`,
        description: "Please check the inputted data and correct accordingly.",
        variant: "destructive",
      });
    }
  };

  return (
    <form
      className="w-full p-10 bg-white rounded-xl max-w-[600px] space-y-5"
      onSubmit={handleSubmit}
    >
      <h2 className="text-[#2D4545] font-bold text-3xl text-start mb-3">
        Contact Us
      </h2>
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-2 md:col-span-1 gap-1 space-y-1">
          <Label className="text-sm font-light">
            First Name <RequiredFieldIndicator />
          </Label>
          <Input
            name="firstName"
            value={formData.firstName}
            className={`border border-[#0C7D69] p-5 ${
              formErrors.firstName && "border-red-600"
            }`}
            onChange={handleInputChange}
          />
          <ErrorLine message={formErrors.firstName} />
        </div>
        <div className="col-span-2 md:col-span-1 gap-1 space-y-1">
          <Label className="text-sm font-light">
            Last Name <RequiredFieldIndicator />
          </Label>
          <Input
            name="lastName"
            value={formData.lastName}
            className={`border border-[#0C7D69] p-5 ${
              formErrors.lastName && "border-red-600"
            }`}
            onChange={handleInputChange}
          />
          <ErrorLine message={formErrors.lastName} />
        </div>
        <div className="row-span-2 col-span-2 space-y-1">
          <Label className="text-sm font-light">
            Email Address <RequiredFieldIndicator />
          </Label>
          <Input
            name="email"
            value={formData.email}
            className={`border border-[#0C7D69] p-5 ${
              formErrors.email && "border-red-600"
            }`}
            onChange={handleInputChange}
          />
          <ErrorLine message={formErrors.email} />
        </div>
        <div className="row-span-2 col-span-2 space-y-1">
          <Label className="text-sm font-light">
            Query Type <RequiredFieldIndicator />
          </Label>
          <RadioGroup
            className="grid grid-cols-2 gap-3"
            value={formData.queryType.toString()}
          >
            <div className="col-span-2 md:col-span-1">
              <QueryRadio
                handleSelection={handleQueryTypeChange}
                selected={formData.queryType === QueryType.GeneralEnquiry}
                queryType={QueryType.GeneralEnquiry}
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <QueryRadio
                handleSelection={handleQueryTypeChange}
                selected={formData.queryType === QueryType.SupportRequest}
                queryType={QueryType.SupportRequest}
              />
            </div>
          </RadioGroup>
          <ErrorLine message={formErrors.queryType} />
        </div>
        <div className="row-span-2 col-span-2 mb-1">
          <Label className="text-sm font-light">
            Message <RequiredFieldIndicator />
          </Label>
          <Textarea
            name="message"
            value={formData.message}
            className={`resize-none border border-[#0C7D69] h-[100px] ${
              formErrors.message && "border-red-600"
            }`}
            onChange={handleInputChange}
          />
          <ErrorLine message={formErrors.message} />
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        <div className="flex items-center align-middle gap-3">
          <Checkbox
            name="consentContact"
            checked={formData.consentContact}
            className="rounded-none border border-[#0C7D69] data-[state=checked]:bg-[#0C7D69]"
            onClick={handleCheckboxChange}
          />
          I consent to being contacted by the team
          <RequiredFieldIndicator />
        </div>
        <div>
          <ErrorLine message={formErrors.consentContact} />
        </div>
      </div>
      <div>
        <Button variant="formSubmit" className="p-6 mt-4" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Form;
