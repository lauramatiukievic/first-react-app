import "./map.css";
function Map() {
  return (
    <div className="google-map">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2294.3423075885275!2d23.887974!3d54.896913899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e7220ff3184881%3A0x8002872ac9bbdb7c!2sRotu%C5%A1%C4%97s%20a.%201%2C%2044280%20Kaunas!5e0!3m2!1slt!2slt!4v1680249263866!5m2!1slt!2slt"
        width="600"
        height="600"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
