import { Droplets, Sparkles, Activity, HeartPulse, Flower2, Wind, Sun, Waves, Leaf, Gem, Hand, Zap } from 'lucide-react';

// Services offered by Vixen Spa Services (Beverly Hills, CA).
// Sourced from the business card (Wood Therapy, Lymphatic Drainage Massage, Body Sculpting,
// Wood Therapy – Cellulite, Vacuum Therapy, Cellulite Massages, Tummy Tuck Massages,
// BBL massages & aftercare), the business's website (lymphaticdrainagemassage.com),
// its Facebook page and its published client testimonials.
// `image` is used in cards/sections; `heroImage` is an upscaled copy for full-width banners.
export const categories = [
  "Post-Op Aftercare",
  "Body Sculpting",
  "Cellulite Treatments",
  "Hyperbaric Oxygen Therapy"
];

export const servicesData = {
  "Post-Op Aftercare": [
    {
      id: "lymphatic-drainage-massage",
      title: "Lymphatic Drainage Massage",
      icon: Droplets,
      image: "/vixen/back-massage-relax.jpg",
      heroImage: "/vixen/banners/back-massage-relax.jpg",
      description: "Post-surgical manual lymphatic drainage uses gentle movements on specific areas of your body to help move lymph fluid and remove toxins from your tissues, easing swelling and helping you heal faster after cosmetic surgery.",
      benefits: [
        "Reduces Post-Op Swelling & Bruising",
        "Relieves Soreness & Fluid Retention",
        "Supports Circulation & Immune Function",
        "Gentle, Painless Technique"
      ]
    },
    {
      id: "bbl-aftercare",
      title: "BBL Massages & Aftercare",
      icon: HeartPulse,
      image: "/vixen/therapist-back-massage.jpg",
      heroImage: "/vixen/banners/therapist-back-massage.jpg",
      description: "Specialized massages and aftercare after a Brazilian Butt Lift and fat transfer. Gentle lymphatic work for the treated areas that helps reduce swelling and supports a smooth, comfortable recovery.",
      benefits: [
        "Gentle Care for Treated Areas",
        "Reduces Swelling & Fluid Retention",
        "Helps Smooth Lumps",
        "Unrushed, Personalized Sessions"
      ]
    },
    {
      id: "tummy-tuck-massage",
      title: "Tummy Tuck Massages",
      icon: Hand,
      image: "/vixen/post-op-massage.jpg",
      heroImage: "/vixen/banners/post-op-massage.jpg",
      description: "Post-op lymphatic massages after a tummy tuck (abdominoplasty) to help ease the swelling, soreness and fluid retention around your abdomen while you heal.",
      benefits: [
        "Eases Abdominal Swelling",
        "Relieves Post-Op Soreness",
        "Helps Smooth Lumps",
        "Planned Around Your Surgeon's Instructions"
      ]
    },
    {
      id: "liposuction-aftercare",
      title: "Liposuction Aftercare",
      icon: Activity,
      image: "/vixen/leg-lymphatic-massage.jpg",
      heroImage: "/vixen/banners/leg-lymphatic-massage.jpg",
      description: "After liposuction, patients experience swelling, bruises and soreness along with fluid retention. Qualified manual lymphatic drainage after your procedure helps ensure the best outcome from your cosmetic surgery.",
      benefits: [
        "Reduces Swelling & Fluid Build-Up",
        "Helps Flatten Lumps & Knots",
        "Supports a Smooth, Even Contour",
        "Trusted by Beverly Hills Surgeons"
      ]
    },
    {
      id: "mommy-makeover-aftercare",
      title: "Mommy Makeover Aftercare",
      icon: Flower2,
      image: "/vixen/licensed-therapist.jpg",
      heroImage: "/vixen/banners/massage-flower.jpg",
      description: "A mommy makeover often combines procedures such as a tummy tuck, liposuction and breast surgery. Post-op lymphatic drainage helps manage swelling across every treated area so you can get back to your life sooner.",
      benefits: [
        "Care for Multiple Treated Areas",
        "Reduces Swelling & Soreness",
        "Supports a Faster Recovery",
        "Session Plan Built Around You"
      ]
    },
    {
      id: "face-neck-drainage",
      title: "Face, Chin & Neck Drainage",
      icon: Sparkles,
      image: "/vixen/face-neck-drainage.jpg",
      heroImage: "/vixen/banners/face-neck-drainage.jpg",
      description: "Focused lymphatic drainage for the face, chin and neck after chin liposuction and other facial procedures. Gentle work that helps smooth lumps and reveal your results sooner.",
      benefits: [
        "Helps Smooth Lumps After Chin Lipo",
        "Eases Facial & Neck Swelling",
        "Gentle Around Sensitive Areas",
        "Helps Reveal Your Results Sooner"
      ]
    }
  ],
  "Body Sculpting": [
    {
      id: "body-sculpting",
      title: "Body Sculpting",
      icon: Gem,
      image: "/vixen/leg-massage-portrait.jpg",
      heroImage: "/vixen/banners/leg-massage-portrait.jpg",
      description: "Non-surgical body sculpting that combines targeted techniques such as wood therapy and vacuum therapy to help contour and define your shape, with or without a recent procedure.",
      benefits: [
        "Non-Surgical Contouring",
        "Targets Stubborn Areas",
        "Combines Wood & Vacuum Therapy",
        "Personalized to Your Goals"
      ]
    },
    {
      id: "wood-therapy",
      title: "Wood Therapy",
      icon: Leaf,
      image: "/vixen/shoulder-massage.jpg",
      heroImage: "/vixen/banners/shoulder-massage.jpg",
      description: "Wood therapy (maderoterapia) uses specially shaped wooden tools to massage and sculpt the body, stimulating circulation and lymph flow while helping to contour and smooth problem areas.",
      benefits: [
        "Sculpts & Contours the Body",
        "Stimulates Circulation & Lymph Flow",
        "Helps Smooth Problem Areas",
        "Natural, Non-Invasive Technique"
      ]
    },
    {
      id: "vacuum-therapy",
      title: "Vacuum Therapy",
      icon: Wind,
      image: "/vixen/massage-flower.jpg",
      heroImage: "/vixen/banners/massage-flower.jpg",
      description: "Vacuum therapy uses gentle suction cups to lift and massage the tissue, encouraging lymphatic drainage and circulation while helping to tone and contour the body.",
      benefits: [
        "Lifts & Tones the Skin",
        "Encourages Lymphatic Drainage",
        "Boosts Circulation",
        "Helps Contour Treated Areas"
      ]
    },
    {
      id: "cavitation-lipo",
      title: "Cavitation Lipo",
      icon: Waves,
      image: "/vixen/glowing-skin.jpg",
      heroImage: "/vixen/banners/head-massage.jpg",
      description: "A non-surgical body contouring treatment that uses ultrasound cavitation to target stubborn areas. Ask Priscilla whether cavitation is right for your body goals.",
      benefits: [
        "Non-Surgical Body Contouring",
        "Targets Stubborn Areas",
        "Complements Lymphatic Drainage",
        "Personalized Recommendations"
      ]
    }
  ],
  "Cellulite Treatments": [
    {
      id: "cellulite-massage",
      title: "Cellulite Massages",
      icon: Zap,
      image: "/vixen/leg-lymphatic-massage.jpg",
      heroImage: "/vixen/banners/leg-lymphatic-massage.jpg",
      description: "Targeted massages that boost circulation and help smooth the appearance of cellulite on the thighs, hips, buttocks and other areas.",
      benefits: [
        "Helps Smooth Dimpled Skin",
        "Boosts Circulation",
        "Supports Lymphatic Flow",
        "Firmer-Looking Skin"
      ]
    },
    {
      id: "wood-therapy-cellulite",
      title: "Wood Therapy – Cellulite",
      icon: Leaf,
      image: "/vixen/leg-massage-portrait.jpg",
      heroImage: "/vixen/banners/leg-massage-portrait.jpg",
      description: "Wood therapy focused on cellulite: wooden tools are used to work the tissue, stimulating circulation and helping to visibly smooth dimpled areas.",
      benefits: [
        "Targets Cellulite-Prone Areas",
        "Helps Visibly Smooth Skin",
        "Stimulates Circulation",
        "Natural, Non-Invasive Technique"
      ]
    }
  ],
  "Hyperbaric Oxygen Therapy": [
    {
      id: "hyperbaric-oxygen-therapy",
      title: "Hyperbaric Oxygen Therapy",
      icon: Wind,
      image: "/vixen/smiling-client.jpg",
      heroImage: "/vixen/banners/smiling-client.jpg",
      description: "Hyperbaric oxygen therapy (HBOT) before and after plastic and reconstructive surgery can speed up healing and recovery by up to 75%, with less bruising, swelling and inflammation, so you can return to work sooner, looking and feeling beautiful.",
      benefits: [
        "Faster Healing & Recovery",
        "Less Bruising, Swelling & Inflammation",
        "Better Scar Healing Through Collagen",
        "Less Need for Post-Procedure Pain Pills"
      ]
    },
    {
      id: "hbot-fat-transfer-grafts",
      title: "HBOT for Fat Transfers & Grafts",
      icon: Sun,
      image: "/vixen/radiant-recovery.jpg",
      heroImage: "/vixen/banners/radiant-recovery.jpg",
      description: "Hyperbaric oxygen therapy can assist new fat grafts and fat transfers and help compromised skin grafts heal, making it a powerful complement to BBL, breast and facial procedures.",
      benefits: [
        "Supports New Fat Grafts & Transfers",
        "Helps Compromised Skin Grafts",
        "Pre- & Post-Procedure Sessions",
        "Pairs With Lymphatic Drainage"
      ]
    }
  ]
};
