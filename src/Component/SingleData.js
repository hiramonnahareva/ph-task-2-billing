import React from 'react';
import DeleteBtn from './DeleteBtn';

const SingleData = ({ singleData }) => {
    const { _id, name, email, phone, PaidAmount } = singleData;
    return (
        <tr>
            <th scope="row">{_id}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{PaidAmount}</td>
            <td>
                <button type="button" className="btn btn-outline-secondary me-4">Edit</button>
                <DeleteBtn id={_id} />
            </td>
        </tr>

    );
};

export default SingleData;