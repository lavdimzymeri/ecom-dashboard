import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Header/header";
import { FaTrash, FaEdit } from "react-icons/fa"; // Import the required icons
import "./ProductList.css"; // Import the CSS file for custom styling

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:8000/api/list");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function deleteProduct(id) {
    try {
      await fetch(`http://localhost:8000/api/delete/${id}`, {
        method: "DELETE",
      });
      await fetchData();
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="admin-background">
      <Header />
      <h1 className="text-center">Product List</h1>
      <div className="container">
        <Table striped bordered hover responsive className="custom-table">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>
                  <Button variant="danger" onClick={() => deleteProduct(product.id)}>
                    <FaTrash />
                    Delete
                  </Button>
                  <Link to={`/update/${product.id}`}>
                    <Button variant="secondary">
                      <FaEdit />
                      Update
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ProductList;
