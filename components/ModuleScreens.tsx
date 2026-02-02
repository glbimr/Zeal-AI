import React, { useState } from 'react';
import { 
  User, Lock, ArrowRight, MessageSquare, Search, 
  HelpCircle, CheckCircle, Clock, Zap, FileText, 
  Settings, Bot, Send, UserPlus, Bell, Menu, Sparkles
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

interface ScreenProps {
  deviceType?: 'mobile' | 'desktop';
}

// --- Screen 1: Login ---
export const LoginScreen: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full p-8 bg-white">
    <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 shadow-xl shadow-zinc-200">
      <Sparkles className="text-white" size={24} />
    </div>
    <h1 className="text-2xl font-bold text-zinc-900 mb-2">Welcome Back</h1>
    <p className="text-zinc-500 mb-8 text-center">Sign in to Zeal AI Dashboard</p>
    
    <div className="w-full max-w-sm space-y-4">
      <div className="relative">
        <User className="absolute left-3 top-3 text-zinc-400" size={18} />
        <input type="email" placeholder="work@email.com" className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all text-sm text-zinc-900" />
      </div>
      <div className="relative">
        <Lock className="absolute left-3 top-3 text-zinc-400" size={18} />
        <input type="password" placeholder="••••••••" className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all text-sm text-zinc-900" />
      </div>
      <button className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-2.5 rounded-lg transition-colors shadow-lg shadow-zinc-100 flex items-center justify-center gap-2">
        Sign In <ArrowRight size={16} />
      </button>
      <div className="flex items-center justify-between text-xs text-zinc-500 mt-4">
        <span className="hover:text-zinc-900 cursor-pointer">Forgot password?</span>
        <span className="text-zinc-900 font-medium cursor-pointer hover:underline">Create account</span>
      </div>
    </div>
  </div>
);

