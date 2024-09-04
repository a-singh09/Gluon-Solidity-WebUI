"use client"
import React, { useState } from 'react';
import { Plus, Equal } from 'lucide-react';
import InteractionCardComponent from './interaction-card';

export default function Interaction({ params, activeTab }: { params: string, activeTab: string }) {
    const [state, setState] = useState({
        pay: '',
        pay1: '',
        pay2: '',
        receive: '',
        receive1: '',
        receive2: ''
    });

    const setPay = (value: string) => setState(prevState => ({ ...prevState, pay: value }));
    const setPay1 = (value: string) => setState(prevState => ({ ...prevState, pay1: value }));
    const setPay2 = (value: string) => setState(prevState => ({ ...prevState, pay2: value }));
    const setReceive = (value: string) => setState(prevState => ({ ...prevState, receive: value }));
    const setReceive1 = (value: string) => setState(prevState => ({ ...prevState, receive1: value }));
    const setReceive2 = (value: string) => setState(prevState => ({ ...prevState, receive2: value }));

    const handleCalculate = () => {
        // Calculation logic here
    };

    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="w-full max-w-md space-y-4">
                {activeTab === 'fusion' && (
                    <>
                        <InteractionCardComponent
                            title="Pay"
                            value={state.pay1}
                            onChange={(e) => setPay1(e.target.value)}
                            readOnly={true}
                            tokenName='GAU'
                        />

                        <div className="flex justify-center">
                            <Plus className="text-2xl" />
                        </div>

                        <InteractionCardComponent
                            title="Pay"
                            value={state.pay2}
                            onChange={(e) => setPay2(e.target.value)}
                            readOnly={true}
                            tokenName='GAUC'
                        />

                        <div className="flex justify-center">
                            <Equal className="text-2xl" />
                        </div>

                        <InteractionCardComponent
                            title="Receive"
                            value={state.receive}
                            onChange={(e) => setReceive(e.target.value)}
                            buttonText="Calculate"
                            onButtonClick={handleCalculate}
                            tokenName='ERG'
                        />
                    </>
                )}
                {activeTab === 'fission' && (
                    <>
                        <InteractionCardComponent
                            title="Pay"
                            value={state.pay}
                            onChange={(e) => setPay(e.target.value)}
                            tokenName='ERG'
                        />

                        <div className="flex justify-center">
                            <Equal className="text-2xl" />
                        </div>

                        <InteractionCardComponent
                            title="Receive"
                            value={state.receive1}
                            onChange={(e) => setReceive1(e.target.value)}
                            readOnly={true}
                            tokenName='GAU'
                        />

                        <div className="flex justify-center">
                            <Plus className="text-2xl" />
                        </div>

                        <InteractionCardComponent
                            title="Receive"
                            value={state.receive2}
                            onChange={(e) => setReceive2(e.target.value)}
                            buttonText="Calculate"
                            onButtonClick={handleCalculate}
                            readOnly={true}
                            tokenName='GAUC'
                        />
                    </>
                )}
            </div>
        </div>
    );
}