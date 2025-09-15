import React, { useState } from 'react';
import Chatbot from './components/chatbot';
import { 
  Bell, 
  User, 
  Settings, 
  LogOut, 
  Home, 
  Calendar, 
  Activity, 
  Video, 
  MessageSquare, 
  ShoppingCart, 
  AlertTriangle,
  Heart,
  Footprints,
  Moon,
  Droplet,
  Play,
  TrendingUp,
  Globe,
  Plus,
  Clock,
  CheckCircle2,
  Edit3
} from 'lucide-react';

const Dashboard = () => {
  const [activeNav, setActiveNav] = useState('dashboard');
  const [language, setLanguage] = useState('English');
  const [editingVitals, setEditingVitals] = useState(false);

  // Sample data
  const vitalsData = {
    heartRate: { value: 72, status: 'normal', unit: 'bpm' },
    steps: { value: 8540, target: 10000, unit: 'steps' },
    sleep: { value: 7.5, target: 8, unit: 'hours' },
    oxygen: { value: 98, status: 'normal', unit: '%' }
  };

  const upcomingSessions = [
    { id: 1, type: 'Physical Therapy', time: '2:00 PM', date: 'Today', therapist: 'Dr. Sarah Johnson', isOnline: true },
    { id: 2, type: 'Nutrition Counseling', time: '10:00 AM', date: 'Tomorrow', therapist: 'Dr. Mike Chen', isOnline: false },
    { id: 3, type: 'Mental Health', time: '4:00 PM', date: 'Dec 18', therapist: 'Dr. Emily Wilson', isOnline: true }
  ];

  const exerciseProgress = {
    completed: 75,
    painLevel: 3,
    comfortLevel: 7,
    todayExercise: 'Shoulder Mobility Exercises'
  };

  const notifications = [
    { id: 1, text: 'Take evening medication', time: '6:00 PM', type: 'medicine' },
    { id: 2, text: 'Therapy session in 1 hour', time: '1:00 PM', type: 'appointment' },
    { id: 3, text: 'New message from Dr. Sarah', time: '12:30 PM', type: 'message' }
  ];

  const navItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'therapy', icon: Activity, label: 'Therapy Sessions' },
    { id: 'iot', icon: Heart, label: 'IoT Data' },
    { id: 'video', icon: Video, label: 'Video Conferencing' },
    { id: 'community', icon: MessageSquare, label: 'Community Forum' },
    { id: 'store', icon: ShoppingCart, label: 'Equipment Store' },
    { id: 'emergency', icon: AlertTriangle, label: 'Emergency Help' }
  ];

  return (
    <div className="min-h-screen w-screen bg-gray-50">
      {/* Top Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">PanchKarma</h1>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-lg">
              <Globe className="w-4 h-4 text-gray-600" />
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent text-sm font-medium text-gray-700 border-none outline-none"
              >
                <option value="English"  className='text-gray-600 font-medium px-2'>English</option>
                <option value="Hindi" className='text-gray-600 font-medium px-2'>Hindi</option>
                <option value="Spanish" className='text-gray-600 font-medium px-2'>Spanish</option>
              </select>
            </div>

            {/* Notification Bell */}
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">3</span>
              </div>
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Ayush</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-64 bg-white shadow-sm h-screen sticky top-0">
          <div className="p-6">
            <nav className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveNav(item.id)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                      activeNav === item.id
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${item.id === 'emergency' ? 'text-red-500' : ''}`} />
                    <span className="font-medium">{item.label}</span>
                  </div>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Hello, Ayush 👋</h2>
                <p className="text-blue-100">Ready for today's therapy session?</p>
              </div>
              <div className="flex space-x-3">
                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors text-blue-500 font-semibold">
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>
                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors text-blue-500 font-semibold">
                  <Video className="w-4 h-4" />
                  <span>Join Live Session</span>
                </button>
                <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Emergency</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Health Vitals */}
            <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Health Vitals (Live)</h3>
                <button 
                  onClick={() => setEditingVitals(!editingVitals)}
                  className="flex items-center space-x-2 px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Edit3 className="w-4 h-4" />
                  <span className="text-sm font-medium">{editingVitals ? 'Save' : 'Edit'}</span>
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <div className="flex items-center justify-between mb-2">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Normal</span>
                  </div>
                  {editingVitals ? (
                    <input 
                      type="number" 
                      defaultValue={vitalsData.heartRate.value}
                      className="text-2xl font-bold text-gray-900 bg-transparent border-b border-red-300 w-20 outline-none"
                    />
                  ) : (
                    <div className="text-2xl font-bold text-gray-900">{vitalsData.heartRate.value}</div>
                  )}
                  <div className="text-sm text-gray-600">Heart Rate ({vitalsData.heartRate.unit})</div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-center justify-between mb-2">
                    <Footprints className="w-5 h-5 text-blue-500" />
                    <div className="w-12 h-2 bg-blue-200 rounded-full">
                      <div className="w-10 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  {editingVitals ? (
                    <input 
                      type="number" 
                      defaultValue={vitalsData.steps.value}
                      className="text-2xl font-bold text-gray-900 bg-transparent border-b border-blue-300 w-24 outline-none"
                    />
                  ) : (
                    <div className="text-2xl font-bold text-gray-900">{vitalsData.steps.value.toLocaleString()}</div>
                  )}
                  <div className="text-sm text-gray-600">Steps / {vitalsData.steps.target.toLocaleString()}</div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <div className="flex items-center justify-between mb-2">
                    <Moon className="w-5 h-5 text-purple-500" />
                    <div className="w-12 h-2 bg-purple-200 rounded-full">
                      <div className="w-11 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  {editingVitals ? (
                    <input 
                      type="number" 
                      step="0.1"
                      defaultValue={vitalsData.sleep.value}
                      className="text-2xl font-bold text-gray-900 bg-transparent border-b border-purple-300 w-16 outline-none"
                    />
                  ) : (
                    <div className="text-2xl font-bold text-gray-900">{vitalsData.sleep.value}h</div>
                  )}
                  <div className="text-sm text-gray-600">Sleep / {vitalsData.sleep.target}h target</div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <div className="flex items-center justify-between mb-2">
                    <Droplet className="w-5 h-5 text-green-500" />
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Normal</span>
                  </div>
                  {editingVitals ? (
                    <input 
                      type="number" 
                      defaultValue={vitalsData.oxygen.value}
                      className="text-2xl font-bold text-gray-900 bg-transparent border-b border-green-300 w-16 outline-none"
                    />
                  ) : (
                    <div className="text-2xl font-bold text-gray-900">{vitalsData.oxygen.value}{vitalsData.oxygen.unit}</div>
                  )}
                  <div className="text-sm text-gray-600">Blood Oxygen</div>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications & Reminders</h3>
              <div className="space-y-3">
                {notifications.map((notif) => (
                  <div key={notif.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{notif.text}</p>
                      <p className="text-xs text-gray-500">{notif.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Upcoming Sessions */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Therapy Sessions</h3>
              <div className="space-y-3">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{session.type}</h4>
                      <p className="text-sm text-gray-600">{session.therapist}</p>
                      <p className="text-sm text-blue-600">{session.date} at {session.time}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {session.isOnline && (
                        <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Online</span>
                      )}
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                        <Play className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Tracker */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Therapy Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Exercise Completion</span>
                    <span className="text-sm font-bold text-blue-600">{exerciseProgress.completed}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-blue-500 h-3 rounded-full" style={{width: `${exerciseProgress.completed}%`}}></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">{exerciseProgress.painLevel}/10</div>
                    <div className="text-sm text-gray-600">Pain Level</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{exerciseProgress.comfortLevel}/10</div>
                    <div className="text-sm text-gray-600">Comfort Level</div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Today's Exercise</h4>
                  <p className="text-sm text-gray-600 mb-3">{exerciseProgress.todayExercise}</p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2">
                    <Play className="w-4 h-4" />
                    <span>View 3D Model</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Chatbot />
    </div>
  );
};

export default Dashboard;