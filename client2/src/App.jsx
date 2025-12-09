import "./App.css";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./components";
import Footer2 from "./components/footer/Footer2";
import ScrollToTop from "./components/ScrollToTop";
import Modal from "./components/Modal";

function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white">

      <ScrollToTop />

      {/* HEADER PASSES CONTROLS */}
      <Header
        onContact={() => setContactOpen(true)}
        onDemo={() => setDemoOpen(true)}
      />

      {/* PASS POPUP TRIGGERS TO CHILD PAGES */}
      <Outlet
        context={{
          openContact: () => setContactOpen(true),
          openDemo: () => setDemoOpen(true),
        }}
      />

      <Footer2 />

      {/* CONTACT POPUP */}
      <Modal open={contactOpen} onClose={() => setContactOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-md px-4 py-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-md px-4 py-2"
          />
          <textarea
            placeholder="Message"
            className="w-full border rounded-md px-4 py-2 h-24"
          />
          <button className="w-full bg-amber-600 text-white py-2 rounded-md font-semibold hover:bg-amber-500">
            Send Message
          </button>
        </form>
      </Modal>

      {/* DEMO POPUP */}
      <Modal open={demoOpen} onClose={() => setDemoOpen(false)}>
        <h2 className="text-xl font-bold mb-3">Watch Demo</h2>

        <div className="w-full aspect-video rounded-xl overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Demo Video"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>

    </div>
  );
}

export default App;
