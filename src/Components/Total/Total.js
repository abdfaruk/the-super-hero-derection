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
                    props.total.map(name => <ul>
                        Employee Name: {name.name}
                    </ul>)
                }
        </div>
    );
};

export default Total;