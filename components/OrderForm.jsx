import React from 'react'
import '../styles/order-styles.css'   

import Select from 'react-select';
import 'react-select/dist/react-select.css';

var myClassName = {
    width: '145px'
  }

var errorMessage = {}
export default class OrderForm extends React.Component{


    constructor(props){
        super(props)

        const initialEditedOrder = {id: '', customer: '', address: '', orderDate: '10/10/2017', total: '', 
            errorMessage:{
                customer: '',
                id: '',
                order: '',
                address: '',
                total: ''
            }}
        this.state = initialEditedOrder
    }   

    componentWillReceiveProps(props){

        console.log(props)
        this.setState(props.editedOrder)
    }

    handleChange(e){

        //this to update only one property of a big object
        var change = {}
        change[e.target.name] = e.target.value
        this.setState(change)

        var errorMessage = {}
        
        if(e.target.name==='customer'){
            if(e.target.value.trim()===''){
                errorMessage[e.target.name] = 'Customer must be not empty'
            }
            else{
                errorMessage[e.target.name] = ''
            }
        }
        if(e.target.name==='id'){
            if(e.target.value.trim()===''){
                errorMessage[e.target.name] = 'Id must be not empty'
            }
            else{
                errorMessage[e.target.name] = ''
            }
        }

        //console.log(errorMessage)
        this.setState({errorMessage: errorMessage})

    }

    handleSubmit(e){  

        if(this.state.errorMessage.customer!=='' || this.state.errorMessage.id!==''){
            alert('Please check the form')
            return false
        }

        if(this.state._id===null)
            this.props.saveOrderClick(this.state)
        else
            this.props.updateOrderClick(this.state)
        
    }

    render(){
        return(
            <div>

            <div className='panel'>
                <div className='panelHeading'>
                  <h3>Order Form</h3>
                </div>
                <div className='panelBody'>

                    <div className='row'>
                        <div className='col3'>
                        <label>ID</label>
                        <input type='text' name='id' className='formControl' value={this.state.id||''} onChange={this.handleChange.bind(this)}/> 
                        <div className='errorMessage'>{this.state.errorMessage.id}</div>
                        </div>
                        <div className='col3'>
                        <label>Customer</label>
                        <input type='text' name='customer' className='formControl' value={this.state.customer||''} onChange={this.handleChange.bind(this)} /> 
                        <div className='errorMessage'>{this.state.errorMessage.customer}</div>
                        </div>

                        <div className='col3'>
                        <label>Address</label><input type='text' name='address' className='formControl' value={this.state.address||''} onChange={this.handleChange.bind(this)} /> 
                
                        </div>

                    </div>

                    <div className='row'>
                        <div className='col3'>
                        <label>Date</label>
                       
                        <input type='date' className='formControl' name='orderDate' value={this.state.orderDate||''} onChange={this.handleChange.bind(this)} />

                        {/* <Datetime ref='date' input={true} timeFormat={false} open={false} closeOnSelect={true} disableOnClickOutside={true} /> */}

                        {/* <Select ref='select' style={myclassNameName} /> */}
                        </div>
                        <div className='col3'>
                        <label>Total</label><input type='text' name='total' className='formControl' value={this.state.total||''} onChange={this.handleChange.bind(this)} /> 
                
                        </div>

                        <div className='col3'>
        
                        </div>

                    </div>

     
                    <div className='row'>
                        <div className='col5'>

                        <input type='button' className='btn' value='Save' onClick={this.handleSubmit.bind(this)}/>

                        <input type='button' className='btn' value='Add new' onClick={(e)=>{
                            this.props.addNewClick()
                        }}

                        />

                        </div>
                        <div className='col5'>
                    
                        </div>
                    </div>
                 
                    <div className='row'></div>
                  
                </div>
              </div>

            </div>
        )
    }
}