import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

function App() {
	return (
		<div className='wrapper clear'>
			<Drawer />
			<Header />
			<div className='content'>
				<div className='d-flex align-center md-40 justify-between'>
					<h1>Усі кросівки</h1>
					<div className='search-block d-flex'>
						<img src='/img/search.svg' alt='Search'></img>
						<input placeholder='Пошук'></input>
					</div>
				</div>
				...
			</div>
			<div className='d-flex card-item '>
				<Card />
				<Card />
			</div>
		</div>
	)
}

export default App
