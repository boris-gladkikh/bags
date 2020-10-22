import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function ContactForm(){
  const [formData, setFormData] = useState();

  function handleChange(){}
  function handleSubmit(){}
  return(
    <Form className="my-5 m-auto w-75"> 
      <Form.Group>
        <Form.Label htmlFor="name"></Form.Label>
      <Form.Control type="text" id="name" name="name" placeholder="Name" />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="email"></Form.Label>
      <Form.Control type="Email" id="email" name="email" placeholder="Email" />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="subject"></Form.Label>
      <Form.Control type="text" id="subject" name="subject" placeholder="subject" />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="name"></Form.Label>
      <Form.Control rows="5" as="textarea" id="name" name="name" />
      </Form.Group>
      
      <Button>Submit</Button>
    </Form>

  )
}

export default ContactForm