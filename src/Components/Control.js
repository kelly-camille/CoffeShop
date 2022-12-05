import React from 'react';
import AddInventoryForm from './AddInventoryForm'
import InventoryDetail from './InventoryDetail';
import InventoryList from './InventoryList';
import EditInventoryForm from './EditInventoryForm'


class Control extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainInventoryList: [],
      selectedInventory: null,
      editing: false
    };
  }



  handleClick = () => {
    if (this.state.selectedInventory != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedInventory: null,
        editing: false
      });
    } else {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }
}

handleSell = (inventory) => {
  inventory.stock -= 1;
  this.setState({
    selectedInventory: inventory
  })

  handleAddingNewInventoryToList = (newInventory) => {
    const newMainInventoryList = this.state.mainInventoryList.concat(newInventory);
    this.setState({mainInventoryList: newMainInventoryList,
    formVisibleOnPage: false});
  }

  handleChangingSelectedInventory = (id) => {
    const selectedInventory = this.state.mainInventoryList.filter(inventory => inventory.id === id)[0];
    this.setState({selectedInventory: selectedInventory});
  }

  handleDeletingInventory = (id) => {
    const newMainInventoryList = this.state.mainInventoryList.filter(inventory => inventory.id !== id);
    this.setState({
      mainInventoryList: newMainInventoryList,
      selectedInventory: null
    });
  }

  handleEditClick = () => {
    console.log("reached")
    this.setState({editing: true})
  }

  handleEditingInventoryInList = (inventoryToEdit) => {
    const editedMainInventoryList = this.state.mainInventoryList.filter(inventory => inventory.id !== this.state.selectedInventory.id).concat(inventoryToEdit);
    this.setState({
      mainInventoryList: editedMainInventoryList,
      editing: false,
      selectedInventory: null
    });

    }
  }

 
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing ) {
      currentlyVisibleState = <EditInventoryForm inventory = {this.state.selectedInventory} onEditInventory = {this.handleEditingInventoryInList} />
      buttonText = "return to list"
    } else if(this.state.selectedInventory != null) {
      currentlyVisibleState = <InventoryDetail 
      inventory = {this.state.selectedInventory} 
      onClickingDelete = {this.handleDeletingInventory}
      onClickingEdit = {this.handleEditClick} />
      buttonText ="return to list"
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <AddInventoryForm onNewInventoryCreation={this.handleAddingNewInventoryToList} />
      buttonText = "return to list"
    }else{
      currentlyVisibleState = <InventoryList inventoryList={this.state.mainInventoryList} onInventorySelection={this.handleChangingSelectedInventory} />
      buttonText = "Add Inventory";
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}



export default Control;