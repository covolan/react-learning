import { StatusCard } from "./StatusCard";
import victorImg from "./images/image-victor.jpg";

export function Card() {
    return (
        <div className="card">
        <img className="picture" src={victorImg} alt="" />
        <p className="person-name">
          Victor Crest <span className="age">26</span>
        </p>
        <p className="location">London</p>
        <StatusCard />
      </div>
    )
}
