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
        title: 'Skin Rejuvenation',
        links: [
          { path: '/services/hydrafacial', label: 'HydraFacial' },
          { path: '/services/microneedling', label: 'Microneedling' },
          { path: '/services/chemical-peels', label: 'Chemical Peels' },
          { path: '/services/dermaplaning', label: 'Dermaplaning' }
        ]
      },
      {
        title: 'Injectables',
        links: [
          { path: '/services/botox', label: 'Botox & Dysport' },
          { path: '/services/dermal-fillers', label: 'Dermal Fillers' },
          { path: '/services/lip-enhancement', label: 'Lip Enhancement' },
          { path: '/services/kybella', label: 'Kybella' }
        ]
      },
      {
        title: 'Laser Treatments',
        links: [
          { path: '/services/laser-hair-removal', label: 'Laser Hair Removal' },
          { path: '/services/ipl-photofacial', label: 'IPL Photofacial' },
          { path: '/services/skin-resurfacing', label: 'Skin Resurfacing' },
          { path: '/services/tattoo-removal', label: 'Tattoo Removal' }
        ]
      },
      {
        title: 'Body Contouring',
        links: [
          { path: '/services/coolsculpting', label: 'CoolSculpting' },
          { path: '/services/emsculpt', label: 'Emsculpt NEO' },
          { path: '/services/skin-tightening', label: 'Skin Tightening' },
          { path: '/services/cellulite-reduction', label: 'Cellulite Reduction' }
        ]
      }
    ]
  },
  { path: '/pricing', label: 'Pricing' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];
