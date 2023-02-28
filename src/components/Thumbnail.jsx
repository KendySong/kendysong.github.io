import articleImage from '../img/default.png';

export default function Thumbnail({article}) {
    //State


    //Behaviour
    

    //Render
    return(
        <div className="flex bg-gray-50 w-10/12 h-40 ml-24 m-8 rounded-lg shadow-xl" onClick={() => {article()}}>
            <img className="h-40 rounded-tl-lg rounded-bl-lg" src={articleImage} alt="Article" />					
            <div className="ml-8 mt-2">
                <h1 className='text-4xl font-semibold'>Titre</h1>
                <p className='text-lg'>Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit.Description</p>
            </div>				
        </div>  
    );
}