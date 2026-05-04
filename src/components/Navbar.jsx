"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { Avatar,Button } from '@heroui/react';


const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async() =>{
    await authClient.signOut();
  

  }
  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={70}
            height={70}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-2xl">QurbaniHat</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"} className="bg-[#007bff] text-white px-5 py-2 rounded-full font-medium hover:bg-blue-600 transition">Home</Link>
          </li>
          <li>
            <Link href={"/all-animals"} className="bg-[#007bff] text-white px-5 py-2 rounded-full font-medium hover:bg-blue-600 transition">
            <span className="animate__animated animate__tada inline-block">
             All Animals</span></Link>
          </li>
      
          <li>
            <Link href={"/profile"} className="bg-[#007bff] text-white px-5 py-2 rounded-full font-medium hover:bg-blue-600 transition">Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          { !user && <ul className="flex items-center gap-5 text-sm">
            <li>
              <Link href={"/signup"}className="bg-[#007bff] text-white px-5 py-2 rounded-full font-medium hover:bg-blue-600 transition">SignUp</Link>
            </li>
            <li>
              <Link href={"/signin"} className="bg-[#007bff] text-white px-5 py-2 rounded-full font-medium hover:bg-blue-600 transition">SignIn</Link>
            </li>
          </ul>}
          {
  user && ( <div className="flex gap-3">
  <Avatar>
        <Avatar.Image alt="John Doe" src={user?.image}
        referrerPolicy="no-referrer" />
        <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
      </Avatar>
      <Button onClick={handleSignOut} size="sm" varient="danger">SignOut</Button>
</div>
)}
       </div>
      </nav>
    </div>
  );
};

export default Navbar;