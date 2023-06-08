import Header from "../../Components/NFTComponents/NFTHeader/header";
import NftMain from "../../Components/NFTComponents/NFTMain/nftMain";
import Footer from "../../Components/NFTComponents/Footer/Footer";
import "./NftPage.css";
function NftPage() {
  return (
    <div className="all-container">
      <Header />
      <NftMain />
      <Footer />
    </div>
  );
}

export default NftPage;
