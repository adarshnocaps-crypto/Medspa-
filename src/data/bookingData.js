// Booking options for Vixen Spa Services. Prices are not published, so every
// service shows "Call for pricing" (call or text (323) 873-9014).
export const bookingCategories = [
  {
    id: "aftercare",
    name: "Post-Op Aftercare",
    description: "Lymphatic drainage, BBL & tummy tuck massages",
    image: "/vixen/back-massage-relax.jpg"
  },
  {
    id: "sculpting",
    name: "Body Sculpting",
    description: "Wood therapy, vacuum therapy & cavitation",
    image: "/vixen/leg-massage-portrait.jpg"
  },
  {
    id: "cellulite",
    name: "Cellulite Treatments",
    description: "Cellulite massages & wood therapy",
    image: "/vixen/leg-lymphatic-massage.jpg"
  },
  {
    id: "hbot",
    name: "Hyperbaric Oxygen Therapy",
    description: "HBOT before & after your procedure",
    image: "/vixen/smiling-client.jpg"
  }
];

export const bookingServices = [
  // Post-Op Aftercare
  { id: "assessment", categoryId: "aftercare", name: "Post-Op Assessment", duration: "Recommended first visit", price: "Call for pricing" },
  { id: "lymphatic-drainage-massage", categoryId: "aftercare", name: "Lymphatic Drainage Massage", duration: "Post-op session", price: "Call for pricing" },
  { id: "bbl-aftercare", categoryId: "aftercare", name: "BBL Massage & Aftercare", duration: "After BBL & fat transfer", price: "Call for pricing" },
  { id: "tummy-tuck-massage", categoryId: "aftercare", name: "Tummy Tuck Massage", duration: "After a tummy tuck", price: "Call for pricing" },
  { id: "liposuction-aftercare", categoryId: "aftercare", name: "Liposuction Aftercare", duration: "After liposuction", price: "Call for pricing" },
  { id: "mommy-makeover-aftercare", categoryId: "aftercare", name: "Mommy Makeover Aftercare", duration: "After a mommy makeover", price: "Call for pricing" },
  { id: "face-neck-drainage", categoryId: "aftercare", name: "Face, Chin & Neck Drainage", duration: "Focused facial session", price: "Call for pricing" },
  { id: "recovery-package", categoryId: "aftercare", name: "Recovery Package", duration: "Multiple sessions", price: "Call for pricing" },

  // Body Sculpting
  { id: "body-sculpting", categoryId: "sculpting", name: "Body Sculpting", duration: "Non-surgical contouring", price: "Call for pricing" },
  { id: "wood-therapy", categoryId: "sculpting", name: "Wood Therapy", duration: "Body contouring massage", price: "Call for pricing" },
  { id: "vacuum-therapy", categoryId: "sculpting", name: "Vacuum Therapy", duration: "Lift & tone", price: "Call for pricing" },
  { id: "cavitation-lipo", categoryId: "sculpting", name: "Cavitation Lipo", duration: "Non-surgical", price: "Call for pricing" },

  // Cellulite Treatments
  { id: "cellulite-massage", categoryId: "cellulite", name: "Cellulite Massage", duration: "Targeted areas", price: "Call for pricing" },
  { id: "wood-therapy-cellulite", categoryId: "cellulite", name: "Wood Therapy – Cellulite", duration: "Targeted areas", price: "Call for pricing" },

  // Hyperbaric Oxygen Therapy
  { id: "hbot-pre-op", categoryId: "hbot", name: "HBOT – Before Surgery", duration: "Before your procedure", price: "Call for pricing" },
  { id: "hbot-post-op", categoryId: "hbot", name: "HBOT – After Surgery", duration: "After your procedure", price: "Call for pricing" }
];

export const bookingProviders = [
  {
    id: "priscilla-martinez",
    name: "Priscilla Martinez",
    title: "Founder & Licensed Massage Therapist",
    image: "/vixen-spa-favicon.png",
    availableServices: ["all"]
  },
  {
    id: "first-available",
    name: "First Available Therapist",
    title: "Next available licensed therapist",
    image: "/vixen-spa-favicon.png",
    availableServices: ["all"] // Special case
  }
];

export const generateAvailableTimes = () => {
  const times = [];
  let time = new Date();
  time.setHours(9, 0, 0, 0); // Start at 9 AM

  while (time.getHours() < 20) { // Last slot 7:30 PM (open until 9 PM, by appointment)
    times.push(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    time.setMinutes(time.getMinutes() + 30);
  }
  return times;
};
