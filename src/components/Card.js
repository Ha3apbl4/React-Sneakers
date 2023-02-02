function Card() {
	return (
		<div className='card'>
			<img
				width={133}
				height={112}
				src='/img/sneakers/sneakersCard2.jpg'
				alt='Sneakers'
			/>
			<h5>
				Чоловічі кросівки <br /> Nike Blazer Mid Suede
			</h5>
			<div className='d-flex justify-between align-center '>
				<div className='d-flex flex-column'>
					<span>Ціна:</span>
					<b>7970 грн.</b>
				</div>
				<button className='button'>
					<img width={16} height={16} src='/img/plus.svg' alt='plus' />
				</button>
			</div>
		</div>
	)
}
export default Card
