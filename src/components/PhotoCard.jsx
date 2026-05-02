import Image from "next/image";
import { Card } from "@heroui/react";


const PhotoCard = ({photo}) => {
    console.log(photo)
    return (
        <Card className="">
            <div>
                <Image
                src={photo.image}
                height={200}
                width={200}
                alt={photo.name}
                />
            </div>
            
        </Card>
    );
};

export default PhotoCard;