import PhotoCard from "./PhotoCard";
import QurbaniTips from "@/components/QurbaniTips";

const TopGenerations = async() => {
    const res = await fetch('https://qurbani-eid-hat.vercel.app/data.json')
    const photos = await res.json()
    
    return (
        <div>
            <h1 className="text-2xl font-bold my-5">Featured Animals</h1>
            <div className="grid grid-cols-4 gap-5">
                {photos && photos.map(photo => <PhotoCard key={photo.id} photo={photo}/>)}
                    {/* {photo.name} */}
            
            </div>
            <QurbaniTips />
        </div>
        
    );
    
};

export default TopGenerations;