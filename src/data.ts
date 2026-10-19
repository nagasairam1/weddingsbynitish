export type SectionMeta = {
  id: string;
  index: string;
  short: string;
  title: string;
};

export const SECTIONS: SectionMeta[] = [
  { id: "cover", index: "01", short: "Cover", title: "Cover" },
  { id: "about", index: "02", short: "About", title: "About Us" },
  { id: "vision", index: "03", short: "Vision", title: "Vision & Mission" },
  { id: "services", index: "04", short: "Services", title: "Premium Services" },
  { id: "planning", index: "05", short: "Planning", title: "Full Wedding Planning" },
  { id: "decor", index: "06", short: "Décor", title: "Décor & Styling" },
  { id: "coordination", index: "07", short: "Day-of", title: "Day-of Coordination" },
  { id: "vendors", index: "08", short: "Vendors", title: "Vendor Coordination" },
  { id: "gallery", index: "09", short: "Gallery", title: "Event Gallery" },
  { id: "process", index: "10", short: "Process", title: "Our Process" },
  { id: "why", index: "11", short: "Why Us", title: "Why Choose Us" },
  { id: "blog", index: "12", short: "Journal", title: "Exciting Updates Ahead" },
  { id: "plan", index: "13", short: "Brief", title: "Let's Plan Your Dream Event" },
  { id: "contact", index: "14", short: "Contact", title: "Contact" },
];

export const CONTACT = {
  phone: "+91 7013807022",
  phoneHref: "tel:+917013807022",
  whatsapp: "https://wa.me/917013807022",
  email: "rjy@agapegroup.com",
  emailHref: "mailto:rjy@agapegroup.com",
  social: "Nitishdj",
  locations: "Rajahmundry, Andhra Pradesh  ·  Hyderabad, Telangana",
  locationNote:
    "Service locations subject to confirmed operating arrangements.",
};
