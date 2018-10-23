import {FormGroup, H5, HTMLTable, TextArea, ButtonGroup, Button} from '@blueprintjs/core';
import React from 'react';

export const ImportView = (props) => <div className='row'>
    <div className='col-md'>


        <H5>CMB Import</H5>

        <form>

            <FormGroup label='Import content'><TextArea fill/></FormGroup></form>




        <ButtonGroup>


            <Button/>
        </ButtonGroup>
        <HTMLTable condensed className='w100'>
            <thead>
            <tr>
                <th>123</th>
                <th>123</th>
                <th>123</th>
                <th>123</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td style={{textAlign: 'right'}}>1</td>
                <td>śffffffffffffffffffff2</td>
                <td>3</td>
                <td>4</td>
            </tr>
            </tbody>
        </HTMLTable>
    </div>


</div>;