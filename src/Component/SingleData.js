import React from 'react';

const SingleData = ({singleData}) => {
    const {name, email, phone, PaidAmount} = singleData;
    return (
            <tr>
      <th scope="row">1</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{PaidAmount}</td>
      <td>
        <button type="button" class="btn btn-outline-secondary me-4">Edit</button>
        <button type="button" class="btn btn-outline-danger">Delete</button>
        </td>
    </tr>
       
    );
};

export default SingleData;