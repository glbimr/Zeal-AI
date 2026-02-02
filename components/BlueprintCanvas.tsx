import React, { useRef, useState, useEffect } from 'react';
import { AppShell } from './AppShell';
import { 
  LoginScreen, 
  CustomerDashboard, 
  AIChatScreen, 
  AgentDashboard,
  KnowledgeBase
} from './ModuleScreens';
import { ModuleNode, Connection, DeviceType, MOBILE_WIDTH, MOBILE_HEIGHT, DESKTOP_WIDTH, DESKTOP_HEIGHT } from '../types';

interface BlueprintCanvasProps {
  zoom: number;
  deviceType: DeviceType;
}

export const BlueprintCanvas: React.FC<BlueprintCanvasProps> = ({ zoom, deviceType }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Define screen dimensions based on device type
  const nodeWidth = deviceType === 'mobile' ? MOBILE_WIDTH : DESKTOP_WIDTH;
  const nodeHeight = deviceType === 'mobile' ? MOBILE_HEIGHT : DESKTOP_HEIGHT;
  
  // Calculate dynamic spacing
  const xSpacing = nodeWidth + 200;
  const ySpacing = nodeHeight + 100;

  // Define Nodes
  const nodes: ModuleNode[] = [
    { id: 'login', title: 'Login / Auth', x: 100, y: 300, component: <LoginScreen /> },
    { id: 'dashboard', title: 'Customer Dashboard', x: 100 + xSpacing, y: 300, component: <CustomerDashboard deviceType={deviceType} /> },
    { id: 'chat', title: 'AI Chat Interface', x: 100 + (xSpacing * 2), y: 100, component: <AIChatScreen /> },
    { id: 'kb', title: 'Knowledge Base', x: 100 + (xSpacing * 2), y: 100 + ySpacing, component: <KnowledgeBase /> },
    { id: 'agent', title: 'Agent Ops Center', x: 100 + (xSpacing * 3), y: 300, component: <AgentDashboard /> },
  ];

  // Define Connections
  const connections: Connection[] = [
    { id: 'c1', from: 'login', to: 'dashboard', label: 'Auth' },
    { id: 'c2', from: 'dashboard', to: 'chat', label: 'Start Ticket' },
    { id: 'c3', from: 'dashboard', to: 'kb', label: 'Browse Help' },
    { id: 'c4', from: 'chat', to: 'agent', label: 'Escalation' },
    { id: 'c5', from: 'kb', to: 'chat', label: 'Not Found' },
  ];

  // Helper to get anchor points
  const getAnchors = (source: ModuleNode, target: ModuleNode) => {
    // Default: source right, target left
    const sx = source.x + nodeWidth;
    const sy = source.y + nodeHeight / 2;
    const tx = target.x;
    const ty = target.y + nodeHeight / 2;
    return { sx, sy, tx, ty };
  };

  return (
    <div 
      className="w-full h-full overflow-auto bg-grid relative cursor-grab active:cursor-grabbing"
      ref={containerRef}
    >
      <div 
        className="absolute top-0 left-0 transition-transform duration-300 origin-top-left p-20"
        style={{ 
            transform: `scale(${zoom})`,
            width: '4000px', // Large canvas area
            height: '2500px'
        }}
      >
        {/* SVG Layer for Connections */}
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#52525b" /> {/* zinc-600 */}
            </marker>
          </defs>
          {connections.map(conn => {
            const source = nodes.find(n => n.id === conn.from);
            const target = nodes.find(n => n.id === conn.to);
            if (!source || !target) return null;

            const { sx, sy, tx, ty } = getAnchors(source, target);
            
            // Calculate Control Points for Bezier Curve
            const dist = Math.abs(tx - sx) * 0.5;
            const path = `M ${sx} ${sy} C ${sx + dist} ${sy}, ${tx - dist} ${ty}, ${tx} ${ty}`;

            return (
              <g key={conn.id}>
                {/* Background Line */}
                <path 
                  d={path} 
                  fill="none" 
                  stroke="#e4e4e7" 
                  strokeWidth="6" 
                />
                 {/* Animated dashed line on top */}
                <path 
                  d={path} 
                  fill="none" 
                  stroke="#3f3f46" 
                  strokeWidth="2" 
                  className="flow-line opacity-60"
                  markerEnd="url(#arrowhead)"
                />
                {/* Label */}
                {conn.label && (
                    <foreignObject x={(sx + tx) / 2 - 40} y={(sy + ty) / 2 - 12} width="80" height="24">
                        <div className="bg-white border border-zinc-200 text-[10px] text-zinc-500 rounded px-2 py-0.5 text-center shadow-sm font-medium">
                            {conn.label}
                        </div>
                    </foreignObject>
                )}
              </g>
            );
          })}
        </svg>

        {/* Render Modules */}
        {nodes.map(node => (
          <div 
            key={node.id}
            className="absolute transition-all duration-500 ease-in-out"
            style={{ 
              left: node.x, 
              top: node.y,
              width: nodeWidth,
              height: nodeHeight
            }}
          >
            <div className="absolute -top-10 left-0">
                <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider">{node.title}</h3>
                <p className="text-xs text-zinc-400 font-mono">ID: {node.id}</p>
            </div>
            <AppShell type={deviceType} title={node.title}>
              {node.component}
            </AppShell>
          </div>
        ))}
      </div>
    </div>
  );
};