'use client';

import { 
  Users, 
  Brain, 
  BarChart3, 
  Settings, 
  Activity,
  Stethoscope,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isOpen: boolean;
  onToggle: () => void;
  isMobile: boolean;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const menuItems = [
  { id: 'overview', label: 'Patients Overview', icon: Users, shortLabel: 'Patients' },
  { id: 'analysis', label: 'X-Ray Analysis', icon: Activity, shortLabel: 'Analysis' },
  { id: 'insights', label: 'AI Insights', icon: Brain, shortLabel: 'Insights' },
  { id: 'reports', label: 'Reports', icon: BarChart3, shortLabel: 'Reports' },
  { id: 'settings', label: 'Settings', icon: Settings, shortLabel: 'Settings' },
];

export default function Sidebar({ activeTab, onTabChange, isOpen, onToggle, isMobile, isCollapsed, onToggleCollapse }: SidebarProps) {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className={`${isMobile ? 'hidden' : 'block'} ${isCollapsed ? 'w-20' : 'w-64'} bg-white shadow-lg border-r border-gray-200 flex-shrink-0 transition-all duration-300 ease-in-out`}>
        <div className="p-4 lg:p-6">
          <div className={`flex items-center justify-between ${isCollapsed ? 'flex-col space-y-4' : ''}`}>
            <div className={`flex items-center space-x-2 ${isCollapsed ? 'hidden' : 'flex'}`}>
              <Stethoscope className="h-6 w-6 lg:h-8 lg:w-8 text-blue-600" />
              <h1 className="text-lg font-bold text-gray-900">RadiologyAI</h1>
            </div>
            
            {isCollapsed && (
              <div className="flex justify-center">
                <Stethoscope className="h-8 w-8 text-blue-600" />
              </div>
            )}
            
            <button
              onClick={onToggleCollapse}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
              title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
            >
              {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
            </button>
          </div>
          
          {!isCollapsed && (
            <p className="text-xs text-gray-500 mt-1">Cancer Detection CRM</p>
          )}
        </div>
        
        <nav className={`${isCollapsed ? 'mt-2' : 'mt-4 lg:mt-6'}`}>
          <ul className={`space-y-1 px-3 ${isCollapsed ? 'space-y-2' : 'space-y-1'}`}>
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              
              return (
                <li key={item.id}>
                  <button
                    onClick={() => onTabChange(item.id)}
                    className={`w-full flex items-center ${isCollapsed ? 'justify-center p-3' : 'space-x-3 px-3 py-2'} rounded-lg text-left transition-colors relative group cursor-pointer ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                    title={isCollapsed ? item.label : ""}
                  >
                    <Icon className={`h-5 w-5 ${isActive ? 'text-blue-700' : 'text-gray-400'}`} />
                    {!isCollapsed && <span className="font-medium text-sm">{item.label}</span>}
                    
                    {/* Tooltip for collapsed state */}
                    {isCollapsed && (
                      <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                        {item.label}
                      </div>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <div className={`${
        isMobile ? 'block' : 'hidden'
      } fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg border-r border-gray-200 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Stethoscope className="h-6 w-6 text-blue-600" />
              <h1 className="text-lg font-bold text-gray-900">RadiologyAI</h1>
            </div>
            <button
              onClick={onToggle}
              className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-1">Cancer Detection CRM</p>
        </div>
        
        <nav className="mt-4">
          <ul className="space-y-1 px-3">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              
              return (
                <li key={item.id}>
                  <button
                    onClick={() => onTabChange(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`} >
                    <Icon className={`h-5 w-5 ${isActive ? 'text-blue-700' : 'text-gray-400'}`} />
                    <span className="font-medium text-sm">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
