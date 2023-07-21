import React, { useState } from "react";

import Axios from "@/utils/Axios";
import Image from "next/image";
import { toast } from "react-toastify";

const ADMIN_EMAIL = "baabadampare@gmail.com";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    copy: false,
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ formData });
    setLoading(true);
    const message = `
    ${formData.message} <br /> <br />

    Phone: ${formData.phone} <br />
    Email: ${formData.email} <br /> <br />

    Sent from EverythingMail Demo Website <br />
    `;
    const mailData = {
      receiver_email: formData.copy
        ? [ADMIN_EMAIL, formData.email]
        : ADMIN_EMAIL,
      sender_email: formData.email,
      sender_identity: formData.name,
      subject: "EverythingMail Demo Test",
      message,
      noreply: true,
    };
    try {
      const { data } = await Axios({
        method: "POST",
        url: "/api/send",
        data: mailData,
        headers: { "Content-Type": "application/json" },
      });
      if (data?.success) {
        toast.success("Email sent successfully");
      } else {
        toast.error("Sorry something went wrong");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);

      let message =
        error?.response?.data?.message || error.code == "ERR_NETWORK"
          ? "Network Error"
          : "Sorry something went wrong";
      toast.error(message);
      // console.log(message);
      console.log(error);
    }
  };
  return (
    <section className="h-auto md:h-screen w-screen flex lg:flex-row flex-col-reverse lg:px-14 lg:py-20 px-8 py-3 gap-6 justify-center bg-[#F2F7FF]">
      <div className="w-full md:w-1/2 md:backdrop:h-screen">
        <div>
          <h1 className="text-5xl font-extrabold text-black mb-7">Let's Talk</h1>
          <p className="lg:max-w-xl mb-7">
            {" "}
            This is a sample contact form page to demo the Everything Mail
            Sending Api. It has been integrated into this form to enable email
            functionalities. You can use it on your website as well!
          </p>
          <h3 className="text-3xl font-extrabold text-black">Email</h3>
          <p className="mt-3 mb-6">samplemail@gmail.com</p>
          <h3 className="text-3xl font-extrabold text-black mb-5">Socials</h3>
          <p className="mb-3">Instagram</p>
          <p className="mb-3">Facebook</p>
          <p className="mb-3">Twitter</p>
          <p className="mb-3">Tiktok</p>
        </div>
      </div>
      <form className="md:w-[40%] md:h-screen px-10">
        <article className="flex flex-col gap-6 w-full">
          <div>
            <label className="block pb-1">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full py-2 px-2 focus:outline-[#009ce0] rounded"
            />
          </div>
          <div>
            <label className="block pb-1">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full py-2 px-2 focus:outline-[#009ce0] rounded"
            />
          </div>
          <div>
            <label className="block pb-1">Telephone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full py-2 px-2 focus:outline-[#009ce0] rounded"
            />
          </div>
          <div>
            <label className="block pb-1">Message</label>
            <textarea
              type="text"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full min-h-[6rem] px-2 focus:outline-[#009ce0] rounded resize-x-none"
            ></textarea>
          </div>
          <div>
            <input
              type="checkbox"
              name="copy"
              id="copy"
              value={formData.copy}
              onChange={handleInputChange}
              className="w-4 h-4 focus:outline-[#009ce0] rounded"
            />
            <label htmlFor="copy" className="pl-2">
              Send me a copy
            </label>
          </div>

          <button
            className="bg-[#009ce0] text-white py-2 px-10 disabled:opacity-50"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </article>
      </form>
    </section>
  );
};

export default ContactForm;
