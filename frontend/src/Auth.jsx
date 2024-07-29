import React, { useEffect, useState } from "react";
import Admin from "./Admin";
import User from "./User";
import Errorpage from "./Errorpage";

export default function Auth(props) {
  const [login] = useState(props.check);
  if (login[0].role === "admin") {
    return (
      <div>
        <Admin />
      </div>
    );
  } else if (login[0].role === "member") {
    return (
      <div>
        <User />
      </div>
    );
  }
}
