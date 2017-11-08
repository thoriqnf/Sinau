import React from "react";

import LinkToProfile from "../atoms/LinkToProfile";

import DATAPROFILES from "../data/users";

const ListQuestion = () => (
  <ul>
    {DATAPROFILES.map(user => {
      console.log(user);
      return (
        <li>
          <LinkToProfile user={user} />
        </li>
      );
    })}
  </ul>
);

export default ListQuestion;
