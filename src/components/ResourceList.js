import React, { useState, useEffect } from "react";
import axios from "axios";
import { getState } from "expect/build/jestMatchersObject";

const useResources = resource => {
  const [resources, setResources] = useState([]);

  const loadData = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResources(response.data);
  };
  useEffect(() => {
    loadData();
  }, [resource]);

  return resources;
};

const ResourceList = props => {
  const resources = useResources(props.resource);
  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
