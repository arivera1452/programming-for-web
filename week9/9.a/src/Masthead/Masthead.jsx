import mastheadImg from "../assets/masthead.jpg";
import "./Masthead.css"
export default function Masthead() {
    return(
        <div className="masthead">
            <img src={mastheadImg} alt="Andrew's Commander Decks" />
            <h1>Andrew&apos;s Expanding Commander Collection</h1>
        </div>
    )
}