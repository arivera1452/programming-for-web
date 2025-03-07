export default function Camelid({name, image, fact}) {
    return(
        <article>
            <h1>{name}</h1>
            <img src={image} alt={name}/>
            <p>{fact}</p>
        </article>
    );
}
