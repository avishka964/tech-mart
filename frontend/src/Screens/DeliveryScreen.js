import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import FormContainer from "../components/FormContainer"
import { saveDeliveryAddress } from "../actions/cartActions"
import CheckOutsSteps from "../components/CheckOutsSteps"

const DeliveryScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { deliveryAddress } = cart

  const [address, setAddress] = useState(deliveryAddress.address)
  const [city, setCity] = useState(deliveryAddress.city)
  const [postalCode, setPostalCode] = useState(deliveryAddress.postalCode)
  const [mobile, setMobile] = useState(deliveryAddress.mobile)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveDeliveryAddress({ address, city, postalCode, mobile }))
    history.push("/payment")
  }

  return (
    <FormContainer>
      <CheckOutsSteps step1 step2 />
      <h1>Delivery</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId="postalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Postal Code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId="mobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Mobile No"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default DeliveryScreen
