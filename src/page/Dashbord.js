import React from 'react';
import AddBtn from '../Component/AddBtn';
import Header from '../Component/Header';
import Pagenation from '../Component/Pagenation';
import Table from '../Component/Table';

const Dashbord = () => {
    return (
        <div className='mx-5'>
            <Header/>
            <section className='d-flex justify-content-between m-5 align-items-center'> 
        <div class="d-flex w-50">
            <h2 className='me-5'>Billing</h2>
            <input id="input" class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          </div>
        
        <div class="">
        <AddBtn/>
          </div>
             
        </section>
        <Table/>
        <Pagenation/>
        </div>
    );
};

export default Dashbord;