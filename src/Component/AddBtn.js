import React from 'react';

const AddBtn = () => {
    return (

<div>

 {/*----
  Button trigger modal  
  -----*/}
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Add New Bill
</button>

 {/*---
  Modal  
  ----*/}
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-primary" id="staticBackdropLabel">Bill Information</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <form class="row g-3 needs-validation" novalidate>
  <div class="">
    <label for="validationCustom01" class="form-label">Full name</label>
    <input type="text" class="form-control" id="validationCustom01" required/>

  </div>
  <div class="">
    <label for="validationCustom01" class="form-label">Email</label>
    <input type="email" class="form-control" id="validationCustom01" required/>

  </div>
  <div class="">
    <label for="validationCustom01" class="form-label">Phone</label>
    <input type="number" minLength={11} class="form-control" id="validationCustom01" required/>

  </div>
  <div class="">
    <label for="validationCustom01" class="form-label">Paid Amount</label>
    <input type="text" class="form-control" id="validationCustom01" required/>

  </div>
  
   <div className='col-12'>
   <button class="btn btn-primary " type="submit">Submit form</button>
   </div>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default AddBtn;