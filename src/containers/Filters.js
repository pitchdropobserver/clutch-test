import React from 'react'
import { connect } from 'react-redux'

import ButtonFilter from '../components/ButtonFilter'
import {
	createUpdateCarPriceAction,
	createUpdateCarMakeAction,
} from '../actions'


class Filters extends React.Component {

	constructor(props) {
		super(props)
		this.handlePriceRangeChange = this.handlePriceRangeChange.bind(this)
		this.state = {
			priceRangeInputVal: this.props.selectedCarPriceMax,
			isInputPriceRangeValid: true,
		}
	}
	
	handlePriceRangeChange(e) {
		const { value } = e.target
		let isInputPriceRangeValid = false
		if (!isNaN(value)) { // valid number...
			this.props.onCarPriceChange(value)
			isInputPriceRangeValid = true
		} 
		this.setState({
			priceRangeInputVal: value,
			isInputPriceRangeValid
		})
	}

	render() {
		const {
			onCarMakeChange,
			availableCarMakes,
			selectedCarMake,
		} = this.props
		const {
			priceRangeInputVal,
			isInputPriceRangeValid,
		} = this.state

		return (
			<div id="container-filters">
				<h3>Enter your max price...</h3>
				<div className="filters-car-price">
					<input type="text"					
						value={priceRangeInputVal}
						onChange={this.handlePriceRangeChange}
						style={{
							borderColor: isInputPriceRangeValid ? 'green' : 'red'
						}}
						/>
				</div>

				<h3>Select a car make...</h3>
				<div className="filters-car-make-container">
					{	
						availableCarMakes.map((strCarType, i) => (
							<ButtonFilter 
								key={i}
								id={strCarType.toUpperCase()}
								onClick={onCarMakeChange}
								label={strCarType}
								/>
						))
					}
				</div>		
				<p>{selectedCarMake}</p>

			</div>
	
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	selectedCarMake: state.selections.carMake,
	selectedCarPriceMax: state.selections.carPriceMax,
	availableCarMakes: state.selections.selectableCarMakes,
	dataFiltered: state.data.filtered,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	onCarPriceChange: (strPrice) => dispatch(createUpdateCarPriceAction(+strPrice)),
	onCarMakeChange: (strMake) => dispatch(createUpdateCarMakeAction(strMake)),
})

const Connected = connect(
	mapStateToProps,
	mapDispatchToProps
)(Filters)

export default Connected