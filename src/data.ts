import { FeatureItem, FaqItem, DownloadDetails } from './types';

export const FEATURES: FeatureItem[] = [
  {
    id: 'ray-tracing',
    title: 'Real-Time Ray Tracing',
    subtitle: 'Physical Light Simulation',
    description: 'Dynamic glossy reflections, screen-space ambient occlusion (SSAO), and cinematic depth of field computed at native refresh rates.',
    specs: [
      'Screen-Space Global Illumination (SSGI)',
      'Subsurface scattering for avatar materials',
      'Realistic light bounces & specular caustics',
      'Variable-focus depth of field (DoF)'
    ],
    iconName: 'Sparkles',
    accentGlow: 'cyan'
  },
  {
    id: 'one-click-install',
    title: 'One-Click Installation',
    subtitle: 'Zero Setup Friction',
    description: 'Automated Roblox client detection, seamless binary hooking, and instant hotkey switching without altering game files.',
    specs: [
      'Self-healing client directory locator',
      'Instant hotkey toggling (Shift + F8 / Home)',
      'Zero config file tinkering required',
      'Auto-updates alongside Roblox patches'
    ],
    iconName: 'Cpu',
    accentGlow: 'violet'
  },
  {
    id: 'fps-optimized',
    title: 'FPS-Optimized Pipeline',
    subtitle: 'Zero Micro-Stutter Engine',
    description: 'Custom compiled shader bytecode with low asynchronous compute overhead, sustaining steady 60–144+ FPS on modern GPUs.',
    specs: [
      'Asynchronous compute buffer passes',
      'Dynamic resolution shader scaling',
      '< 1.8ms average frame-time penalty',
      'DirectX 11 & Vulkan dual backend support'
    ],
    iconName: 'Gauge',
    accentGlow: 'emerald'
  },
  {
    id: 'customization-vault',
    title: 'Deep Customization Vault',
    subtitle: 'In-Game Realtime Tuning',
    description: 'Fine-tune bloom threshold, LUT color grading, anamorphic lens flares, and anti-aliasing directly via a fluid in-game HUD.',
    specs: [
      'Live curve-based tone mapping',
      'Over 40+ modular post-processing passes',
      'Custom LUT profile importer (.cube / .png)',
      'Per-game profile memory persistence'
    ],
    iconName: 'Sliders',
    accentGlow: 'amber'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'safety',
    category: 'Safety',
    question: 'Is RoShade safe and compliant with Roblox anti-cheat?',
    answer: 'Yes, 100%. RoShade operates exclusively in the post-processing display render stage. It does not inject into or manipulate game memory, alter server packets, or modify gameplay variables. It strictly functions as a graphical post-processor compliant with Roblox Terms of Use.'
  },
  {
    id: 'install',
    category: 'Installation',
    question: 'How do I open the in-game RoShade menu?',
    answer: 'Press the Home key on your keyboard once Roblox has launched. You can also quickly toggle RoShade on/off using the Shift + F8 hotkey.'
  },
  {
    id: 'specs',
    category: 'Performance',
    question: 'What are the minimum hardware requirements?',
    answer: 'RoShade is engineered to run on Windows 10/11 (64-bit). The lightweight profiles run smoothly on integrated graphics, while Ray Tracing modes are recommended for dedicated GPUs (NVIDIA GTX 1060 / AMD RX 580 or higher).'
  },
  {
    id: 'custom',
    category: 'Customization',
    question: 'Can I customize shader parameters and profiles?',
    answer: 'Yes. The in-game HUD allows you to adjust individual passes (SSAO, bloom, LUT, DOF, SSR) and save custom profiles directly in-game.'
  },
  {
    id: 'updates',
    category: 'Installation',
    question: 'Does RoShade break when Roblox releases weekly updates?',
    answer: 'No. RoShade features an automated client detector that maintains persistence even when Roblox updates, requiring zero manual reinstallation.'
  }
];

export const DOWNLOAD_DETAILS: DownloadDetails = {
  version: 'Official Release',
  releaseTag: 'Build 2026.8-LTS',
  date: 'August 2026',
  fileSize: '5.7 MB',
  hash: 'e84b3f892a9120bc71a399478f14c27ad6e451b7',
  osRequirement: 'Windows 10 / 11 (64-Bit)',
  directDownloadUrl: '/downloads/RoShade-Setup.exe',
  installerType: 'Signed Standalone Installer (.exe)'
};
