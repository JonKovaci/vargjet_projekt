import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const SequenceForm = ({ sequence = {}, updateSequence }) => {
  const { 
    type = 'arithmetic', 
    firstTerm = 1, 
    difference = 1, 
    numTerms = 5 
  } = sequence;

  const generateSequence = () => {
    const newTerms = [firstTerm];
    for (let i = 1; i < numTerms; i++) {
      if (type === 'arithmetic') {
        newTerms.push(newTerms[i-1] + difference);
      } else {
        newTerms.push(newTerms[i-1] * difference);
      }
    }
    updateSequence({ terms: newTerms });
  };

  return (
    <Form>
      <Row>
        <Col md={3}>
          <Form.Group controlId="sequenceType">
            <Form.Label>Lloji i Vargut</Form.Label>
            <Form.Select 
              value={type}
              onChange={(e) => updateSequence({ type: e.target.value })}
            >
              <option value="arithmetic">Aritmetik</option>
              <option value="geometric">Gjeometrik</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="firstTerm">
            <Form.Label>Termi i Parë</Form.Label>
            <Form.Control 
              type="number" 
              value={firstTerm}
              onChange={(e) => updateSequence({ firstTerm: parseFloat(e.target.value) })}
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="difference">
            <Form.Label>
              {type === 'arithmetic' ? 'Diferenca' : 'Raporti'}
            </Form.Label>
            <Form.Control 
              type="number" 
              value={difference}
              onChange={(e) => updateSequence({ difference: parseFloat(e.target.value) })}
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="numTerms">
            <Form.Label>Numri i Termave</Form.Label>
            <Form.Control 
              type="number" 
              value={numTerms}
              onChange={(e) => updateSequence({ numTerms: parseInt(e.target.value) })}
              min="2"
              max="20"
            />
          </Form.Group>
        </Col>
      </Row>

      <div className="text-center mt-3">
        <Button variant="primary" onClick={generateSequence}>
          Gjenero Vargun
        </Button>
      </div>
    </Form>
  );
};

export default SequenceForm;