import { useState } from 'react';
import '../style/App.css';

import Form from './Form';
import Articles from './Articles';

function App() {
	//State
	const [articles, setArticles] = useState([
		{id: '0', name:'name1', description:'description', price:'0'},
		{id: '1', name:'name2', description:'description', price:'0'},
		{id: '2', name:'name3', description:'description', price:'0'},
		{id: '3', name:'name4', description:'description', price:'0'},
		{id: '4', name:'name5', description:'description', price:'0'},
		{id: '5', name:'name6', description:'description', price:'0'}
	]);

	const [page, setPage] = useState('article');

	//Behaviour
	const changePage = (page) => {
		setPage(page);
	}

	const addArticle = (e) => {
		e.preventDefault();
		let id = articles.length + 1;
		let name = e.target[0].value;
		let description = e.target[1].value;
		let price = e.target[2].value;

		let copy = articles.map(article => article);
		copy.push({id, name, description, price});
		setArticles(copy);
	}

	const deleteArticle = (id) => {
		let copy = articles.filter(article => article.id !== id);
		setArticles(copy);
	}

	//Render
	return (
		<div className='container'>
			<div className='header'>
            	<a className="menuButton" onClick={() => {changePage('article')}}>Mes articles</a>
            	<a className="menuButton" onClick={() => {changePage('addArticle')}}>Ajouter un article</a>
        	</div>

			{page === 'addArticle' && <Form submit={addArticle}/>}
			{page === 'article' && <Articles articles={articles} deleteAction={deleteArticle}/>}		
		</div>
	);
}

export default App;
