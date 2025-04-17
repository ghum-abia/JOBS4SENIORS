import React from 'react';

const ActivityTab = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Activities & Interests</h2>
      <div className="grid gap-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-medium mb-2">Recent Activities</h3>
          <p className="text-gray-600">No recent activities to show</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-medium mb-2">Interests</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">UI/UX Design</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Web Development</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Graphic Design</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityTab;