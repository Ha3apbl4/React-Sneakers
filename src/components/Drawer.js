function Drawer() {
	return (
		<div style={{ display: 'none' }} className='overlay'>
			<div className='drawer'>
				<h2 className='d-flex justify-between mb-30 '>
					Корзина{' '}
					<img className='cu-p' src='/img/deleteHover.svg' alt='delete' />
				</h2>
				<div className='drawer__items'>
					<div className='cartItem d-flex align-center mb-20'>
						<div
							style={{
								backgroundImage: 'url(/img/sneakers/sneakersCard1.jpg',
							}}
							className='cartItemImg'
						></div>
						<div className='mr-20 flex'>
							<p className='mb-5'>Чоловічі кросівки Nike Air Max 270</p>
							<b>8247 грн.</b>
						</div>
						<img
							className='overlayDelete'
							src='/img/deleteHover.svg'
							alt='delete'
						/>
					</div>

					<div className='cartItem d-flex align-center mb-20'>
						<div
							style={{
								backgroundImage: 'url(/img/sneakers/sneakersCard1.jpg',
							}}
							className='cartItemImg'
						></div>
						<div className='mr-20 flex'>
							<p className='mb-5'>Чоловічі кросівки Nike Air Max 270</p>
							<b>8247 грн.</b>
						</div>
						<img
							className='overlayDelete'
							src='/img/deleteHover.svg'
							alt='delete'
						/>
					</div>
				</div>
				<div className='cartTotalBlock'>
					<ul>
						<li>
							<span>Разом:</span>
							<div></div>
							<b>8247 грн.</b>
						</li>
					</ul>
					<button className='greenButton'>
						Оформити замовлення <img src='/img/arrow.svg' alt='Arrow' />{' '}
					</button>
				</div>
			</div>
		</div>
	)
}
export default Drawer
