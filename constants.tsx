import { Calculator, Zap, Brain, Trophy } from 'lucide-react';
import React from 'react';
import { FeatureItem, NavLink, Screenshot } from './types';

// Images should be placed in the public directory with these names
export const SCREENSHOTS: Screenshot[] = [
  {
    id: 1,
    url: "./screenshot-main.jpg", 
    caption: "Ana Menü ve Başlangıç"
  },
  {
    id: 2,
    url: "./screenshot-level-28.jpg",
    caption: "Bölüm 28: Üçgen Modu"
  },
  {
    id: 3,
    url: "./screenshot-mission.jpg",
    caption: "Görev ve Hedef Kartları"
  },
  {
    id: 4,
    url: "./screenshot-level-83.jpg",
    caption: "Bölüm 83: Beşgen Modu"
  }
];

export const NAV_LINKS: NavLink[] = [
  { label: 'Oyun Hakkında', href: '#features' },
  { label: 'Nasıl Oynanır', href: '#gameplay' },
  { label: 'Galeri', href: '#gallery' },
  { label: 'İndir', href: '#download' },
];

export const FEATURES: FeatureItem[] = [
  {
    title: "Hızlı Düşün",
    description: "Yukarıdan düşen sayıları yakala ve saniyeler içinde karar ver.",
    icon: <Zap className="w-8 h-8" />,
    color: "text-neon-yellow"
  },
  {
    title: "Matematik Dehası",
    description: "Toplama, çıkarma, çarpma ve bölme yeteneklerini uzay boşluğunda test et.",
    icon: <Calculator className="w-8 h-8" />,
    color: "text-neon-blue"
  },
  {
    title: "Zihinsel Egzersiz",
    description: "Her seviyede zorlaşan görevlerle beyin jimnastiği yap.",
    icon: <Brain className="w-8 h-8" />,
    color: "text-neon-pink"
  },
  {
    title: "Liderlik Tablosu",
    description: "En yüksek puanı topla, arkadaşlarını geç ve galaksinin hakimi ol.",
    icon: <Trophy className="w-8 h-8" />,
    color: "text-neon-green"
  }
];