export default function Form({submit}) {
    //State


    //Behaviour


    //Render
    return (
        <div>
            <h1>Ajouter un article</h1>
            <form onSubmit={submit} className="form">
                <input type="text" placeholder="Nom" required="required"/>
                <input type="text" placeholder="Description" required="required"/>
                <input type="text" placeholder="Prix" required="required"/>
                <button type="submit">Ajouter un article</button>
            </form>
        </div>
    );
}