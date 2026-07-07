import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Modesto Roofing",
    tagline: "Expert roofing. Lasting protection.",
    phone: "(XXX) XXX-XXXX",
    phoneHref: "tel:+1XXXXXXXXXX",
    email: "info@modestoroofing.com",
    address: "",
    city: "",
    serviceAreas: [""],
    license: "",
    since: "",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "clean",
    niche: "roofing",
  },

  services: [
    { icon: "home", title: "Roof Replacement", desc: "Complete roof overhauls using premium GAF materials.", urgent: false },
    { icon: "wrench", title: "Storm Damage Repair", desc: "Fast, reliable repairs for wind, hail, and storm damage.", urgent: true },
    { icon: "shield-check", title: "Insurance Claims", desc: "We guide you through the entire insurance claim process.", urgent: false },
    { icon: "truck", title: "Emergency Tarping", desc: "Immediate protection to prevent further water damage.", urgent: true },
    { icon: "droplets", title: "Gutter Installation", desc: "Protect your foundation with seamless gutter systems.", urgent: false },
    { icon: "star", title: "Free Inspections", desc: "Get a comprehensive, no-obligation roof assessment.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Modesto, CA", stars: 5, text: "After the last big storm, we were so worried about our roof. Modesto Roofing was a beacon of professionalism. They handled the entire replacement with such precision and care, and the new roof looks absolutely stunning. The crew was respectful of our property, and the project finished right on schedule. We feel so much more secure in our home now." },
    { name: "David M.", location: "Riverbank, CA", stars: 5, text: "Dealing with storm damage and insurance companies is a nightmare, but Modesto Roofing made it surprisingly painless. Their inspector was incredibly thorough, documented everything perfectly for our claim, and their team handled the repairs flawlessly. They turned a stressful situation into a smooth, efficient process. I can't recommend them highly enough for their expertise and support." },
    { name: "Jessica P.", location: "Ceres, CA", stars: 5, text: "I called Modesto Roofing in a panic during a downpour when we discovered a major leak. They had a team out for emergency tarping within two hours, preventing catastrophic damage to our attic and ceilings. Their quick response was a lifesaver. They followed up with a permanent repair that was just as impressive. Truly exceptional service when we needed it most." }
  ],

  trustBadges: [
    "GAF-Certified Installer",
    "Licensed & Insured",
    "Lifetime Workmanship Warranty",
    "Same-Day Emergency Tarping",
    "Free Inspections"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 500, label: "Roofs Installed", suffix: "+", decimals: 0 },
    { value: 10, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award",       title: "GAF-Certified Installer",  desc: "Our team holds elite certification from GAF, ensuring top-tier quality and materials on every job." },
    { icon: "star",        title: "Free Storm Inspection",    desc: "We provide a comprehensive, no-cost inspection to assess storm damage and recommend the best course of action." },
    { icon: "shield-check",title: "Insurance Claim Assistance",desc: "Navigating insurance can be complex. We work with your provider to ensure your claim is handled smoothly." },
    { icon: "thumbs-up",   title: "Lifetime Workmanship Warranty", desc: "We stand behind our work with a lifetime warranty on our craftsmanship, giving you ultimate peace of mind." },
    { icon: "clock",       title: "Same-Day Emergency Tarping", desc: "When disaster strikes, our rapid response team provides same-day tarping to protect your home from further damage." },
    { icon: "home",        title: "Local Roofers",            desc: "As your neighbors, we are committed to serving our community with integrity and reliable, high-quality service." }
  ],

  formServiceOptions: ["Roof Replacement", "Storm Damage Repair", "Insurance Claims", "Emergency Tarping", "Gutter Installation", "Free Inspections"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges