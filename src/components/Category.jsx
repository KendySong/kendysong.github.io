import Thumbnail from './Thumbnail';
import Arrow from '../img/left-arrow.png';

export default function Category({name, returnBack, article}) {
    return (
        <div>
            <div className='flex'>
                <img className='mt-2' src={Arrow} alt="left arrow" onClick={returnBack}/>
                <h1 className="text-5xl text-[#2C64A9] font-semibold ml-24 mt-8">{name}</h1>     
            </div>

            <Thumbnail article={article}/>
        </div>        
    );
}