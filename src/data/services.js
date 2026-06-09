import { Droplets, Sparkles, Sun, Activity, Zap, Heart, Wind, Flower2 } from 'lucide-react';

export const categories = [
  "Skin Rejuvenation",
  "Injectables & Anti-Aging",
  "Laser Treatments",
  "Body Contouring & Wellness"
];

export const servicesData = {
  "Skin Rejuvenation": [
    {
      id: "hydrafacial",
      title: "HydraFacial",
      icon: Droplets,
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1000&auto=format&fit=crop", /* Facial treatment */
      description: "Experience the essence of skin renewal with restorative treatments crafted to reveal your natural glow. Each ritual gently purifies, deeply hydrates, and revitalizes your skin leaving it radiant and renewed.",
      benefits: [
        "Deep Cleansing and Exfoliation",
        "Pore Extraction without Irritation",
        "Intense Hydration Boost",
        "Instant Radiant Glow"
      ]
    },
    {
      id: "microneedling",
      title: "Microneedling",
      icon: Activity,
      image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1000&auto=format&fit=crop", /* Medical device/clinic */
      description: "Stimulate your skin's natural healing process to produce new collagen and elastin. This treatment improves skin texture, reduces scarring, and provides a firmer, more youthful appearance.",
      benefits: [
        "Collagen Induction Therapy",
        "Improves Fine Lines",
        "Reduces Acne Scars",
        "Enhances Skin Texture"
      ]
    },
    {
      id: "chemical-peels",
      title: "Chemical Peels",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop", /* Glowing skin/peel */
      description: "Reveal fresh, new skin with our customized chemical peels. Designed to address your specific skin concerns, from hyperpigmentation to uneven texture, for a truly refreshed look.",
      benefits: [
        "Removes Dead Skin Cells",
        "Evens Skin Tone",
        "Softens Rough Texture",
        "Brightens Complexion"
      ]
    },
    {
      id: "dermaplaning",
      title: "Dermaplaning",
      icon: Sun,
      image: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=1000&auto=format&fit=crop", /* Exfoliation */
      description: "A targeted treatment utilizing careful exfoliation to remove dead skin and peach fuzz. Perfect for restoring vitality and a luminous glow before special events.",
      benefits: [
        "Removes Vellus Hair",
        "Reduces Dullness",
        "Enhances Product Absorption",
        "Luminous Finish"
      ]
    }
  ],
  "Injectables & Anti-Aging": [
    {
      id: "botox",
      title: "Botox & Dysport",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop", /* Injection/Medical */
      description: "Smooth out fine lines and prevent new wrinkles from forming with our expert injections. A quick, minimally invasive procedure for a rested, youthful expression.",
      benefits: [
        "Softens Forehead Lines",
        "Reduces Crow's Feet",
        "Prevents New Wrinkles",
        "Quick Recovery Time"
      ]
    },
    {
      id: "dermal-fillers",
      title: "Dermal Fillers",
      icon: Droplets,
      image: "/testi_treatment.png", /* Lips/Face close up */
      description: "Restore lost volume, plump lips, and enhance facial contours. Our premium hyaluronic acid fillers provide natural-looking, immediate results that enhance your unique beauty.",
      benefits: [
        "Restores Facial Volume",
        "Plumps Thin Lips",
        "Softens Facial Creases",
        "Natural-Looking Results"
      ]
    },
    {
      id: "lip-enhancement",
      title: "Lip Enhancement",
      icon: Heart,
      image: "/testi_treatment.png", /* Lips */
      description: "Achieve the perfect pout with our specialized lip enhancement treatments. We focus on symmetry, volume, and definition for beautifully enhanced, kissable lips.",
      benefits: [
        "Increases Lip Volume",
        "Improves Symmetry",
        "Defines Lip Borders",
        "Smooths Lip Lines"
      ]
    },
    {
      id: "kybella",
      title: "Kybella",
      icon: Wind,
      image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1000&auto=format&fit=crop", /* Neck/Profile */
      description: "Comprehensive injectable protocols utilizing deoxycholic acid to naturally break down and absorb fat cells, significantly reducing the appearance of a double chin.",
      benefits: [
        "Eliminates Submental Fat",
        "Improves Jawline Contour",
        "Non-Surgical Profile Enhancement",
        "Long-Lasting Effects"
      ]
    }
  ],
  "Laser Treatments": [
    {
      id: "laser-hair-removal",
      title: "Laser Hair Removal",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop", /* Clinic/Laser */
      description: "Achieve silky smooth skin permanently. Our advanced laser technology safely and effectively removes unwanted hair from all skin types with minimal discomfort.",
      benefits: [
        "Permanent Hair Reduction",
        "Safe for All Skin Types",
        "Minimal Discomfort",
        "Smooth, Flawless Skin"
      ]
    },
    {
      id: "ipl-photofacial",
      title: "IPL Photofacial",
      icon: Sun,
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1000&auto=format&fit=crop", /* Clinic machine */
      description: "Erase sun spots, age spots, and freckles. Our targeted intense pulsed light therapy breaks down excess melanin to restore a clear, even, and radiant complexion.",
      benefits: [
        "Fades Sun Spots",
        "Evens Skin Discoloration",
        "Targets Excess Melanin",
        "Clearer Complexion"
      ]
    },
    {
      id: "skin-resurfacing",
      title: "Skin Resurfacing",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1000&auto=format&fit=crop", /* Advanced skin tech */
      description: "Turn back the clock with fractional laser skin resurfacing. This powerful treatment addresses sun damage, fine lines, and uneven texture for dramatic rejuvenation.",
      benefits: [
        "Reverses Sun Damage",
        "Reduces Fine Lines",
        "Improves Overall Texture",
        "Stimulates Collagen"
      ]
    },
    {
      id: "tattoo-removal",
      title: "Tattoo Removal",
      icon: Activity,
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop", /* Tattoo laser */
      description: "Safely and effectively remove unwanted tattoos. Our specialized laser protocols break down ink particles to promote intensive healing and fading.",
      benefits: [
        "Fades Unwanted Ink",
        "Safe for Multiple Colors",
        "Minimizes Skin Damage",
        "Clearer Canvas"
      ]
    }
  ],
  "Body Contouring & Wellness": [
    {
      id: "coolsculpting",
      title: "CoolSculpting",
      icon: Activity,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop", /* Medical / Contouring */
      description: "Contour your body without surgery using advanced freezing technology. Target and permanently destroy fat cells in stubborn areas.",
      benefits: [
        "Non-Surgical Contouring",
        "Freezes Fat Cells",
        "No Downtime",
        "Visible Results"
      ]
    },
    {
      id: "emsculpt",
      title: "Emsculpt NEO",
      icon: Wind,
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop",
      description: "Simultaneously build muscle and burn fat. A safe, comfortable body shaping procedure that uses RF and HIFEM energy.",
      benefits: [
        "Builds Muscle Mass",
        "Destroys Fat Cells",
        "Comfortable Procedure",
        "Permanent Reduction"
      ]
    },
    {
      id: "skin-tightening",
      title: "Skin Tightening",
      icon: Flower2,
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1000&auto=format&fit=crop", /* Skin */
      description: "Firm and tighten loose skin on the face and body. Utilizing RF energy to stimulate collagen production and restore elasticity.",
      benefits: [
        "Firms Loose Skin",
        "Stimulates Collagen",
        "Non-Invasive Lift",
        "Restores Elasticity"
      ]
    },
    {
      id: "cellulite-reduction",
      title: "Cellulite Reduction",
      icon: Droplets,
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop",
      description: "Smooth away dimples and achieve firmer skin. Our advanced treatments target the structural causes of cellulite for a dramatically smoother appearance.",
      benefits: [
        "Smoothes Dimpled Skin",
        "Firms and Tightens",
        "Improves Circulation",
        "Restores Confidence"
      ]
    }
  ]
};
