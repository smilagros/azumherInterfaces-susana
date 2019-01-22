import React, { Component, PropTypes } from 'react'
import {orders} from './orders.json'
import OrderAddForm from './OrderAddForm'

class AddOrder extends Component {
  constructor(...props) {
    super(...props)

    this.state = {

      orders: orders,
      gridData: orders,
      filter: {
        numberos: '',
        search: ''
      },
      sort: [
           { field: 'numberos', dir: 'asc' }
       ]
    }

    this.handleOnAddOrder = this.handleOnAddOrder.bind(this)
  }

  handleOnAddOrder(e) {
    //alert('Evento en React')
    e.preventDefault()

    let form = e.target,
      order = {
        numberos: (form.numberos.value) ? form.numberos.value : AddOrder.defaultProps.numberos,
        solicitante: (form.solicitante.value) ? form.solicitante.value : AddOrder.defaultProps.solicitante,
        area: (form.area.value) ? form.area.value : AddOrder.defaultProps.area,
        proveedor: (form.proveedor.value) ? form.proveedor.value : AddOrder.defaultProps.proveedor,
        date: form.date.value ? form.date.value : AddOrder.defaultProps.date
      }

    this.setState({
      orders: this.state.orders.concat([order])
    })

    form.reset()
  }


  render() {
    if ( !this.state.orders.length ) {
      return (
        <article className="Main-container">
          <p>No hay ordenes :(</p>
        </article>
      )
    } else {
      return(
        <article className="Main-container">
          <OrderAddForm onAddOrder={this.handleOnAddOrder} />
        </article>
      )
    }
  }
}


AddOrder.defaultProps = {
  numberos: 'N/A',
  solicitante: 'N/A',
  area: 'N/A',
  proveedor: 'N/A',
  date: 'Fecha No Definida',
}



export default AddOrder
