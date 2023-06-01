import "./BannerLogo.css";

function BannerLogo() {
  return (
    <div className="banner col-12">
      <p className="text">
        Nežinai ką pasirinkti? <span className="text-1">Spręsk IT testą</span>
        <svg alt="" xmlns="http://www.w3.org/2000/svg" width="40" height="80">
          <path fill="#1200FF" d="M3.264 32.528L.76 30.026l13.761-13.761L.762 2.504 3.263 0l16.263 16.264z" fillRule="evenodd" />
        </svg>
      </p>
    </div>
  );
}
export default BannerLogo;
