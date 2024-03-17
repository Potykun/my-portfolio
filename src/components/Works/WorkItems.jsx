import React from 'react'
import DefaultTechnologies from './DefaultTechnologies.tsx'
import Technologies from './Technologies.tsx'
import { CardBody, CardContainerUi, CardItem } from '../../UI/3d-card.tsx'

function WorkItems({ item }) {
	return (
		<CardContainerUi>
			<CardBody>
				<div className='work__card'>
					<CardItem translateZ='50'>
						<a href={item.src}>
							{!item.svg ? (
								<img
									src={item.image}
									alt='image'
									className='work__image'
								/>
							) : (
								<div
									dangerouslySetInnerHTML={{ __html: item.svg }}
									className='work__image work__image--svg'
								/>
							)}
						</a>
					</CardItem>

					<h2 className='work__title'>{item.title}</h2>
					<CardItem translateZ='30'>
						<div className='work__stack'>
							<h3>Stack:</h3>
							{item.technologies ? <Technologies technologies={item.technologies}></Technologies> : <DefaultTechnologies />}
						</div>
					</CardItem>
					<CardItem translateZ='20'>
						{item.feathers && (
							<div className='work__feathers'>
								<h3>Feathers:</h3>
								<div className='work__feathers-items'>
									{item.feathers.map((e, i) => (
										<div className='work__feathers-item'>{e}</div>
									))}
								</div>
							</div>
						)}
					</CardItem>
					<a
						href={item.src}
						className='work__button'
					>
						Demo <i className='bx bx-right-arrow-alt work__button-icon'></i>
					</a>
				</div>
			</CardBody>
		</CardContainerUi>
	)
}

export default WorkItems
