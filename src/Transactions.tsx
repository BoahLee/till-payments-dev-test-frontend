import React from "react";
import { server } from "./server";

const Transactions = () => {
  const fetchMerchants = async () => {
    const merchants = await server.fetch();
    console.log(merchants);
  };
  return (
    <div>
      <button onClick={fetchMerchants}>Fetch Merchants</button>
    </div>
  );
};

export default Transactions;
