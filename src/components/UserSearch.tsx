"use client";
import { useState } from "react";

export default function UserSearch() {
  const [val, setVal] = useState("");
  return (
    <>
      <input
        className="text-white"
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <p>Searchkkk</p>
    </>
  );
}
