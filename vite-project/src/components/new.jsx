
import '../styles/New.scss'

export const New = ({ data }) => {

    return (

        <div className="news-card">
            <h2>{data.title}</h2>
            <p>{data.abstract}</p>
            <a href={data.url} target="_blank" rel="noopener noreferrer">
                Leer más →
            </a>
        </div>

    )
}
