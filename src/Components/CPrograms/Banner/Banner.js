import BannerLogo from "./BannerLogo";
import "./Banner.css";
import BannerFoto from "../../../images/Desktop_banner-1024x70.jpg";
function Banner() {
  return (
    <div className="col-12">
      <h1>Programos</h1>
      <BannerLogo />
      <div className="banner col-12">
        <img alt="" className="banner-foto" src={BannerFoto} />
      </div>
    </div>
  );
}

export default Banner;
