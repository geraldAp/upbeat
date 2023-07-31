import React, { useRef } from "react";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form = () => {
  const formRef = useRef(null); // Create a ref to reference the form element

  const formik = useFormik({
    initialValues: {
      name: "",
      companyName: "",
      phoneNumber: "",
      email: "",
      digitalMusicMarketing: false,
      audioVisualProduction: false,
      eventsAndExperiential: false,
      other: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      companyName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      phoneNumber: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values, {resetForm}) => {
      if (values) {
        toast.success("Your message has been sent!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          onClose: () => resetForm()
        });
      }
    },
  });



  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        ref={formRef}
        className="mt-3 2xl:mt-6 text-black"
      >
        <div className="grid md:grid-cols-2 gap-5 md:gap-7">
          {/* name */}
          <div className="">
            <input
              className="outline-none w-full h-9 p-2 2xl:h-12 2xl:text-base text-sm rounded-sm"
              type="text"
              placeholder="Name"
              name="name"
              {...formik.getFieldProps("name")}
            />
            {formik.errors.name && formik.touched.name ? (
              <span className="text-red-500 text-xs">{formik.errors.name}</span>
            ) : null}
          </div>
          {/* Company Name */}
          <div>
            <input
              className="outline-none w-full h-9 p-2 2xl:h-12 2xl:text-base text-sm rounded-sm"
              type="text"
              placeholder="Company Name"
              name="companyName"
              {...formik.getFieldProps("companyName")}
            />
            {formik.errors.companyName && formik.touched.companyName ? (
              <span className="text-red-500 text-xs">{formik.errors.companyName}</span>
            ) : null}
          </div>
          {/* Phone number */}
          <div>
            <input
              className="outline-none w-full h-9 p-2 2xl:h-12 2xl:text-base text-sm rounded-sm"
              type="tel"
              placeholder="Phone Number"
              name="phoneNumber"
              {...formik.getFieldProps("phoneNumber")}
            />
            {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
              <span className="text-red-500 text-xs">{formik.errors.phoneNumber}</span>
            ) : null}
          </div>
          {/* email */}
          <div>
            <input
              className="outline-none w-full h-9 p-2 2xl:h-12 2xl:text-base text-sm rounded-sm"
              type="email"
              placeholder="Email"
              name="email"
              {...formik.getFieldProps("email")}
            />
            {formik.errors.email && formik.touched.email ? (
              <span className="text-red-500 text-xs">{formik.errors.email}</span>
            ) : null}
          </div>
        </div>
        {/* check box */}
        <div className="grid md:grid-cols-2 text-white my-4 2xl:my-8 gap-2 2xl:gap-4">
        <label className="flex items-center gap-2">
          <input
            className="2xl:h-9 2xl:w-9 h-6 w-6"
            type="checkbox"
            name="digitalMusicMarketing"
            checked={formik.values.digitalMusicMarketing}
            onChange={formik.handleChange}
          />
          <span className="2xl:text-xl">Digital Music Marketing</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            className="2xl:h-9 2xl:w-9 h-6 w-6"
            type="checkbox"
            name="audioVisualProduction"
            checked={formik.values.audioVisualProduction}
            onChange={formik.handleChange}
          />
          <span className="2xl:text-xl">Audio-Visual Production</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            className="2xl:h-9 2xl:w-9 h-6 w-6"
            type="checkbox"
            name="eventsAndExperiential"
            checked={formik.values.eventsAndExperiential}
            onChange={formik.handleChange}
          />
          <span className="2xl:text-xl">Events and Experiential</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            className="2xl:h-9 2xl:w-9 h-6 w-6"
            type="checkbox"
            name="other"
            checked={formik.values.other}
            onChange={formik.handleChange}
          />
          <span className="2xl:text-xl">Other</span>
        </label>
      </div>
        <div className="flex justify-center w-full">
          <button
            type="submit"
            id="submit"
            className="btn-contact"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
