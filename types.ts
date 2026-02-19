
export enum AppRoutes {
  HOME = '/',
  ABOUT = '/about',
  MOVEMENT = '/the-movement',
  LEGACY = '/legacy',
  FOUNDER = '/founder'
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Pillar {
  title: string;
  description: string;
}