// --- Screen 2: Customer Portal (Dashboard) ---
export const CustomerDashboard: React.FC<ScreenProps> = ({ deviceType = 'mobile' }) => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [showDesktopMenu, setShowDesktopMenu] = useState(false);

  const modules = [
    { id: 'tickets', icon: FileText, label: 'Tickets' },
    { id: 'actions', icon: Zap, label: 'Actions' },
    { id: 'history', icon: Clock, label: 'History' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  const renderModuleBar = (className = "mb-8") => (
    <div className={`grid grid-cols-4 gap-4 animate-in fade-in slide-in-from-top-4 duration-500 ${className}`}>
       {modules.map((mod) => {
         const isSelected = selectedModule === mod.id;
         return (
           <div 
             key={mod.id}
             onClick={() => {
                setSelectedModule(mod.id);
                if (deviceType === 'desktop') setShowDesktopMenu(false);
             }}
             className="flex flex-col items-center gap-2 cursor-pointer group"
           >
             <div className={`
               w-14 h-14 rounded-full flex items-center justify-center shadow-sm transition-all duration-300
               ${isSelected 
                  ? 'bg-zinc-900 text-white border-zinc-900 scale-105' 
                  : 'bg-white border border-zinc-200 text-zinc-400 group-hover:border-zinc-900 group-hover:text-zinc-900'
               }
             `}>
                 <mod.icon size={20} />
             </div>
             <span className={`text-[10px] font-medium transition-colors ${isSelected ? 'text-zinc-900' : 'text-zinc-400 group-hover:text-zinc-900'}`}>
               {mod.label}
             </span>
           </div>
         );
       })}
    </div>
  );

  return (
    <div className="p-6 bg-zinc-50 h-full">
      <div className="flex justify-between items-center mb-8 relative z-20">
        <div>
          <h2 className="text-xl font-bold text-zinc-900">Hello, Ankur</h2>
          <p className="text-xs text-zinc-500">Premium Plan Member</p>
        </div>
        <div className="flex items-center gap-3 relative">
          {deviceType === 'desktop' && (
             <>
               <button 
                 onClick={() => setShowDesktopMenu(!showDesktopMenu)}
                 className={`p-2.5 rounded-full border transition-all shadow-sm ${showDesktopMenu ? 'bg-zinc-900 border-zinc-900 text-white' : 'bg-white border-zinc-200 text-zinc-600 hover:bg-zinc-50'}`}
                 aria-label="Toggle Menu"
               >
                 <Menu size={18} />
               </button>
               {showDesktopMenu && (
                 <div className="absolute top-full right-0 mt-4 w-80 bg-white p-5 rounded-2xl border border-zinc-200 shadow-xl z-50 animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                    <h3 className="font-semibold text-zinc-800 text-xs uppercase tracking-wider mb-4">Quick Actions</h3>
                    {renderModuleBar("mb-0")}
                 </div>
               )}
             </>
          )}
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-zinc-200 shadow-sm">
            <User className="text-zinc-900" size={20} />
          </div>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl shadow-sm border border-zinc-100 mb-6 relative z-10">
          <div className="flex items-start gap-4">
              <div className="bg-zinc-900 p-3 rounded-lg">
                  <Bot className="text-white" size={24} />
              </div>
              <div>
                  <h3 className="font-semibold text-zinc-900">AI Concierge</h3>
                  <p className="text-xs text-zinc-500 mt-1">Ready to help you with your recent order #8921.</p>
                  <button className="mt-3 text-xs bg-zinc-100 border border-zinc-200 text-zinc-900 hover:bg-zinc-200 px-4 py-2 rounded-lg font-medium transition-colors">Start Chat</button>
              </div>
          </div>
      </div>

      {/* Quick Action Module Bar Logic - Mobile Only in Flow */}
      {deviceType === 'mobile' && renderModuleBar()}

      <h3 className="font-semibold text-zinc-800 mb-4 text-xs uppercase tracking-wider">Recent Tickets</h3>
      <div className="space-y-3 relative z-0">
          {[
              { id: 'TIC-102', title: 'Payment Integration Failure', status: 'Open', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
              { id: 'TIC-098', title: 'Account Access Issue', status: 'Closed', color: 'bg-zinc-100 text-zinc-500 border-zinc-200' },
          ].map(ticket => (
              <div key={ticket.id} className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm flex justify-between items-center hover:shadow-md transition-shadow cursor-pointer">
                  <div>
                      <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono text-zinc-400">#{ticket.id}</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium border ${ticket.color}`}>{ticket.status}</span>
                      </div>
                      <p className="text-sm font-medium text-zinc-800">{ticket.title}</p>
                  </div>
                  <ArrowRight size={16} className="text-zinc-300" />
              </div>
          ))}
      </div>
    </div>
  );
};

// --- Screen 3: AI Chat Interface ---
export const AIChatScreen: React.FC = () => (
  <div className="flex flex-col h-full bg-white">
    <div className="px-6 py-4 border-b border-zinc-100 flex justify-between items-center bg-white sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center">
            <Bot className="text-white" size={20} />
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
        </div>
        <div>
          <h3 className="font-bold text-zinc-900 text-sm">Zeal Agent</h3>
          <p className="text-[10px] text-zinc-500 font-medium">Powered by Gemini</p>
        </div>
      </div>
      <Settings size={18} className="text-zinc-400" />
    </div>

    <div className="flex-1 p-6 space-y-6 overflow-y-auto bg-zinc-50">
      <div className="flex gap-4">
        <div className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex-shrink-0 flex items-center justify-center">
            <Bot size={14} className="text-zinc-900" />
        </div>
        <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-zinc-200 shadow-sm max-w-[85%]">
            <p className="text-sm text-zinc-700 leading-relaxed">
                Hello! I noticed you're looking into <span className="font-semibold text-zinc-900">API Latency</span> issues. I've analyzed your logs from the last hour. Would you like a summary?
            </p>
        </div>
      </div>

      <div className="flex gap-4 flex-row-reverse">
        <div className="w-8 h-8 rounded-full bg-zinc-200 flex-shrink-0 flex items-center justify-center">
            <User size={14} className="text-zinc-600" />
        </div>
        <div className="bg-zinc-900 p-4 rounded-2xl rounded-tr-none shadow-md shadow-zinc-200 max-w-[85%]">
            <p className="text-sm text-white leading-relaxed">
                Yes, please show me the anomalies.
            </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex-shrink-0 flex items-center justify-center">
            <Bot size={14} className="text-zinc-900" />
        </div>
        <div className="space-y-2 max-w-[85%]">
            <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-zinc-200 shadow-sm">
                <p className="text-sm text-zinc-700 mb-3">Here is the latency spike detected at 10:42 AM.</p>
                <div className="h-24 w-full bg-zinc-50 rounded border border-zinc-100 flex items-end justify-between px-2 pb-2">
                    {[40, 35, 60, 45, 90, 100, 80, 50, 40, 30].map((h, i) => (
                        <div key={i} style={{height: `${h}%`}} className={`w-1.5 rounded-t ${h > 80 ? 'bg-red-500' : 'bg-zinc-300'}`}></div>
                    ))}
                </div>
            </div>
            <div className="flex gap-2">
                <button className="text-xs bg-white border border-zinc-300 text-zinc-700 px-3 py-1.5 rounded-full hover:bg-zinc-50 transition-colors font-medium">Generate Report</button>
                <button className="text-xs bg-white border border-zinc-200 text-zinc-500 px-3 py-1.5 rounded-full hover:bg-zinc-50 transition-colors">Escalate to Engineer</button>
            </div>
        </div>
      </div>
    </div>

    <div className="p-4 bg-white border-t border-zinc-100">
      <div className="relative">
        <input className="w-full bg-zinc-50 border border-zinc-200 rounded-full pl-4 pr-12 py-3 text-sm focus:ring-2 focus:ring-zinc-900 focus:bg-white focus:outline-none transition-all" placeholder="Type your message..." />
        <button className="absolute right-2 top-2 w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors">
            <Send size={14} className="text-white" />
        </button>
      </div>
    </div>
  </div>
);

// --- Screen 4: Agent Dashboard (Backend) ---
const data = [
  { name: 'Mon', tickets: 40 },
  { name: 'Tue', tickets: 30 },
  { name: 'Wed', tickets: 20 },
  { name: 'Thu', tickets: 27 },
  { name: 'Fri', tickets: 18 },
  { name: 'Sat', tickets: 23 },
  { name: 'Sun', tickets: 34 },
];

export const AgentDashboard: React.FC = () => (
  <div className="h-full bg-zinc-50 p-6">
    <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-zinc-900">Support Operations</h2>
        <div className="flex gap-2">
             <button className="p-2 bg-white border border-zinc-200 rounded-lg text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 transition-all"><Search size={18} /></button>
             <button className="p-2 bg-white border border-zinc-200 rounded-lg text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 transition-all"><Bell size={18} /></button>
        </div>
    </div>

    <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-zinc-100">
            <div className="text-zinc-400 text-xs font-medium uppercase mb-1">Queue Depth</div>
            <div className="text-2xl font-bold text-zinc-900">14</div>
            <div className="text-xs text-emerald-600 flex items-center mt-1 gap-1"><ArrowRight size={10} className="rotate-45" /> -12% vs last hour</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-zinc-100">
            <div className="text-zinc-400 text-xs font-medium uppercase mb-1">Avg Resolution</div>
            <div className="text-2xl font-bold text-zinc-900">4m 12s</div>
            <div className="text-xs text-red-500 flex items-center mt-1 gap-1"><ArrowRight size={10} className="-rotate-45" /> +5% vs avg</div>
        </div>
    </div>

    <div className="bg-white p-4 rounded-xl shadow-sm border border-zinc-100 mb-6 h-48">
        <h3 className="text-sm font-semibold text-zinc-800 mb-4">Ticket Volume (AI Handled)</h3>
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <XAxis dataKey="name" fontSize={10} stroke="#a1a1aa" tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e4e4e7', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Line type="monotone" dataKey="tickets" stroke="#18181b" strokeWidth={2} dot={{r: 3, fill: '#18181b', strokeWidth: 0}} />
            </LineChart>
        </ResponsiveContainer>
    </div>

    <h3 className="text-sm font-semibold text-zinc-800 mb-3">Live Feed</h3>
    <div className="space-y-3">
        <div className="bg-white p-3 rounded-lg border border-zinc-100 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600"><CheckCircle size={16} /></div>
            <div className="flex-1">
                <p className="text-sm font-medium text-zinc-800">System updated KB article</p>
                <p className="text-xs text-zinc-400">2 minutes ago</p>
            </div>
        </div>
        <div className="bg-white p-3 rounded-lg border border-zinc-100 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600"><UserPlus size={16} /></div>
            <div className="flex-1">
                <p className="text-sm font-medium text-zinc-800">Escalation: User #9921</p>
                <p className="text-xs text-zinc-400">5 minutes ago • Pending</p>
            </div>
        </div>
    </div>
  </div>
);

// --- Screen 5: Knowledge Base & Specs ---
export const KnowledgeBase: React.FC = () => (
    <div className="h-full bg-white flex flex-col">
        <div className="bg-zinc-900 p-8 pb-12">
            <h1 className="text-white text-xl font-bold mb-2">Help Center</h1>
            <div className="relative">
                <Search className="absolute left-3 top-3 text-zinc-400" size={18} />
                <input className="w-full bg-zinc-800 border border-zinc-700 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-zinc-500 text-sm focus:outline-none focus:bg-zinc-800 focus:border-zinc-500 transition-colors" placeholder="How can we help?" />
            </div>
        </div>
        <div className="flex-1 bg-zinc-50 px-6 -mt-6 rounded-t-3xl overflow-y-auto pt-6">
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-zinc-200 text-center hover:border-zinc-400 transition-colors cursor-pointer group">
                    <div className="w-10 h-10 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform"><FileText size={20} /></div>
                    <span className="text-xs font-medium text-zinc-700">Billing</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-zinc-200 text-center hover:border-zinc-400 transition-colors cursor-pointer group">
                    <div className="w-10 h-10 mx-auto bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform"><Zap size={20} /></div>
                    <span className="text-xs font-medium text-zinc-700">API</span>
                </div>
            </div>
            
            <h3 className="font-bold text-zinc-900 mb-3 text-sm">Suggested by AI</h3>
            <div className="space-y-3">
                {[
                    'Troubleshooting Webhook Latency', 
                    'Understanding Rate Limits', 
                    'How to reset API Keys'
                ].map((article, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-zinc-200 flex justify-between items-center group cursor-pointer hover:border-zinc-400 hover:shadow-sm transition-all">
                        <div className="flex items-center gap-3">
                            <FileText size={16} className="text-zinc-400 group-hover:text-zinc-600" />
                            <span className="text-sm text-zinc-700 font-medium group-hover:text-zinc-900">{article}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);