import React from 'react'

import './orders-list.css'
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { orderBy } from '@progress/kendo-data-query';


const OrdersList = ( props ) => (
      <div>
          <Grid    style={{ height: '300px' }} idProperty="id" data={props.orders} >
          </Grid>
      </div>
)

export default OrdersList
