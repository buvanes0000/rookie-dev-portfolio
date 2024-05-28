import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import "./Contact.css";

export default function Contact() {
  const { register, reset, handleSubmit, setValue, watch } = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);
  const [hcaptchaToken, setHcaptchaToken] = useState(null);

  const accessKey = "26a8f732-39d1-4540-8364-10176f1ed5ba";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Acme Inc",
      subject: "New Contact Message from your Website",
      // ... other settings
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
      setHcaptchaToken(null); // reset hcaptcha token
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  const handleHCaptchaChange = (token) => {
    setValue("h-captcha-response", token);
    setHcaptchaToken(token);
  };

  const handleFormSubmit = (data) => {
    if (!hcaptchaToken) {
      setResult("Please complete the HCaptcha.");
      setIsSuccess(false);
      return;
    }

    onSubmit(data);
  };

  return (
    <div className="contact" id="contact">
      <h2>Tell about Yourself</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
        />
        <textarea
          name="message"
          placeholder="Message"
          {...register("message", { required: "Message is required" })}
        ></textarea>
        <HCaptcha
          sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
          onVerify={handleHCaptchaChange}
        />
        <button type="submit">Send</button>
      </form>

      {result && (
        <div className={isSuccess ? "success" : "error"} >
          {result}
        </div>
      )}
    </div>
  );
}
