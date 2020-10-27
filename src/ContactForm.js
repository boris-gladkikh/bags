import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ContactForm() {
  const [formData, setFormData] = useState();

  function handleChange(evt) {
    let { name, value } = evt.target;
    setFormData((form) => ({
      ...form,
      [name]: value,
    }));
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("form data", formData);
  }
  return (
    <Form className="my-5 m-auto w-75" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="name"></Form.Label>
        <Form.Control
          onChange={handleChange}
          required
          type="text"
          id="name"
          name="name"
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
          placeholder="Subject"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="body"></Form.Label>
        <Form.Control
          onChange={handleChange}
          required
          rows="5"
          as="textarea"
          id="body"
          name="body"
          placeholder="Body"
        />
      </Form.Group>

      <Button variant="secondary" type="submit">Submit</Button>
    </Form>
  );
}

export default ContactForm;
