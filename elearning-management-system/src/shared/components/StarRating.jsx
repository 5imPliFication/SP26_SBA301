import { StarFill, StarHalf } from "react-bootstrap-icons";

function StarRating({ stars, label }) {
  return (
    <div className="d-flex align-items-center gap-1">
      {Array.from({ length: Math.floor(stars) }).map((_, i) => (
        <StarFill key={i} className="text-warning" />
      ))}

      {stars % 1 !== 0 && <StarHalf className="text-warning" />}

      <span className="ms-2">{label}</span>
    </div>
  );
}

export default StarRating;
