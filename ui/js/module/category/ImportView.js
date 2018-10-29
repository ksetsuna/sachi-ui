import {FormGroup, H5, HTMLTable, TextArea, ButtonGroup, Button} from '@blueprintjs/core';
import React from 'react';

export const ImportView = (props) => <div className='row'>
    <div className='col-md'>


        <H5>CMB Import</H5>

        <form>
            <FormGroup label='Import content'>
                <TextArea fill/>
            </FormGroup>
            <ButtonGroup>
                <Button text='OK'/>
                <Button text='OK'/>
                <Button text='OK'/>
                <Button text='OK'/>
                <Button text='OK'/>
                <Button text='Import'/>
            </ButtonGroup>
        </form>


        <HTMLTable condensed className='w100'>
            <thead>
            <tr>
                <th>交易时间</th>
                <th>说明</th>
                <th>入账金额</th>
                <th>交易地</th>
                <th>交易金额</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            </tbody>
        </HTMLTable>
    </div>


</div>;