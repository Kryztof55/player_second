import React, {useState} from 'react';
import {useSelector} from 'react-redux';

const Test = (props) =>{

  const [value, setValue] = useState("string test");
  const cita = useSelector((state) => state.citas.citas[0] )  
  console.log(cita)
  return (
    <div>
      <div>The Value is: {cita}</div>
    </div>);
}
export default Test