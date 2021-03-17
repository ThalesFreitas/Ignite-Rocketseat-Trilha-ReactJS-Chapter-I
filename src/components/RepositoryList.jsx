import {useState, useEffect} from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

export function RepositoryList() {
        const [repositories, setRepositories] = useState([]);

        useEffect(() => {
            fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
        }, []);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1> 
            
            <ul>
                {/* faz um map na variavel de estado do useState buscando todos repositorios,
                    então ele retorna a resposta do repositorio para o componente filho RepositoryItem
                */}
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}                            
            </ul>
        </section>
    );
}

