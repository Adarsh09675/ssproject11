import axios from "axios";
import { useEffect, useState, useCallback } from "react";
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

  // ----------------------------
  // Load data
  // ----------------------------
  const loadData = useCallback(() => {
    axios.get(`${BASE_URL}/UserRoles`).then(res => setList(res.data));
    axios.get(`${BASE_URL}/Users`).then(res => setUserList(res.data));
    axios.get(`${BASE_URL}/Roles`).then(res => setRoleList(res.data));
  }, [BASE_URL]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const resetForm = useCallback(() => {
    setId(0);
    setUserId(0);
    setRoleId(0);
  }, []);

  const handleAddUpdate = useCallback(() => {
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
      .catch(() => Swal.fire({ icon: "error", title: "Error saving data" }));
  }, [BASE_URL, id, userId, roleId, loadData, resetForm]);

  const handleDelete = useCallback((deleteId) => {
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
      .catch(() => Swal.fire({ icon: "error", title: "Error deleting data" }));
  }, [BASE_URL, loadData]);

  const handleEdit = useCallback((obj) => {
    setId(obj.id);
    setUserId(obj.userId);
    setRoleId(obj.roleId);
    setAddUpdateModal(true);
  }, []);

  const handleView = useCallback((obj) => {
    setId(obj.id);
    setUserId(obj.userId);
    setRoleId(obj.roleId);
    setViewModal(true);
  }, []);

  const handleDownload = useCallback(() => {
    const csv = `Id,User,Role\n${list.map(c => {
      const userName = userList.find(u => u.id === c.userId)?.name || c.userId;
      const roleName = roleList.find(r => r.id === c.roleId)?.name || c.roleId;
      return `${c.id},${userName},${roleName}`;
    }).join("\n")}`;
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    link.download = "user_roles.csv";
    link.click();
  }, [list, userList, roleList]);

  // ----------------------------
  // Pagination & filter
  // ----------------------------
  const filteredList = list.filter(c =>
    c.userId.toString().includes(searchTerm)
  );
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedList = filteredList.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(filteredList.length / pageSize);

  // ----------------------------
  // Render
  // ----------------------------
  return (
    <div className="container">
      {/* JSX content remains the same as your original code */}
    </div>
  );
}

export default UserRole;
