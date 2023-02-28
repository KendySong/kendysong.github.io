import '../style/App.css';
import Home from './Home';
import Category from './Category';
import Article from './Article';

import { useEffect, useState } from 'react';

function App() {

	//State
	const [pageIndex, setPageIndex] = useState(0);
	const [page, setPage] = useState(<Home/>);
	const [menu, setMenu] = useState([
		{ id: 1, name: 'Nouveautés' },
		{ id: 2, name: 'Commerces' },
		{ id: 3, name: 'Soldes %' },
	]);

	//Behavior
	const setHome = () => {
		setPageIndex(0);
	}

	const setArticle = () => {
		setPage(<Article returnBack={updatePage}/>);
	}

	const updatePage = () => {
		if (pageIndex === 0) {
			setPage(<Home article={setArticle}/>);
		}
		else {
			setPage(<Category name={menu[pageIndex - 1].name} returnBack={setHome} article={setArticle}/>);
		}
	}

	useEffect(() => {
		updatePage();
	}, [pageIndex]);

	//Render
	return (
		<div className="flex flex-col">
			<div className="flex">
				<div className="flex justify-center items-center flex-wrap h-40 w-full bg-[#2C64A9] rounded-xl text-white text-5xl font-semibold mt-4 mr-8 ml-8">
					{menu.map(menu => <div key={menu.id}><button className="mr-6 ml-6" onClick={() =>{setPageIndex(menu.id)}}>{menu.name}</button></div>)}
				</div>		
			</div>

			<div className="flex flex-col w-8/12 self-center mt-12">
				{page}
			</div>
		</div>	
  	);
}

export default App;