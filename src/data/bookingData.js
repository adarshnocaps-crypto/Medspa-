export const bookingCategories = [
  {
    id: "injectables",
    name: "Injectables",
    description: "Botox, Fillers, and Kybella",
    image: "/testi_treatment.png"
  },
  {
    id: "skin",
    name: "Skin & Facials",
    description: "HydraFacial, Microneedling, Peels",
    image: "/testi_interior.png"
  },
  {
    id: "laser",
    name: "Laser Treatments",
    description: "Hair Removal, Skin Resurfacing",
    image: "/about_spa_room_1780659425526.png"
  },
  {
    id: "wellness",
    name: "Wellness & IV",
    description: "IV Therapy, Vitamin Injections",
    image: "/gallery_2_1780660415749.png"
  }
];

export const bookingServices = [
  // Injectables
  { id: "botox", categoryId: "injectables", name: "Botox / Dysport", duration: "30 min", price: "From $12/unit" },
  { id: "lip-filler", categoryId: "injectables", name: "Lip Filler", duration: "45 min", price: "From $650" },
  { id: "cheek-filler", categoryId: "injectables", name: "Cheek Filler", duration: "60 min", price: "From $800" },
  { id: "kybella", categoryId: "injectables", name: "Kybella (Fat Dissolving)", duration: "45 min", price: "From $600" },
  
  // Skin & Facials
  { id: "hydrafacial", categoryId: "skin", name: "Signature HydraFacial", duration: "45 min", price: "$199" },
  { id: "microneedling", categoryId: "skin", name: "Microneedling (SkinPen)", duration: "60 min", price: "$350" },
  { id: "chemical-peel", categoryId: "skin", name: "VI Peel", duration: "30 min", price: "$250" },
  { id: "dermaplaning", categoryId: "skin", name: "Dermaplaning Add-on", duration: "15 min", price: "$50" },

  // Laser
  { id: "laser-hair", categoryId: "laser", name: "Laser Hair Removal (Small Area)", duration: "15 min", price: "$99" },
  { id: "ipl", categoryId: "laser", name: "IPL Photofacial", duration: "45 min", price: "$350" },
  { id: "resurfacing", categoryId: "laser", name: "Laser Skin Resurfacing", duration: "60 min", price: "$800" },

  // Wellness
  { id: "iv-hydration", categoryId: "wellness", name: "Signature IV Hydration", duration: "45 min", price: "$150" },
  { id: "b12-shot", categoryId: "wellness", name: "B12 Injection", duration: "10 min", price: "$35" }
];

export const bookingProviders = [
  {
    id: "provider-1",
    name: "Dr. Sarah Jenkins",
    title: "Medical Director / Master Injector",
    image: "/doctor_placeholder.png",
    availableServices: ["botox", "lip-filler", "cheek-filler", "kybella"]
  },
  {
    id: "provider-2",
    name: "Alyssa Martinez",
    title: "Nurse Practitioner (NP-C)",
    image: "/avatar_2.png",
    availableServices: ["botox", "lip-filler", "cheek-filler", "kybella", "iv-hydration", "b12-shot"]
  },
  {
    id: "provider-3",
    name: "Jessica Lee",
    title: "Lead Esthetician",
    image: "/avatar_3.png",
    availableServices: ["hydrafacial", "microneedling", "chemical-peel", "dermaplaning", "laser-hair", "ipl", "resurfacing"]
  },
  {
    id: "first-available",
    name: "First Available Provider",
    title: "Any qualified staff member",
    image: "/doctor_placeholder.png",
    availableServices: ["all"] // Special case
  }
];

export const generateAvailableTimes = () => {
  const times = [];
  let time = new Date();
  time.setHours(9, 0, 0, 0); // Start at 9 AM
  
  while (time.getHours() < 17) { // End at 5 PM
    times.push(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    time.setMinutes(time.getMinutes() + 30);
  }
  return times;
};
