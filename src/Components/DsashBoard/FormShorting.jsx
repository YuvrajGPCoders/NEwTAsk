import React, { useState, useEffect } from "react";

const FormShorting = () => {
  const [userList, setUserlist] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => setUserlist(result))
      .catch((error) => console.log(error));
  }, []);
  const columns = [
    { dataFeilds: "id", text: "Id" },
    { dataFeilds: "name", text: "Name",sort:true },
    { dataFeilds: "username", text: "Username",sort:true },
    { dataFeilds: "email", text: "Email",sort:true },
  ];

  return (
    <div>
      <table className="table">
        <tr>
          <th>ID</th>
          <th>name</th>
          <th>username</th>
          <th>email</th>
        </tr>

        {userList && userList.length > 0
          ? userList.map((usr) => (
              <tr>
                <td>{usr.id}</td>
                <td>{usr.name}</td>
                <td>{usr.username}</td>
                <td>{usr.email}</td>
              </tr>
            ))
          : "loading"}
      </table>
    </div>
  );
};

export default FormShorting;
