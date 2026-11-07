export type WorkImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** next/image quality: 75 for ordinary photos, 85 for fine labels / logo overlays */
  quality: 75 | 85;
};

export type WorkProject = {
  slug: string;
  title: string;
  location: string;
  /** Owner-supplied wording (LinkedIn). Station count and scope are unverified. */
  scope: string;
  cover: WorkImage;
  gallery: WorkImage[];
  poster: string;
  heroVideo: string;
};

const base = "/work/wayne-gretzky-sports-centre";

const WG_02: WorkImage = {
  src: `${base}/images/wg-02-pedestal-rivian.jpg`,
  width: 1179,
  height: 786,
  alt: "SWTCH pedestal charger between yellow bollards beside a black Rivian.",
  quality: 75,
};

export const WAYNE_GRETZKY: WorkProject = {
  slug: "wayne-gretzky-sports-centre",
  title: "Wayne Gretzky Sports Centre",
  location: "Brantford, Ontario",
  scope:
    "Four SWTCH Level 2 charging stations, installed from trench to tie-in.",
  cover: WG_02,
  gallery: [
    WG_02,
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
  poster: `${base}/posters/wg-poster-16x9.webp`,
  heroVideo: `${base}/video/wg-hero-720.mp4`,
};
