
const PhotoDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch('https://qurbani-eid-hat.vercel.app/data.json')
    const photos = await res.json()
    const photo = photos.find(p => p.id == id)

    return (
        <div className="container mx-auto p-10 flex flex-col md:flex-row gap-10">
            {/* <h1 className="text-3xl font-bold mt-4">{photo?.name}</h1>
            <p className="text-xl text-gray-600">{photo?.type}</p> */}
            <div>
                <img
                    src={photo?.image}
                    alt={photo?.name}
                    className="w-full max-w-2xl h-100 object-contain rounded-2xl mx-auto shadow-lg"
                />
            </div>
            <div className="flex flex-col space-y-4">
                <h1 className="text-4xl font-extrabold text-gray-800">{photo?.name}</h1>

                <div className="flex gap-2">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                        {photo?.category}
                    </span>
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                        {photo?.type}
                    </span>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed italic">
                    "{photo?.description}"
                </p>

                <hr className="border-gray-100" />

                <div className="grid grid-cols-2 gap-4 text-gray-700">
                    <div>
                        <p className="text-sm text-gray-400 uppercase font-bold">Breed</p>
                        <p className="text-lg font-medium">{photo?.breed}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-400 uppercase font-bold">Location</p>
                        <p className="text-lg font-medium">{photo?.location}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-400 uppercase font-bold">Weight</p>
                        <p className="text-lg font-medium">{photo?.weight} KG</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-400 uppercase font-bold">Age</p>
                        <p className="text-lg font-medium">{photo?.age} Years</p>
                    </div>
                </div>

                <div className="mt-6">
                    <p className="text-sm text-gray-400 uppercase font-bold">Price</p>
                    <p className="text-4xl font-black text-orange-600">৳ {photo?.price.toLocaleString()}</p>
                </div>

                <button className="w-3xl bg-blue-600 hover:bg-green-950 text-white font-bold py-4 rounded-xl shadow-lg transition-all mt-4">
                    Buy Now
                </button>
                
            </div>
        </div>
        
    );
};

export default PhotoDetailsPage;