import React from 'react'
import Calendar from './Calendar'

import './order-add-form.css'
import { Input } from '@progress/kendo-react-inputs';


const OrderAddForm = props => (

  <form className="pure-form  AddForm" onSubmit={props.onAddOrder}>
    <div className="row example-wrapper">
             <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                 <div className="card">
                     <div className="card-block">
                         <form className="k-form" onSubmit={props.onAddOrder}>
                             <fieldset>
                                 <div className="mb-3">
                                     <Input
                                         name="numberos"
                                         label="#Orden de Servicio"
                                     />
                                 </div>
                                 <div className="mb-3">
                                     <Input
                                         name="solicitante"
                                        label="Solicitante"
                                     />
                                 </div>
                                 <div className="mb-3">
                                     <Input
                                         name="area"
                                         label="Area"
                                     />
                                 </div>
                                 <div className="mb-3">
                                     <Input
                                         name="proveedor"
                                        label="Proveedor"
                                     />
                                 </div>
                                 <div>
                                   <Calendar name="date" />
                                 </div>
                             </fieldset>
                             <input type="submit"  value="Guardar" />
                              <input type="submit" value="Cancelar" />
                         </form>
                     </div>
                 </div>
             </div>

    </div>
  </form>
)

export default OrderAddForm
