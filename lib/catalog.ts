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
    id: "swtch-home",
    category: "EV Charging",
    name: "SWTCH Home Charger",
    desc: "Level 2 home EV charger from SWTCH, wall-mounted and installed by our licensed electricians.",
    // PLACEHOLDER — carried over from the ChargePoint Home Flex entry it
    // replaced. No SWTCH installed price has been confirmed; do not ship
    // until Torts confirms the number.
    price: "from $1,899",
    pricenote: "Installed",
    photo: "/shop/swtch-home.png",
    featured: false,
  },
  {
    id: "cp-home",
    category: "EV Charging",
    name: "ChargePoint Home Plug-In",
    desc: "Reliable 32A Level 2 charging for daily drivers. Simple, durable, and weather-rated for outdoor mounting.",
    price: "from $1,499",
    pricenote: "Installed",
    photo: "/shop/cp-home.png",
    featured: false,
  },
  {
    id: "v2h",
    category: "EV Charging",
    name: "Bidirectional V2H Charger",
    desc: "Two-way charging that turns a compatible EV into whole-home backup power. Our headline install.",
    price: "from $5,400",
    pricenote: "Installed",
    photo: "/shop/v2h.png",
    featured: true,
  },
  {
    id: "pw3",
    category: "Powerwall",
    name: "Tesla Powerwall 3",
    desc: "Integrated battery and solar inverter. Stores energy, runs your home through outages, and shifts off peak rates.",
    price: "from $11,500",
    pricenote: "Installed",
    photo: "/shop/pw3.png",
    featured: false,
  },
  {
    id: "pw-exp",
    category: "Powerwall",
    name: "Powerwall Expansion",
    desc: "Add capacity to an existing Powerwall 3 for longer backup and bigger loads. Stackable up to four units.",
    price: "from $7,200",
    pricenote: "Installed",
    photo: "/shop/pw-exp.png",
    featured: false,
  },
  {
    id: "resilience",
    category: "Packages",
    name: "Whole-Home Resilience",
    desc: "Solar, Powerwall, and bidirectional charging as one integrated system. The full stack — scoped to your home.",
    price: "Custom quote",
    pricenote: "Package",
    photo: "/shop/resilience.png",
    featured: true,
  },
];

export const CATEGORIES: Category[] = [
  "All",
  "EV Charging",
  "Powerwall",
  "Packages",
];
