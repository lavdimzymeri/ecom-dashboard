import Header from "../Header/header"
import { useState } from "react"
function AddProducts() {
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    async function addProducts() {
        console.warn(name, file, price, description);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('price', price);
        formData.append('name', name);
        formData.append('description', description);
        let result = await fetch("http://127.0.0.1:8000/api/add", {
            method:"POST",
            body: formData
        });
        alert("Data has been saved");
    }
    return (
        <>
            <Header />
            <div>
                <div className="col-sm-6 offset-sm-3">
                <h1>Add Products Page</h1><br/>
                    <input type="text"
                        className="form-control"
                        onChange={(e)=>setName(e.target.value)}
                        placeholder="Name"
                    />
                    <br/>

                    <input type="file"
                        className="form-control"
                        onChange={(e)=>setFile(e.target.files[0])}
                        placeholder="file"
                    />
                    <br />
                    
                    <input type="text"
                        className="form-control"
                        onChange={(e)=>setPrice(e.target.value)}
                        placeholder="price"
                    />
                    <br />
                    
                    <input type="text"
                        className="form-control"
                        onChange={(e)=>setDescription(e.target.value)}
                        placeholder="description"
                    />
                    <br />

                    <button onClick={addProducts} className="btn btn-primary">Add Product</button>
                </div>
            </div>
        </>
    )
}

export default AddProducts