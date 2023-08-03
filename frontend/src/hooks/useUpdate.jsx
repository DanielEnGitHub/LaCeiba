import React, { useState } from "react";

const useUpdate = ({getById, onOpen}) => {
  // state
  const [update, setUpdate] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});

  const handleUpdate = (id) => {
    const getProvider = async () => {
      const data = await getById(id);
      setDataUpdate(data);
      onOpen();
    };

    getProvider();
    setUpdate(true);
  };

  return { update, setUpdate, dataUpdate, setDataUpdate, handleUpdate };
};

export default useUpdate;
