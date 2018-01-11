import React from 'react';

class Form extends React.Component{

  render(){
    return(
      <form>
        <div className="col-input">
          <input
            type="text"
            name = "itemName"
            placeholder="Add new item"
            value = {this.props.currentItem.itemName}
            onChange = {e=>{this.props.change(e)}}
             />
        </div>
        <div className="col-amount">
          <input
            type="number"
            name = "quantity"
            placeholder="0"
            value = {this.props.currentItem.quantity}
            onChange = {e=>{this.props.change(e)}}
             />
        </div>
        <div className="col-add">
          <input type="button" value="Add" className="addBtn" id="addBtn" onClick = {e=> this.props.onSubmit(e)}/>
        </div>
      </form>

    )
  }
}

export default Form;
