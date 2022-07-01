import React, { useState } from 'react';
import swal from 'sweetalert';




const AddBtn = () => {
    const [billingInfo, setBillInfo] = useState({
        name: "",
        email: "",
        phone: "",
        PaidAmount: "",

    })
    const hendleName = event => {
        setBillInfo({ ...billingInfo, name: event.target.value })
    }
    const hendleEmail = event => {
        setBillInfo({ ...billingInfo, email: event.target.value })
    }
    const hendlePhone = event => {
        setBillInfo({ ...billingInfo, phone: event.target.value })
    }
    const hendlePaidAmount = event => {
        setBillInfo({ ...billingInfo, PaidAmount: event.target.value })
    }

    const hendleSubmit = event => {
        event.preventDefault();
        console.log(billingInfo)
        const url = ('http://localhost:5000/add-billing')
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(billingInfo)
        })
            .then(res => res.json())
            .then(result => console.log(result))
        swal("success!", "You are successfully added new bill!", "success");

    }
    return (

        <div>

            {/*----
  Button trigger modal  
  -----*/}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Add New Bill
            </button>

            {/*---
  Modal  
  ----*/}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-primary" id="staticBackdropLabel">Bill Information</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={hendleSubmit} className="row g-3 needs-validation" noValidate>
                                <div className="">
                                    <label htmlFor="validationCustom01" className="form-label">Full name</label>
                                    <input onBlur={hendleName} type="text" className="form-control" id="validationCustom01" required />

                                </div>
                                <div className="">
                                    <label htmlFor="validationCustom01" className="form-label">Email</label>
                                    <input onBlur={hendleEmail} type="email" className="form-control" id="validationCustom01" required />

                                </div>
                                <div className="">
                                    <label htmlFor="validationCustom01" className="form-label">Phone</label>
                                    <input onBlur={hendlePhone} type="number" minLength={11} className="form-control" id="validationCustom01" required />

                                </div>
                                <div className="">
                                    <label htmlFor="validationCustom01" className="form-label">Paid Amount</label>
                                    <input onBlur={hendlePaidAmount} type="text" className="form-control" id="validationCustom01" required />

                                </div>

                                <div className='col-12'>
                                    <button className="btn btn-primary " type="submit">Submit form</button>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBtn;