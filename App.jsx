import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchOrders, saveOrder, deleteOrder, editOrder, updateOrder} from './actions/order-actions.js'

import OrderForm from './components/OrderForm.jsx'
import OrderList from './components/OrderList.jsx'
import './styles/order-styles.css'


class App extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount() {
    // When container was mounted, we need to start fetching todos.
    this.props.dispatch(fetchOrders())
  }

   render() {
      const { dispatch, editedOrder, orders } = this.props
      return (
         <div className='container'>

            <div className='header'>
              <h1>Header</h1>
            </div>

            <div className='row'>
              <div className='col3'>
                    <OrderList orders={orders} 
                    deleteOrderClick = {(id)=>dispatch(deleteOrder(id))}
                    editOrderClick = {(id)=>dispatch(editOrder(id))}
                    
                    />
              </div>
              <div className='col7'>
                  <OrderForm 
                    saveOrderClick = {(order)=>dispatch(saveOrder(order))} 
                    updateOrderClick = {(order)=>dispatch(updateOrder(order))} 
                    editedOrder={editedOrder}
                    addNewClick = {()=>dispatch({type:'ADDNEW_ORDER'})}    
                  />
        
              </div>

            </div>  

            <div className='row'></div>


        </div>
      )
   }
}

function mapStateToProps(centralState) {
   return {
      persons: centralState.personReducer,
      companies: centralState.companyReducer,
      editedPerson: centralState.editedPersonReducer,
      orders: centralState.orderReducer,
      editedOrder: centralState.editedOrderReducer
   }
}

// This function is used to provide callbacks to container component.
// function mapDispatchToProps(dispatch) {
//   return {
//     // This function will be available in component as `this.props.fetchTodos`
//     fetchPersons: function() {
//       dispatch(fetchPersons());
//     }
//   };
// }

export default connect(mapStateToProps )(App)

