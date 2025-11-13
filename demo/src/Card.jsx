import {Action} from './Action'

export default function Card({titulo, descripcion, imagen}) {
    return (
        <>
            <div className="container mt-4 d-flex col-2">
                <div className="card" style={{'width': '18rem'}}>
                    <img src={imagen} className="card-img-top" alt={descripcion} />
                    <div className="card-body">
                        <h5 className="card-title">{titulo}</h5>
                        <p className="card-text">{descripcion}</p>
                        <Action />
                    </div>
                </div>
            </div>
        </>
    )
}