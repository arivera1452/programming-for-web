import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";
import './DeckDetails.css';

export function DeckDetail({ data }) {
    const { id } = useParams();
    console.log("params", id)
    const selectedDeck = data.find((deck) => deck.id === id);
    console.log("deck", selectedDeck)
    return (
        <>
            <Link className="detail-link" to="/">Return to Commander Collection</Link>
            <div className="deck-details">
                <h1 className="detail-commander">{selectedDeck.commander}</h1>
                <img className="detail-img" src={selectedDeck.image} alt={selectedDeck.commander} />
                <p>
                    <h3>Theme:</h3> {selectedDeck.theme}
                </p>
                <p>
                    <h3>Nickname:</h3> {selectedDeck.nickname}
                </p>
                <p>
                    <h3>Identity:</h3> {selectedDeck.identity}
                </p>
                <p>
                    <h3>Play style:</h3> {selectedDeck.playstyle}
                </p>
                {selectedDeck.colors.map((color) => {
                    return (
                        <div key={color} className={clsx(["colorBlock", color])}>{color}</div>
                    )
            
                })}
            </div>
        </>

    )
}
DeckDetail.propTypes = {
    data: PropTypes.array
};