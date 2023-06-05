import HeroSection from "../NftHeroSection/HeroSection";
import NftUpsell from "../NftUpsell/NftUpsell";
import NftPress from "../NftPress/nftPress";
import NftShowcase from "../NftShowcase/NftShowcase";

function NftMain() {
  return (
    <main className="main-container">
      <HeroSection />
      <NftUpsell />
      <NftPress />
      <NftShowcase />
    </main>
  );
}
export default NftMain;
