import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  Image as ImageIcon,
  X,
  LogOut,
  ChevronRight,
  FolderPlus,
  Menu,
} from 'lucide-react';
import Analytics from './DashboardPages/Analytics';
import Event from './DashboardPages/Event';
import Home from "./DashboardPages/Home"
import PastEvents from './DashboardPages/PastEvents';
import Queries from './DashboardPages/Queries';
import Subscribers from './DashboardPages/Subscribers';

const DashboardLayout = () => {
  const [activePage, setActivePage] = useState("dashboard"); // default page

const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderPage = () => {
      switch (activePage) {
        case "dashboard":
          return <Home />;
        case "event":
          return <Event />;
        case "analytics":
          return <Analytics />;
        case "pastevents":
          return <PastEvents />;
        case "queries":
          return <Queries />;
        case "subscribers":
          return <Subscribers />;
        default:
          return <Home />;
      }
    }
  const menuItems = [
    { id: "dashboard", label: "Home" },
    { id: "event", label: "Add Event" },
    { id: "pastevents", label: "Past Events" },
    { id: "queries", label: "Queries" },
    { id: "subscribers", label: "Subscribers" },
     { id: "analytics", label: "Analytics" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-800 flex">
<aside
className={`
fixed top-0 left-0 h-dvh w-64 bg-white border-r border-gray-200 shadow-xl
transform transition-transform duration-300 z-40 flex flex-col
${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
md:translate-x-0
`}
>
<div className="p-6 flex items-center gap-3 border-b border-gray-100">
<div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold">
A
</div>
<span className="font-bold text-xl tracking-tight text-gray-800">AdminPanel</span>
</div>



      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
        setActivePage(item.id);
        setIsMobileMenuOpen(false); 
      }}

            className={`w-full flex items-center justify-between p-3 rounded-xl transition-all
              ${activePage === item.id
                ? "bg-amber-50 text-amber-700 font-semibold"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`}
          >
            <div className="flex items-center gap-3">
              <LayoutDashboard
                size={18}
                className={
                  activePage === item.id ? "text-amber-600" : "text-gray-400"
                }
              />
              <span>{item.label}</span>
            </div>
            {activePage === item.id && <ChevronRight size={16} />}
          </button>
        ))}
      </nav>


{/* BOTTOM BUTTONS — always at bottom */}
<div className="p-4 border-t border-gray-100 space-y-2 bg-red-50">
{/* <button className="flex items-center gap-3 p-3 text-gray-500 hover:text-gray-900 w-full rounded-lg hover:bg-gray-50">
<Settings size={18} /> <span>Settings</span>
</button> */}
<button className="flex items-center gap-3 p-3 text-red-500 hover:bg-red-100 rounded-xl w-full">
<LogOut size={18} /> <span>Logout</span>
</button>
</div>
</aside>

      {/* ---- MOBILE OVERLAY ---- */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* ---- MOBILE TOP BAR ---- */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-30 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            A
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-800">
            <span className='text-amber-600'>AD</span>KAMP
          </span>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ---- MAIN CONTENT (SCROLLABLE) ---- */}
      <main className="flex-1 ml-0 md:ml-64 pt-20 md:pt-6 p-4 md:p-10  h-screen">
     
        {renderPage()}

      </main>
    </div>
  );
};

export default DashboardLayout;

