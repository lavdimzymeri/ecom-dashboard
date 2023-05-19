import Header from "../Header/header";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function SearchProducts() {
    const [data, setData] = useState([]);

    async function search(key) {
        console.warn(key);
        let result = await fetch("http://127.0.0.1:8000/api/search/" + key);
        result = await result.json();
        setData(result);
    }

    return (
        <>
            <Header />
            <div>
                <div className="col-sm-6 offset-sm-3">
                    <h1>Search Products</h1>
                    <br />
                    <input
                        type="text"
                        onChange={(e) => search(e.target.value)}
                        className="form-control"
                        placeholder="Search Product"
                    />
                    <br />

                    <Table striped bordered hover responsive className="table-dark">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default SearchProducts;
