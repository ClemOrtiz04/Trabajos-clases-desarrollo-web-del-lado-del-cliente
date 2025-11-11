export default function Materia({ materia, maestro, horario }) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{ materia }</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{ maestro }</h6>
                <p className="card-text">{ horario } </p>
            </div>
        </div>
    )
}