'use client';

import { useState } from 'react';
import { Switch } from '@headlessui/react';

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Settings</h1>

      <div className="bg-white shadow rounded-lg p-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Dark Mode</span>
          <Switch
            checked={darkMode}
            onChange={setDarkMode}
            className={`$ {
              darkMode ? 'bg-blue-600' : 'bg-gray-200'
            } relative inline-flex items-center h-6 rounded-full w-11`}
          >
            <span
              className={`$ {
                darkMode ? 'translate-x-6' : 'translate-x-1'
              } inline-block w-4 h-4 transform bg-white rounded-full`}
            />
          </Switch>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Enable Notifications</span>
          <Switch
            checked={notifications}
            onChange={setNotifications}
            className={`$ {
              notifications ? 'bg-blue-600' : 'bg-gray-200'
            } relative inline-flex items-center h-6 rounded-full w-11`}
          >
            <span
              className={`$ {
                notifications ? 'translate-x-6' : 'translate-x-1'
              } inline-block w-4 h-4 transform bg-white rounded-full`}
            />
          </Switch>
        </div>
      </div>

    </div>
  );
}
