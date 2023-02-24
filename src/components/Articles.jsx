import Article from './Article';

export default function Articles({articles, deleteAction}) {
    
    return (
        <div>
            <h1>Mes articles</h1>
			<div className="articleContainer">
				{articles.map(article => <div key={article.id} onClick={() => {deleteAction(article.id)}}><Article article={article}/></div>)}	
			</div>
        </div>
    );
}