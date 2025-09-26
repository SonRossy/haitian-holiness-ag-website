import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Ministries from "./components/Ministries";
import EventsSection from "./components/EventsSection";
import Sermons from "./components/Sermons";
import Donate from "./components/Donate";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Ministries />
        <EventsSection />
        <Sermons />
        <Donate />
      </main>
      <Footer />
    </div>
  );
}
