import React, { createContext, useContext, useState } from "react";
// import { login, signup } from "../utils/AuthService";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    photo: null, // Simulating profile picture
  });

  const updateUser = (updatedData) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...updatedData, // Update name, email, or photo
    }));
  };

  const handleLogout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, updateUser, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

// // src/context/AuthContext.js
// import React, { createContext, useContext, useState } from "react";
// import { login, signup } from "../utils/AuthService"; // Import functions that handle login and signup

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleLogin = async (identifier, password) => {
//     setLoading(true);
//     try {
//       const data = await login({ identifier, password });
//       setUser(data.user);
//       setError(null);
//     } catch (err) {
//       setError(err.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSignup = async (username, email, password) => {
//     setLoading(true);
//     try {
//       const data = await signup({ username, email, password });
//       setUser(data.user);
//       setError(null);
//     } catch (err) {
//       setError(err.message || "Signup failed");
//     } finally {
//       setLoading(false);
//     }
//   };
//   const updateUser = (updatedData) => {
//     setUser((prevUser) => ({
//       ...prevUser, // Retain existing user properties
//       name: updatedData.username, // Update name
//       email: updatedData.email, // Update email
//     }));
//   };

//   const handleLogout = () => {
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         loading,
//         error,
//         handleLogin,
//         handleSignup,
//         updateUser,
//         handleLogout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
