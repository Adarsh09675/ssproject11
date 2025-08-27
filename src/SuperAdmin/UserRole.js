import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function UserRole() {
  const [list, setList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [roleList, setRoleList] = useState([]);
  const [id, setId] = useState(0);
  const [userId, setUserId] = useState(0);
  const [roleId, setRoleId] = useState(0);

  const [addUpdateModal, setAddUpdateModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  // Load data
  const loadData = () => {
    axios.get(`${BASE_URL}/UserRoles`).then(res => setList(res.data));
    axios.get(`${BASE_URL}/Users`).then(res => setUserList(res.data));
    axios.get(`${BASE_URL}/Roles`).then(res => setRoleList(res.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  const resetForm = () => {
    setId(0);
    setUserId(0);
    setRoleId(0);
  };

  const handleAddUpdate = () => {
    if (!userId || !roleId) {
      Swal.fire({ icon: "warning", title: "Please select both user and role!" });
      return;
    }

    const payload = { userId, roleId };
    const request = id === 0
      ? axios.post(`${BASE_URL}/UserRoles`, payload)
      : axios.put(`${BASE_URL}/UserRoles/${id}`, payload);

    request
      .then(() => {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Data saved successfully!",
          showConfirmButton: false,
          timer: 1500
        });
        resetForm();
        setAddUpdateModal(false);
        loadData();
      })
      .catch(err => Swal.fire({ icon: "error", title: "Error saving data" }));
  };

  const handleDelete = (deleteId) => {
    if (!window.confirm("Are you sure to delete?")) return;
    axios.delete(`${BASE_URL}/UserRoles/${deleteId}`)
      .then(() => {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Data deleted successfully!",
          showConfirmButton: false,
          timer: 1500
        });
        loadData();
      })
      .catch(err => Swal.fire({ icon: "error", title: "Error deleting data" }));
  };

  const handleEdit = (obj) => {
    setId(obj.id);
    setUserId(obj.userId);
    setRoleId(obj.roleId);
    setAddUpdateModal(true);
  };

  const handleView = (obj) => {
    setId(obj.id);
    setUserId(obj.userId);
    setRoleId(obj.roleId);
    setViewModal(true);
  };

  const handleDownload = () => {
    const csv = `Id,User,Role\n${list.map(c => {
      const userName = userList.find(u => u.id === c.userId)?.name || c.userId;
      const roleName = roleList.find(r => r.id === c.roleId)?.name || c.roleId;
      return `${c.id},${userName},${roleName}`;
    }).join("\n")}`;
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    link.download = "user_roles.csv";
    link.click();
  };

  const filteredList = list.filter(c =>
    c.userId.toString().includes(searchTerm)
  );
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedList = filteredList.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(filteredList.length / pageSize);

  return (
    <div className="container">
      <div className="d-flex justify-content-between mb-2 gap-2">
        <h4>🌎 User Role Management</h4>
        <div className="d-flex gap-2">
          <button className="btn btn-primary" onClick={() => { resetForm(); setAddUpdateModal(true); }}>
            <i className="bi bi-plus-lg"></i> Add User Role
          </button>
          <button className="btn btn-success" onClick={handleDownload} title="Export CSV">📥 Export CSV</button>
        </div>
      </div>

      <div className="d-flex justify-content-between mb-3 gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="🔍 Search by User Id..."
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
          style={{ maxWidth: "250px" }}
        />
        <div>
          <label className="me-2">Items per page:</label>
          <select
            className="form-select d-inline-block w-auto"
            value={pageSize}
            onChange={(e) => { setPageSize(parseInt(e.target.value)); setCurrentPage(1); }}
          >
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
          </select>
        </div>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-light">
          <tr><th>Id</th><th>User</th><th>Role</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {paginatedList.length > 0 ? paginatedList.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{userList.find(u => u.id === c.userId)?.name || c.userId}</td>
              <td>{roleList.find(r => r.id === c.roleId)?.name || c.roleId}</td>
              <td>
                <button className="border-0 bg-transparent me-2" title="Edit" onClick={() => handleEdit(c)}>
                  <i className="bi bi-pencil-fill text-primary fs-5"></i>
                </button>
                <button className="border-0 bg-transparent me-2" title="Delete" onClick={() => handleDelete(c.id)}>
                  <i className="bi bi-trash-fill text-danger fs-5"></i>
                </button>
                <button className="border-0 bg-transparent" title="View" onClick={() => handleView(c)}>
                  <i className="bi bi-eye-fill text-success fs-5"></i>
                </button>
              </td>
            </tr>
          )) : (
            <tr><td colSpan="4" className="text-center">No data found.</td></tr>
          )}
        </tbody>
      </table>

      <nav>
        <ul className="pagination pagination-sm justify-content-center">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(page)}>{page}</button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Add/Update Modal */}
      {addUpdateModal && (
        <>
          <div className="modal fade show" style={{ display: "block" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header bg-primary text-white">
                  <h5 className="modal-title">{id === 0 ? "Add User Role" : "Update User Role"}</h5>
                  <button type="button" className="btn-close" onClick={() => setAddUpdateModal(false)}></button>
                </div>
                <div className="modal-body">
                  <select className="form-select mb-2" value={userId} onChange={(e) => setUserId(parseInt(e.target.value))}>
                    <option value={0}>Select User</option>
                    {userList.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
                  </select>
                  <select className="form-select" value={roleId} onChange={(e) => setRoleId(parseInt(e.target.value))}>
                    <option value={0}>Select Role</option>
                    {roleList.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
                  </select>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setAddUpdateModal(false)}>Cancel</button>
                  <button className="btn btn-primary" onClick={handleAddUpdate}>Save</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}

      {/* View Modal */}
      {viewModal && (
        <>
          <div className="modal fade show" style={{ display: "block" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header bg-primary text-white">
                  <h5 className="modal-title">User Role Details</h5>
                  <button type="button" className="btn-close" onClick={() => setViewModal(false)}></button>
                </div>
                <div className="modal-body">
                  <p><strong>Id:</strong> {id}</p>
                  <p><strong>User:</strong> {userList.find(u => u.id === userId)?.name || userId}</p>
                  <p><strong>Role:</strong> {roleList.find(r => r.id === roleId)?.name || roleId}</p>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setViewModal(false)}>Close</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </div>
  );
}

export default UserRole;
