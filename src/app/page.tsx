import Link from "next/link";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import PromptDialogBox from "@/components/prompt-dialog-box";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full ">
      <BackgroundBeamsWithCollision>
        <div className="flex flex-col items-center space-y-4">
          <div className="w-64 h-64 mb-4">
            <Image
              src="GluonProtocol-Darker_iewpww.svg"
              alt="Gluon Protocol Logo"
              width={256}
              height={256}
              priority
            />
          </div>
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-white tracking-tight">
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-yellow-400 via-yellow-500 to-amber-600 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">Gluon Protocol</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 py-4">
                <span className="">Gluon Protocol</span>
              </div>
            </div>
            <div className="text-center lg:text-4xl text-gray-400">
              Create your own Stablecoin
            </div>
          </h2>
          <div className="flex space-x-4">
            {/* <Link href="/dashboard">
              <Button className="text-lg rounded-full mt-5 font-bold bg-slate-500 text-white hover:bg-black">
                Get Started
              </Button>
            </Link>
            <Button className="text-lg rounded-full mt-5 bg-gray-300 text-black hover:text-white hover:bg-black">
              Read Paper
            </Button> */}
            <Link href="/create">
              <Button className="text-lg rounded-full mt-5 font-bold bg-slate-500 text-white hover:bg-black">
                Create Stablecoin
              </Button>
            </Link>
            <PromptDialogBox>
              Use Existing Stablecoin
            </PromptDialogBox>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
