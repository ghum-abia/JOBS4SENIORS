import React from 'react';
import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';

const defaultSettings = {
  connectionRequests: true,
  profileViews: true,
  jobMatches: true,
  proposalUpdates: true,
  messages: true,
  likes: false,
  comments: true,
  communityPosts: false,
  weeklyDigest: true,
  emailNotifications: true,
};

function Notifications() {
  const [activeTab, setActiveTab] = useState('notifications');
  const [settings, setSettings] = useState(defaultSettings);

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const recentNotifications = [
    {
      id: '1',
      content: 'You appeared in 9 searches this week',
      time: '9 hours ago',
      profilePics: [
        'https://randomuser.me/api/portraits/men/43.jpg',
        'https://randomuser.me/api/portraits/men/32.jpg',
        'https://randomuser.me/api/portraits/women/56.jpg',
      ],
      type: 'view',
    },
    {
      id: '2',
      content: 'Audrey Alexander and 10 others viewed your profile',
      time: '9 hours ago',
      profilePics: [
        'https://randomuser.me/api/portraits/women/22.jpg',
        'https://randomuser.me/api/portraits/men/43.jpg',
        'https://randomuser.me/api/portraits/women/56.jpg',
      ],
      type: 'view',
    },
    {
      id: '3',
      content: 'Eduardo Russel and 4 others liked your post +1,000 connections!',
      time: '12 hours ago',
      profilePics: [
        'https://randomuser.me/api/portraits/men/75.jpg',
        'https://randomuser.me/api/portraits/women/35.jpg',
        'https://randomuser.me/api/portraits/men/41.jpg',
      ],
      type: 'like',
    },
  ];

  const earlierNotifications = [
    {
      id: '4',
      content: 'We found jobs that you may be interested in',
      time: '2 days ago',
      profilePics: [
        'https://randomuser.me/api/portraits/men/32.jpg',
        'https://randomuser.me/api/portraits/men/32.jpg',
        'https://randomuser.me/api/portraits/men/32.jpg',
      ],
      type: 'job',
    },
    {
      id: '5',
      content: 'Kyle Fisher and 17 others viewed your profile',
      time: '2 days ago',
      profilePics: [
        'https://randomuser.me/api/portraits/men/41.jpg',
        'https://randomuser.me/api/portraits/women/22.jpg',
        'https://randomuser.me/api/portraits/men/43.jpg',
      ],
      type: 'view',
    },
    {
      id: '6',
      content: 'Brandon Wilson sent you a connection request',
      time: '3 days ago',
      profilePics: ['https://randomuser.me/api/portraits/men/40.jpg'],
      type: 'connect',
    },
  ];

  const NotificationRow = ({ notification }) => (
    <div className="flex items-start p-2 rounded-lg hover:bg-gray-50">
      <div className="mr-3 flex-shrink-0">
        <div className="relative flex">
          {notification.profilePics.slice(0, 3).map((pic, index) => (
            <img
              key={index}
              src={pic}
              alt="Profile"
              className={`w-12 h-12 rounded-full ${index > 0 ? '-ml-4' : ''}`}
              style={{ zIndex: 3 - index }}
            />
          ))}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[#181818] font-medium text-[14px]">{notification.content}</p>
        <p className="text-gray-400 text-xs mt-0.5">{notification.time}</p>
      </div>
      <button className="flex-shrink-0 p-1 rounded-full hover:bg-gray-200">
        <BsThreeDots size={20} />
      </button>
    </div>
  );

  const Toggle = ({ enabled, onToggle }) => (
    <button
      onClick={onToggle}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
        enabled ? 'bg-[#15411F]' : 'bg-gray-300'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );

  const settingGroups = [
    {
      group: 'Connections & Profile',
      items: [
        { key: 'connectionRequests', label: 'Connection requests', desc: 'When someone sends you a connection request' },
        { key: 'profileViews', label: 'Profile views', desc: 'When someone visits your profile' },
      ],
    },
    {
      group: 'Jobs & Proposals',
      items: [
        { key: 'jobMatches', label: 'Job matches', desc: 'New jobs matching your skills and preferences' },
        { key: 'proposalUpdates', label: 'Proposal updates', desc: 'Status changes on your submitted proposals' },
      ],
    },
    {
      group: 'Posts & Community',
      items: [
        { key: 'likes', label: 'Likes on your posts', desc: 'When someone likes your post' },
        { key: 'comments', label: 'Comments on your posts', desc: 'When someone comments on your post' },
        { key: 'communityPosts', label: 'Community updates', desc: 'New posts in communities you follow' },
      ],
    },
    {
      group: 'Messages',
      items: [
        { key: 'messages', label: 'Direct messages', desc: 'When you receive a new message' },
      ],
    },
    {
      group: 'Email',
      items: [
        { key: 'emailNotifications', label: 'Email notifications', desc: 'Receive a summary of notifications by email' },
        { key: 'weeklyDigest', label: 'Weekly digest', desc: 'A weekly summary of your network activity' },
      ],
    },
  ];

  return (
    <>
      <div className="bg-white rounded-2xl">
        <div>
          <div className="flex-1 p-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-2xl font-bold mb-6">Notification</h1>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Tabs */}
                <div className="flex border-b">
                  <button
                    onClick={() => setActiveTab('notifications')}
                    className={`flex-1 py-4 font-medium rounded-t-lg text-center transition-colors ${
                      activeTab === 'notifications'
                        ? 'bg-[#15411F] text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    NOTIFICATIONS
                  </button>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`flex-1 py-4 rounded-t-lg font-medium text-center transition-colors ${
                      activeTab === 'settings'
                        ? 'bg-[#15411F] text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    NOTIFICATION SETTINGS
                  </button>
                </div>

                <div>
                  {/* NOTIFICATIONS TAB */}
                  {activeTab === 'notifications' && (
                    <div className="p-4">
                      <h2 className="text-sm font-bold text-gray-500 flex justify-center uppercase mb-6 px-2">
                        RECENT
                      </h2>
                      <div className="space-y-4">
                        {recentNotifications.map((n) => (
                          <NotificationRow key={n.id} notification={n} />
                        ))}
                      </div>

                      <h2 className="text-sm font-bold text-gray-500 uppercase my-6 px-2">
                        EARLIER
                      </h2>
                      <div className="space-y-4">
                        {earlierNotifications.map((n) => (
                          <NotificationRow key={n.id} notification={n} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* SETTINGS TAB */}
                  {activeTab === 'settings' && (
                    <div className="p-6">
                      <p className="text-gray-500 text-sm mb-6">
                        Manage how and when you receive notifications from JOBS4SENIORS.
                      </p>

                      <div className="space-y-8">
                        {settingGroups.map(({ group, items }) => (
                          <div key={group}>
                            <h3 className="text-xs font-bold uppercase text-[#15411F] mb-3 pb-2 border-b border-gray-100">
                              {group}
                            </h3>
                            <div className="space-y-4">
                              {items.map(({ key, label, desc }) => (
                                <div key={key} className="flex items-center justify-between">
                                  <div>
                                    <p className="text-[14px] font-medium text-[#181818]">{label}</p>
                                    <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
                                  </div>
                                  <Toggle
                                    enabled={settings[key]}
                                    onToggle={() => toggleSetting(key)}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      <button className="mt-8 bg-[#15411F] text-white px-6 py-2 rounded-md text-sm font-normal hover:bg-green-900 transition-colors">
                        Save Preferences
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notifications;