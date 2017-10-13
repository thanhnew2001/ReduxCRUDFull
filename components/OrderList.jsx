import React from 'react'
import '../styles/order-styles.css'

export default class OrderList extends React.Component{
    render(){
        return(

            <div className='panel'>
                  <div className='panelHeading'>
                   <h3>Order List</h3>
                  </div>
                  <div className='panelBody'>
                  <table>
                    <thead>
                        <tr>
                        <td>ID</td>
                        <td>Customer</td>
                        <td>Del</td>
                        <td>Edit</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.orders.map((order, i)=>
                            <tr key={i}>
                                <td>{order.id}</td>
                                <td>{order.customer}</td>

                                <td><a onClick={(e)=>{
                                    let id = order._id

                                    if(confirm('Do you want to delete?'))
                                        this.props.deleteOrderClick(id)
                                    }
                                }>
                                <img className='icon' src='./icons/rubbish-bin.png'/></a>
                                </td>

                                <td><a onClick={(e)=>{
                                    let id = order._id
                                    this.props.editOrderClick(id)
                                    }
                                }>
                                <img className='icon' src='./icons/new-file.png'/></a>
                                </td>

                            </tr>
                        )}
                    </tbody>
                  </table>
                  </div>

                </div>


        )
    }
}