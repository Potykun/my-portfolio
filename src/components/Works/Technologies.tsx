import React from 'react'

const Technologies = ({ technologies }) => {
	return (
		<div className='work__stack-items'>
			{technologies.map((e, i) => (
				<div
					key={i}
					className='work__stack-item'
				>
					<i className='bx bx-badge-check'></i>
					<p>{e}</p>
				</div>
			))}
		</div>
	)
}

export default Technologies
