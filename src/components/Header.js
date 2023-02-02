function Header() {
	return (
		<header className='d-flex justify-between align-center  p-60'>
			<div className='d-flex align-center	'>
				<img
					className='mr-15'
					width={40}
					height={40}
					src='/img/logo.png'
					alt='logo'
				></img>
				<div className='headerInfo'>
					<h3 className='text-uppercase'>REACT SNEAKERS</h3>
					<p className='opacity-5'>Магазин найкращих кросівок</p>
				</div>
			</div>
			<ul className='d-flex'>
				<li>
					<img width={18} height={18} src='/img/basket.svg' alt='basket'></img>
					<span>847 грн</span>
				</li>
				<img
					width={18}
					height={18}
					src='/img/favorite.svg'
					alt='favorite'
				></img>
				<li> </li>
				<li>
					<img width={18} height={18} src='/img/user.svg' alt='user'></img>
				</li>
			</ul>
		</header>
	)
}
export default Header
