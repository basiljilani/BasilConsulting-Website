import { useState, FormEvent } from 'react';
import { Save, Globe, Bell, Lock, Mail, Palette, User, Camera } from 'lucide-react';

type SettingsTab = 'general' | 'profile' | 'notifications' | 'security' | 'email' | 'appearance';

interface GeneralSettings {
  siteName: string;
  siteDescription: string;
  timeZone: string;
  language: string;
  maintenanceMode: boolean;
  cookieConsent: boolean;
}

interface ProfileSettings {
  username: string;
  email: string;
  password: string;
  bio: string;
  profilePicture: string | null;
}

interface NotificationSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  marketingEmails: boolean;
  newsUpdates: boolean;
  securityAlerts: boolean;
  soundEnabled: boolean;
}

interface SecuritySettings {
  twoFactorAuthentication: boolean;
  loginAlerts: boolean;
  deviceHistory: boolean;
  passwordExpiry: number;
  ipWhitelist: string[];
  securityQuestions: boolean;
}

interface EmailSettings {
  emailFrequency: 'realtime' | 'daily' | 'weekly' | 'monthly';
  digestEnabled: boolean;
  newsletterSubscription: boolean;
  promotionalEmails: boolean;
  emailFormat: 'html' | 'plain';
  unsubscribeAll: boolean;
}

interface AppearanceSettings {
  theme: 'light' | 'dark' | 'system';
  fontSize: 'small' | 'medium' | 'large';
  reducedMotion: boolean;
  highContrast: boolean;
  sidebarCollapsed: boolean;
  accentColor: string;
  fontFamily: 'inter' | 'roboto' | 'system';
  borderRadius: 'none' | 'small' | 'medium' | 'large';
  density: 'compact' | 'comfortable' | 'spacious';
}

