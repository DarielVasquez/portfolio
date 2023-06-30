"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xrgwzqdw");
  if (state.succeeded) {
    return (
      <div className="py-10 flex justify-center px-4 lg:px-8">
        <div className="p-8 flex flex-col items-center border rounded-md">
          <h3 className="font-semibold text-teal-600 pb-1">
            Message Sent Successfully!
          </h3>
          <p>Thank you for contacting me. I will get back to you shortly!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[50vh] flex justify-center items-center">
      <form
        className="py-10 grid grid-cols-2 gap-8 px-4 lg:px-8"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center col-span-2 pb-3">
          <div className="relative">
            <h2 className="relative z-10 font-semibold text-stone-600 text-2xl lg:text-3xl pb-8  text-center">
              Get In Touch
            </h2>
            <div className="bg-teal-400 absolute top-[32%] left-[4%] h-[10px] lg:h-3 w-[148px] lg:w-[186px]"></div>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <input
            className="shadow-[7px_7px_rgba(1,1,1,0.3)] bg-stone-100 w-full p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-md"
            placeholder="Name"
            id="name"
            type="text"
            name="name"
            required
          />
          <ValidationError
            className=" text-red-500 pt-2 px-2"
            prefix="Name"
            field="name"
            errors={state.errors}
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <input
            className="shadow-[7px_7px_rgba(1,1,1,0.3)] bg-stone-100 w-full p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-md"
            placeholder="Email"
            id="email"
            type="email"
            name="email"
            required
          />
          <ValidationError
            className=" text-red-500 pt-2 px-2"
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
        <div className="col-span-2">
          <textarea
            className="shadow-[7px_7px_rgba(1,1,1,0.3)] bg-stone-100 w-full p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-md"
            placeholder="Message"
            id="message"
            name="message"
            required
          />
          <ValidationError
            className=" text-red-500 pt-2 px-2"
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="col-span-2 flex justify-center pt-3">
          <input
            className="shadow-[7px_7px_rgba(1,1,1,0.3)] text-xs md:text-sm bg-teal-500 text-white rounded-md p-2 transition ease-in-out hover:shadow-[5px_5px_rgba(1,1,1,0.3)] hover:bg-teal-600 text-center"
            type="submit"
            value="Send Message"
            disabled={state.submitting}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
