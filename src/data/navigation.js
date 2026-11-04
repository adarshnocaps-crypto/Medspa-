export const navigationData = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/gallery', label: 'Gallery' },
  {
    path: '/services',
    label: 'Services',
    isMegaMenu: true,
    subMenu: [
      {
        title: 'Post-Op Aftercare',
        links: [
          { path: '/services/lymphatic-drainage-massage', label: 'Lymphatic Drainage Massage' },
          { path: '/services/bbl-aftercare', label: 'BBL Massages & Aftercare' },
          { path: '/services/tummy-tuck-massage', label: 'Tummy Tuck Massages' },
          { path: '/services/liposuction-aftercare', label: 'Liposuction Aftercare' },
          { path: '/services/mommy-makeover-aftercare', label: 'Mommy Makeover Aftercare' },
          { path: '/services/face-neck-drainage', label: 'Face, Chin & Neck Drainage' }
        ]
      },
      {
        title: 'Body Sculpting',
        links: [
          { path: '/services/body-sculpting', label: 'Body Sculpting' },
          { path: '/services/wood-therapy', label: 'Wood Therapy' },
          { path: '/services/vacuum-therapy', label: 'Vacuum Therapy' },
          { path: '/services/cavitation-lipo', label: 'Cavitation Lipo' }
        ]
      },
      {
        title: 'Cellulite Treatments',
        links: [
          { path: '/services/cellulite-massage', label: 'Cellulite Massages' },
          { path: '/services/wood-therapy-cellulite', label: 'Wood Therapy – Cellulite' }
        ]
      },
      {
        title: 'Hyperbaric Oxygen',
        links: [
          { path: '/services/hyperbaric-oxygen-therapy', label: 'Hyperbaric Oxygen Therapy' },
          { path: '/services/hbot-fat-transfer-grafts', label: 'HBOT for Fat Transfers & Grafts' }
        ]
      }
    ]
  },
  { path: '/pricing', label: 'Pricing' },
  { path: '/testimonials', label: 'Reviews' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];
