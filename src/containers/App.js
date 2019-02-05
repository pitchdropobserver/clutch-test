import React from 'react'
import { connect } from 'react-redux'

import * as Model from '../model/clutch-model'
import Filters from './Filters'
import Grid from './Grid'

class App extends React.Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
		const { onDefaultDataLoaded } = this.props
		Model.getData().then((data)=>{
			onDefaultDataLoaded(data)	
		})
	}

	render(){
		return (
			<div id="container-app">
				<Filters/>
				<Grid/>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	onDefaultDataLoaded: (data) => dispatch({
		type: 'UPDATE_DEFAULT_DATA',
		data: data
	}),
})

const Connected = connect(
	null,
	mapDispatchToProps,
)(App)

export default Connected