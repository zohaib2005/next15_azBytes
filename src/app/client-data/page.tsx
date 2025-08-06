"use client";

import { useEffect, useState } from "react";

export default function ClientData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const userData = await response.json();
        setData(userData);
      } catch (error) {
        if (error instanceof Error) {
          alert("hhh");
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }
    getUsers();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error</h2>;
  }

  return (
    <div>
      <h2>Client Data</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <h3>Name: {user.name}</h3>
            <p>Email: {user.email}</p>
            {/* <p>Phone: {user.phone}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
