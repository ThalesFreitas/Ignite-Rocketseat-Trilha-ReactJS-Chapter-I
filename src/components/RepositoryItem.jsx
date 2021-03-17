export function RepositoryItem(props) {
    return (
        <li>
                    {/* Recebe o dados do repositorio pai */}
                    <strong>{props.repository.name}</strong>
                    <p>{props.repository.description}</p>

                    <a href={props.repository.html_url}>
                        Acessar repositório
                    </a>
                </li>
    );
}

