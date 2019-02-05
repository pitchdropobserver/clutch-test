import React from 'react'
import { connect } from 'react-redux'

import Card from '../components/Card'

class Grid extends React.Component {

	constructor(props) {
		super(props)
		this.handleCardSelect = this.handleCardSelect.bind(this)
	}

	componentDidMount() {


	}

	componentWillReceiveProps(nextProps){

	}

	handleCardSelect(id) {
		console.log('handleCardSelect -->', id)
	}

	render() {
		const {
			filteredData
		} = this.props
		return (
			<div id="container-grid">
				{
					filteredData.map((item, i)=>{
						const {
							price, mileage, model, make, photos
						} = item
						return (
							<Card
								key={i}
								onClick={this.handleCardSelect}
								carPhotoURL={photos[0].sizes.base.url}
								carPrice={price}
								carMileage={mileage}
								carMake={make}
								carModel={model}
								/>
						)
					})
				}
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	selectedCarMake: state.selections.carMake,
	selectedCarPriceMax: state.selections.carPriceMax,
	availableCarMakes: state.selections.selectableCarMakes,
	filteredData: state.data.filtered,
})

const Connected = connect(
	mapStateToProps,
)(Grid)

export default Connected