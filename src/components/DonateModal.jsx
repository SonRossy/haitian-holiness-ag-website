import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const MotionDiv = motion.div;

const DonateModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <MotionDiv
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <MotionDiv
            className="relative w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              aria-label="Close donation modal"
            >
              <X size={24} />
            </button>

            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              Support Haitian Holiness A.G.
            </h2>

            <p className="mb-4 text-gray-600">
              Scan the Zelle QR code below to send your donation.
            </p>

            <img
              src="/zelle-qr.png"
              alt="Zelle QR Code"
              className="mx-auto mb-4 h-56 w-56 object-contain"
            />

            <p className="text-gray-700">
              Or send manually to:
              <br />
              <span className="font-semibold">haitianholinessag@gmail.com</span>
            </p>

            <p className="mt-6 text-sm italic text-gray-500">
              “For God loves a cheerful giver.” - 2 Corinthians 9:7
            </p>
          </MotionDiv>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
};

export default DonateModal;
