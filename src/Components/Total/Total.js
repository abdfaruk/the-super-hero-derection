import React from 'react';
import './Total.css';

const Total = (props) => {
    const {total} = props;
    let newTota = 0;
    for(const cart of total){
        newTota = newTota + cart.salary;
    }
    return (
        <div className="total-body">
                <h3>Employee Added: {props.total.length}</h3>
                <p>Total expenses for salary: ${newTota}</p>
                {
                    props.total.map(name => <div><p className="emplee-name">Employee Name: {name.name}</p></div>)
                }
        </div>
    );
};

export default Total;