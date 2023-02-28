import Arrow from '../img/left-arrow.png';
import Image from '../img/default.png';

export default function Article({returnBack}) {


    return (
        <div className='flex flex-col items-center'>
            <div className='flex self-start'>
                <img className='mt-2' src={Arrow} alt="left arrow" onClick={returnBack}/>
                <h1 className="text-5xl text-[#2C64A9] font-semibold ml-24 mt-8">Article</h1>     
            </div>

            <div className="w-full flex flex-col items-center">
                <img className='w-8/12 m-6' src={Image} alt="article"/>
                <p className='text-xl pl-32 pr-32 mt-8'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id bla
                    ndit lacus, et tempus magna. Sed a risus sed quam ultrices cursus
                    eget nec erat. Aenean felis turpis, mattis et hendrerit eu, suscipit 
                    id augue Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    ndit lacus, et tempus magna. Sed a risus sed quam ultrices cursus
                    eget nec erat. Aenean felis turpis, mattis et hendrerit eu, suscipit 
                    id augue Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nam id blandit lacus, et tempus magna. Sed a risus sed quam ultrices 
                    cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id bla
                    ndit lacus, et tempus magna. Sed a risus sed quam ultrices cursus
                    eget nec erat. Aenean felis turpis, mattis et hendrerit eu, suscipit 
                    id augue Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    ndit lacus, et tempus magna. Sed a risus sed quam ultrices cursus
                    eget nec erat. Aenean felis turpis, mattis et hendrerit eu, suscipit 
                    id augue Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nam id blandit lacus, et tempus magna. Sed a risus sed quam ultrices 
                    cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id bla
                    ndit lacus, et tempus magna. Sed a risus sed quam ultrices cursus
                    eget nec erat. Aenean felis turpis, mattis et hendrerit eu, suscipit 
                    id augue Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    ndit lacus, et tempus magna. Sed a risus sed quam ultrices cursus
                    eget nec erat. Aenean felis turpis, mattis et hendrerit eu, suscipit 
                    id augue Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nam id blandit lacus, et tempus magna. Sed a risus sed quam ultrices 
                    cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id bla
                    ndit lacus, et tempus magna. Sed a risus sed quam ultrices cursus
                    eget nec erat. Aenean felis turpis, mattis et hendrerit eu, suscipit 
                    id augue Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    ndit lacus, et tempus magna. Sed a risus sed quam ultrices cursus
                    eget nec erat. Aenean felis turpis, mattis et hendrerit eu, suscipit 
                    id augue Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nam id blandit lacus, et tempus magna. Sed a risus sed quam ultrices 
                    cursus.
                </p>
            </div>      
        </div>        
    );
}