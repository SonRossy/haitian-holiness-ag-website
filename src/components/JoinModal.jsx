import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const JoinModal = ({ isOpen, onClose }) => {
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
            className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-lg relative text-center"
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

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Join the Haitian Holiness A.G. Family
            </h2>

            {/* Message */}
            <p className="text-gray-600 mb-6">
              We’re so glad you’re here! At Haitian Holiness A.G., we believe in
              growing together through faith, fellowship, and service.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                onClick={onClose}
                href="#about"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Become a Member
              </a>
              <a
                onClick={onClose}
                href="#ministries"
                className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Volunteer
              </a>
              <a
                onClick={onClose}
                href="#contact"
                className="bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition"
              >
                Get Updates
              </a>
            </div>

            {/* Verse */}
            <p className="text-gray-500 text-sm mt-6 italic">
              “For where two or three are gathered in my name, there am I with
              them.” – Matthew 18:20
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JoinModal;
