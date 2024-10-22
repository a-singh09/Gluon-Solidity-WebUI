"use client";
import React, { useState } from "react";
import { MoveRight, MoveLeft } from "lucide-react";
import InteractionCardComponent from "./interaction-card";
import { Button } from "@/components/ui/button";

export default function Interaction({ params }: { params: string }) {
  const [mode, setMode] = useState<"fission" | "fusion">("fission");
  const [stakeMode, setStakeMode] = useState<"stake" | "unstake">("stake");
  const [baseToken, setBaseToken] = useState<string>("");
  const [stableToken, setStableToken] = useState<string>("");
  const [reserveToken, setReserveToken] = useState<string>("");
  const [stakedStableToken, setStakedStableToken] = useState<string>("");
  const [stakedReserveToken, setStakedReserveToken] = useState<string>("");

  const isFissionMode = mode === "fission";
  const isStakeMode = stakeMode === "stake";

  const handleModeSwitch = (newMode: "fission" | "fusion") => {
    setMode(newMode);
    setBaseToken("");
    setStableToken("");
    setReserveToken("");
  };

  const handleStakeModeSwitch = (newMode: "stake" | "unstake") => {
    setStakeMode(newMode);
    setStakedStableToken("");
    setStakedReserveToken("");
  };

  const handleExecute = () => {
    // Placeholder for executing the fission/fusion transaction logic
  };

  return (
    <>
      <div className="m-10">
        {/* Deployment ID */}
        <div className=" justify-center text-xl">
          {" "}
          <span className="font-extrabold mr-1">Deployment Address: </span>
          0x00000000000000000
        </div>
        <div className=" justify-center text-xl">
          {" "}
          <span className="font-extrabold mr-1">Reserve: </span>
          80
        </div>
        <div className=" justify-center text-xl">
          {" "}
          <span className="font-extrabold mr-1">Supply: </span>
          20
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full space-y-4">
        {/* Main Interaction Section */}
        <div className="flex items-center space-x-4">
          {/* Left Side - Give (XYZ) */}
          <InteractionCardComponent
            title="Base Token"
            value={baseToken}
            onChange={(e) => setBaseToken(e.target.value)}
            // readOnly={isFissionMode ? false : true}
            tokenName="XYZ"
          />

          {/* Arrow */}
          <div className="flex flex-col items-center space-y-2">
            <Button
              variant={isFissionMode ? "default" : "outline"}
              onClick={() => handleModeSwitch("fission")}
              className="w-full"
            >
              Fission
            </Button>
            <Button
              variant={!isFissionMode ? "default" : "outline"}
              onClick={() => handleModeSwitch("fusion")}
              className="w-full"
            >
              Fusion
            </Button>
            {isFissionMode ? (
              <MoveRight className="w-12 h-12" />
            ) : (
              <MoveLeft className="w-12 h-12" />
            )}
            <Button variant="default" className="w-full">
              Execute
            </Button>
          </div>

          {/* Right Side - Receive (XYZN, XYZP) */}
          <div className="space-y-4">
            <InteractionCardComponent
              title="Stable Token (Neutron)"
              value={stableToken}
              onChange={(e) => setStableToken(e.target.value)}
              // readOnly={isFissionMode ? true : false}
              tokenName="XYZN"
            />

            <InteractionCardComponent
              title="Reserve Token (Proton)"
              value={reserveToken}
              onChange={(e) => setReserveToken(e.target.value)}
              // readOnly={isFissionMode ? true : false}
              tokenName="XYZP"
            />
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center space-y-2">
            <Button
              variant={isStakeMode ? "default" : "outline"}
              onClick={() => handleStakeModeSwitch("stake")}
              className="w-full"
            >
              Stake
            </Button>
            <Button
              variant={!isStakeMode ? "default" : "outline"}
              onClick={() => handleStakeModeSwitch("unstake")}
              className="w-full"
            >
              Unstake
            </Button>
            {isStakeMode ? (
              <MoveRight className="w-12 h-12" />
            ) : (
              <MoveLeft className="w-12 h-12" />
            )}
            <Button variant="default" className="w-full">
              Execute
            </Button>
          </div>

          {/* Right Side - Receive (hXYZN, hXYZP) */}
          <div className="space-y-4">
            <InteractionCardComponent
              title="Staked Stable Token"
              value={stakedStableToken}
              onChange={(e) => setStakedStableToken(e.target.value)}
              // readOnly={isFissionMode ? true : false}
              tokenName="hXYZN"
            />

            <InteractionCardComponent
              title="Staked Reserve Token"
              value={stakedReserveToken}
              onChange={(e) => setStakedReserveToken(e.target.value)}
              // readOnly={isFissionMode ? true : false}
              tokenName="hXYZP"
            />
          </div>
        </div>
      </div>
    </>
  );
}
