import React from "react";
import Link from "./Link";

const LinkToProfile = props => (
  <Link to={`/profile/${props.users._id}`}>{props.user.name}</Link>
);

export default LinkToProfile;
