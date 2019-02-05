import React from 'react'

const Card = ({
	label,
	onClick,
	carPrice,
	carMileage,
	carMake,
	carModel,
	carPhotoURL,
}) => {
	const id = `${carMake}-${carModel}-${carMileage}-${carPrice}`
	return (
		<div 
			id={id}
			className="card-container"
			onClick={onClick.bind(null, id)}
			>
			<img className="card-photo"
				src={carPhotoURL}
				alt={`photo-of-${id}`}
				/>

			<div className="card-label-container">
				<div className="card-label-make">
					{carMake}
				</div>
				<div className="card-label-model">
					{carModel}
				</div>	
				<div className="card-label-mileage">
					{carMileage}
				</div>
				<div className="card-label-price">
					{carPrice}
				</div>
			</div>			
		</div>
	)
}
	
export default Card