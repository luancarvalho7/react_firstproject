import './style.css'

export function Card({name, time}) {

    return (
    <div className="cardwName">
    <h1 className="Name">{name}</h1>
    <code className="Hour">{time}</code>
    </div>
    )
}

