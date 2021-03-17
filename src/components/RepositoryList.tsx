import {useState, useEffect} from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    //Tipo generico => useState<> , o estado pode ser do tipo de numero, string, array
    // o tipo generico define que o estado pode mudar e ser de qualquer tipo.
        const [repositories, setRepositories] = useState<Repository[]>([]);

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

