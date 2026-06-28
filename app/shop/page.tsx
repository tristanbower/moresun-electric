import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ShopCatalog from "@/components/shop/ShopCatalog";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Chargers, batteries, and complete packages — priced with installation by our licensed crew included. Build a quote and we'll confirm after a site check.",
};

export default function ShopPage() {
  return (
    <div style={{ position: "relative" }}>
      <Nav />

      <PageHero
        eyebrow="Certified reseller · Shop"
        titleBefore="Hardware"
        titleAccent="+ install"
        titleAfter=", one price."
        paddingBottom="clamp(40px,6vw,64px)"
        subheadMaxWidth="60ch"
        blobs={[
          {
            size: "58vw",
            pos: { left: "-18vw", top: "-24vw" },
            color: "rgba(255,77,28,.3)",
            blur: 34,
            anim: "msDrift",
            dur: 20,
          },
          {
            size: "44vw",
            pos: { right: "-14vw", top: "-10vw" },
            color: "rgba(255,210,10,.18)",
            blur: 38,
            anim: "msDrift2",
            dur: 24,
          },
        ]}
        subhead={
          <>
            Chargers, batteries, and complete packages — priced with
            installation by our licensed crew included. Build a quote and
            we&apos;ll confirm the final number after a quick site check.
          </>
        }
      />

      <ShopCatalog />

      <Footer />
    </div>
  );
}
