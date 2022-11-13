import axios from "axios";
import React, { useState, useEffect } from "react";
import "./PassengerList.css";

const PassengerList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/users");
        setData(res.data.users);
        return;
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  });

  useEffect(() => {
    console.log("Hi");
  }, []);

  return (
    <div className="table-container">
      {data.length ? (
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {data &&
              data.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.company.name}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : (
        <h3 className="no-user">No Users</h3>
      )}
    </div>
  );
};

export default PassengerList;
