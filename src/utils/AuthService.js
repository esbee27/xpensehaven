// src/utils/authService.js

// Simulating fake login API
export const login = async ({ identifier, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (identifier === "user@example.com" && password === "password123") {
        resolve({
          user: { id: 1, name: "John Doe", email: "user@example.com" },
        });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000); // Simulate network delay
  });
};

// Simulating fake signup API
export const signup = async ({ username, email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username && email && password) {
        resolve({ user: { id: 2, name: username, email } });
      } else {
        reject(new Error("All fields are required"));
      }
    }, 1000); // Simulate network delay
  });
};
