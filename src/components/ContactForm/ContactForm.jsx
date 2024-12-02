import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

import css from "./ContactForm.module.css";

const ContactForm = ({ onAdd }) => {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .matches(
        /^\d{3}-\d{2}-\d{2}$/,
        "number number must be in the format 123-45-67"
      )
      .required("Required"),
  });

  const handleSubmit = (formData, { resetForm }) => {
    onAdd({
      id: nanoid(),
      name: formData.name,
      number: formData.number,
    });
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.formElem}>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" component="p" />
        </div>
        <div className={css.formElem}>
          <label htmlFor="number">Number</label>
          <Field type="phone" name="number" id="number" />
          <ErrorMessage name="number" component="p" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
