export const treatmentCategories = [
  {
    id: 'injectables',
    title: 'Injectables & Fillers',
    description: 'Restore volume and smooth wrinkles with our advanced injectables.',
    thumbnail: 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=1000&auto=format&fit=crop',
    beforeAfter: [
      {
        id: 'ba-inj-1',
        title: 'Lip Enhancement',
        before: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=800&auto=format&fit=crop', // Substitute with real before/after if available
        after: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop',
      },
      {
        id: 'ba-inj-2',
        title: 'Cheek Contouring',
        before: 'https://images.unsplash.com/photo-1512413316925-fd4f1638210f?q=80&w=800&auto=format&fit=crop',
        after: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop',
      }
    ],
    galleryImages: [
      { id: 'gal-inj-1', src: '/gallery_1_1780660396697.png', alt: 'Injectable Treatment', type: 'tall' },
      { id: 'gal-inj-2', src: '/gallery_2_1780660415749.png', alt: 'Dermal Fillers', type: 'medium' },
      { id: 'gal-inj-3', src: 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=800&auto=format&fit=crop', alt: 'Clinic Injectables', type: 'tall' },
      { id: 'gal-inj-4', src: 'https://images.unsplash.com/photo-1512413316925-fd4f1638210f?q=80&w=800&auto=format&fit=crop', alt: 'Patient Profile', type: 'short' },
    ]
  },
  {
    id: 'laser-treatments',
    title: 'Laser Treatments',
    description: 'Achieve flawless skin with state-of-the-art laser resurfacing and hair removal.',
    thumbnail: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop',
    beforeAfter: [
      {
        id: 'ba-las-1',
        title: 'Skin Resurfacing',
        before: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop',
        after: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop',
      }
    ],
    galleryImages: [
      { id: 'gal-las-1', src: '/gallery_4_1780660440917.png', alt: 'Laser Prep', type: 'tall' },
      { id: 'gal-las-2', src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop', alt: 'Laser Device', type: 'medium' },
      { id: 'gal-las-3', src: '/gallery_6_1780660467909.png', alt: 'Treatment Room', type: 'short' },
      { id: 'gal-las-4', src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop', alt: 'Clear Skin', type: 'tall' },
    ]
  },
  {
    id: 'facials-skincare',
    title: 'Facials & Skincare',
    description: 'Nourish and rejuvenate your skin with our customized spa facials.',
    thumbnail: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1000&auto=format&fit=crop',
    beforeAfter: [
      {
        id: 'ba-fac-1',
        title: 'HydraFacial Glow',
        before: 'https://images.unsplash.com/photo-1525286102394-069bc0bc5b43?q=80&w=800&auto=format&fit=crop',
        after: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop',
      }
    ],
    galleryImages: [
      { id: 'gal-fac-1', src: '/gallery_2_1780660415749.png', alt: 'Skincare Products', type: 'tall' },
      { id: 'gal-fac-2', src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop', alt: 'Facial Massage', type: 'medium' },
      { id: 'gal-fac-3', src: '/gallery_5_1780660454668.png', alt: 'Spa Towels', type: 'short' },
      { id: 'gal-fac-4', src: '/gallery_1_1780660396697.png', alt: 'Treatment Bed', type: 'medium' },
    ]
  },
  {
    id: 'body-contouring',
    title: 'Body Contouring',
    description: 'Sculpt your physique with non-invasive fat reduction and skin tightening.',
    thumbnail: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop',
    beforeAfter: [
      {
        id: 'ba-bod-1',
        title: 'CoolSculpting',
        before: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?q=80&w=800&auto=format&fit=crop',
        after: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop',
      }
    ],
    galleryImages: [
      { id: 'gal-bod-1', src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop', alt: 'Body Contouring Massage', type: 'tall' },
      { id: 'gal-bod-2', src: '/gallery_3_1780660429401.png', alt: 'Waiting Area', type: 'short' },
      { id: 'gal-bod-3', src: '/gallery_6_1780660467909.png', alt: 'Hallway', type: 'medium' },
    ]
  }
];
