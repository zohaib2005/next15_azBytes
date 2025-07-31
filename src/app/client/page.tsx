"use client";

import { useEffect, useState } from "react";
// import { serverFun } from "@/utils/server-lib";
import { useRootContext } from "@/components/UserContext";

export default function ClientPage() {
  const [value, setValue] = useState("");

  const rootUser = useRootContext();

  // const res = serverFun();

  useEffect(() => {
    setValue("Hello Next.js");
  }, []);
  console.log("Client Component", value);
  return <h2>Client Page - {rootUser.age}</h2>;
}
