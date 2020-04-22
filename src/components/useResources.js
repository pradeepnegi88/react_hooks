import { useState, useEffect } from "react";
import axios from "axios";
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

export default useResources;
