export type Category = "All" | "EV Charging" | "Powerwall" | "Packages";

export type Product = {
  id: string;
  category: Exclude<Category, "All">;
  name: string;
  desc: string;
  price: string;
  pricenote: string;
  photo: string;
  featured: boolean;
};

// Mirrors CATALOG in Shop.dc.html's logic block.
export const CATALOG: Product[] = [
  {
    id: "cp-flex",
    category: "EV Charging",
    name: "ChargePoint Home Flex",
    desc: "Level 2 home charger, up to 50A. Wi-Fi connected with scheduling and energy tracking in the app.",
    price: "from $1,899",
    pricenote: "Installed",
    photo: "PHOTO — wall-mounted charger",
    featured: false,
  },
  {
    id: "cp-home",
    category: "EV Charging",
    name: "ChargePoint Home",
    desc: "Reliable 32A Level 2 charging for daily drivers. Simple, durable, and weather-rated for outdoor mounting.",
    price: "from $1,499",
    pricenote: "Installed",
    photo: "PHOTO — charger in garage",
    featured: false,
  },
  {
    id: "v2h",
    category: "EV Charging",
    name: "Bidirectional V2H Charger",
    desc: "Two-way charging that turns a compatible EV into whole-home backup power. Our headline install.",
    price: "from $5,400",
    pricenote: "Installed",
    photo: "PHOTO — V2H unit + panel",
    featured: true,
  },
  {
    id: "pw3",
    category: "Powerwall",
    name: "Tesla Powerwall 3",
    desc: "Integrated battery and solar inverter. Stores energy, runs your home through outages, and shifts off peak rates.",
    price: "from $11,500",
    pricenote: "Installed",
    photo: "PHOTO — Powerwall on wall",
    featured: false,
  },
  {
    id: "pw-exp",
    category: "Powerwall",
    name: "Powerwall Expansion",
    desc: "Add capacity to an existing Powerwall 3 for longer backup and bigger loads. Stackable up to four units.",
    price: "from $7,200",
    pricenote: "Installed",
    photo: "PHOTO — stacked Powerwalls",
    featured: false,
  },
  {
    id: "starter",
    category: "Packages",
    name: "EV-Ready Starter",
    desc: "Level 2 charger, panel capacity check, permit, and ESA inspection — everything to charge at home, in one visit.",
    price: "from $2,200",
    pricenote: "Package",
    photo: "PHOTO — install crew at work",
    featured: false,
  },
  {
    id: "solar-pw",
    category: "Packages",
    name: "Solar + Powerwall Bundle",
    desc: "Rooftop solar paired with battery storage, designed and installed together for day-and-night energy independence.",
    price: "from $24,000",
    pricenote: "Package",
    photo: "PHOTO — solar roof + battery",
    featured: false,
  },
  {
    id: "resilience",
    category: "Packages",
    name: "Whole-Home Resilience",
    desc: "Solar, Powerwall, and bidirectional charging as one integrated system. The full stack — scoped to your home.",
    price: "Custom quote",
    pricenote: "Package",
    photo: "PHOTO — full home system",
    featured: true,
  },
];

export const CATEGORIES: Category[] = [
  "All",
  "EV Charging",
  "Powerwall",
  "Packages",
];
