import React, { useState, useEffect } from "react";
import useResources from "./useResources";

const UserList = props => {
  const resources = useResources(props.resource);
  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
