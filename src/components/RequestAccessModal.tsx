"use client";

import { useState } from "react";

type Props = {
  creatorName: string;
  isOpen: boolean;
  onClose: () => void;
};

export default function RequestAccessModal({
  creatorName,
  isOpen,
  onClose,
}: Props) {
  const [requestType, setRequestType] = useState("video");
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleContinue = () => {
    // 🚀 Base44 handoff (single source of truth for auth)
    window.location.href = "/login";
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-[#070B14] p-6 sm:p-8 shadow-2xl">

        {/* HEADER */}
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-white">
            Request {creatorName}
          </h3>
          <p className="mt-1 text-sm text-gray-400">
            Choose how you’d like to connect
          </p>
        </div>

        {/* REQUEST TYPE */}
        <div className="space-y-3 mb-6">
          {[
            { id: "video", label: "Personalized video" },
            { id: "call", label: "Private call" },
            { id: "message", label: "Written response" },
          ].map((option) => (
            <button
              key={option.id}
              onClick={() => setRequestType(option.id)}
              className={`
                w-full text-left rounded-xl border px-4 py-3 text-sm transition
                ${
                  requestType === option.id
                    ? "border-purple-500 bg-purple-500/10 text-white"
                    : "border-white/10 text-gray-300 hover:border-white/30"
                }
              `}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* MESSAGE */}
        <div className="mb-6">
          <label className="block text-sm text-gray-400 mb-2">
            Message to {creatorName}
          </label>
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Briefly describe what you’d like..."
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-purple-500 focus:outline-none"
          />
        </div>

        {/* TRUST LINE */}
        <p className="text-xs text-gray-500 mb-6">
          Typical response time shown on profile.
        </p>

        {/* ACTIONS */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 rounded-xl border border-white/10 px-4 py-3 text-sm text-gray-300 hover:border-white/30 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleContinue}
            className="flex-1 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}