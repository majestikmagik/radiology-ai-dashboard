'use client';

import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import Sidebar from './Sidebar';
import Header from './Header';
import PatientsOverview from './PatientsOverview';
import XRayAnalysis from './XRayAnalysis';
import AIInsights from './AIInsights';
import Reports from './Reports';
import Settings from './Settings';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [user] = useState({
    name: 'Dr. Emily Johnson',
    role: 'Radiologist',
    avatar: '/api/placeholder/40/40'
  });

  // Check if mobile and handle responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 1024; // lg breakpoint
      setIsMobile(mobile);
      if (mobile) {
        setSidebarOpen(false); // Auto-collapse on mobile
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Auto-collapse sidebar after navigation on mobile
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-10 z-40 lg:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <Sidebar 
        activeTab={activeTab} 
        onTabChange={handleTabChange}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        isMobile={isMobile}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          user={user} 
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          showMenuButton={isMobile}
        />
        
        <main className="flex-1 overflow-y-auto p-3 sm:p-4 lg:p-6">
          <Tabs value={activeTab} onValueChange={handleTabChange}>
            <TabsContent value="overview" className="space-y-4 lg:space-y-6">
              <PatientsOverview />
            </TabsContent>
            
            <TabsContent value="analysis" className="space-y-4 lg:space-y-6">
              <XRayAnalysis />
            </TabsContent>
            
            <TabsContent value="insights" className="space-y-4 lg:space-y-6">
              <AIInsights />
            </TabsContent>
            
            <TabsContent value="reports" className="space-y-4 lg:space-y-6">
              <Reports />
            </TabsContent>
            
            <TabsContent value="settings" className="space-y-4 lg:space-y-6">
              <Settings />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
