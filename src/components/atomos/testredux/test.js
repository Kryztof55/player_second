import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { connect } from "react-redux";
import {fetchList} from '../../../actions/actions';


const Test = (props) =>{
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchList())
  },[]);
  
  const listas = useSelector(state => state.listas.items)
  

  return (
    <ul>
        {listas.map (item => (
            <li>lista {item.name}</li>
        ))}
    </ul>
    );
}
const mapStateToProps = state => ({
  items: state.items

});
export default connect(mapStateToProps)(Test);