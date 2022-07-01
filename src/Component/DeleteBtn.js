import React from 'react';
import UseBillList from '../UseBillList';
import swal from 'sweetalert';

const DeleteBtn = ({id}) => {
    
    const [billList, setBillList] = UseBillList()
    const handleDelete = id => {
        const sure = window.confirm('Are you sure to delete')
          
       if(sure){
           const url = `http://localhost:5000/billing/${id}`;
           fetch(url, {
               method: 'DELETE'
           })
           .then (res => res.json())
           .then(data => {
           const remaining = billList.filter(billList => billList._id !== id);
           swal("success!", "You are successfully added new bill!", "success");
           setBillList(remaining);
            } )
       }
   }
    return (
            <button onClick={() => handleDelete(id)} type="button" className="btn btn-outline-danger">Delete</button>
       
    );
};

export default DeleteBtn;