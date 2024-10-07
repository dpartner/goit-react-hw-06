import s from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsSlice";

const addContactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .trim()
    .min(7, "Too Short!")
    .max(9, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    // onAdd(values);
    dispatch(
      addContact({
        id: crypto.randomUUID(),
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={addContactSchema}
    >
      <Form className={s.form} noValidate>
        <label className={s.label}>
          Name:
          <Field className={s.input} type="text" name="name" />
          <ErrorMessage className={s.err} name="name" component="span" />
        </label>

        <label className={s.label}>
          Number:
          <Field className={s.input} type="text" name="number" />
          <ErrorMessage className={s.err} name="number" component="span" />
        </label>

        <button className={s.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
