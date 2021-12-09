

import React from 'react';
import './App.css';
import GetRows from './GetRows';
import TableHeader from './TableHeader';
export const testContext = React.createContext();
const About=()=>{
    const employeeInfo = [
        {
            id:1,
            firstName:"arjun",
            lastName:"vaishak",
            age:29,
            joiningdate:"10-11-2021",
            position:"developer",
            country:"India",
            city:"Hyderabad"
        },
        {
            id:2,
            firstName:"Sathya",
            lastName:"shiva",
            age:26,
            joiningdate:"11-11-2021",
            position:"developer",
            country:"India",
            city:"Hyderabad"
        },
        {
            id:3,
            firstName:"lekshmi",
            lastName:"varma",
            age:23,
            joiningdate:"12-11-2020",
            position:"HR Manager",
            country:"India",
            city:"Hyderabad"
        },
    ];
    const employeeList = employeeInfo.map(std => <GetRows std={std} />)
    return (
        <div>
            <h1 className="App">Employee Details...</h1> 
            <TableHeader /> 
            {employeeList}
        </div>
    );
}

export default About;