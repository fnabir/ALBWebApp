import Image from "next/image";
import Logo from "@/images/logo.svg"

export default function Loading() {
	return (
		<div className="absolute flex items-center justify-center h-screen w-full bg-background">
      <div className="flex-col">
        <div className="relative overflow-hidden rounded-lg w-48 h-28 mx-auto
          before:absolute before:top-[-50%] before:right-[-50%] before:bottom-[-50%] before:left-[-50%] 
          before:bg-conic before:from-transparent before:via-transparent before:to-blue-400 before:animate-[spin_3s_linear_infinite]">
          <div className="absolute flex justify-center align-middle p-0.5 top-1 right-1 bottom-1 left-1 rounded-md bg-background">
            <Image
              className="rounded-md draggable-none"
              src={Logo}
              alt="Asian Lift Bangladesh Logo"
              priority
            />
          </div>
        </div>
      </div>
    </div>
	);
};