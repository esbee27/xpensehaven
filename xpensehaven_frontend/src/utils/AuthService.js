// src/utils/authService.js

// Mock database of users
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "user@example.com",
    password: "password123", // In a real application, passwords would be hashed
  },
];

// Utility function to validate email format
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Simulating fake login API
export const login = async ({ identifier, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Find a matching user in the mock database
      const user = users.find(
        (u) => u.email === identifier && u.password === password
      );
      if (user) {
        resolve({
          user: { id: user.id, name: user.name, email: user.email },
        });
      } else {
        reject(new Error("Username or password is incorrect"));
      }
    }, 1000); // Simulate network delay
  });
};

// Simulating fake signup API
export const signup = async ({ username, email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Validate all input fields
      if (!username) return reject(new Error("Username is required"));
      if (!email) return reject(new Error("Email is required"));
      if (!isValidEmail(email))
        return reject(new Error("Invalid email format"));
      if (!password) return reject(new Error("Password is required"));

      // Check for duplicate email
      if (users.some((u) => u.email === email)) {
        return reject(new Error("Email is already in use"));
      }

      // Create new user and add to the mock database
      const newUser = {
        id: users.length + 1,
        name: username,
        email,
        password, // In real applications, hash passwords before storing
      };
      users.push(newUser);

      resolve({ user: { id: newUser.id, name: username, email } });
    }, 1000); // Simulate network delay
  });
};
