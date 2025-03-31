import React, { useContext, useEffect, useState } from "react";
import Login from "./component/Auth/Login";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard";
import AdminDashboard from "./component/Dashboard/AdminDashboard";
import { getLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null); // user state to store current logged-in user
  const [loggedInUserData, setLoggedInUserData] = useState(null); // Data for logged-in user
  const [userData, setUserData] = useContext(AuthContext); // To fetch employee data

  useEffect(() => {
    // Check if user is stored in localStorage
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setUser(parsedUser.role); // Set the user's role (admin or employee)
      setLoggedInUserData(parsedUser.data); // Set the logged-in user data
    }
  }, []); // Dependency array is empty to run on mount

  const handleLogin = (email, password) => {
    // Check if admin credentials are correct
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      // Find employee matching credentials
      const employee = userData.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("User data is not available!");
    }
  };

  // Handle logout functionality
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // Clear localStorage
    setUser(null); // Set user state to null
    setLoggedInUserData(null); // Clear logged-in user data
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} /> // Show login page if no user is logged in
      ) : (
        // Once a user is logged in, show the appropriate dashboard
        <>
          {user === "admin" && <AdminDashboard changeUser={setUser} />}
          {user === "employee" && (
            <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
          )}
          {/* <button onClick={handleLogout}>Logout</button>  */}
        </>
      )}
    </>
  );
}

export default App;
