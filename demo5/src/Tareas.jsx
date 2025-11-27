export default function Tareas ( { data }) {
    return (
        <>
            <h3>Lista de tareas</h3>

            <table>
                <thead>
                    <tr>
                        <th>Tarea</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item => (
                            <tr>
                                <td>{ item }</td>
                            </tr>
                        )))
                    }
                </tbody>
            </table>
        </>
    )
}