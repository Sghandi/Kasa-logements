import React from 'react'
import './NotFound.scss'

export default function Home() {
    return (
        <div className='error-message'>
            <h1>404</h1>
            <h2>Oups ! La page que vous demander n'existe pas</h2>
            <a href="/">Retourner sur la page d'accueil</a>
        </div>

    )
}