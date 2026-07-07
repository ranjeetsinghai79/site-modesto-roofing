import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Modesto Roofing",
    tagline: "Expert Craftsmanship. Lasting Protection.",
    phone: "(555) 555-5555",
    phoneHref: "tel:+15555555555",
    email: "hello@modestoroofing.com",
    address: "",
    city: "Modesto",
    serviceAreas: ["Modesto", "Surrounding Areas"],
    license: "",
    since: "2009",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "clean",
    niche: "roofing",
  },

  services: [
    { icon: "home", title: "Roof Replacement", desc: "Protect your investment with a durable, high-quality new roof installation.", urgent: false },
    { icon: "shield-check", title: "Storm Damage Repair", desc: "We quickly repair wind, hail, and storm damage to secure your home.", urgent: true },
    { icon: "briefcase", title: "Insurance Claims", desc: "Navigate the complex insurance process with our expert claim assistance.", urgent: false },
    { icon: "truck", title: "Emergency Tarping", desc: "Prevent further water damage with our rapid, 24/7 emergency tarping services.", urgent: true },
    { icon: "droplets", title: "Gutter Installation", desc: "Ensure proper water drainage and protect your foundation with new gutters.", urgent: false },
    { icon: "wrench", title: "Free Inspections", desc: "Get a comprehensive, no-obligation assessment of your roof's condition.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah K.", location: "Modesto, CA", stars: 5, text: "After years of patching leaks, we finally decided on a full replacement with Modesto Roofing. The entire process was seamless. Their crew was professional, efficient, and left our property cleaner than they found it. Our new roof looks incredible and we have total peace of mind." },
    { name: "David L.", location: "Modesto, CA", stars: 5, text: "A huge tree branch fell on our roof during a bad storm. We called Modesto Roofing in a panic, and they had a team out for emergency tarping within hours. They guided us through the entire insurance claim process, making a stressful situation so much more manageable." },
    { name: "Maria G.", location: "Modesto, CA", stars: 5, text: "I thought I needed a whole new roof, but after their free inspection, the technician from Modesto Roofing showed me it just needed a minor repair. I really appreciate their honesty and saving me thousands of dollars. They've earned a customer for life." }
  ],

  trustBadges: [
    "GAF-Certified Installer",
    "Lifetime Workmanship Warranty",
    "Insurance Claim Assistance",
    "Same-Day Emergency Tarping",
    "Free Storm Inspections"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Jobs Done", suffix: "+", decimals: 0 },
    { value: 15, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award",       title: "GAF-Certified Installer",    desc: "We meet the highest industry standards for quality and training, ensuring a superior installation." },
    { icon: "wrench",      title: "Free Storm Inspection",      desc: "Get a professional, no-cost evaluation of your roof's condition after any major weather event." },
    { icon: "briefcase",   title: "Insurance Claim Assistance", desc: "Our experts help you navigate the claims process to ensure you get the coverage you deserve." },
    { icon: "shield-check",title: "Lifetime Workmanship Warranty", desc: "We stand behind our work with a comprehensive warranty, giving you ultimate peace of mind." },
    { icon: "truck",       title: "Same-Day Emergency Tarping", desc: "When disaster strikes, our rapid response team is ready to protect your home from further damage." },
    { icon: "home",        title: "Local Roofing Experts",      desc: "As a local business, we understand Modesto's climate and build roofs that are made to last here." }
  ],

  formServiceOptions: [
    "Roof Replacement",
    "Storm Damage Repair",
    "Insurance Claims",
    "Emergency Tarping",
    "Gutter Installation",
    "Free Inspections"
  ]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges