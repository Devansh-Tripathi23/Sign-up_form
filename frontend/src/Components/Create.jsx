import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [fname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addUser = { name: fname, email: email, age: age };

    try {
      const response = await fetch("http://localhost:8080/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addUser),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      // Redirect to the 'read' page if successful
      navigate("/read");

    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
  };

  return (
 
      

    <div className="container my-3">
         <div className="card shadow-lg">
          <div className="card-body  my-2">
      <h1 className="h1 text-center mb-3 ">Sign Up</h1>

      {error && <div className="alert alert-danger"> {error} </div>}
      <form className="form" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={fname}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
    </div>
    </div>
  );
};

export default Create;
