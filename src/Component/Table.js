import React, { useEffect, useState } from 'react';
import UseBillList from '../UseBillList';
import SingleData from './SingleData';

const Table = () => {
    const [billList, setBillList] = UseBillList();
    return (
       <div>
        <table className="table table-bordered border-dark">
            
  <thead>
    <tr>
      <th scope="col">Bill Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Paid Amount</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        billList.map(singleData => <SingleData  key={singleData._id} singleData={singleData}></SingleData> )
    }
  </tbody>
</table>
       </div>
    );
};

export default Table;