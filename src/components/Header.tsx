'use client';

import { Bell, Search, User, Menu } from 'lucide-react';

interface User {
  name: string;
  role: string;
  avatar: string;
}

interface HeaderProps {
  user: User;
  onMenuClick?: () => void;
  showMenuButton?: boolean;
}

export default function Header({ user, onMenuClick, showMenuButton = false }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-3 sm:px-4 lg:px-6 py-3 lg:py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Mobile menu button */}
          {showMenuButton && (
            <button
              onClick={onMenuClick}
              className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 lg:hidden cursor-pointer"
            >
              <Menu className="h-5 w-5" />
            </button>
          )}
          
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">Dashboard</h2>
          
          {/* Search - Hidden on small screens, shown on medium+ */}
          <div className="hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search patients, reports..."
                className="pl-10 pr-4 py-2 border border-gray-300 text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-48 lg:w-64 text-sm"
              />
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
          {/* Mobile search button */}
          <button className="p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 rounded-lg md:hidden">
            <Search className="h-5 w-5" />
          </button>
          
          {/* Notifications */}
          <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 rounded-lg cursor-pointer">
            <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
          </button>
          
          {/* User profile */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="text-right hidden sm:block">
              <p className="text-xs sm:text-sm font-medium text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500">{user.role}</p>
            </div>
            <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
