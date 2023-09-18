import React, { useState, useEffect } from 'react'

const Article = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    LoadArticles()
  }, [])

  async function LoadArticles () {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/articles')
      if (!response.ok) {
        throw new Error('Veri çekme hatası')
      }
      const data = await response.json()
      setArticles(data)
    } catch (error) {
      console.error('Veri çekerken hata:', error)
    }
  }
  return (
    <div>
      {articles.map(article => (
        <div key={article.id}>
          <h3>{article.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default Article
