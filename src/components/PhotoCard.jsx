"use client";
import Image from "next/image";
import { Card } from "@heroui/react";
import { Chip } from '@heroui/react';
import { Button } from '@heroui/react';
import Link from 'next/link';

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
                <Chip className="absolute right-2 top-2" >{photo.category}</Chip>
            </div>
            <div>
                <h2 className="font-medium">{photo.name}</h2>
            </div>
            <div className="flex items-center gap-5 justify-between ">
                
                <p>{photo.location}</p>
                <p>{photo.weight}</p>
                <p>{photo.price}</p>
                
            
            </div>
            <Link href={`/all-animals/${photo.id}`} > <button className="{w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition}">view details</button> </Link>
            
        </Card>
    );
};

export default PhotoCard;