import {EntriesView} from '@/module/category/EntriesView';
import {Button, ButtonGroup, FormGroup, H5, TextArea, Intent} from '@blueprintjs/core';
import React from 'react';

import {parseEntries} from '@/biz/parsers';

import {Field, reduxForm} from 'redux-form';

const TextAreaField = ({input, meta, ...props}) => <TextArea {...input} {...props}/>;

export const ImportView = (props) =>

    <form onSubmit={props.handleSubmit}>
        <FormGroup label='content'>
            <Field name='content' component={TextAreaField} fill/>
        </FormGroup>
        <ButtonGroup>
            <Button text='Import' type='submit' intent={Intent.PRIMARY}/>
        </ButtonGroup>
    </form>
;


export default reduxForm({
    form: 'importForm',
    onSubmit({content}) {
        console.log(parseEntries(content));

    }
})(ImportView);