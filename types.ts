import React from 'react';

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export interface Screenshot {
  id: number;
  url: string;
  caption: string;
}

export interface NavLink {
  label: string;
  href: string;
}