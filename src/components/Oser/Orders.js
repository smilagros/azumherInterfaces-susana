import React, { Component, PropTypes } from 'react'
import {orders} from './orders.json'
import OrderAddForm from './OrderAddForm'
import OrdersSearch from './OrdersSearch'
import OrdersList from './OrdersList'

class Orders extends Component {
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
    this.handleOnSearch = this.handleOnSearch.bind(this)
    this.handleOnFilter = this.handleOnFilter.bind(this)
  }

  handleOnAddOrder(e) {
    //alert('Evento en React')
    e.preventDefault()

    let form = e.target,
      order = {
        numberos: (form.numberos.value) ? form.numberos.value : Orders.defaultProps.numberos,
        solicitante: (form.solicitante.value) ? form.solicitante.value : Orders.defaultProps.solicitante,
        area: (form.area.value) ? form.area.value : Orders.defaultProps.area,
        proveedor: (form.proveedor.value) ? form.proveedor.value : Orders.defaultProps.proveedor,
        date: form.date.value ? form.date.value : Orders.defaultProps.date
      }

    this.setState({
      orders: this.state.orders.concat([order])
    })

    form.reset()
  }

  handleOnSearch(e) {
    let newFilter = Object.assign( {}, this.state.filter, { [e.target.name]: [e.target.value] } )

    this.setState({
      filter: newFilter
    })

    console.log(newFilter)
  }

  handleOnFilter(filter, data) {
    let regex = new RegExp(filter.search, 'i')
    return data.filter(q => ( regex.test(q.numberos)  ))
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
          <OrdersSearch onSearch={this.handleOnSearch} />
          <OrdersList orders={this.handleOnFilter(this.state.filter, this.state.orders)} />
        </article>
      )
    }
  }
}


Orders.defaultProps = {
  numberos: 'N/A',
  solicitante: 'N/A',
  area: 'N/A',
  proveedor: 'N/A',
  date: 'Fecha No Definida',
}



export default Orders
