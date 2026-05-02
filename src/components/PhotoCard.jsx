"use client";
import Image from "next/image";
import { Card } from "@heroui/react";
import { Chip } from '@heroui/react';
import { Button } from '@heroui/react';

const PhotoCard = ({photo}) => {
    console.log(photo)
    return (
        <Card className="border rounded-xl shadow-gray-800">
            <div className="relative w-full aspect-square">
                <Image
                src={photo.image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                // height={60}
                // width={60}
                alt={photo.name}
                className=" rounded-t-xl object-cover"
                />
                <chip className="absolute right-2 top-2" >{photo.catagory}</chip>
            </div>
            <div>
                <h2 className="font-medium">{photo.name}</h2>
            </div>
            <div className="flex items-center gap-5 justify-between ">
                
                <p>{photo.location}</p>
                <p>{photo.weight}</p>
                <p>{photo.price}</p>
                
            
            </div>
            <button className="{w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition}">view details</button>
            
        </Card>
    );
};

export default PhotoCard;