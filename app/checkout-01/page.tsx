"use client";

import { useState } from "react";

import PaymentMethods from "./components/PaymentMethods";
import CardFields from "./components/CardFields";
import BankFields from "./components/BankFields";
import TransferInfo from "./components/TransferInfo";
import PayCTA from "./components/PayCTA";
import OrderSummary from "./components/OrderSummary";
import ErrorMessage from "./components/ErrorMessage";
import ProcessingOverlay from "./components/ProcessingOverlay";
import SuccessScreen from "./components/ProcessingScreen";

/* ✅ ORDER ID GENERATOR */
function generateOrderId() {
    return `ORD-${Date.now().toString(36).toUpperCase()}`;
}

export default function Page() {
    const [paymentMethod, setPaymentMethod] = useState<
        "card" | "bank" | "transfer"
    >("card");

    const [error, setError] = useState<string | null>(null);
    const [step, setStep] = useState<"form" | "processing" | "confirmed">("form");
    const [orderId, setOrderId] = useState<string | null>(null);

    /* ✅ STRICT VIDEO FLOW */
    const handlePay = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const canProceed = true; // validation / API later

        if (!canProceed) {
            setError("Payment could not be initiated.");
            return;
        }

        setError(null);
        setStep("processing");

        setTimeout(() => {
            const newOrderId = generateOrderId();
            setOrderId(newOrderId);
            setStep("confirmed");
        }, 3000); // 🔥 at least 3s (video requirement)
    };

    return (
        <main className="min-h-screen bg-white relative">

            {/* 🔥 FULL PAGE PROCESSING OVERLAY */}
            {step === "processing" && <ProcessingOverlay />}

            {/* 🔥 FULL PAGE CONFIRMATION */}
            {step === "confirmed" && orderId ? (
                <SuccessScreen orderId={orderId} />
            ) : (
                <div className="min-h-screen flex items-center justify-center">
                    <div className="w-screen min-h-screen lg:h-[1024px] grid grid-cols-1 lg:grid-cols-2">

                        {/* LEFT COLUMN */}
                        <section className="bg-white order-2 lg:order-1">
                            <div
                                className="
                  relative
                  lg:absolute
                  lg:left-[130px]
                  lg:top-[75px]
                  w-full
                  lg:w-[572px]
                  p-6
                  lg:p-[48px]
                "
                            >
                                <h1 className="text-[24px] font-semibold">Payment</h1>

                                <form onSubmit={handlePay} className="flex flex-col gap-[36px]">
                                    <div className="w-full max-w-[476px] h-px bg-[#D9D9D9] my-[8px]" />

                                    <PaymentMethods
                                        paymentMethod={paymentMethod}
                                        setPaymentMethod={setPaymentMethod}
                                    />

                                    {paymentMethod === "card" && <CardFields />}
                                    {paymentMethod === "bank" && <BankFields />}
                                    {paymentMethod === "transfer" && <TransferInfo />}

                                    {error && (
                                        <ErrorMessage
                                            message={error}
                                            onRetry={() => setError(null)}
                                        />
                                    )}

                                    <PayCTA isLoading={false} />
                                </form>
                            </div>
                        </section>

                        {/* RIGHT COLUMN */}
                        <section className="bg-[#F9FAFA] order-1 lg:order-2 border-b-4 border-[#D9D9D9] lg:border-b-0">
                            <section className="relative">
                                <div
                                    className="
                    relative
                    lg:absolute
                    lg:left-[18px]
                    lg:top-[75px]
                    w-full
                    lg:w-[572px]
                    p-6
                    lg:p-[48px]
                  "
                                >
                                    <h2 className="text-[24px] font-semibold">
                                        Order Summary
                                    </h2>
                                    <OrderSummary />
                                </div>
                            </section>
                        </section>

                    </div>
                </div>
            )}
        </main>
    );
}
