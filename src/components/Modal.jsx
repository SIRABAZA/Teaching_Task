import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Calendar24 } from "@/components/DataTimePicker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import * as Yup from "yup";
import { Button } from "./ui/button";

const validationSchema = Yup.object({
  studentName: Yup.string().required("Student name is required"),
  preferredDate: Yup.mixed()
    .test(
      "is-date",
      "Date is required",
      (value) => value instanceof Date && !isNaN(value)
    )
    .required("Date is required"),
  preferredTime: Yup.string().required("Time is required"),
  message: Yup.string()
    .required("Message is required")
    .max(500, "Message must be at most 500 characters"),
});

export default function Modal({ isOpen, onClose, onSubmit }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 bg-opacity-40">
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
          validationSchema={validationSchema}
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
                <Label
                  htmlFor="studentName"
                  className="block text-sm font-medium mb-1"
                >
                  Student Name
                </Label>
                <Field
                  as={Input}
                  type="text"
                  name="studentName"
                  id="studentName"
                  className="w-full"
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
                <Label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Short Message
                </Label>
                <Field
                  as={Textarea}
                  name="message"
                  id="message"
                  className="w-full"
                  rows={3}
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              <div className="text-center">
                <Button className="" type="submit" disabled={isSubmitting}>
                  Send Request
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
