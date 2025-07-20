// page.tsx

import React from "react";
import { AllBlog } from "./blog/allblog";
import db from "../lib/firebase";
// import { useState } from "react";

export default function Page() {
  return <AllBlog />;
}
