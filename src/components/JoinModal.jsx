import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Mail,
  MapPin,
  Phone,
  X,
} from "lucide-react";

const MotionDiv = motion.div;

const visitDetails = [
  {
    title: "Sunday Worship",
    detail: "10:30 AM",
    icon: CalendarDays,
  },
  {
    title: "Wednesday Service",
    detail: "7:00 PM",
    icon: Clock,
  },
  {
    title: "Church Address",
    detail: "214 Ames St, Brockton, MA 02301",
    icon: MapPin,
  },
];

const JoinModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionDiv
          className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-slate-950/75 px-4 py-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <MotionDiv
            role="dialog"
            aria-modal="true"
            aria-labelledby="join-modal-title"
            className="relative grid w-full max-w-4xl overflow-hidden rounded-2xl bg-white text-left shadow-2xl shadow-slate-950/30 lg:grid-cols-[1fr_0.92fr]"
            initial={{ y: 18, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 18, scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full bg-white/90 text-slate-600 shadow-sm transition hover:bg-white hover:text-slate-950"
              aria-label="Close visit modal"
            >
              <X size={21} aria-hidden="true" />
            </button>

            <div className="bg-slate-950 px-6 py-8 text-white sm:px-8 sm:py-10">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brandGold">
                Join Us
              </p>
              <h2
                id="join-modal-title"
                className="mt-4 font-heading text-3xl font-bold leading-tight sm:text-4xl"
              >
                Plan your first visit with us
              </h2>
              <p className="mt-4 max-w-md text-base leading-7 text-slate-300">
                Whether you are visiting church for the first time or looking
                for a place to grow in faith, Haitian Holiness A.G. welcomes
                you.
              </p>

              <div className="mt-8 space-y-3">
                {visitDetails.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.07] p-4"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brandGold text-slate-950">
                      {item.icon === CalendarDays && (
                        <CalendarDays size={19} aria-hidden="true" />
                      )}
                      {item.icon === Clock && (
                        <Clock size={19} aria-hidden="true" />
                      )}
                      {item.icon === MapPin && (
                        <MapPin size={19} aria-hidden="true" />
                      )}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-white">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-slate-300">
                        {item.detail}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-6 py-8 sm:px-8 sm:py-10">
              <div className="rounded-lg bg-brandGold/15 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
                  Need help before you come?
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Contact us for directions, questions, or prayer before your
                  visit.
                </p>
                <div className="mt-4 grid gap-3">
                  <a
                    href="tel:+18574179149"
                    className="flex items-center gap-3 rounded-md bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <Phone size={18} className="text-brandBlue" aria-hidden="true" />
                    Call (857) 417-9149
                  </a>
                  <a
                    href="mailto:fmangu460@gmail.com"
                    className="flex items-center gap-3 rounded-md bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <Mail size={18} className="text-brandBlue" aria-hidden="true" />
                    Email the church
                  </a>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=214+Ames+St+Brockton+MA+02301"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between rounded-md bg-brandBlue px-5 py-4 font-semibold text-white transition hover:brightness-110"
                >
                  Get Directions
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a
                  onClick={onClose}
                  href="#ministries"
                  className="inline-flex items-center justify-between rounded-md border border-slate-200 px-5 py-4 font-semibold text-slate-900 transition hover:border-brandGold hover:bg-slate-50"
                >
                  Explore Ministries
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a
                  onClick={onClose}
                  href="#contact"
                  className="inline-flex items-center justify-between rounded-md border border-slate-200 px-5 py-4 font-semibold text-slate-900 transition hover:border-brandGold hover:bg-slate-50"
                >
                  Send a Message
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>

              <p className="mt-6 text-sm leading-6 text-slate-500">
                Come as you are. We look forward to worshiping with you.
              </p>
            </div>
          </MotionDiv>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
};

export default JoinModal;
