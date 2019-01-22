import React from 'react'

const OrdersSearch = props => (
  <form className="pure-form  SearchForm">
    <input type="search" id="search" name="search" onChange={props.onSearch} placeholder="Buscar" />
    <label htmlFor="search">
      <i className="fa fa-search"></i>
    </label>
  </form>
)

export default OrdersSearch
