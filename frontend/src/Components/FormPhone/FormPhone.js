import React, {
    useState,
} from 'react';
import { 
    Col, Button, Form, FormGroup, Label, Input, FormText 
} from 'reactstrap';

const FormPhone = (props) => {
    let [name, setName] = useState('')
    let [manufacturer, setManufacturer] = useState('')
    let [description, setDescription] = useState('')
    let [color, setColor] = useState('')


    let [posted, setPosted] = useState(false)
  
    const postFormValue = e => {
      e.preventDefault()
  
      fetch('http://localhost:5000/phones', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({name, manufacturer, color, description})
      }).then(res => {
        if(res.status === 200) setPosted(!posted)
      })
  
      setName(name= "")
      setManufacturer(manufacturer = "")
      setColor(color='')
      setDescription(description='')
    }
  return (
      <div className='phone-form'>
    <Form>
      <FormGroup row>
        <Label for="exampleText" sm={2}>Name</Label>
        <Col sm={10}>
          <Input 
          value={name}
          onChange={e => setName(e.target.value)}
          type="textarea" name="name" id="exampleName" placeholder="Name" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={2}>Manufacturer</Label>
        <Col sm={10}>
          <Input 
          value={manufacturer}
          onChange={e => setManufacturer(e.target.value)}
          type="textarea" name="manufacturer" id="exampleManufacturer" placeholder="manufacturer" />
        </Col>
      </FormGroup><FormGroup row>
        <Label for="exampleText" sm={2}>Description</Label>
        <Col sm={10}>
          <Input 
          value={description}
          onChange={e => setDescription(e.target.value)}
          type="textarea" name="description" id="exampleDescription" placeholder="description" />
        </Col>
      </FormGroup><FormGroup row>
        <Label for="exampleText" sm={2}>Color</Label>
        <Col sm={10}>
          <Input 
            value={color}
            onChange={e => setColor(e.target.value)}
          type="textarea" name="color" id="exampleColor" placeholder="color" />
        </Col>
      </FormGroup>
      {/* <FormGroup row>
        <Label for="exampleText" sm={2}>Price</Label>
        <Col sm={10}>
          <Input
          value={price}
          onChange={e => setPrice(e.target.value)}
          type="textarea" name="price" id="examplePrice" placeholder="price" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleFile" sm={2}>imageFileName</Label>
        <Col sm={10}>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={2}>Screen</Label>
        <Col sm={10}>
          <Input type="textarea" name="screen" id="exampleScreen" placeholder="Screen" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={2}>Processor</Label>
        <Col sm={10}>
          <Input type="textarea" name="processor" id="processor" placeholder="Processor" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={2}>Ram</Label>
        <Col sm={10}>
          <Input type="textarea" name="ram" id="ram" placeholder="ram" />
        </Col>
      </FormGroup> */}
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Add phone</Button>
        </Col>
      </FormGroup>
    </Form>
    </div>
  );
}

export default FormPhone;