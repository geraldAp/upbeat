import React from "react";
const Form = React.lazy(() => import("./componentsChildren.jsx/cForm"));

const ContactForm = () => {
  return (
    <div>
      <h4 className="font-medium text-xl md:text-3xl 2xl:text-5xl mb-1">
        Interested in working with <span className="text-primary-200">Up</span>
        Beat?
      </h4>
      <span className="text-sm 2xl:text-base">Stay connected</span>
      <Form />
    </div>
  );
};

export default ContactForm;
