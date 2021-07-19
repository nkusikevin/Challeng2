import React from 'react'
import '../App.css'
function Card({key,thumbnailUrl,title}) {
    return (
			<>
				<li className='cards_item' key={key}>
					<div className='card'>
						<div className='card_image'>
							<img src={thumbnailUrl} alt='thumbNail'/>
						</div>
						<div className='card_content'>
							<h2 className='card_title'>{title}</h2>
						</div>
					</div>
				</li>
			</>
		);
}

export default Card
