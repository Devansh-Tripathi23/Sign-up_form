import React, { useEffect, useState } from "react";

const Read = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");



  async function getData() {
    try {
      const response = await fetch("http://localhost:8080/api/");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error.message);
      setError("Failed to fetch data");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  // async function handleDelete() {
  //   try {
  //     const response = await fetch(`http://localhost:8080/api/`, {
  //       method: "DELETE",
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to delete");
  //     }

  //     setError("Deleted Successfully");
  //     setTimeout(() => {
  //       setError("");
  //       getData();
  //     }, 1000);
  //   } catch (error) {
  //     console.error(error.message);
  //     setError("Failed to delete");
  //   }
  // }



  return (
    <div className="container my-2">
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row">
        {data.map((item) => (
          <div key={item._id} className="col-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{item.email}</h6>
                <p className="card-text">{item.age}</p>
                {/* <span className="card-link">Edit</span>
                <span
                  className="card-link"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </span> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Read;
