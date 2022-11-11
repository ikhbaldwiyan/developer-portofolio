import React from "react";
import Layout from "../components/Layout";

function Contact() {
  return (
    <Layout>
      <div className="pt-32 pb-32 px-4">
        <div className="container ">
          <div className="w-full">
            <h3 className="font-bold text-2xl dark:text-textDark uppercase">
              Contact Me
            </h3>
            <p className="text-secondary dark:text-stone-200 font-medium py-3">
              Send me a message in contact form below
            </p>
          </div>

          <div className="w-full mb-6">
            <label
              for="name"
              className="font-bold text-primary dark:text-cyan-500"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full p-3 bg-slate-200 rounded-md lg:w-1/2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary block mt-3"
            />
          </div>
          <div className="w-full mb-6">
            <label
              for="email"
              className="font-bold text-primary dark:text-cyan-500"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="w-full p-3 bg-slate-200 rounded-md lg:w-1/2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary block mt-3"
            />
          </div>
          <div className="w-full mb-6">
            <label
              for="message"
              className="font-bold text-primary dark:text-cyan-500"
            >
              Message
            </label>
            <textarea
              type="text"
              name="message"
              id="message"
              className="w-full p-3 bg-slate-200 rounded-md lg:w-1/2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary block mt-3 h-32"
            />
          </div>

          <div className="w-full">
            <button className="text-base font-semibold text-white bg-gradient-to-r from-primary to-sky-500 py-3 px-8 rounded-xl w-full lg:w-1/2 hover:opacity-70">
              Send
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
