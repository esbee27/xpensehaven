import React from "react";
// import ActionLinks from "./ActionLinks"; // Import the ActionLinks component
import "./NewUserPlaceholder.css"; // Placeholder-specific styles

function NewUserPlaceholder() {
  return (
    <div className="new-user-placeholder">
      <p className="placeholder-text">
        This space feels lonely—let’s fill it up!
      </p>
      {/* <ActionLinks /> */}
    </div>
  );
}

export default NewUserPlaceholder;
