'use client';

import { useState } from 'react';

export default function Settings() {
  const [notifications, setNotifications] = useState(true);

  const handleNotificationsToggle = () => {
    setNotifications(!notifications);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Settings</h1>

      <div className="bg-white shadow rounded-lg p-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Enable Notifications</span>
          <button
            onClick={handleNotificationsToggle}
            className={`relative inline-flex items-center h-6 rounded-full w-11 cursor-pointer ${
              notifications ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out ${
                notifications ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>

    </div>
  );
}
