import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./ItemCard.css";
import clsx from "clsx";

export default function ItemCard({
    commander,
    colors,
    theme,
    nickname,
    identity,
    image,
    id
}) {
    return(
        <div className="commanderCard">
            <div className="cardImg">
                <img src={image} alt={commander} />
            </div>
            <div className="cardTitle">
                <Link className="detail-link" to={`${id}`}><strong>{commander}</strong></Link>
            </div>
            <div>
                <p><strong>Theme: </strong>{theme}</p>
                <p><strong>Nickname: </strong>{nickname}</p>
                <p><strong>Color Identity: </strong>{identity}</p>
            </div>
            {/* removed duplicate and delet buttons since the added decks dont create a detail page */}
            {colors.map((color) => {
                return <div key={color} className={clsx(["stripe", color])} />
            })}
        </div>
    )
}
ItemCard.PropTypes = {
    commander: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string),
    theme: PropTypes.string,
    nickname: PropTypes.string,
    identity:PropTypes.string,
    playstyle:PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.string
}