import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-indigo-600/60 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl p-8 space-y-6">
        <h1 className="text-4xl font-bold text-center text-white">
          Contact Info
        </h1>

        <div className="space-y-5 text-gray-800">
          <div className="bg-white/70 backdrop-blur-md border border-black/10 rounded-xl p-5 flex items-center gap-4">
            <Phone className="w-5 h-5 text-blue-600" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Phone / WhatsApp</span>
              <span className="text-base">01621943514</span>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-md border border-black/10 rounded-xl p-5 flex items-center gap-4">
            <Mail className="w-5 h-5 text-red-500" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Email</span>
              <span className="text-base break-all">
                fahim.ahmed.ifty.cse@gmail.com
              </span>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-md border border-black/10 rounded-xl p-5 flex items-center gap-4">
            <MapPin className="w-5 h-5 text-green-600" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Location</span>
              <span className="text-base">Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
