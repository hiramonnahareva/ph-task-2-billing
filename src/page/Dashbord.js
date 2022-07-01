import React from 'react';
import AddBtn from '../Component/AddBtn';
import Header from '../Component/Header';
import Pagenation from '../Component/Pagenation';
import Table from '../Component/Table';

const Dashbord = () => {
    return (
        <div >
            <Header/>
            <div className='container-lg'>
            <section className='d-flex justify-content-between my-5 align-items-center'> 
        <div className="d-flex w-50">
            <h2 className='me-5'>Billing</h2>
            <input id="input" className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          </div>
        
        <div className="">
        <AddBtn/>
          </div>
             
        </section>
        <Table/>
        <Pagenation/>
        </div>
        </div>
    );
};

export default Dashbord;