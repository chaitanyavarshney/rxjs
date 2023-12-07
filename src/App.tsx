import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hook';
import { post } from './app/feature/counter/counterSlice';

function App() {

  const dispatch = useAppDispatch();
  const value =  useAppSelector((state)=>state.info.data)


  const fetchData = async () => {
    try {
      // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      // const json = await response.json();
      // console.log(json.title)
      dispatch(post());
   
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  return (
    <div className="App">
      <p className='bg-slate-300'>check tailwind</p>
      <button onClick={fetchData} className='border-2 border-black rounded-xl p-1'>load..</button>
      <p>{value}</p>
    </div>
  );
}

export default App;
