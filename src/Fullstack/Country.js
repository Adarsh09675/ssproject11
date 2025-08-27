import { useEffect, useState, useCallback } from "react";
import axios from "axios";

function Country() {
  const [countries, setCountries] = useState([]);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");

  const baseUrl = `${process.env.REACT_APP_BASE_URL}/Countries`;

  // Wrapped loadCountries in useCallback
  const loadCountries = useCallback(() => {
    axios
      .get(baseUrl)
      .then((res) => setCountries(res.data))
      .catch((error) => console.error("Error loading countries:", error));
  }, [baseUrl]);

  useEffect(() => {
    loadCountries();
  }, [loadCountries]); // added dependency

  const resetForm = useCallback(() => {
    setId(0);
    setName("");
  }, []);

  const handleSave = useCallback(() => {
    const data = { id, name };

    if (!name.trim()) {
      alert("Country name cannot be empty");
      return;
    }

    const request =
      id === 0 ? axios.post(baseUrl, data) : axios.put(`${baseUrl}/${id}`, data);

    request
      .then(() => {
        resetForm();
        loadCountries();
      })
      .catch((error) =>
        console.error(id === 0 ? "Error adding country:" : "Error updating country:", error)
      );
  }, [id, name, baseUrl, loadCountries, resetForm]);

  const handleEdit = useCallback((country) => {
    setId(country.id);
    setName(country.name);
  }, []);

  const handleDelete = useCallback(
    (countryId) => {
      if (window.confirm("Are you sure you want to delete this country?")) {
        axios
          .delete(`${baseUrl}/${countryId}`)
          .then(() => loadCountries())
          .catch((error) => console.error("Error deleting country:", error));
      }
    },
    [baseUrl, loadCountries]
  );

  return (
    <div className="container">
      <h2 className="mb-4">Manage Countries</h2>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Country Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <button className="btn btn-primary me-2" onClick={handleSave}>
          {id === 0 ? "Add Country" : "Update Country"}
        </button>
        <button className="btn btn-secondary" onClick={resetForm}>
          Reset
        </button>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-light">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th style={{ width: "150px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {countries.length > 0 ? (
            countries.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(c)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(c.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">
                No countries found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Country;
