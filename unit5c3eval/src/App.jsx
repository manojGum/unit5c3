import {Routes,Route} from "react-router-dom"
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
import { ProtectedRoute } from "./components/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" elemnetn={<Home />}></Route>
      <Route path="/EmployeeList" elemnetn={<EmployeeList />}> </Route>
      <Route path="/Admin" elemnetn={<Admin />}></Route>
      <Route path="/Login" elemnetn={<Login /> }></Route>
    </Routes>
    </div>
  );
}

export default App;