import "./App.css";
import { useState} from "react";
import Card from "./components/Card";
import axios from "axios";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import NotFound from "./components/NotFound";
function App() {
	const albumId = 1;
	const [id, setId] = useState("");
	const [pics, setPics] = useState(null);
	const [loading, setLoading] = useState(true);
	const [notFound, setNotFound] = useState(false);
	const getId = (e) => {
		setPics(null);
		setId(e.target.value);
		setNotFound(false);
	};
	const handleClick = async() => {
		if (id) {
			const { data } = await axios.get(
				`https://jsonplaceholder.typicode.com/albums/${id}/photos`
			);
			data.length < 1 ? setNotFound(true) : setPics(data);
		   };
		}
	return (
		<>
			<nav>
				<h1>Album Finder</h1>
				<div className='search'>
					<input
						type='text'
						name='search'
						placeholder='enter album Id'
						onChange={getId}
					/>
					<button type='submit' onClick={() => handleClick()}>
						Get Album Photos By Id
					</button>
				</div>
			</nav>
			<div className='main'>
				<ul className='cards'>
					{notFound && <NotFound />}
					{loading ? (
						<Loader />
					) : (
						pics.map((pic) => (
							<Card title={pic.title} thumbnail={pic.thumbnail} />
						))
					)}
				</ul>
			</div>
			<Footer />
		</>
	);
}

export default App;
