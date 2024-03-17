import React from 'react'
import { CardContainerUi, CardItem } from '../../UI/3d-card.tsx'
import Data from './Data'
import ScrollDown from './ScrollDown'
import Social from './Social'
import './home.scss'

function Home() {
	return (
		<section
			className='home section'
			id='home'
		>
			<div className='home__container container grid'>
				<div className='home__content grid'>
					<Social></Social>
					<CardContainerUi className='flex justify-between'>
						<CardItem translateZ={50}>
							<div className='home__img'></div>
						</CardItem>
						<Data></Data>
					</CardContainerUi>
				</div>
				<ScrollDown></ScrollDown>
			</div>
		</section>
	)
}

export default Home
