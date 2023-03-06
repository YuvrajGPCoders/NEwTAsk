import React, { useState } from "react";
import { UserData } from "./Userdata";
const FormShorting = () => {
  const [users, setUsers] = useState(data);
  const renderUsers=()=>{
    return users.map((user)=>{
        return(
            <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>
        )
    })
  }
  return (
    <div>
      <div className="table-container"></div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
         
          </tr>
        </thead>
        <tbody>{renderUsers()}</tbody>
      </table>
    </div>
  );
};

export default FormShorting;
