import React, {Component} from 'react';


export class CategoryView extends Component {


    render() {

        const {name} = this.props;

        return <div>

            <h4>{name}</h4>

            <div>Balance:</div>

        </div>


    }

}