"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";
import { postData } from "@/utils/apiHandle";
import { useSearchParams } from "next/navigation";

interface FormData {
  full_name: string;
  email: string;
  phone: string;
  inquiry_type: string;
  preferred_country?: string;
  work_experience?: string;
  message: string;
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initialInquiryType =
    searchParams.get("inquiryType") === "job-seeker" ? "job-seeker" : searchParams.get("inquiryType") === "employer" ? "employer" : "general";

  const [formData, setFormData] = useState<FormData>({
    full_name: "",
    email: "",
    phone: "",
    inquiry_type: initialInquiryType,
    preferred_country: "",
    work_experience: "",
    message: "",
  });

  const [error, setError] = useState<any>({});
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialFormDataState = {
    full_name: "",
    email: "",
    phone: "",
    inquiry_type: "general",
    preferred_country: "",
    work_experience: "",
    message: "",
  };

  useEffect(() => {
    console.log("Search Params:", searchParams.toString());
    const inquiryType =
      searchParams.get("inquiryType") === "job-seeker" ? "job-seeker" : searchParams.get("inquiryType") === "employer" ? "employer" : "general";
    setFormData((prev) => ({ ...prev, inquiry_type: inquiryType }));
  }, [searchParams]);

  const handleInput = (field: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSelectChange = (field: keyof FormData) => (value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(false);
    setError({});

    try {
      setIsSubmitting(true);
      const response = await postData(`oskar-contact`, formData);
      if (response.success) {
        setSuccess(true);
        setFormData(initialFormDataState);
      } else {
        setError({ submitError: "Failed to send message. Please try again." });
      }
    } catch (error) {
      console.log(error, "error");
      setError({ submitError: "An error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
        <p className="text-gray-600">
          Fill out the form below and our team will get back to you within 24 hours. All consultations are free and confidential.
        </p>
      </div>

      {success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
          <span className="text-green-600 mr-3">
            <Send className="inline h-5 w-5" />
          </span>
          <p className="text-green-800">Thank you for your message! We'll get back to you within 24 hours.</p>
        </div>
      )}

      {error?.submitError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
          <span className="text-red-600 mr-3">
            <Send className="inline h-5 w-5" />
          </span>
          <p className="text-red-800">{error.submitError}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            required
            className="mt-1"
            value={formData.full_name}
            onChange={handleInput("full_name")}
          />
          {error?.name && <p className="text-red-600 text-sm mt-1">{error.name}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            className="mt-1"
            value={formData.email}
            onChange={handleInput("email")}
          />
          {error?.email && <p className="text-red-600 text-sm mt-1">{error.email}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+977-XXXXXXXXX"
            required
            className="mt-1"
            value={formData.phone}
            onChange={handleInput("phone")}
          />
          {error?.phone && <p className="text-red-600 text-sm mt-1">{error.phone}</p>}
        </div>
        <div>
          <Label htmlFor="inquiryType">Inquiry Type *</Label>
          <Select name="inquiryType" required value={formData.inquiry_type} onValueChange={handleSelectChange("inquiry_type")}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select inquiry type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="job-seeker">Job Seeker</SelectItem>
              <SelectItem value="employer">Employer/Recruiter</SelectItem>
              <SelectItem value="general">General Inquiry</SelectItem>
            </SelectContent>
          </Select>
          {error?.inquiryType && <p className="text-red-600 text-sm mt-1">{error.inquiryType}</p>}
        </div>
      </div>

      {formData.inquiry_type === "job-seeker" && (
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="country">Preferred Country</Label>
            <Select name="country" value={formData.preferred_country} onValueChange={handleSelectChange("preferred_country")}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="malaysia">Malaysia</SelectItem>
                <SelectItem value="honkong">Honkong</SelectItem>
                <SelectItem value="uae">UAE</SelectItem>
                <SelectItem value="qatar">Qatar</SelectItem>
                <SelectItem value="saudi-arabia">Saudi Arabia</SelectItem>
                <SelectItem value="israel">Israel</SelectItem>
                <SelectItem value="malta">Malta</SelectItem>
                <SelectItem value="japan">Japan</SelectItem>
                <SelectItem value="south-korea">South Korea</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {error?.country && <p className="text-red-600 text-sm mt-1">{error.country}</p>}
          </div>
          <div>
            <Label htmlFor="experience">Work Experience</Label>
            <Select name="experience" value={formData.work_experience} onValueChange={handleSelectChange("work_experience")}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fresher">Fresher (0-1 years)</SelectItem>
                <SelectItem value="experienced">Experienced (2-5 years)</SelectItem>
                <SelectItem value="senior">Senior (5+ years)</SelectItem>
                <SelectItem value="expert">Expert (10+ years)</SelectItem>
              </SelectContent>
            </Select>
            {error?.experience && <p className="text-red-600 text-sm mt-1">{error.experience}</p>}
          </div>
        </div>
      )}

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your requirements, questions, or how we can help you..."
          rows={5}
          required
          className="mt-1"
          value={formData.message}
          onChange={handleInput("message")}
        />
        {error?.message && <p className="text-red-600 text-sm mt-1">{error.message}</p>}
      </div>

      <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Sending Message...
          </>
        ) : (
          <>
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
