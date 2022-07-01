import { useEffect, useState } from 'react';

const UseBillList = () => {
    const [data, setData] = useState([])
    useEffect(()=> {
        fetch('http://localhost:5000/billing-list')
        .then(res => res.json())
        .then(data => setData(data))
    }, [data])
    return [data, setData]
};

export default UseBillList;