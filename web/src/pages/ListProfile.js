import React from "react";

import LinkToProfile from "../atoms/LinkToProfile";

import DATAPROFILES from "../data/users";

const ListProfile = () => (
  <ul>
    {DATAPROFILES.map(user => {
      return (
        <li>
          <LinkToProfile user={user} />
        </li>
      );
    })}
  </ul>
);

export default ListProfile;
