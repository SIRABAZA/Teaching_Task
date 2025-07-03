import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Calendar24 } from "@/components/DataTimePicker";

export default function Modal({ isOpen, onClose, onSubmit }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative animate-fadeIn">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center">
          Request a Lesson
        </h2>
        <Formik
          initialValues={{
            studentName: "",
            preferredDate: null,
            preferredTime: "10:30:00",
            message: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.studentName) errors.studentName = "Required";
            if (!values.preferredDate) errors.preferredDate = "Required";
            if (!values.preferredTime) errors.preferredTime = "Required";
            if (!values.message) errors.message = "Required";
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            onSubmit(values);
            setSubmitting(false);
            resetForm();
            onClose();
          }}
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <Form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Student Name
                </label>
                <Field
                  type="text"
                  name="studentName"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <ErrorMessage
                  name="studentName"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              <div>
                <Calendar24
                  date={values.preferredDate}
                  time={values.preferredTime}
                  onDateChange={(date) => setFieldValue("preferredDate", date)}
                  onTimeChange={(time) => setFieldValue("preferredTime", time)}
                />
                <ErrorMessage
                  name="preferredDate"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
                <ErrorMessage
                  name="preferredTime"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Short Message
                </label>
                <Field
                  as="textarea"
                  name="message"
                  rows={3}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition font-semibold"
              >
                Send Request
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
