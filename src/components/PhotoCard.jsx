import Image from "next/image";
import { Card } from "@heroui/react";


const PhotoCard = ({photo}) => {
    console.log(photo)
    return (
        <Card className="border">
            <div>
                <Image
                src={photo.image}
                height={200}
                width={200}
                alt={photo.name}
                />
            </div>
            <div>
                <h2 className="font-medium">{photo.name}</h2>
            </div>
            <div>
                <p>{photo.location}</p>
                <p>{photo.weight}</p>
                <p>{photo.price}</p>
                
            </div>
            
        </Card>
    );
};

export default PhotoCard;