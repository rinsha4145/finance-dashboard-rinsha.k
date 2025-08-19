import React, { useState } from "react"
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import ReportsSettings from "./pages/ReportsSettings";
import Sidebar from "./pages/Sidebar";
import { Menu } from "lucide-react";

export default function App() {
  const [activeBar, setActiveBar] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (activeBar) {
      case "dashboard":
        return <Dashboard />;
      case "transactions":
        return <Transactions />;
      case "reports":
        return <ReportsSettings />
     
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Component */}
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        activeBar={activeBar}
        setActiveBar={setActiveBar}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="w-5 h-5" />
              </button>
              <nav className="flex items-center space-x-2 text-sm">
                <span className="text-gray-500">Home</span>
                <span className="text-gray-400">{'/'}</span>
                <span className="font-medium text-gray-900 capitalize">
                  {activeBar === 'dashboard' ? 'Dashboard' : activeBar.replace('-', ' ')}
                </span>
              </nav>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-4 lg:p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}