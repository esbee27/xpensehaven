import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./ProfileSettings.css";

const ProfileSettings = () => {
  const { user, updateUser } = useAuth();
  const [username, setUsername] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [photo, setPhoto] = useState(user?.photo || null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
        updateUser({ photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    if (!email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }
    if (username.trim().length === 0) {
      alert("Username cannot be empty.");
      return;
    }
    updateUser({ name: username, email });
  };

  return (
    <div className="profile-settings">
      <h3>Profile Settings</h3>
      <div className="profile-photo-container">
        {photo ? (
          <img src={photo} alt="Profile" className="profile-pic" />
        ) : (
          <div className="profile-placeholder">No Photo</div>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handlePhotoChange}
        hidden
        id="photo-upload"
      />
      <label htmlFor="photo-upload" className="change-photo-btn">
        Change Photo
      </label>

      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="profile-input"
        />
      </div>

      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="profile-input"
        />
      </div>

      <button onClick={handleSaveChanges} className="save-changes-btn">
        Save Changes
      </button>
    </div>
  );
};

export default ProfileSettings;
