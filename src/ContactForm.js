import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { submitEmailData } from "./functions";

const INITDATA = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
function ContactForm() {
  const [formData, setFormData] = useState({ ...INITDATA });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [alertVariant, setAlertVariant] = useState("");

  useEffect(
    function () {
      async function sendData() {
        try {
          const resp = await submitEmailData(formData);
          setAlertVariant("success");
          setMessage("Succesfully Submitted");
          console.log(resp);
        } catch (err) {
          console.error(err);
          setMessage(err.message);
          setAlertVariant("danger");
        }
      }
      if (isLoading) {
        sendData(formData);
        setIsLoading(false);
        setTimeout(function () {
          setFormData({ ...INITDATA });
          setMessage("");
        }, 5000);
      }
    },
    [formData, isLoading]
  );

  function handleChange(evt) {
    let { name, value } = evt.target;
    setFormData((form) => ({
      ...form,
      [name]: value,
    }));
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    setIsLoading(true);
  }

  let submitMessage =
    message === "" ? (
      ""
    ) : (
      <Alert className="mt-2" variant={alertVariant}>
        <Alert.Heading className="text-center">{message}</Alert.Heading>
      </Alert>
    );
  return (
    <Form
      name="contact-form"
      className="my-5 m-auto w-75"
      onSubmit={handleSubmit}
    >
      <Form.Group>
        <Form.Label htmlFor="name"></Form.Label>
        <Form.Control
          onChange={handleChange}
          required
          type="text"
          id="name"
          name="name"
          value={formData.name}
          placeholder="Name"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="email"></Form.Label>
        <Form.Control
          onChange={handleChange}
          required
          type="Email"
          id="email"
          name="email"
          value={formData.email}
          placeholder="Email"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="subject"></Form.Label>
        <Form.Control
          onChange={handleChange}
          required
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          placeholder="Subject"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="message"></Form.Label>
        <Form.Control
          onChange={handleChange}
          required
          rows="5"
          as="textarea"
          id="message"
          name="message"
          value={formData.message}
          placeholder="Body"
        />
      </Form.Group>

      <Button variant="secondary" type="submit">
        Submit
      </Button>
      {submitMessage}
    </Form>
  );
}

export default ContactForm;
