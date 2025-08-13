import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import { useState } from "react";
import Role from "./SuperAdmin/Role";
import User from "./SuperAdmin/User";
import UserRole from "./SuperAdmin/UserRole";
import SuperHeader from "./Components/SuperHeader";
import Sidebar from "./Components/Sidebar";
import MultiselectDropdown from "./Fullstack/MultiselectDropdown";
import CheckBox from "./Fullstack/Checkbox";
import CQRSDesignPattern from "./Fullstack/CQRSDesignPattern";
import FacebookAuth from "./Fullstack/FacebookAuth";
import GoogleAuth from "./Fullstack/GoogleAuth";
import ImageUpload from "./Fullstack/ImageUpload";
import JWTAuth from "./Fullstack/JWTAuth";
import Logger from "./Fullstack/Logger";
import Microservices from "./Fullstack/Microservices";
import OnionArchitecture from "./Fullstack/OnionArchitecture";
import Pagination from "./Fullstack/Pagination";
import RadioButton from "./Fullstack/RadioButton";
import Searching from "./Fullstack/Searching";
import SocietyManagement from "./Projects/SocietyManagement";
import JobPortal from "./Projects/JobPortal";
import EmployeePayroll from "./Projects/EmployeePayroll";
import AttendancePortal from "./Projects/AttendancePortal";
import Ecommerce from "./Projects/Ecommerce";
import DigitalLibrary from "./Projects/DigitalLibrary";
import HospitalManagement from "./Projects/HospitalManagement";
import Array from "./DSA/Array";
import Arraylist from "./DSA/Arraylist";
import List from "./DSA/List";
import Hashmap from "./DSA/Hashmap";
import Dictionary from "./DSA/Dictionary";
import Hashtable from "./DSA/Hashtable";
import Binarysearch from "./DSA/Binarysearch";
import Linearsearch from "./DSA/Linearsearch";
import Selectionsort from "./DSA/Selectionsort";
import Quicksort from "./DSA/Quicksort";
import Linkedlist from "./DSA/Linkedlist";
import Dsaquestions from "./DSA/Dsaquestions";
import Sqlcrud from "./SQL/Sqlcrud";
import Sqlstoredprocedure from "./SQL/Sqlstoredprocedure";
import Sqlfunctions from "./SQL/Sqlfunctions";
import Sqltrigger from "./SQL/Sqltrigger";
import Sqlcursor from "./SQL/Sqlcursor";
import Sqlprofiler from "./SQL/Sqlprofiler";
import Sqlacid from "./SQL/Sqlacid";
import Sqlindexing from "./SQL/Sqlindexing";
import Sqlnormalization from "./SQL/Sqlnormalization";
import Sqlqueriescommands from "./SQL/Sqlqueriescommands";
import Sqlquestions from "./SQL/Sqlquestions";
import Awsaccountsetup from "./AWS/Awsaccountsetup";
import Awsiam from "./AWS/Awsiam";
import Awsectwoinstance from "./AWS/Awsectwoinstance";
import Awsthreebucket from "./AWS/Awsthreebucket";
import Awslambda from "./AWS/Awslambda";
import Awsdynamodb from "./AWS/Awsdynamodb";
import Awsvpc from "./AWS/Awsvpc";
import Awscloudwatch from "./AWS/Awscloudwatch";
import Awsquestions from "./AWS/Awsquestions";
import Azureaccountsetup from "./Azure/Azureaccountsetup";
import Azureblobstorage from "./Azure/Azureblobstorage";
import Azurefuncions from "./Azure/Azurefuncions";
import Azureappinsight from "./Azure/Azureappinsight";
import Azurecosmosdb from "./Azure/Azurecosmosdb";
import Azurevirtualmachines from "./Azure/Azurevirtualmachines";
import Azureaks from "./Azure/Azureaks";
import Azuresql from "./Azure/Azuresql";
import Azuremonitor from "./Azure/Azuremonitor";
import Azurerbac from "./Azure/Azurerbac";
import Azurequestions from "./Azure/Azurequestions";
import Cicdpipelines from "./DevOps/Cicdpipelines";
import Jenkins from "./DevOps/Jenkins";
import Docker from "./DevOps/Docker";
import Kubernetes from "./DevOps/Kubernetes";
import Ansible from "./DevOps/Ansible";
import Terraform from "./DevOps/Terraform";
import Monitoring from "./DevOps/Monitoring";
import Gitgithub from "./DevOps/Gitgithub";
import Devopsbestpractices from "./DevOps/Devopsbestpractices";
import Devopsquestions from "./DevOps/Devopsquestions";
import Reactprojectsetup from "./React/Reactprojectsetup";
import Reactmultiselectdropdown from "./React/Reactmultiselectdropdown";
import Reactradiobutton from "./React/Reactradiobutton";
import Reactcheckbox from "./React/Reactcheckbox";
import Reactsearching from "./React/Reactsearching";
import Reactpagination from "./React/Reactpagination";
import Reactjwtauth from "./React/Reactjwtauth";
import Reactgoogleauth from "./React/Reactgoogleauth";
import Reactfacebookauth from "./React/Reactfacebookauth";
import Reactlocalstorage from "./React/Reactlocalstorage";
import Reactzustand from "./React/Reactzustand";
import Reactredux from "./React/Reactredux";
import Reactquestions from "./React/Reactquestions";
import Nextprojectsetup from "./Next/Nextprojectsetup";
import Nextmultiselectdropdown from "./Next/Nextmultiselectdropdown";
import Nextradiobutton from "./Next/Nextradiobutton";
import Nextcheckbox from "./Next/Nextcheckbox";
import Nextsearching from "./Next/Nextsearching";
import Nextpagination from "./Next/Nextpagination";
import Nextjwtauth from "./Next/Nextjwtauth";
import Nextgoogleauth from "./Next/Nextgoogleauth";
import Nextfacebookauth from "./Next/Nextfacebookauth";
import Nextlocalstorage from "./Next/Nextlocalstorage";
import Nextzustand from "./Next/Nextzustand";
import Nextredux from "./Next/Nextredux";
import Nextreducer from "./Next/Nextreducer";
import Nextquestions from "./Next/Nextquestions";
import Reactreducer from "./React/Reactreducer";
import Netquestions from "./Dotnet/Netquestions";
import Netprojectsetup from "./Dotnet/Netprojectsetup";
import Javaquestions from "./Java/Javaquestions";
import Javaprojectsetup from "./Java/Javaprojectsetup";
import Netcheckbox from "./Dotnet/Netcheckbox";
import Netcqrsdesignpattern from "./Dotnet/Netcqrsdesignpattern";
import Netfacebookauth from "./Dotnet/Netfacebookauth";
import Netgoogleauth from "./Dotnet/Netgoogleauth";
import Netimageupload from "./Dotnet/Netimageupload";
import Netjwtauth from "./Dotnet/Netjwtauth";
import Netlogger from "./Dotnet/Netlogger";
import Netmicroservices from "./Dotnet/Netmicroservices";
import Netmultiselectdropdown from "./Dotnet/Netmultiselectdropdown";
import Nextonionarchitecture from "./Next/Nextonionarchitecture";
import Netpagination from "./Dotnet/Netpagination";
import Netradiobutton from "./Dotnet/Netradiobutton";
import Netsearching from "./Dotnet/Netsearching";
import Javacheckbox from "./Java/Javacheckbox";
import Javacqrsdesignpattern from "./Java/Javacqrsdesignpattern";
import Javafacebookauth from "./Java/Javafacebookauth";
import Javagoogleauth from "./Java/Javagoogleauth";
import Javaimageupload from "./Java/Javaimageupload";
import Javajwtauth from "./Java/Javajwtauth";
import Javalogger from "./Java/Javalogger";
import Javamicroservices from "./Java/Javamicroservices";
import Javamultiselectdropdown from "./Java/Javamultiselectdropdown";
import Javaonionarchitecture from "./Java/Javaonionarchitecture";
import Javaradiobutton from "./Java/Javaradiobutton";
import Javapagination from "./Java/Javapagination";
import Javasearching from "./Java/Javasearching";
import Nodecheckbox from "./Node/Nodecheckbox";
import Nodefacebookauth from "./Node/Nodefacebookauth";
import Nodegoogleauth from "./Node/Nodegoogleauth";
import Nodeimageupload from "./Node/Nodeimageupload";
import Nodejwtauth from "./Node/Nodejwtauth";
import Nodelogger from "./Node/Nodelogger";
import Nodemicroservices from "./Node/Nodemicroservices";
import Nodemultiselectdropdown from "./Node/Nodemultiselectdropdown";
import Nodepagination from "./Node/Nodepagination";
import Noderadiobutton from "./Node/Noderadiobutton";
import Nodesearching from "./Node/Nodesearching";
import Nodeprojectsetup from "./Node/Nodeprojectsetup";
import Nodequestions from "./Node/Nodequestions";
import Nextimageupload from "./Next/Nextimageupload";
import Country from "./Fullstack/Country";
import State from "./Fullstack/State";
import District from "./Fullstack/District";
import Netcountry from "./Dotnet/Netcountry";
import Netdistrict from "./Dotnet/Netdistrict";
import Netstate from "./Dotnet/Netstate";
import Javacountry from "./Java/Javacountry";
import Javadistrict from "./Java/Javadistrict";
import Javastate from "./Java/Javastate";
import Nodecountry from "./Node/Nodecountry";
import Nodedistrict from "./Node/Nodedistrict";
import Nodestate from "./Node/Nodestate";
import Reactcountry from "./React/Reactcountry";
import Reactstate from "./React/Reactstate";
import Reactdistrict from "./React/Reactdistrict";
import Nextcountry from "./Next/Nextcountry";
import Nextdistrict from "./Next/Nextdistrict";
import Nextstate from "./Next/Nextstate";
import Languages from "./Fullstack/Languages";

