export default function Tabla({data}) {
    return(
        <>
            <h1>Información de los clientes</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <td>Clave</td>
                        <td>Nombre</td>
                        <td>Telefono</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((elementData) => (
                            <tr>
                                <td>{elementData.id}</td>
                                <td>{elementData.nombre}</td>
                                <td>{elementData.telefono}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}