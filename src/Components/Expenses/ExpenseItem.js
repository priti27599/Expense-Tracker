import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    // const expenseDate = new Date().toISOString()
    // const expenseName = "Study Loan EMI";
    // const expensePrice = 10000;

    //const [title, setTitle] = useState(props.title)

    // const clickHandler = () => {
    //     setTitle("Home Loan");
    // }

    return (
        <li>
        <Card className='expense-item'>
            {/* <div>{props.date.toDateString() }</div> */}
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>RS {props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change title</button> */}
        </Card>
        </li>  
    )
}

export default ExpenseItem;