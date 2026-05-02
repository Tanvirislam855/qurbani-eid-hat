import PhotoCard from "./PhotoCard";

const TopGenerations = async() => {
    const res = await fetch('https://qurbani-eid-hat.vercel.app/data.json')
    const photos = await res.json()
    
    return (
        <div>
            <h1 className="text-2xl font-bold mt-5">TopGeneration</h1>
            <div className="grid grid-cols-4 gap-5">
                {photos && photos.map(photo => <PhotoCard key={photo.id} photo={photo}/>)}
                    {/* {photo.name} */}
            
            </div>
        </div>
    );
};

export default TopGenerations;