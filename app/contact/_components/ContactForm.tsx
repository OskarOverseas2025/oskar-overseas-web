"use client";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Send } from "lucide-react";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import { sendContactMsg } from "@/app/_actions/email";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<any>({});
  const [success, setSuccess] = useState(false);

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        setSuccess(false);
        const errorResult = await sendContactMsg({}, formData);
        if (errorResult && Object.keys(errorResult).length > 0) {
          setError(errorResult);
        } else {
          setError({});
          setSuccess(true);
          formRef.current?.reset();
        }
      }}
      className="space-y-6"
    >
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
          <Input id="name" name="name" type="text" placeholder="Enter your full name" required className="mt-1" />
          {error?.name && <p className="text-red-600 text-sm mt-1">{error.name}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" name="email" type="email" placeholder="Enter your email" required className="mt-1" />
          {error?.email && <p className="text-red-600 text-sm mt-1">{error.email}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+977-XXXXXXXXX" required className="mt-1" />
          {error?.phone && <p className="text-red-600 text-sm mt-1">{error.phone}</p>}
        </div>
        <div>
          <Label htmlFor="inquiryType">Inquiry Type *</Label>
          <Select name="inquiryType" required>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select inquiry type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="job-seeker">Job Seeker</SelectItem>
              <SelectItem value="employer">Employer/Recruiter</SelectItem>
              <SelectItem value="general">General Inquiry</SelectItem>
              <SelectItem value="support">Support/Assistance</SelectItem>
            </SelectContent>
          </Select>
          {error?.inquiryType && <p className="text-red-600 text-sm mt-1">{error.inquiryType}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="country">Preferred Country</Label>
          <Select name="country">
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="uae">UAE</SelectItem>
              <SelectItem value="qatar">Qatar</SelectItem>
              <SelectItem value="saudi-arabia">Saudi Arabia</SelectItem>
              <SelectItem value="japan">Japan</SelectItem>
              <SelectItem value="israel">Israel</SelectItem>
              <SelectItem value="malaysia">Malaysia</SelectItem>
              <SelectItem value="south-korea">South Korea</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {error?.country && <p className="text-red-600 text-sm mt-1">{error.country}</p>}
        </div>
        <div>
          <Label htmlFor="experience">Work Experience</Label>
          <Select name="experience">
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

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your requirements, questions, or how we can help you..."
          rows={5}
          required
          className="mt-1"
        />
        {error?.message && <p className="text-red-600 text-sm mt-1">{error.message}</p>}
      </div>

      {/* <div className="flex items-center space-x-2">
        <Checkbox id="terms" name="agreeTerms" required />
        <Label htmlFor="terms" className="text-sm text-gray-600">
          I agree to the{" "}
          <Link href="#" className="text-blue-600 hover:underline">
            Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </Link>
          *
        </Label>
        {error?.agreeTerms && <p className="text-red-600 text-sm mt-1">{error.agreeTerms}</p>}
      </div> */}

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700" disabled={pending}>
      {pending ? (
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
  );
}
