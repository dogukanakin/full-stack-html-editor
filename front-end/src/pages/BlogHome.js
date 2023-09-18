import { Col, Container, Row } from 'reactstrap'
import BlogList from './BlogList'
import ArticleList from './ArticleList'

const BlogHome = () => {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Row>
        <Col>
          <BlogList />
        </Col>
      </Row>
    </Container>
  )
}

export default BlogHome
