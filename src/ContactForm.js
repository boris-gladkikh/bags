import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {submitEmailData} from './functions';

const INITDATA = {
  name:"",
  email:"",
  subject:"",
}
function ContactForm() {
  const [formData, setFormData] = useState({...INITDATA});
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function(){
    async function sendData() {
      try{
        const resp = await submitEmailData(formData);
        setMessage("Succesfully Submitted");
        console.log(resp)

      } catch(err) {
        console.error(err);
        setMessage(err.message)
      } 
    }
    if(isLoading){
      sendData(formData);
      setIsLoading(false);
    }
  }, [formData, isLoading]);




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
  return (
    <Form name="contact" className="my-5 m-auto w-75" onSubmit={handleSubmit}>

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
          type="subject"
          id="subject"
          name="subject"
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
          placeholder="Body"
        />
      </Form.Group>

      <Button variant="secondary" type="submit">
        Submit
      </Button>
      <div>
        {message}
      </div>
    </Form>
  );
}

export default ContactForm;
