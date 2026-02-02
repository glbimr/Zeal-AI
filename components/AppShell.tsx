import React from 'react';
import { DeviceType } from '../types';
import { Signal, Wifi, Battery, ChevronLeft, Lock, RefreshCw, Minus, Square, X } from 'lucide-react';

interface AppShellProps {
  type: DeviceType;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const AppShell: React.FC<AppShellProps> = ({ type, title, children, className = '' }) => {
  const isMobile = type === 'mobile';

  if (isMobile) {
    return (
      <div 
        className={`relative bg-white shadow-2xl border-[6px] border-zinc-800 overflow-hidden transition-all duration-500 ease-in-out ${className}`}
        style={{ 
          width: '320px', 
          height: '650px', 
          borderRadius: '3rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
        }}
      >
        {/* Dynamic Island / Notch Area */}
        <div className="absolute top-0 w-full h-8 bg-white z-20 flex justify-between items-center px-6 pt-2">
          <span className="text-[10px] font-bold text-zinc-900">9:41</span>
          <div className="w-20 h-6 bg-zinc-900 rounded-full absolute left-1/2 transform -translate-x-1/2 top-2"></div>
          <div className="flex gap-1">
            <Signal size={12} className="text-zinc-900" />
            <Wifi size={12} className="text-zinc-900" />
            <Battery size={12} className="text-zinc-900" />
          </div>
        </div>

        {/* Content Area */}
        <div className="w-full h-full pt-10 pb-2 overflow-y-auto hide-scrollbar bg-zinc-50 relative">
          {children}
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-zinc-900 rounded-full z-20 opacity-90"></div>
      </div>
    );
  }

  // Desktop View
  return (
    <div 
      className={`relative bg-white shadow-2xl rounded-lg border border-zinc-200 overflow-hidden flex flex-col transition-all duration-500 ease-in-out ${className}`}
      style={{ 
        width: '900px', 
        height: '600px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
      }}
    >
      {/* Browser Chrome */}
      <div className="h-10 bg-zinc-50 border-b border-zinc-200 flex items-center px-4 gap-4 flex-shrink-0">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-zinc-300 border border-zinc-400"></div>
          <div className="w-3 h-3 rounded-full bg-zinc-300 border border-zinc-400"></div>
          <div className="w-3 h-3 rounded-full bg-zinc-300 border border-zinc-400"></div>
        </div>
        
        <div className="flex gap-4 text-zinc-400">
            <ChevronLeft size={16} />
            <RefreshCw size={16} />
        </div>

        <div className="flex-1 bg-white h-7 rounded border border-zinc-200 flex items-center px-3 gap-2 text-xs text-zinc-500 shadow-sm">
            <Lock size={12} className="text-zinc-400" />
            <span className="flex-1 overflow-hidden whitespace-nowrap">zeal.ai/app/{title.toLowerCase().replace(/\s/g, '-')}</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto hide-scrollbar bg-zinc-50 relative">
        {children}
      </div>
    </div>
  );
};