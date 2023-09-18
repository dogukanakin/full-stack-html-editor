import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap'

const BlogList = () => {
  const [pages, setPages] = useState([])
  const [authors, setAuthors] = useState({})

  useEffect(() => {
    LoadData()
  }, [])

  async function LoadData () {
    try {
      const [pagesResponse, articlesResponse] = await Promise.all([
        fetch('http://127.0.0.1:8000/api/pages'),
        fetch('http://127.0.0.1:8000/api/articles')
      ])

      if (!pagesResponse.ok || !articlesResponse.ok) {
        throw new Error('Veri çekme hatası')
      }

      const pagesData = await pagesResponse.json()
      const articlesData = await articlesResponse.json()

      const authorMap = {}
      articlesData.forEach(article => {
        authorMap[article.id] = article.articleTitle
      })
      setAuthors(authorMap)

      setPages(pagesData)
    } catch (error) {
      console.error('Veri çekerken hata:', error)
    }
  }

  return (
    <Table dark>
      <thead>
        <tr>
          <th>Title</th>
          <th>Content</th>
          <th>Article Author</th>
        </tr>
      </thead>
      <tbody>
        {pages.map(page => (
          <tr key={page.id}>
            <td>{page.pageTitle}</td>
            <td>{page.content.slice(0, 10)}</td>
            <td>{authors[page.articleTitleforPage]}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default BlogList
