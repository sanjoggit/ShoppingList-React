import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import ItemsToShop from './components/ItemsToShop.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      items: [
        {
          itemName: 'Mango',
          quantity: 20
        },
        {
          itemName: 'Banana',
          quantity: 20
        },
        {
          itemName: 'Apple',
          quantity: 20
        },
        {
          itemName: 'Grapes',
          quantity: 20
        },
        {
          itemName: 'Orange',
          quantity: 20
        }
      ],
        itemName: '',
        quantity: '',
      itemShopped: []

    }
  }
  change = e=>{
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit = e=>{
    e.preventDefault();
    const items = this.state.items.concat({
      itemName: this.state.itemName,
      quantity: this.state.quantity
    });
    this.setState({
      items,
      itemName:'',
      quantity: ''
    });
  }

  deleteItem = (i)=>{
    const items = this.state.items;
    items.splice(i, 1);
    this.setState({
      items
    });
  }


  moveToShopped = (e, i)=>{
    //e.preventDefault();
    const items = this.state.items;
    const itemToShop = items[i];
    const itemShopped = this.state.itemShopped.concat(itemToShop);
    items.splice(i, 1);
    this.setState({
      itemShopped,
      items
    });
  }

  deleteShoppedItem = (i)=>{
    const shoppedItem = this.state.itemShopped;
    shoppedItem.splice(i, 1);
    this.setState({
      shoppedItem
    });

  }
  undoItem = (i)=>{
    const shoppedItem = this.state.itemShopped;
    //shoppedItem[i];
    const itemToShop = this.state.items.concat(shoppedItem[i]);
    shoppedItem.splice(i, 1);
    this.setState({
      items: itemToShop,
      shoppedItem
    });
  }

  render() {
    return (
      <div>
      <Header />
      <Form addItem
        currentItem = {this.state}
        change = {this.change.bind(this)}
        onSubmit = {this.onSubmit.bind(this)}

       />
      <ItemsToShop
        items = {this.state.items}
        deleteItem = {this.deleteItem.bind(this)}
        moveToShopped = {this.moveToShopped.bind(this)}
        itemShopped = {this.state.itemShopped}
        deleteShoppedItem = {this.deleteShoppedItem.bind(this)}
        undoItem = {this.undoItem.bind(this)}
        />
      </div>
    );
  }
}

export default App;
