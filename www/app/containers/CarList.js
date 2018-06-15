import React, { Component } from 'react'

import CarFilter from "../components/CarFilter";
import CarTable from "../components/CarTable";

export default class CarList extends Component {
	constructor(){
		super();

		
	}
    render() {
        return (
            <div>
                <CarFilter></CarFilter>
                <CarTable></CarTable>
            </div>
        )
    }
}
