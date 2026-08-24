export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  specs: string[];
  iconName: string;
  accentGlow: 'cyan' | 'violet' | 'emerald' | 'amber';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Safety' | 'Performance' | 'Installation' | 'Customization';
}

export interface DownloadDetails {
  version: string;
  releaseTag: string;
  date: string;
  fileSize: string;
  hash: string;
  osRequirement: string;
  directDownloadUrl: string;
  installerType: string;
}
