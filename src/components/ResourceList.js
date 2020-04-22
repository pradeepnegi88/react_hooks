import React, { useState, useEffect } from "react";
import axios from "axios";
import { getState } from "expect/build/jestMatchersObject";
const ResourceList = props => {
  const [resources, setResources] = useState([]);

  const loadData = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${props.resource}`
    );
    setResources(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return <div> {resources.length}</div>;
};

export default ResourceList;