function App() {
  const [activeMenu, setActiveMenu] = useState("Fullstack");

  return (
    <>
      <div style={{ position: "sticky", top: 0, zIndex: 1000 }}>
        <SuperHeader />
        <Header setActiveMenu={setActiveMenu} />
      </div>

      <div className="d-flex" style={{ height: "calc(100vh - 100px)", overflow: "hidden" }}>
        <Sidebar activeMenu={activeMenu} style={{ height: "100%", overflowY: "auto" }} />
        <div className="flex-grow-1 p-4" style={{ height: "100%", overflowY: "auto" }}>
          <Routes>
            <Route path="/role" element={<Role />} />
            <Route path="/user" element={<User />} />
            <Route path="/userrole" element={<UserRole />} />

            <Route path="/societymanagement" element={<SocietyManagement />} />
            <Route path="/jobportal" element={<JobPortal />} />
            <Route path="/employeepayroll" element={<EmployeePayroll />} />
            <Route path="/attendanceportal" element={<AttendancePortal />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/digitallibrary" element={<DigitalLibrary />} />
            <Route path="/hospitalmanagement" element={<HospitalManagement />} />

            <Route path="/language" element={<Languages />} />
            <Route path="/country" element={<Country />} />
            <Route path="/state" element={<State />} />
            <Route path="/district" element={<District />} />
            <Route path="/radiobutton" element={<RadioButton />} />
            <Route path="/checkbox" element={<CheckBox />} />
            <Route path="/multiselectdropdown" element={<MultiselectDropdown />} />
            <Route path="/cqrsdesignpattern" element={<CQRSDesignPattern />} />
            <Route path="/facebookauth" element={<FacebookAuth />} />
            <Route path="/googleauth" element={<GoogleAuth />} />
            <Route path="/imageupload" element={<ImageUpload />} />
            <Route path="/jwtauth" element={<JWTAuth />} />
            <Route path="/logger" element={<Logger />} />
            <Route path="/microservices" element={<Microservices />} />
            <Route path="/onionarchitecture" element={<OnionArchitecture />} />
            <Route path="/pagination" element={<Pagination />} />
            <Route path="/searching" element={<Searching />} />

            <Route path="/netcountry" element={<Netcountry />} />
            <Route path="/netdistrict" element={<Netdistrict />} />
            <Route path="/netstate" element={<Netstate />} />
            <Route path="/netcheckbox" element={<Netcheckbox />} />
            <Route path="/netcqrsdesignpattern" element={<Netcqrsdesignpattern />} />
            <Route path="/netfacebookauth" element={<Netfacebookauth />} />
            <Route path="/netgoogleauth" element={<Netgoogleauth />} />
            <Route path="/netimageupload" element={<Netimageupload />} />
            <Route path="/netjwtauth" element={<Netjwtauth />} />
            <Route path="/netlogger" element={<Netlogger />} />
            <Route path="/netmicroservices" element={<Netmicroservices />} />
            <Route path="/netmultiselectdropdown" element={<Netmultiselectdropdown />} />
            <Route path="/netonionarchitecture" element={<Nextonionarchitecture />} />
            <Route path="/netpagination" element={<Netpagination />} />
            <Route path="/netradiobutton" element={<Netradiobutton />} />
            <Route path="/netsearching" element={<Netsearching />} />
            <Route path="/netquestions" element={<Netquestions />} />
            <Route path="/netprojectsetup" element={<Netprojectsetup />} />

            <Route path="/javacountry" element={<Javacountry />} />
            <Route path="/javadistrict" element={<Javadistrict />} />
            <Route path="/javacheckbox" element={<Javacheckbox />} />
            <Route path="/javacqrsdesignpattern" element={<Javacqrsdesignpattern />} />
            <Route path="/javastate" element={<Javastate  />} />
            <Route path="/javafacebookauth" element={<Javafacebookauth />} />
            <Route path="/javagoogleauth" element={<Javagoogleauth />} />
            <Route path="/javaimageupload" element={<Javaimageupload />} />
            <Route path="/javajwtauth" element={<Javajwtauth />} />
            <Route path="/javalogger" element={<Javalogger />} />
            <Route path="/javamicroservices" element={<Javamicroservices />} />
            <Route path="/javamultiselectdropdown" element={<Javamultiselectdropdown />} />
            <Route path="/javaonionarchitecture" element={<Javaonionarchitecture />} />
            <Route path="/javapagination" element={<Javapagination />} />
            <Route path="/javaradiobutton" element={<Javaradiobutton />} />
            <Route path="/javasearching" element={<Javasearching />} />
            <Route path="/javaquestions" element={<Javaquestions />} />
            <Route path="/javaprojectsetup" element={<Javaprojectsetup />} />

            <Route path="/nodeprojectsetup" element={<Nodeprojectsetup />} />
            <Route path="/nodecountry" element={<Nodecountry />} />
            <Route path="/nodedistrict" element={<Nodedistrict />} />
            <Route path="/nodecheckbox" element={<Nodecheckbox />} />
            <Route path="/nodestate" element={<Nodestate />} />
            <Route path="/nodefacebookauth" element={<Nodefacebookauth />} />
            <Route path="/nodegoogleauth" element={<Nodegoogleauth />} />
            <Route path="/nodeimageupload" element={<Nodeimageupload />} />
            <Route path="/nodejwtauth" element={<Nodejwtauth />} />
            <Route path="/nodelogger" element={<Nodelogger />} />
            <Route path="/nodemicroservices" element={<Nodemicroservices />} />
            <Route path="/nodemultiselectdropdown" element={<Nodemultiselectdropdown />} />
            <Route path="/nodepagination" element={<Nodepagination />} />
            <Route path="/noderadiobutton" element={<Noderadiobutton />} />
            <Route path="/nodesearching" element={<Nodesearching />} />
            <Route path="/nodequestions" element={<Nodequestions />} />

            <Route path="/array" element={<Array />} />
            <Route path="/arraylist" element={<Arraylist />} />
            <Route path="/list" element={<List />} />
            <Route path="/hashmap" element={<Hashmap />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/hashtable" element={<Hashtable />} />
            <Route path="/binarysearch" element={<Binarysearch />} />
            <Route path="/linearsearch" element={<Linearsearch />} />
            <Route path="/selectionsort" element={<Selectionsort />} />
            <Route path="/quicksort" element={<Quicksort />} />
            <Route path="/linkedlist" element={<Linkedlist />} />
            <Route path="/dsaquestions" element={<Dsaquestions />} />

            <Route path="/sqlcrud" element={<Sqlcrud />} />
            <Route path="/sqlstoredprocedure" element={<Sqlstoredprocedure />} />
            <Route path="/sqlfunctions" element={<Sqlfunctions />} />
            <Route path="/sqltrigger" element={<Sqltrigger />} />
            <Route path="/sqlcursor" element={<Sqlcursor />} />
            <Route path="/sqlprofiler" element={<Sqlprofiler />} />
            <Route path="/sqlacid" element={<Sqlacid />} />
            <Route path="/sqlindexing" element={<Sqlindexing />} />
            <Route path="/sqlnormalization" element={<Sqlnormalization />} />
            <Route path="/sqlqueriescommands" element={<Sqlqueriescommands />} />
            <Route path="/sqlquestions" element={<Sqlquestions />} />

            <Route path="/awsaccountsetup" element={<Awsaccountsetup />} />
            <Route path="/awsiam" element={<Awsiam />} />
            <Route path="/awsectwoinstance" element={<Awsectwoinstance />} />
            <Route path="/awsthreebucket" element={<Awsthreebucket />} />
            <Route path="/awslambda" element={<Awslambda />} />
            <Route path="/awsdynamodb" element={<Awsdynamodb />} />
            <Route path="/awsvpc" element={<Awsvpc />} />
            <Route path="/awscloudwatch" element={<Awscloudwatch />} />
            <Route path="/awsquestions" element={<Awsquestions />} />

            <Route path="/azureaccountsetup" element={<Azureaccountsetup />} />
            <Route path="/azureblobstorage" element={<Azureblobstorage />} />
            <Route path="/azurefuncions" element={<Azurefuncions />} />
            <Route path="/azureappinsight" element={<Azureappinsight />} />
            <Route path="/azurecosmosdb" element={<Azurecosmosdb />} />
            <Route path="/azurevirtualmachines" element={<Azurevirtualmachines />} />
            <Route path="/azureaks" element={<Azureaks />} />
            <Route path="/azuresql" element={<Azuresql />} />
            <Route path="/azuremonitor" element={<Azuremonitor />} />
            <Route path="/azurerbac" element={<Azurerbac />} />
            <Route path="/azurequestions" element={<Azurequestions />} />
           
            <Route path="/cicdpipelines" element={<Cicdpipelines />} />
            <Route path="/jenkins" element={<Jenkins />} />
            <Route path="/docker" element={<Docker />} />
            <Route path="/kubernetes" element={<Kubernetes />} />
            <Route path="/ansible" element={<Ansible />} />
            <Route path="/terraform" element={<Terraform />} />
            <Route path="/monitoring" element={<Monitoring />} />
            <Route path="/gitgithub" element={<Gitgithub />} />
            <Route path="/devopsbestpractices" element={<Devopsbestpractices />} />
            <Route path="/devopsquestions" element={<Devopsquestions />} />

            <Route path="/reactprojectsetup" element={<Reactprojectsetup />} />
            <Route path="/reactcountry" element={<Reactcountry />} />
            <Route path="/reactstate" element={<Reactstate />} />
            <Route path="/reactdistrict" element={<Reactdistrict />} />
            <Route path="/reactmultiselectdropdown" element={<Reactmultiselectdropdown />} />
            <Route path="/reactradiobutton" element={<Reactradiobutton />} />
            <Route path="/reactcheckbox" element={<Reactcheckbox />} />
            <Route path="/reactsearching" element={<Reactsearching />} />
            <Route path="/reactpagination" element={<Reactpagination />} />
            <Route path="/reactjwtauth" element={<Reactjwtauth />} />
            <Route path="/reactgoogleauth" element={<Reactgoogleauth />} />
            <Route path="/reactfacebookauth" element={<Reactfacebookauth />} />
            <Route path="/reactlocalstorage" element={<Reactlocalstorage />} />
            <Route path="/reactzustand" element={<Reactzustand />} />
            <Route path="/reactredux" element={<Reactredux />} />
            <Route path="/reactreducer" element={<Reactreducer />} />
            <Route path="/reactquestions" element={<Reactquestions />} />

            <Route path="/nextprojectsetup" element={<Nextprojectsetup />} />
            <Route path="/nextcountry" element={<Nextcountry />} />
            <Route path="/nextstate" element={<Nextstate />} />
            <Route path="/nextdistrict" element={<Nextdistrict />} />
            <Route path="/nextmultiselectdropdown" element={<Nextmultiselectdropdown />} />
            <Route path="/nextradiobutton" element={<Nextradiobutton />} />
            <Route path="/nextcheckbox" element={<Nextcheckbox />} />
            <Route path="/nextsearching" element={<Nextsearching />} />
            <Route path="/nextpagination" element={<Nextpagination />} />
            <Route path="/nextjwtauth" element={<Nextjwtauth />} />
            <Route path="/nextgoogleauth" element={<Nextgoogleauth />} />
            <Route path="/nextfacebookauth" element={<Nextfacebookauth />} />
            <Route path="/nextlocalstorage" element={<Nextlocalstorage />} />
            <Route path="/nextimageupload" element={<Nextimageupload />} />
            <Route path="/nextzustand" element={<Nextzustand />} />
            <Route path="/nextredux" element={<Nextredux />} />
            <Route path="/nextreducer" element={<Nextreducer />} />
            <Route path="/nextquestions" element={<Nextquestions />} />

          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
