import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface ContextMode {
  id: string;
  name: string;
  appIcon: LucideIcon;
  themeColor: string;
  gradient: string;
  personaTitle: string;
  samplePrompt: string;
  response: string;
}
