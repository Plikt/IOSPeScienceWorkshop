// components/workshop-hero.tsx (or .jsx)
import { useState } from 'react';
import { Button } from "./ui/button";
import { Send, X } from "lucide-react";

export function WorkshopHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const googleFormEmbedUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdU_Zt_HKsRhk9LfznQfg0Ys_qq_uJ9CKxJEqfdd3CmiHVNAw/viewform?embedded=true";

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const canShowForm = !!googleFormEmbedUrl;

  return (
    <>
      <section className="bg-[#1A1F2C] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The Institute of Open Science Practices
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-300">
            Reliable Metadata Generation and Data Discovery Workshop
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
            <a
              href="https://www.escience-conference.org/2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <div className="bg-[#E5DEFF] text-[#1A1F2C] py-2 px-4 rounded-lg hover:bg-opacity-90 transition-opacity">
                IEEE eScience 2025
              </div>
            </a>

            <Button
              size="lg"
              className="bg-white text-[#1A1F2C] hover:bg-gray-200"
              onClick={openModal}
              disabled={!canShowForm}
            >
              <Send className="w-4 h-4 mr-2" />
              Attend
            </Button>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Click "Attend" to register your interest and receive updates.
          </p>

          {!canShowForm && (
              <p className="text-xs text-yellow-400 mt-1">(Form URL not configured)</p>
          )}

        </div>
      </section>

      {isModalOpen && canShowForm && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
             <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-semibold text-gray-800">Register Your Interest</h2>
                <Button variant="ghost" size="sm" onClick={closeModal} aria-label="Close modal">
                    <X className="w-5 h-5 text-gray-600" />
                </Button>
             </div>

             <div className="flex-grow overflow-auto">
                <iframe
                  src={googleFormEmbedUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="min-h-[400px]"
                  title="Workshop Interest Registration Form"
                >
                  Loading…
                </iframe>
             </div>
          </div>
        </div>
      )}
    </>
  );
}