import React, { useEffect, useState } from 'react';
import SingleData from './SingleData';

const Table = () => {
    const [data, setData] = useState([])
    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    return (
       <div>
        <table class="table table-bordered border-dark">
            
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
        data.map(singleData => <SingleData singleData={singleData}></SingleData> )
    }
  </tbody>
</table>
       </div>
    );
};

export default Table;