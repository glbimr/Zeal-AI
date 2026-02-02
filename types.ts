import { ReactNode } from 'react';

export type DeviceType = 'mobile' | 'desktop';
export type ViewType = 'blueprint' | 'documentation' | 'figma';

export interface ModuleNode {
  id: string;
  title: string;
  x: number;
  y: number;
  component: ReactNode;
}

export interface Connection {
  id: string;
  from: string; // ModuleNode ID
  to: string;   // ModuleNode ID
  label?: string;
}

// Positioning constants to help calculate connections
export const MOBILE_WIDTH = 320;
export const MOBILE_HEIGHT = 650;
export const DESKTOP_WIDTH = 900;
export const DESKTOP_HEIGHT = 600;
