import React, { useState, useEffect } from 'react'

const Article = () => {
  const [pages, setPages] = useState([])

  useEffect(() => {
    LoadPages()
  }, [])

  async function LoadPages () {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/pages')
      if (!response.ok) {
        throw new Error('Veri çekme hatası')
      }
      const data = await response.json()
      setPages(data)
    } catch (error) {
      console.error('Veri çekerken hata:', error)
    }
  }
  return (
    <div>
      {pages.map(page => (
        <div key={page.id}>
          <h3>{page.pageTitle}</h3>
          <h3>{page.content}</h3>
          <h3>{page.articleTitleforPage}</h3>
        </div>
      ))}
    </div>
  )
}

export default Article
