import React from 'react'
import '../styles/Home.scss';

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the News App</h1>
      <p>
        Stay updated with the latest headlines from around the world.
        This app fetches top stories using the New York Times API.
      </p>
      <p>
        Navigate to the <strong>List</strong> section to explore the news articles.
      </p>
    </div>
  )
}
