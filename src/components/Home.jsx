import Thumbnail from './Thumbnail';

export default function Home({article}) {
    return (
        <div>
            <h1 className="text-5xl text-[#2C64A9] font-semibold ml-24 mt-8">Derniers articles</h1>
            <Thumbnail article={article}/>
            <Thumbnail article={article}/>
            <Thumbnail article={article}/>
            <Thumbnail article={article}/>
            <Thumbnail article={article}/>
        </div>
    );
}