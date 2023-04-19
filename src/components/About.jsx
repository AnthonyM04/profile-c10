import { Button, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";

export default function About () {
  const [imgUrl, setImgUrl] = useState('https://picsum.photos/300/300?random=2');

  return(
    <main>
      <Container>
        <Row className="text-center">
          <Col sm={12} md={6}>
            <img src={imgUrl}
             className="rounded-circle"
             alt="Profile" />
          </Col>

          <Col>
            <br/>
             <Button onClick={() => setImgUrl('https://picsum.photos/100/100?random=1')}>100x100</Button>
             <Button onClick={() => setImgUrl('https://picsum.photos/300/300?random=2')}>300x300</Button>
             <Button onClick={() => setImgUrl('https://picsum.photos/500/500?random=3')}>500x500</Button>
             <br/>
            <h1 className="mt-3">Your Name</h1>
            <p>If you enjoy using big fonts, you're not alone! There are many reasons why someone might prefer larger text when reading or writing. For example, larger fonts can make text easier to read, especially for people with visual impairments or those who struggle with reading small text. Additionally, big fonts can help draw attention to important information, making it easier to spot and understand.</p>
          </Col>
        </Row>
      </Container>
    </main>
  );
}