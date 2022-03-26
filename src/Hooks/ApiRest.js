import React, { useEffect, useState } from "react";

const ApiRest = () => {
  const url = "https://api.jsonbin.io/b/623f8a327caf5d6783727164/1";

  const [data, setData] = useState();
  const getData = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();

    setData(responseJson);

  };

  useEffect(() => {
    getData();
  }, []);

  return ([data]);
}
export default ApiRest;
