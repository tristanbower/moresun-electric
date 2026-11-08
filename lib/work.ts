export type WorkImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** next/image quality: 75 for ordinary photos, 85 for fine labels / logo overlays */
  quality: 75 | 85;
  /** Optional caption, e.g. "Before" / "After". */
  label?: string;
};

export type WorkStep = WorkImage & { label: string };

/**
 * Every field without a verified, owner-supplied value is optional and left
 * out — never filled with a guess.
 */
export type WorkProject = {
  slug: string;
  title: string;
  location?: string;
  /** Owner-supplied wording (LinkedIn / project summary). */
  scope: string;
  /** The client is never named: naming clients publicly is not approved. */
  role?: string;
  timeline?: string;
  cover: WorkImage;
  gallery: WorkImage[];
  /** Install sequence. No completion dates published. */
  progress?: WorkStep[];
  poster?: string;
  heroVideo?: string;
};

const base = "/work/wayne-gretzky-sports-centre";

const WG_02: WorkImage = {
  src: `${base}/images/wg-02-pedestal-rivian.jpg`,
  width: 1179,
  height: 786,
  alt: "SWTCH pedestal charger between yellow bollards beside a black Rivian.",
  quality: 75,
};

/**
 * Scope: owner-supplied wording (LinkedIn); four Level 2 SWTCH chargers
 * confirmed by the owner's project summary (Nov 7, 2026). Role: from that
 * summary. Progress runs trench to finished; no completion date published.
 * `satisfies` keeps the fields set here non-optional for the Gretzky page.
 */
export const WAYNE_GRETZKY = {
  slug: "wayne-gretzky-sports-centre",
  title: "Wayne Gretzky Sports Centre",
  location: "Brantford, Ontario",
  scope:
    "Four SWTCH Level 2 charging stations, installed from trench to tie-in.",
  role: "Subcontractor on a public tender",
  timeline: "About a week and a half from receiving materials to energizing",
  cover: WG_02,
  gallery: [
    WG_02,
    {
      src: `${base}/images/wg-pedestal-wide.jpg`,
      width: 1179,
      height: 1768,
      alt: "Finished SWTCH charging pedestal between two yellow bollards, with EV charging signs on the wall either side.",
      quality: 75,
    },
    {
      src: `${base}/images/wg-pedestal-top.jpg`,
      width: 1179,
      height: 1768,
      alt: "Looking up a SWTCH charging pedestal: the charger head with its green light ring, two holstered connectors, and the SWTCH-branded top cap.",
      quality: 85,
    },
    {
      src: `${base}/images/wg-06-swtch-head-qr.jpg`,
      width: 1179,
      height: 784,
      alt: "SWTCH charger head with a screen, two QR-code labels, and a green status light.",
      quality: 85,
    },
    {
      src: `${base}/images/wg-07-plug-in-logo.jpg`,
      width: 1179,
      height: 1765,
      alt: "A person holds a charging connector at a Rivian's charging port, with a MoreSun Electric logo overlay.",
      quality: 85,
    },
  ],
  progress: [
    {
      label: "Trench",
      src: `${base}/images/wg-progress-01-trench-rubble.jpg`,
      width: 1179,
      height: 1745,
      alt: "Excavation along the base of the building wall behind construction fencing, with broken concrete piled beside it.",
      quality: 75,
    },
    {
      label: "Concrete",
      src: `${base}/images/wg-progress-02-fresh-concrete.jpg`,
      width: 1179,
      height: 1572,
      alt: "Freshly poured concrete pads at the base of the wall, with conduit running up to junction boxes.",
      quality: 75,
    },
    {
      label: "Pedestals",
      src: `${base}/images/wg-progress-03-pedestals-dusk.jpg`,
      width: 1179,
      height: 1572,
      alt: "Two charging pedestals set on the new pads between yellow bollards, construction fencing still up.",
      quality: 75,
    },
    {
      label: "Finished",
      src: `${base}/images/wg-progress-07-finished-wide.jpg`,
      width: 1179,
      height: 1572,
      alt: "Finished install: fencing gone, two charging pedestals and EV charging signs facing the parking bays.",
      quality: 75,
    },
  ],
  poster: `${base}/posters/wg-poster-16x9.webp`,
  heroVideo: `${base}/video/wg-hero-720.mp4`,
} satisfies WorkProject;

const svcBase = "/work/residential-200a-service-upgrade";

const SVC_BEFORE: WorkImage = {
  label: "Before",
  src: `${svcBase}/images/svc200a-before-100a.jpg`,
  width: 1178,
  height: 1562,
  alt: "Before: the old 100A meter on the same grey brick wall, a single conduit running up to the eave, no chargers.",
  quality: 85,
};

const SVC_AFTER: WorkImage = {
  label: "After",
  src: `${svcBase}/images/svc200a-after-200a-2swtch.jpg`,
  width: 1179,
  height: 1571,
  alt: "After: the new 200A meter base centred on a grey brick wall, with a black SWTCH home charger on each side and their charging cables coiled below.",
  quality: 85,
};

/**
 * Owner-supplied (Torts, Nov 7, 2026; LinkedIn, Nov 6, 2026): "basically just
 * a service upgrade from 100 A to 200 A" plus two SWTCH home chargers, for a
 * customer with two EVs on the way. No location, client, date, price or
 * timeline has been supplied, so none is set.
 */
export const RESIDENTIAL_200A = {
  slug: "residential-200a-service-upgrade",
  title: "Residential 200A Service Upgrade + 2 SWTCH Chargers",
  scope:
    "A service upgrade from 100A to 200A, including two SWTCH home chargers.",
  cover: SVC_BEFORE,
  gallery: [
    SVC_BEFORE,
    SVC_AFTER,
    {
      label: "Service mast",
      src: `${svcBase}/images/svc200a-masthead.jpg`,
      width: 1179,
      height: 1561,
      alt: "The new overhead service mast and weatherhead on the roof, with the service cables looping into it above the driveway.",
      quality: 75,
    },
  ],
} satisfies WorkProject;

/** Home-page order: Gretzky first. */
export const WORK_PROJECTS: WorkProject[] = [WAYNE_GRETZKY, RESIDENTIAL_200A];
