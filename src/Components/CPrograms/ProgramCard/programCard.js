import "./programCard.css";

function ProgramCard({ children, classes }) {
  return <div className={`programCard col ${classes ? classes : ""}`}>{children}</div>;
}

export default ProgramCard;
