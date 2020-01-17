import React, {useState} from 'react';
import {useSelector} from 'react-redux';

const Test = (props) =>{

  const [value, setValue] = useState("string test");
  const lista = useSelector((state) => state.listas.items[0] )  
  console.log(lista)
  return (
    <div>
      <div>The Value is: {lista}</div>
    </div>);
}
export default Test