import { useEffect, useState, useCallback } from "react";
import axios from "axios";

function Checkbox() {
  const [employees, setEmployees] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [genders] = useState([
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
    { id: 3, name: "Other" },
  ]);
  const [languages, setLanguages] = useState([]);

  // Form fields
  const [id, setId] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [countryId, setCountryId] = useState(0);
  const [stateId, setStateId] = useState(0);
  const [districtId, setDistrictId] = useState(0);
  const [genderId, setGenderId] = useState(0);
  const [image, setImage] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const baseUrl = `${process.env.REACT_APP_BASE_URL}/Employees`;
  const countryUrl = `${process.env.REACT_APP_BASE_URL}/Countries`;
  const stateUrl = `${process.env.REACT_APP_BASE_URL}/States`;
  const districtUrl = `${process.env.REACT_APP_BASE_URL}/Districts`;
  const languageUrl = `${process.env.REACT_APP_BASE_URL}/Languages`;

  // ----------------------------
  // Data loading functions
  // ----------------------------
  const loadEmployees = useCallback(() => {
    axios.get(baseUrl).then((res) => {
      const mappedEmployees = res.data.map((emp) => ({
        ...emp,
        languages: emp.languages?.map((l) => l.languageId) || [],
      }));
      setEmployees(mappedEmployees);
    });
  }, [baseUrl]);

  const loadCountries = useCallback(() => {
    axios.get(countryUrl).then((res) => setCountries(res.data));
  }, [countryUrl]);

  const loadStates = useCallback(() => {
    axios.get(stateUrl).then((res) => setStates(res.data));
  }, [stateUrl]);

  const loadDistricts = useCallback(() => {
    axios.get(districtUrl).then((res) => setDistricts(res.data));
  }, [districtUrl]);

  const loadLanguages = useCallback(() => {
    axios.get(languageUrl).then((res) => setLanguages(res.data));
  }, [languageUrl]);

  useEffect(() => {
    loadEmployees();
    loadCountries();
    loadStates();
    loadDistricts();
    loadLanguages();
  }, [loadEmployees, loadCountries, loadStates, loadDistricts, loadLanguages]);

  // ----------------------------
  // Form helpers
  // ----------------------------
  const resetForm = useCallback(() => {
    setId(0);
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setAddress("");
    setEmail("");
    setMobile("");
    setCountryId(0);
    setStateId(0);
    setDistrictId(0);
    setGenderId(0);
    setImage("");
    setSelectedLanguages([]);
  }, []);

  const handleSave = useCallback(() => {
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      countryId === 0 ||
      stateId === 0 ||
      districtId === 0 ||
      genderId === 0
    )
      return alert("Please fill all required fields.");

    const data = {
      id,
      firstName,
      middleName,
      lastName,
      address,
      email,
      mobile,
      countryId,
      stateId,
      districtId,
      genderId,
      image,
      languages: selectedLanguages,
    };

    const request =
      id === 0
        ? axios.post(baseUrl, data)
        : axios.put(`${baseUrl}/${id}`, data);

    request.then(() => {
      resetForm();
      loadEmployees();
    });
  }, [
    id,
    firstName,
    middleName,
    lastName,
    address,
    email,
    mobile,
    countryId,
    stateId,
    districtId,
    genderId,
    image,
    selectedLanguages,
    baseUrl,
    loadEmployees,
    resetForm,
  ]);

  const handleEdit = useCallback(
    (emp) => {
      setId(emp.id);
      setFirstName(emp.firstName);
      setMiddleName(emp.middleName);
      setLastName(emp.lastName);
      setAddress(emp.address);
      setEmail(emp.email);
      setMobile(emp.mobile);
      setCountryId(emp.countryId);
      setStateId(emp.stateId);
      setDistrictId(emp.districtId);
      setGenderId(emp.genderId);
      setImage(emp.image);
      setSelectedLanguages(emp.languages || []);
    },
    []
  );

  const handleDelete = useCallback(
    (empId) => {
      if (window.confirm("Are you sure you want to delete this employee?")) {
        axios.delete(`${baseUrl}/${empId}`).then(() => loadEmployees());
      }
    },
    [baseUrl, loadEmployees]
  );

  // ----------------------------
  // Derived state
  // ----------------------------
  const filteredStates = states.filter((s) => s.countryId === countryId);
  const filteredDistricts = districts.filter((d) => d.stateId === stateId);

  const toggleLanguage = useCallback((langId) => {
    setSelectedLanguages((prev) =>
      prev.includes(langId)
        ? prev.filter((id) => id !== langId)
        : [...prev, langId]
    );
  }, []);

  // ----------------------------
  // Render
  // ----------------------------
  return (
    <div className="container mt-4">
      {/* Your JSX form goes here */}
    </div>
  );
}

export default Checkbox;
