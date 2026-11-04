// Gallery categories for Vixen Spa Services.
// REAL photos only: every image comes from the business's Yelp page (saved in /public/yelp).
// The Yelp photos are small (348px), so banners show them at their native shape and the
// category cards use a mosaic of several photos.
export const treatmentCategories = [
  {
    id: 'neck-and-face-recovery',
    title: 'Neck & Face Recovery',
    description: 'Lymphatic drainage sessions for the neck, chin and shoulders after surgery.',
    thumbnail: '/yelp/neck-recovery.jpg',
    heroImage: '/yelp/neck-recovery.jpg',
    mosaic: ['/yelp/neck-recovery.jpg', '/yelp/all-in-1-massage.jpg', '/yelp/neck-results.jpg', '/yelp/shoulder-massage.jpg'],
    beforeAfter: [],
    galleryImages: [
      { id: 'gal-neck-1', src: '/yelp/neck-recovery.jpg', alt: 'Neck recovery session', type: 'medium' },
      { id: 'gal-neck-2', src: '/yelp/all-in-1-massage.jpg', alt: 'All-in-1 massage neck results', type: 'medium' },
      { id: 'gal-neck-3', src: '/yelp/neck-results.jpg', alt: 'Neck lymphatic drainage session', type: 'medium' },
      { id: 'gal-neck-4', src: '/yelp/shoulder-massage.jpg', alt: 'Shoulder and neck lymphatic massage', type: 'medium' },
    ]
  },
  {
    id: 'tummy-tuck-recovery',
    title: 'Tummy Tuck Recovery',
    description: 'Post-op massage and aftercare sessions after a tummy tuck.',
    thumbnail: '/yelp/tummy-tuck-healed.jpg',
    heroImage: '/yelp/tummy-tuck-healed.jpg',
    mosaic: ['/yelp/tummy-tuck-marked.jpg', '/yelp/tummy-tuck-healed.jpg', '/yelp/client-hallway.jpg'],
    beforeAfter: [],
    galleryImages: [
      { id: 'gal-tt-1', src: '/yelp/tummy-tuck-marked.jpg', alt: 'Tummy tuck aftercare session', type: 'medium' },
      { id: 'gal-tt-2', src: '/yelp/tummy-tuck-healed.jpg', alt: 'Tummy tuck recovery', type: 'medium' },
      { id: 'gal-tt-3', src: '/yelp/client-hallway.jpg', alt: 'Client after body sculpting', type: 'medium' },
    ]
  },
  {
    id: 'red-light-therapy',
    title: 'Red Light & Body Sculpting',
    description: 'Red light therapy and body sculpting sessions in our Beverly Hills studio.',
    thumbnail: '/yelp/red-light-belly.jpg',
    heroImage: '/yelp/red-light-belly.jpg',
    mosaic: ['/yelp/red-light-belly.jpg', '/yelp/red-light-session.jpg'],
    beforeAfter: [],
    galleryImages: [
      { id: 'gal-rl-1', src: '/yelp/red-light-belly.jpg', alt: 'Red light therapy session', type: 'medium' },
      { id: 'gal-rl-2', src: '/yelp/red-light-session.jpg', alt: 'Red light and body sculpting session', type: 'medium' },
    ]
  },
  {
    id: 'training-and-team',
    title: 'Training & Team',
    description: 'Body sculpting training certificates and the team behind Vixen Spa Services.',
    thumbnail: '/yelp/certificate.jpg',
    heroImage: '/yelp/team-scrubs.jpg',
    mosaic: ['/yelp/certificate.jpg', '/yelp/training-letter.jpg', '/yelp/team-scrubs.jpg'],
    beforeAfter: [],
    galleryImages: [
      { id: 'gal-trn-1', src: '/yelp/certificate.jpg', alt: 'Body sculpting certificate of completion', type: 'medium' },
      { id: 'gal-trn-2', src: '/yelp/training-letter.jpg', alt: 'Training academy welcome letter', type: 'medium' },
      { id: 'gal-trn-3', src: '/yelp/team-scrubs.jpg', alt: 'Vixen Spa Services team member in branded scrubs', type: 'medium' },
    ]
  }
];