export function SettingsSection() {
  const [activeTab, setActiveTab] = useState<SettingsTab>('general');
  const [settings, setSettings] = useState<GeneralSettings>({
    siteName: 'My Website',
    siteDescription: 'A brief description of my website and its purpose.',
    timeZone: 'UTC-8 (Pacific Time)',
    language: 'English (US)',
    maintenanceMode: false,
    cookieConsent: true,
  });
  const [profile, setProfile] = useState<ProfileSettings>({
    username: 'john_doe',
    email: 'john@example.com',
    password: '',
    bio: '',
    profilePicture: null,
  });
  const [notifications, setNotifications] = useState<NotificationSettings>({
    emailNotifications: true,
    pushNotifications: true,
    marketingEmails: false,
    newsUpdates: true,
    securityAlerts: true,
    soundEnabled: true,
  });
  const [security, setSecurity] = useState<SecuritySettings>({
    twoFactorAuthentication: false,
    loginAlerts: true,
    deviceHistory: true,
    passwordExpiry: 90,
    ipWhitelist: [],
    securityQuestions: false,
  });
  const [email, setEmail] = useState<EmailSettings>({
    emailFrequency: 'daily',
    digestEnabled: true,
    newsletterSubscription: true,
    promotionalEmails: false,
    emailFormat: 'html',
    unsubscribeAll: false,
  });
  const [appearance, setAppearance] = useState<AppearanceSettings>({
    theme: 'dark',
    fontSize: 'medium',
    reducedMotion: false,
    highContrast: false,
    sidebarCollapsed: false,
    accentColor: '#10B981',
    fontFamily: 'inter',
    borderRadius: 'medium',
    density: 'comfortable'
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveMessage('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSaveMessage('Settings saved successfully!');
    } catch (error) {
      setSaveMessage('Error saving settings. Please try again.');
    } finally {
      setIsSaving(false);
      setTimeout(() => setSaveMessage(''), 3000);
    }
  };

  const handleInputChange = (field: keyof GeneralSettings, value: string | boolean) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleProfileChange = (field: keyof ProfileSettings, value: string) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile(prev => ({
          ...prev,
          profilePicture: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNotificationChange = (field: keyof NotificationSettings, value: boolean) => {
    setNotifications(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSecurityChange = (field: keyof SecuritySettings, value: boolean | number) => {
    setSecurity(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleEmailChange = (field: keyof EmailSettings, value: string | boolean) => {
    setEmail(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAppearanceChange = (field: keyof AppearanceSettings, value: string | boolean) => {
    setAppearance(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const tabs = [
    { id: 'general', label: 'General', icon: Globe },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'email', label: 'Email', icon: Mail },
    { id: 'appearance', label: 'Appearance', icon: Palette },
  ];

  const SaveButton = () => (
    <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-800">
      <div>
        {saveMessage && (
          <p className={`text-sm ${
            saveMessage.includes('success') ? 'text-emerald-500' : 'text-red-500'
          }`}>
            {saveMessage}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSaving}
        className={`flex items-center gap-2 px-6 py-2 bg-emerald-500 text-white rounded-lg transition-all ${
          isSaving ? 'opacity-50 cursor-not-allowed' : 'hover:bg-emerald-600'
        }`}
      >
        {isSaving ? (
          <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <Save className="h-4 w-4" />
        )}
        {isSaving ? 'Saving...' : 'Save Changes'}
      </button>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white">Settings</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-[#1E293B] rounded-xl p-4">
            <nav className="space-y-1">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id as SettingsTab)}
                  className={`w-full flex items-center gap-3 px-3 py-2 ${
                    activeTab === id
                      ? 'text-emerald-500 bg-emerald-500/10'
                      : 'text-gray-400 hover:text-white'
                  } transition-colors rounded-lg`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-[#1E293B] rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-6">
              {tabs.find(tab => tab.id === activeTab)?.label} Settings
            </h2>

            {activeTab === 'general' && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Site Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-[#0F172A] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500"
                    placeholder="Enter site name"
                    value={settings.siteName}
                    onChange={(e) => handleInputChange('siteName', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Site Description
                  </label>
                  <textarea
                    className="w-full px-4 py-2 bg-[#0F172A] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500"
                    placeholder="Enter site description"
                    rows={3}
                    value={settings.siteDescription}
                    onChange={(e) => handleInputChange('siteDescription', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Time Zone
                  </label>
                  <select 
                    className="w-full px-4 py-2 bg-[#0F172A] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-500"
                    value={settings.timeZone}
                    onChange={(e) => handleInputChange('timeZone', e.target.value)}
                  >
                    <option>UTC-8 (Pacific Time)</option>
                    <option>UTC-5 (Eastern Time)</option>
                    <option>UTC+0 (GMT)</option>
                    <option>UTC+1 (Central European Time)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Language
                  </label>
                  <select 
                    className="w-full px-4 py-2 bg-[#0F172A] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-500"
                    value={settings.language}
                    onChange={(e) => handleInputChange('language', e.target.value)}
                  >
                    <option>English (US)</option>
                    <option>English (UK)</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div>
                    <h3 className="text-sm font-medium text-white">Maintenance Mode</h3>
                    <p className="text-sm text-gray-400">
                      Enable this to show a maintenance page to visitors
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      checked={settings.maintenanceMode}
                      onChange={(e) => handleInputChange('maintenanceMode', e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div>
                    <h3 className="text-sm font-medium text-white">Cookie Consent</h3>
                    <p className="text-sm text-gray-400">
                      Show cookie consent banner to new visitors
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      checked={settings.cookieConsent}
                      onChange={(e) => handleInputChange('cookieConsent', e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                  </label>
                </div>

                <SaveButton />
              </form>
            )}

            {activeTab === 'profile' && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col items-center mb-8">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-[#0F172A] border-2 border-gray-700 flex items-center justify-center overflow-hidden">
                      {profile.profilePicture ? (
                        <img 
                          src={profile.profilePicture} 
                          alt="Profile" 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-12 h-12 text-gray-500" />
                      )}
                    </div>
                    <label 
                      htmlFor="profile-upload" 
                      className="absolute bottom-0 right-0 p-1.5 bg-emerald-500 rounded-full cursor-pointer hover:bg-emerald-600 transition-colors"
                    >
                      <Camera className="w-4 h-4 text-white" />
                    </label>
                    <input
                      id="profile-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </div>
                  <p className="text-sm text-gray-400 mt-2">Click to upload profile picture</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Username
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 bg-[#0F172A] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
                      value={profile.username}
                      onChange={(e) => handleProfileChange('username', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2.5 bg-[#0F172A] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
                      value={profile.email}
                      onChange={(e) => handleProfileChange('email', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2.5 bg-[#0F172A] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
                      placeholder="Enter new password"
                      value={profile.password}
                      onChange={(e) => handleProfileChange('password', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Bio
                    </label>
                    <textarea
                      className="w-full px-4 py-2.5 bg-[#0F172A] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
                      rows={4}
                      placeholder="Enter bio"
                      value={profile.bio}
                      onChange={(e) => handleProfileChange('bio', e.target.value)}
                    />
                  </div>
                </div>

                <SaveButton />
              </form>
            )}

            {activeTab === 'notifications' && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-[#0F172A] rounded-lg">
                    <div>
                      <h3 className="text-white font-medium">Email Notifications</h3>
                      <p className="text-gray-400 text-sm">Receive notifications via email</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.emailNotifications}
                        onChange={(e) => setNotifications(prev => ({
                          ...prev,
                          emailNotifications: e.target.checked
                        }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#0F172A] rounded-lg">
                    <div>
                      <h3 className="text-white font-medium">Push Notifications</h3>
                      <p className="text-gray-400 text-sm">Receive push notifications in browser</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.pushNotifications}
                        onChange={(e) => setNotifications(prev => ({
                          ...prev,
                          pushNotifications: e.target.checked
                        }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#0F172A] rounded-lg">
                    <div>
                      <h3 className="text-white font-medium">Security Alerts</h3>
                      <p className="text-gray-400 text-sm">Get notified about security events</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.securityAlerts}
                        onChange={(e) => setNotifications(prev => ({
                          ...prev,
                          securityAlerts: e.target.checked
                        }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#0F172A] rounded-lg">
                    <div>
                      <h3 className="text-white font-medium">Marketing Emails</h3>
                      <p className="text-gray-400 text-sm">Receive marketing and promotional emails</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.marketingEmails}
                        onChange={(e) => setNotifications(prev => ({
                          ...prev,
                          marketingEmails: e.target.checked
                        }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                    </label>
                  </div>
                </div>
                <SaveButton />
              </form>
            )}

            {activeTab === 'security' && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-[#0F172A] rounded-lg">
                    <div>
                      <h3 className="text-white font-medium">Two-Factor Authentication</h3>
                      <p className="text-gray-400 text-sm">Add an extra layer of security to your account</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={security.twoFactorAuthentication}
                        onChange={(e) => setSecurity(prev => ({
                          ...prev,
                          twoFactorAuthentication: e.target.checked
                        }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#0F172A] rounded-lg">
                    <div>
                      <h3 className="text-white font-medium">Login Alerts</h3>
                      <p className="text-gray-400 text-sm">Get notified of new or unrecognized logins</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={security.loginAlerts}
                        onChange={(e) => setSecurity(prev => ({
                          ...prev,
                          loginAlerts: e.target.checked
                        }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                    </label>
                  </div>

                  <div className="p-4 bg-[#0F172A] rounded-lg">
                    <div className="mb-4">
                      <h3 className="text-white font-medium">Password Expiry</h3>
                      <p className="text-gray-400 text-sm">Days until password needs to be changed</p>
                    </div>
                    <input
                      type="number"
                      min="0"
                      max="365"
                      value={security.passwordExpiry}
                      onChange={(e) => setSecurity(prev => ({
                        ...prev,
                        passwordExpiry: parseInt(e.target.value)
                      }))}
                      className="w-full px-4 py-2 bg-[#0F172A] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>
                <SaveButton />
              </form>
            )}

            {activeTab === 'email' && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 bg-[#0F172A] rounded-lg">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Email Frequency
                    </label>
                    <select
                      value={email.emailFrequency}
                      onChange={(e) => setEmail(prev => ({
                        ...prev,
                        emailFrequency: e.target.value as 'realtime' | 'daily' | 'weekly' | 'monthly'
                      }))}
                      className="w-full px-4 py-2 bg-[#0F172A] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="realtime">Real-time</option>
                      <option value="daily">Daily Digest</option>
                      <option value="weekly">Weekly Digest</option>
                      <option value="monthly">Monthly Digest</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#0F172A] rounded-lg">
                    <div>
                      <h3 className="text-white font-medium">Email Digest</h3>
                      <p className="text-gray-400 text-sm">Receive a summary of activities</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={email.digestEnabled}
                        onChange={(e) => setEmail(prev => ({
                          ...prev,
                          digestEnabled: e.target.checked
                        }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#0F172A] rounded-lg">
                    <div>
                      <h3 className="text-white font-medium">Newsletter Subscription</h3>
                      <p className="text-gray-400 text-sm">Receive our newsletter</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={email.newsletterSubscription}
                        onChange={(e) => setEmail(prev => ({
                          ...prev,
                          newsletterSubscription: e.target.checked
                        }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#0F172A] rounded-lg">
                    <div>
                      <h3 className="text-white font-medium">Promotional Emails</h3>
                      <p className="text-gray-400 text-sm">Receive promotional offers and updates</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={email.promotionalEmails}
                        onChange={(e) => setEmail(prev => ({
                          ...prev,
                          promotionalEmails: e.target.checked
                        }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#0F172A] rounded-lg">
                    <div>
                      <h3 className="text-white font-medium">Email Format</h3>
                      <p className="text-gray-400 text-sm">Choose your preferred email format</p>
                    </div>
                    <select
                      value={email.emailFormat}
                      onChange={(e) => setEmail(prev => ({
                        ...prev,
                        emailFormat: e.target.value as 'html' | 'plain'
                      }))}
                      className="px-4 py-2 bg-[#0F172A] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="html">HTML</option>
                      <option value="plain">Plain Text</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#0F172A] rounded-lg border border-red-500/20">
                    <div>
                      <h3 className="text-white font-medium">Unsubscribe from All</h3>
                      <p className="text-gray-400 text-sm">Stop receiving all email communications</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={email.unsubscribeAll}
                        onChange={(e) => setEmail(prev => ({
                          ...prev,
                          unsubscribeAll: e.target.checked
                        }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                    </label>
                  </div>
                </div>
                <SaveButton />
              </form>
            )}

            {activeTab === 'appearance' && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 bg-[#0F172A] rounded-lg">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Theme
                    </label>
                    <select
                      value={appearance.theme}
                      onChange={(e) => setAppearance(prev => ({
                        ...prev,
                        theme: e.target.value as 'light' | 'dark' | 'system'
                      }))}
                      className="w-full px-4 py-2 bg-[#0F172A] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                      <option value="system">System</option>
                    </select>
                  </div>

                  <div className="p-4 bg-[#0F172A] rounded-lg">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Font Family
                    </label>
                    <select
                      value={appearance.fontFamily}
                      onChange={(e) => setAppearance(prev => ({
                        ...prev,
                        fontFamily: e.target.value as 'inter' | 'roboto' | 'system'
                      }))}
                      className="w-full px-4 py-2 bg-[#0F172A] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="inter">Inter</option>
                      <option value="roboto">Roboto</option>
                      <option value="system">System Default</option>
                    </select>
                  </div>

                  <div className="p-4 bg-[#0F172A] rounded-lg">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Font Size
                    </label>
                    <select
                      value={appearance.fontSize}
                      onChange={(e) => setAppearance(prev => ({
                        ...prev,
                        fontSize: e.target.value as 'small' | 'medium' | 'large'
                      }))}
                      className="w-full px-4 py-2 bg-[#0F172A] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                    </select>
                  </div>

                  <div className="p-4 bg-[#0F172A] rounded-lg">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Border Radius
                    </label>
                    <select
                      value={appearance.borderRadius}
                      onChange={(e) => setAppearance(prev => ({
                        ...prev,
                        borderRadius: e.target.value as 'none' | 'small' | 'medium' | 'large'
                      }))}
                      className="w-full px-4 py-2 bg-[#0F172A] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="none">None</option>
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                    </select>
                  </div>

                  <div className="p-4 bg-[#0F172A] rounded-lg">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Layout Density
                    </label>
                    <select
                      value={appearance.density}
                      onChange={(e) => setAppearance(prev => ({
                        ...prev,
                        density: e.target.value as 'compact' | 'comfortable' | 'spacious'
                      }))}
                      className="w-full px-4 py-2 bg-[#0F172A] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="compact">Compact</option>
                      <option value="comfortable">Comfortable</option>
                      <option value="spacious">Spacious</option>
                    </select>
                  </div>

                  <div className="p-4 bg-[#0F172A] rounded-lg">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Accent Color
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="color"
                        value={appearance.accentColor}
                        onChange={(e) => setAppearance(prev => ({
                          ...prev,
                          accentColor: e.target.value
                        }))}
                        className="h-10 w-20 rounded cursor-pointer bg-transparent"
                      />
                      <input
                        type="text"
                        value={appearance.accentColor}
                        onChange={(e) => setAppearance(prev => ({
                          ...prev,
                          accentColor: e.target.value
                        }))}
                        className="flex-1 px-4 py-2 bg-[#0F172A] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500"
                        placeholder="#000000"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#0F172A] rounded-lg">
                    <div>
                      <h3 className="text-white font-medium">Reduced Motion</h3>
                      <p className="text-gray-400 text-sm">Minimize animations</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={appearance.reducedMotion}
                        onChange={(e) => setAppearance(prev => ({
                          ...prev,
                          reducedMotion: e.target.checked
                        }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#0F172A] rounded-lg">
                    <div>
                      <h3 className="text-white font-medium">High Contrast</h3>
                      <p className="text-gray-400 text-sm">Increase contrast for better visibility</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={appearance.highContrast}
                        onChange={(e) => setAppearance(prev => ({
                          ...prev,
                          highContrast: e.target.checked
                        }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#0F172A] rounded-lg">
                    <div>
                      <h3 className="text-white font-medium">Collapsed Sidebar</h3>
                      <p className="text-gray-400 text-sm">Show only icons in sidebar</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={appearance.sidebarCollapsed}
                        onChange={(e) => setAppearance(prev => ({
                          ...prev,
                          sidebarCollapsed: e.target.checked
                        }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                    </label>
                  </div>
                </div>
                <SaveButton />
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
