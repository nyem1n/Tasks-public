import React from 'react';
import logo from './logo.svg';
import './App.css';

{/* 
  작성자 : shm
  작성일 : 2025.04.07
  내용 : 기능에 대한 내용
  */}

function App() {
  let name = '리액트';

  // const style = {
  //   backgroundColor : 'black',
  //   color : 'white',
  //   fontSize : '48px',
  //   fontWeight : 'bold',
  //   padding : ''
  // }

  return (
    <div className="container">
      <h1 className='test'>Hello, 
        {
        name === '리액트' ? (<h1>YES</h1>) : (<h1>NO</h1>)
        }!!</h1>
      <p>반갑습니다.</p>
      <br/>
      <input></input>
    </div>
  );

}

export default App;
