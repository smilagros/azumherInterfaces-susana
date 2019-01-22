//Dependencies
import React, {Component} from 'react';
import { withState } from './with-state';
import { GridColumn, Grid } from '@progress/kendo-react-grid';
import products from './products.json';
import '../Global/css/general.css';

const StatefulGrid = withState(Grid);

class Ocom extends Component{

        render(){
            return(
                <div>
                <StatefulGrid data={products} style={{ height: '260px' }}>
                    <GridColumn field="ProductID" title="#" filter="numeric" />
                    <GridColumn field="Date" title="Fecha" filter="date"/>
                    <GridColumn field="ProductName" title="Proveedor" />
                    <GridColumn field="SupplierID" title="Area" />
                    <GridColumn field="UnitPrice" title="Precio" filter="text" />
                   
                </StatefulGrid>

            </div>
            );
        }
}
 export default Ocom;