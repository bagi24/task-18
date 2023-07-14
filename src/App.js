import React, { useEffect, useState } from "react";
import { UserForm } from "./component/UserForm";

const App = () => {
  const API_KEY = "p1-yz9K6wHZHlBmPU7zAUjGND_wInTjlod9UnhxR23ybyLUBVg";

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("/api/v1/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Response Faield");
        return res.json();
      })
      .then((data) =>
        setUserList(
          data.items.map((user) => {
            return {
              firstName: user.firstName,
              lastName: user.lastName,
              id: user._uuid,
            };
          })
        )
      )
      .catch((Error) => console.log(Error));
  }, []);

  const getData = () => {
    fetch("/api/v1/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Response Faield");
        return res.json();
      })
      .then((data) =>
        setUserList(
          data.items.map((user) => {
            return {
              firstName: user.firstName,
              lastName: user.lastName,
              id: user._uuid,
            };
          })
        )
      )
      .catch((Error) => console.log(Error));
  };

  const onFormSubmit = (firstName, lastName) => {
    fetch("/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },

      body: JSON.stringify([{ firstName, lastName }]),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Response Faield");
        return res.json();
      })
      .then((data) =>
        setUserList((prev) => [
          {
            firstName: data.items[0].firstName,
            lastName: data.items[0].lastName,
            id: data.items[0]._uuid,
          },
          ...prev,
        ])
      )
      .catch((Error) => console.log(Error));
  };

  return (
    <div className="App">
      <UserForm onFormSubmit={onFormSubmit} />
      <button onClick={getData}>Get Data</button>
      <button onClick={() => setUserList([])}>Delete Data</button>

      {userList.map((user) => (
        <div key={user.id}>
          <h3> {user.firstName}</h3>
          <h3> {user.lastName}</h3>
        </div>
      ))}
    </div>
  );
};

export default App;
