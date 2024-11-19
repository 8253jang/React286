import React from 'react';
import { useSearchParams } from 'react-router-dom';
const Admin = () => {
    //const [params, setParams] = useSearchParams();
    const [params] = useSearchParams();//ex) ~~admin?name=value&name=value
    console.log(params);
    return (
        <div>
             <h3>Admin입니다. : {params.get("name")}</h3>
        </div>
    );
};

export default Admin;