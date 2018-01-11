import React from 'react';
import './ItemsToShop.css';

class ItemsToShop extends React.Component{
  render(){
    const listItems = this.props.items.map((item, i)=>
      <li key = {i}>
        <label className="list-label">
          <input type="checkbox" className="check" onClick = {(e)=>this.props.moveToShopped(e, i)} />
          <span className="list-item">{item.itemName} - {item.quantity}</span>
        </label>
        <div className="edit-delete">
          <span className="fa-stack fa-lg">
              <i className="fa fa-square fa-stack-2x"></i>
              <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
          </span>
          <span className="fa-stack fa-lg">
              <i className="fa fa-square fa-stack-2x"></i>
              <i className="fa fa-trash fa-stack-1x fa-inverse delete" onClick = {()=>this.props.deleteItem(i)}></i>
            </span>
          </div>
      </li>
    );

    return(
      <section>
      <div className="row">
        <label><h5>Items to shop</h5></label>
        <hr />
      </div>
      <div className="row">
        <ul id="ul-item-list">
          {listItems}
        </ul>
      </div>
      <div className="row">
        <label id="item-shopped">
          <h5>Items shopped <i id="toggle-icon" className="fa fa-caret-down" aria-hidden="true"></i></h5>
        </label>
        <hr />
      </div>
        <div className="row"> {/*item done*/}
          <ul id="ul-item-shopped">
            {this.props.itemShopped.map((item, i)=>
              <li key = {i}>
                <label className="list-label">
                  <span className="list-item">{item.itemName} - {item.quantity}</span>
                </label>
                <div className="edit-delete">
                  <span className="fa-stack fa-lg">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-undo fa-stack-1x fa-inverse" onClick = {()=>this.props.undoItem(i)}></i>
                  </span>
                  <span className="fa-stack fa-lg">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-trash fa-stack-1x fa-inverse delete" onClick = {()=>this.props.deleteShoppedItem(i)}></i>
                    </span>
                  </div>
              </li>

             )}
          </ul>
        </div>
      </section>
    )
  }
}


export default ItemsToShop;
