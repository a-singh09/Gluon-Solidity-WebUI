import { StakingCardComponent } from "@/components/staking-card";
import React from "react";

function Stake() {
  return (
    <>
      <div className="w-[calc(100%-4rem)] mx-auto rounded-md overflow-hidden">
        <div className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
          <h2 className="text-white text-2xl md:text-6xl font-bold text-center md:my-10">
            Staking Pool
          </h2>
          <p className="text-white text-sm md:text-xl max-w-xl text-center">
            Stake your stable tokens and reserve tokens to earn rewards. You can
            stake and withdraw your tokens anytime.
          </p>

          <div className="flex flex-wrap justify-start gap-4 mt-6">
            <div className="flex flex-col gap-4 mt-10 md:mr-40 w-full md:w-auto">
              <p className="text-white text-sm md:text-base md:text-left text-center">
                Price Hodl:
              </p>
              <p className="text-white text-sm md:text-base md:text-left text-center">
                Reserve:
              </p>
              <p className="text-white text-sm md:text-base md:text-left text-center">
                Supply:
              </p>
              <p className="text-white text-sm md:text-base md:text-left text-center">
                Dev Fee:
              </p>
              <p className="text-white text-sm md:text-base md:text-left text-center">
                Vault Creator Fee:
              </p>
              <p className="text-white text-sm md:text-base md:text-left text-center">
                Reserve Fee:
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-6 w-full md:w-auto">
              <StakingCardComponent
                heading="Stable Tokens"
                subheading="Stake and Withdraw your Stable tokens."
                placeholder="Enter the amount of stable tokens"
              />
              <StakingCardComponent
                heading="Reserve Tokens"
                subheading="Stake and Withdraw your Reserve tokens."
                placeholder="Enter the amount of reserve tokens"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stake;
