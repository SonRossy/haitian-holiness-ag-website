import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Ministries from "./components/Ministries";
import EventsSection from "./components/EventsSection";
import Sermons from "./components/Sermons";
import Donate from "./components/Donate";
import Quote from "./components/Quote";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      <Header />
      <main>
        <Home />
        <About />
        <Ministries />
        <EventsSection />
        <Sermons />
        <Donate />
        <Quote />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
