import React, { useState } from 'react';
import { 
  ZoomIn, ZoomOut, Smartphone, Monitor, Layout, 
  FileText, Figma, MousePointer2, Sparkles 
} from 'lucide-react';
import { BlueprintCanvas } from './components/BlueprintCanvas';
import { Documentation } from './components/Documentation';
import { DeviceType, ViewType } from './types';

function App() {
  const [zoom, setZoom] = useState(0.65); // Start slightly zoomed out to see more
  const [deviceType, setDeviceType] = useState<DeviceType>('mobile');
  const [viewType, setViewType] = useState<ViewType>('blueprint');

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.1, 1.5));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.1, 0.3));

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden text-zinc-900 bg-zinc-50 relative">
      
      {/* --- Header / Toolbar --- */}
      <header className="h-16 bg-white border-b border-zinc-200 flex items-center justify-between px-4 md:px-6 shadow-sm z-50 shrink-0">
        
        {/* Left: Project Info */}
        <div className="flex items-center gap-3 md:gap-4 shrink-0 mr-4">
          <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center shadow-md shrink-0">
            <Sparkles className="text-white" size={18} />
          </div>
          <div className="overflow-hidden">
            <h1 className="font-bold text-zinc-900 leading-tight truncate">Zeal <span className="hidden md:inline">AI</span></h1>
            <div className="text-[10px] text-zinc-500 font-medium tracking-wide uppercase truncate">By Ankur Madan</div>
          </div>
        </div>

        {/* Right: Controls (Scrollable on mobile) */}
        <div className="flex items-center gap-4 md:gap-6 bg-zinc-50 px-2 py-1.5 rounded-xl border border-zinc-200 overflow-x-auto hide-scrollbar max-w-[60vw] md:max-w-none">
          
          {/* View Switcher */}
          <div className="flex bg-white rounded-lg p-1 border border-zinc-200 shadow-sm shrink-0">
            <button 
              onClick={() => setViewType('blueprint')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all whitespace-nowrap ${viewType === 'blueprint' ? 'bg-zinc-100 text-zinc-900 shadow-sm' : 'text-zinc-500 hover:text-zinc-900'}`}
            >
              <MousePointer2 size={14} /> <span className="hidden sm:inline">Blueprint</span>
            </button>
            <button 
              onClick={() => setViewType('documentation')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all whitespace-nowrap ${viewType === 'documentation' ? 'bg-zinc-100 text-zinc-900 shadow-sm' : 'text-zinc-500 hover:text-zinc-900'}`}
            >
              <FileText size={14} /> <span className="hidden sm:inline">Docs</span>
            </button>
            <button 
              onClick={() => setViewType('figma')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all whitespace-nowrap ${viewType === 'figma' ? 'bg-zinc-100 text-zinc-900 shadow-sm' : 'text-zinc-500 hover:text-zinc-900'}`}
            >
              <Figma size={14} /> <span className="hidden sm:inline">Figma</span>
            </button>
          </div>

          <div className="w-px h-6 bg-zinc-200 shrink-0"></div>

          {/* Device Toggle */}
          <div className="flex gap-1 shrink-0">
             <button 
               onClick={() => setDeviceType('mobile')}
               className={`p-1.5 rounded-md transition-all ${deviceType === 'mobile' ? 'bg-white text-zinc-900 shadow-sm border border-zinc-200' : 'text-zinc-400 hover:text-zinc-600'}`}
               title="Mobile View"
             >
               <Smartphone size={18} />
             </button>
             <button 
               onClick={() => setDeviceType('desktop')}
               className={`p-1.5 rounded-md transition-all ${deviceType === 'desktop' ? 'bg-white text-zinc-900 shadow-sm border border-zinc-200' : 'text-zinc-400 hover:text-zinc-600'}`}
               title="Desktop View"
             >
               <Monitor size={18} />
             </button>
          </div>

          <div className="hidden md:block w-px h-6 bg-zinc-200 shrink-0"></div>

          {/* Zoom Controls (Desktop Only) */}
          <div className="hidden md:flex items-center gap-2 text-zinc-500 shrink-0">
            <button onClick={handleZoomOut} className="p-1 hover:bg-white rounded-md transition-colors"><ZoomOut size={16} /></button>
            <span className="text-xs font-mono w-8 md:w-12 text-center text-zinc-700">{Math.round(zoom * 100)}%</span>
            <button onClick={handleZoomIn} className="p-1 hover:bg-white rounded-md transition-colors"><ZoomIn size={16} /></button>
          </div>

        </div>
      </header>

      {/* --- Main Workspace --- */}
      <main className="flex-1 relative bg-zinc-50 overflow-hidden">
        {viewType === 'blueprint' && (
          <BlueprintCanvas zoom={zoom} deviceType={deviceType} />
        )}

        {viewType === 'documentation' && (
           <div className="w-full h-full overflow-y-auto bg-white scroll-smooth">
              <Documentation onOpenFigma={() => setViewType('figma')} />
           </div>
        )}

        {viewType === 'figma' && (
            <div className="w-full h-full bg-zinc-100 flex flex-col">
                <iframe 
                    style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} 
                    width="100%" 
                    height="100%" 
                    src="https://embed.figma.com/board/cUbHThNjwzhxCADTmlihy5/NovaSupport-AI?node-id=4-89&embed-host=share" 
                    allowFullScreen
                ></iframe>
            </div>
        )}
      </main>

      {/* --- Mobile Floating Zoom Controls (Visible only on mobile) --- */}
      {viewType === 'blueprint' && (
        <div className="md:hidden fixed bottom-6 right-6 z-50 flex flex-col items-center bg-white border border-zinc-200 p-1.5 rounded-full shadow-xl shadow-zinc-200/50">
            <button 
              onClick={handleZoomIn} 
              className="p-2.5 bg-zinc-900 text-white rounded-full shadow-sm active:scale-90 transition-all hover:bg-zinc-800"
            >
              <ZoomIn size={20} />
            </button>
            <div className="py-2 text-[10px] font-mono font-bold text-zinc-400 select-none">
                {Math.round(zoom * 100)}
            </div>
            <button 
              onClick={handleZoomOut} 
              className="p-2.5 bg-white border border-zinc-100 text-zinc-600 rounded-full shadow-sm active:scale-90 transition-all hover:bg-zinc-50"
            >
              <ZoomOut size={20} />
            </button>
        </div>
      )}

    </div>
  );
}

export default App;