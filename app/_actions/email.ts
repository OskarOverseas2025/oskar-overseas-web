"use server";

import { Resend } from "resend";
import { z } from "zod";
import ContactMsgEmail from "../contact/_components/EmailTemplate";

const contactMsgSchema = z.object({
  name: z.string().min(1),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(8),
  inquiryType: z.string().min(1),
  country: z.string().optional(),
  experience: z.string().optional(),
  message: z.string().min(1),
  submitError: z.optional(z.string()),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactMsg(prevState: unknown, formData: FormData) {
  const result = contactMsgSchema.safeParse(Object.fromEntries(formData.entries()));

  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const msgData = result.data;

  try {
    const { data, error } = await resend.emails.send({
      from: "Oskar Website <contact@oskaroverseas.com>",
      to: ["support@oskaroverseas.com"],
      subject: msgData.inquiryType,
      react: ContactMsgEmail({
        name: msgData.name,
        email: msgData.email,
        phone: msgData.phone,
        inquiryType: msgData.inquiryType,
        message: msgData.message,
        experience: msgData.experience,
        country: msgData.country,
      }),
    });

    if (error) {
      throw new Error(error.message || "Unknown error occurred while sending email");
    }
    return {};
  } catch (error) {
    return {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      submitError:
        typeof error === "object" && error !== null && "message" in error
          ? (error as { message: string }).message
          : "Failed to send message. Please try again later.",
    };
  }
}
