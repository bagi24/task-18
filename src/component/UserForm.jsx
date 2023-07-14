import React, { useState } from "react";

export const UserForm = ({ onFormSubmit }) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const OnSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(firstName, lastName);
  };

  return (
    <form onSubmit={OnSubmit}>
      <input
        type="text "
        placeholder="firstName"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text "
        placeholder="lastName"
        onChange={(e) => setLastName(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};
