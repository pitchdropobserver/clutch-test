import React from 'react'

const ButtonFilter = ({
	id,
	label,
	onClick
}) => (
	<button className="btn-filter"
		onClick={onClick.bind(null, id)}
		>
		{label}
	</button>
)
	
export default ButtonFilter