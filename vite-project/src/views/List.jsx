import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { New } from '../components/new'
import '../styles/List.scss';


export default function List() {

    const { news, getNews } = useContext(GlobalContext)

    useEffect(() => {
        getNews()

    }, [])

    return (
        <div className="home">
            <div className='h1-box'>
            <h1>NEWS</h1>
            </div>
            <div className="news-list">
                {news.map((n, index) => (
                    <New key={index} data={n} />
                ))}
            </div>
        </div>
    )





}

