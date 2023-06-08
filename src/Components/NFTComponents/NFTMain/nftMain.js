import HeroSection from "../NftHeroSection/HeroSection";
import NftUpsell from "../NftUpsell/NftUpsell";
import NftPress from "../NftPress/nftPress";
import NftShowcase from "../NftShowcase/NftShowcase";
import NftFooterUpsell from "../NftFooterUpsell/NftFooterUpsell";

function NftMain() {
  return (
    <main className="main-container">
      <HeroSection />
      <NftUpsell />
      <NftPress />
      <NftShowcase />
      <NftFooterUpsell />
    </main>
  );
}
export default NftMain;
