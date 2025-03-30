import PropTypes from "prop-types";
import "./ItemCard.css";
import clsx from "clsx";
export default function ItemCard({
    commander,
    colors,
    theme,
    nickname,
    identity,
    image,
    id,
    deleteFn,
    duplicateFn
}) {
    return(
        <div className="commanderCard">
            <div className="cardImg">
                <img src={image} alt={commander} />
            </div>
            <div className="cardTitle"><strong>{commander}</strong></div>
            <div>
                <p><strong>Theme: </strong>{theme}</p>
                <p><strong>Nickname: </strong>{nickname}</p>
                <p><strong>Color Identity: </strong>{identity}</p>
            </div>
            <div className="action">
                <button onClick={() => {
                    deleteFn(id)
                }}>Delete</button>
                <button onClick={()=> {
                    duplicateFn(id)
                }}>Duplicate</button>
            </div>
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
    image: PropTypes.string,
    id: PropTypes.string,
    duplicateFn: PropTypes.func,
    deleteFn: PropTypes.func
}