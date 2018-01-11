import React from 'react';
import './Form.css';
const Form = (props)=>
      <form onSubmit = {props.onSubmit}>
        <div className="col-input">
          <input
            type="text"
            name = "itemName"
            placeholder="Add new item"
            value = {props.currentItem.itemName}
            onChange = {e=>{props.change(e)}}
             />
        </div>
        <div className="col-amount">
          <input
            type="number"
            name = "quantity"
            placeholder="0"
            value = {props.currentItem.quantity}
            onChange = {e=>{props.change(e)}}
             />
        </div>
        <div className="col-add">
          <input type="submit" value="Add" className="addBtn" id="addBtn" />
        </div>
        <div className="item-added">{props.currentItem.message}</div>
      </form>

export default Form;
