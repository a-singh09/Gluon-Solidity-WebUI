"use client";

import React, { useState } from "react";
import FormCard from "@/components/form-card";
import { CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { isAddress } from "viem";
import { Chains } from "@/lib/chains";
import { writeContract } from "@wagmi/core";
import { config } from "@/wagmi/config";
import GluonTokenFactory from "@/out/GluonTokenFactory.sol/GluonTokenFactory.json";

const { abi } = GluonTokenFactory;
const factoryAddress = process.env.NEXT_PUBLIC_FACTORY_ADDRESS; // Replace with your factory contract address

export default function Dashboard() {
  const [allFormData, setAllFormData] = useState<{ [key: string]: any }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const updateFormData = (section: string, data: any) => {
    setAllFormData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const validateAddress = (address: string | undefined): boolean => {
    if (!address) return false;
    return isAddress(address);
  };

  const handleSubmit = async () => {
    // Combine all form sections
    const formData = {
      ...allFormData.erc20,
      ...allFormData.stable,
      ...allFormData.reserve,
      ...allFormData.treasury,
      ...allFormData.ratios,
      ...allFormData.fees,
    };

    console.log("Submitted Form Data:", formData);

    try {
      setIsSubmitting(true);

      console.log("Raw form data:", allFormData);

      if (!formData) {
        throw new Error("Kindly fill all the fields");
      }

      if (!validateAddress(formData?.token_address_existing_erc_20_token)) {
        throw new Error("Invalid token address format");
      }

      if (!validateAddress(formData?.treasury_address)) {
        throw new Error("Invalid treasury address format");
      }

      // Prepare contract parameters with default values
      const params = {
        tokenAddress: formData.token_address_existing_erc_20_token,
        neutronName: formData.name || "",
        neutronSymbol: formData.symbol || "",
        protonName: formData.name || "",
        protonSymbol: formData.symbol || "",
        treasury: formData.treasury_address,
        initialTreasuryFee: formData.initial_treasury_fee || "0",
        treasuryRevenueTarget: formData.treasury_revenue_target || "0",
        criticalRatio: formData.critical_ratio || "0",
        targetRatio: formData.target_ratio || "0",
        feeFission: formData.fee_for_fission || "0",
        feeFusion: formData.fee_for_fusion || "0",
        decayRate: formData.decay_rate || "0",
        vaultFee: formData.reserve_fee || "0",
        vaultCreatorFee: formData.vault_creator_fee || "0",
        stableOrderFee: formData.dev_fee || "0",
      };

      const denominator = "1000000";

      const result = await writeContract(config, {
        abi,
        address: factoryAddress as `0x${string}`,
        functionName: "createGluonReactor",
        args: [
          params.tokenAddress,
          params.neutronName,
          params.neutronSymbol,
          params.protonName,
          params.protonSymbol,
          parseInt(denominator),
          params.treasury,
          parseInt(params.initialTreasuryFee),
          parseInt(params.treasuryRevenueTarget),
          parseInt(params.criticalRatio),
          parseInt(params.targetRatio),
          parseInt(params.feeFission),
          parseInt(params.feeFusion),
          parseInt(params.decayRate),
          parseInt(params.vaultFee),
          parseInt(params.vaultCreatorFee),
          parseInt(params.stableOrderFee),
        ],
      });

      console.log("Transaction Result:", result);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Create New Deployment</h1>
          <h3 className="text-pretty text-base ml-1 text-zinc-400">
            Fill this form to create new Deployment
          </h3>
        </div>
        <div className="mx-auto w-full max-w-6xl items-start gap-6">
          <div className="grid gap-6">
            <FormCard
              title="ERC-20 Token"
              description="Details about existing ERC-20 token used for deployment"
              inputs={[
                { placeholder: "Name" },
                { placeholder: "Symbol" },
                { placeholder: "Token Address (existing ERC-20 token)" },
              ]}
              dropdowns={[
                {
                  placeholder: "Select Chains",
                  options: Chains.map((chain) => ({
                    value: chain.value,
                    label: chain.label,
                  })),
                },
              ]}
              onDataChange={(data) => updateFormData("erc20", data)}
            />
            <FormCard
              title="Stable Tokens"
              description="Details about stable tokens (neutrons) to be minted"
              inputs={[{ placeholder: "Name" }, { placeholder: "Symbol" }]}
              onDataChange={(data) => updateFormData("stable", data)}
            />
            <FormCard
              title="Reserve Tokens"
              description="Details about reserve tokens (protons) to be minted"
              inputs={[{ placeholder: "Name" }, { placeholder: "Symbol" }]}
              onDataChange={(data) => updateFormData("reserve", data)}
            />
            <FormCard
              title="Treasury Details"
              description="Details related to the treasury configuration."
              inputs={[
                { placeholder: "Treasury Address" },
                { placeholder: "Initial Treasury Fee" },
                { placeholder: "Treasury Revenue Target" },
              ]}
              onDataChange={(data) => updateFormData("treasury", data)}
            />
            <FormCard
              title="Ratios and Fees"
              description="Configuration of critical and target ratios, and fees for fission and fusion."
              inputs={[
                { placeholder: "Critical Ratio" },
                { placeholder: "Target Ratio" },
                { placeholder: "Fee for Fission" },
                { placeholder: "Fee for Fusion" },
                { placeholder: "Decay Rate" },
              ]}
              onDataChange={(data) => updateFormData("ratios", data)}
            />
            <FormCard
              title="Additional Fees"
              description="Configuration of additional fees."
              inputs={[
                { placeholder: "Reserve Fee" },
                { placeholder: "Vault Creator Fee" },
                { placeholder: "Dev Fee" },
              ]}
              onDataChange={(data) => updateFormData("fees", data)}
            />
            <CardFooter className="px-2 py-1">
              <Button onClick={handleSubmit}>
                {isSubmitting ? "Creating..." : "Create Stablecoin"}
              </Button>
            </CardFooter>
          </div>
        </div>
      </main>
    </div>
  );
}
