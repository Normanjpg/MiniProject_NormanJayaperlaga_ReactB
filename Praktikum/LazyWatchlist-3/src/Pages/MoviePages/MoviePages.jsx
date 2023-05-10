import React from 'react'
import { Card, Col, Container, Row, Button } from "react-bootstrap";


const MoviePages = () => {
  return (
    <div className="main-list-bg pb-5" id="ListPreview">
    <Container>
      <h1 className="text-center text-dark mb-3 pt-2">List Movie</h1>
      <Row>
        <Col>
          <Card style={{ height: "35rem" }}>
            <Card.Img
              variant="top"
              src="http://image.tmdb.org/t/p/w500//1OemPTXG3gRPfjX7FNoIjOi05FU.jpg"
            />
            <Card.Body>
              <Card.Title>
                Ultraman Zero: The Revenge of Belial (2010)
              </Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ height: "35rem" }}>
            <Card.Img
              variant="top"
              src="http://image.tmdb.org/t/p/w500//q719jXXEzOoYaps6babgKnONONX.jpg"
            />
            <Card.Body>
              <Card.Title>Your Name (2016)</Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ height: "35rem" }}>
            <Card.Img
              variant="top"
              src="http://image.tmdb.org/t/p/w500//qgrk7r1fV4IjuoeiGS5HOhXNdLJ.jpg"
            />
            <Card.Body>
              <Card.Title>Weathering With You (2019)</Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ height: "35rem" }}>
            <Card.Img
              variant="top"
              src="http://image.tmdb.org/t/p/w500//vIeu8WysZrTSFb2uhPViKjX9EcC.jpg"
            />
            <Card.Body>
              <Card.Title>Suzume (2022)</Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ height: "35rem" }}>
            <Card.Img
              variant="top"
              src="http://image.tmdb.org/t/p/w500//2szdEK0Mr0RG0nWGFVTseNQHbnP.jpg"
            />
            <Card.Body>
              <Card.Title>
                Sword Art Online: The Movie-Ordinal Scale (2017)
              </Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h1 className="text-center text-dark mb-3 pt-4">List Series</h1>
      <Row>
        <Col>
          <Card style={{ height: "35rem" }}>
            <Card.Img
              variant="top"
              src="http://image.tmdb.org/t/p/w500//1OemPTXG3gRPfjX7FNoIjOi05FU.jpg"
            />
            <Card.Body>
              <Card.Title>
                Ultraman Zero: The Revenge of Belial (2010)
              </Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ height: "35rem" }}>
            <Card.Img
              variant="top"
              src="http://image.tmdb.org/t/p/w500//q719jXXEzOoYaps6babgKnONONX.jpg"
            />
            <Card.Body>
              <Card.Title>Your Name (2016)</Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ height: "35rem" }}>
            <Card.Img
              variant="top"
              src="http://image.tmdb.org/t/p/w500//qgrk7r1fV4IjuoeiGS5HOhXNdLJ.jpg"
            />
            <Card.Body>
              <Card.Title>Weathering With You (2019)</Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ height: "35rem" }}>
            <Card.Img
              variant="top"
              src="http://image.tmdb.org/t/p/w500//vIeu8WysZrTSFb2uhPViKjX9EcC.jpg"
            />
            <Card.Body>
              <Card.Title>Suzume (2022)</Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ height: "35rem" }}>
            <Card.Img
              variant="top"
              src="http://image.tmdb.org/t/p/w500//2szdEK0Mr0RG0nWGFVTseNQHbnP.jpg"
            />
            <Card.Body>
              <Card.Title>
                Sword Art Online: The Movie-Ordinal Scale (2017)
              </Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default MoviePages