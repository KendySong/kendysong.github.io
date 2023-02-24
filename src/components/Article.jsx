export default function Article({article}) {
    //State

    //Behaviour

    //Render
    return (
        <div className='card'>
            <h4>{article.name}</h4>
            <p>{article.description}</p>
            <p>Prix : {article.price}</p>
        </div>
    );
}