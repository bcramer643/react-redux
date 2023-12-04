import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deposit } from './redux/accountSlice';
import { withdraw } from './redux/accountSlice';
import { requestLoan } from './redux/accountSlice';
//import depositAction

function App() {
  const [depositAmount, setDepositAmount] = useState()
  const [withdrawAmount, setWithdrawAmount] = useState()

  const [loanAmount, setLoanAmount] = useState()
  const [loanPurpose, setLoanPurpose] = useState('')
  const stateValues = useSelector(state => state)
  console.log('Entire Store: ', stateValues)
  const dispatch = useDispatch();
  let amount = stateValues.account.balance;
  if (amount) {
    return (
      <div >

        <h2> Your Account Operation</h2>
        <div className='container'>
          <label for='deposit'>Deposit</label>
          <input
            type='number'
            id='deposit'
            onChange={(e) => {
              setDepositAmount(e.target.value)
            }} />
          <button onClick={() => dispatch(deposit(depositAmount))}>DEPOSIT</button><br />

          <label for='withdraw'>Withdraw</label>
          <input
            type='number'
            id='withdraw'
            onChange={(e) => {
              setWithdrawAmount(e.target.value)
            }} />

          <button onClick={() => dispatch(withdraw(withdrawAmount))}>WITHDRAW</button><br />

          <label for='requestLoan'>Request Loan</label>
          <input
            type='number'
            placeholder='loan amount'
            id='requestLoan'
            onChange={(e) => {
              setLoanAmount(e.target.value)
            }} />

          <input
            type='text'
            placeholder='loan purpose'
            id='loan Purpose'
            onChange={(e) => {
              setLoanPurpose(e.target.value)
            }} />
          <button onClick={() => dispatch(requestLoan(loanAmount, loanPurpose))}>REQUEST LOAN</button><br />

          <label for='payBack'>Pay Back $X</label>
          <button>PAY LOAN</button><br />

          <p>{stateValues.account.balance}</p>

        </div>

      </div>
    );
  }

  else {
    return (
      <div >

        <h2> Your Account Operation</h2>
        <div className='container'>
          <label for='deposit'>Deposit</label>
          <input
            type='number'
            id='deposit'
            onChange={(e) => {
              setDepositAmount(e.target.value)
            }} />
          <button onClick={() => dispatch(deposit(depositAmount))}>DEPOSIT</button><br />

          <label for='withdraw'>Withdraw</label>
          <input type='number' id='withdraw' />
          <button>WITHDRAW</button><br />

          <label for='requestLoan'>Request Loan</label>
          <input type='number' placeholder='loan amount' id='requestLoan' />
          <input type='text' placeholder='loan purpose' id='loan Purpose' />
          <button>REQUEST LOAN</button><br />

          <label for='payBack'>Pay Back $X</label>
          <button>PAY LOAN</button><br />

        </div>

      </div>
    );
  }

}


export default App;
