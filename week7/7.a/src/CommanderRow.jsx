import "./CommanderRow.css"
export function CommanderRow({commander, colors, theme, nickname, identity, image1, image2, doubleSided, hasBackground, odd}) {
    return(
        <tr style={{backgroundColor: doubleSided ? "orange" : undefined, color: hasBackground ? "green" : undefined}} className={odd ? "odd" : undefined}>
            <td className="commander-name">{commander}</td>
            <td>{colors}</td>
            <td>{theme}</td>
            <td>{nickname}</td>
            <td>{identity}</td>
            <td><img src={image1} alt={commander} /></td>
            <td><img src={image2} /></td>
        </tr>
    )
}