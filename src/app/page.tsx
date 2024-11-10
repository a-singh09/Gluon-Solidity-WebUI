import Link from "next/link";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full ">
      <BackgroundBeamsWithCollision>
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-white tracking-tight">
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">Gluon Project</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span className="">Gluon Project</span>
              </div>
            </div>
            <div className="text-center lg:text-4xl text-gray-400">
              A Cryptocurrency Stabilization Protocol
            </div>
          </h2>
          <div className="flex space-x-4">
          <Link href="/dashboard">
            <Button className="text-lg rounded-full mt-5 font-bold bg-slate-500 text-white hover:bg-black">Get Started</Button>
            </Link>
            <Button className="text-lg rounded-full mt-5 bg-gray-300 text-black hover:text-white hover:bg-black">Read Whitepaper</Button>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}