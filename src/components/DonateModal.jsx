import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const DonateModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-md relative text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Support Haitian Holiness A.G.
            </h2>

            <p className="text-gray-600 mb-4">
              Scan the Zelle QR code below to send your donation.
            </p>

            <img
              src="/haitian-holiness-ag-website/zelle-qr.png"
              alt="Zelle QR Code"
              className="w-56 h-56 object-contain mx-auto mb-4"
            />

            <p className="text-gray-700">
              Or send manually to:
              <br />
              <span className="font-semibold">haitianholinessag@gmail.com</span>
            </p>

            <p className="text-sm text-gray-500 mt-6 italic">
              “For God loves a cheerful giver.” – 2 Corinthians 9:7
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DonateModal;
