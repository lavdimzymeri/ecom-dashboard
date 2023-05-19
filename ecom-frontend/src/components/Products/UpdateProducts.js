import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../Header/header";

function UpdateProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(`http://localhost:8000/api/getProduct/${id}`);
      const data = await response.json();
      setName(data.name);
      setPrice(data.price);
      setDescription(data.description);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
  
    try {
      await fetch(`http://localhost:8000/api/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, price, description }),
      });
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  }
  

  return (
    <div>
      <Header />
      <h1 className="text-center">Update Product</h1>
      <div className="container">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default UpdateProduct;
