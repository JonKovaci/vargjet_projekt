import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const ExplanationPanel = ({ sequence }) => {
  const getFormula = () => {
    if (sequence.type === 'arithmetic') {
      return {
        generalTerm: `aₙ = a₁ + (n-1)d`,
        sumFormula: `Sₙ = n/2 * (2a₁ + (n-1)d)`
      };
    } else {
      return {
        generalTerm: `aₙ = a₁ * r^(n-1)`,
        sumFormula: `Sₙ = a₁ * (1 - r^n)/(1 - r) (për r ≠ 1)`
      };
    }
  };

  const formulas = getFormula();

  return (
    <Card className="mt-4">
      <Card.Header>Shpjegime Matematikore</Card.Header>
      <Card.Body>
        <Card.Title>
          Varg {sequence.type === 'arithmetic' ? 'Aritmetik' : 'Gjeometrik'}
        </Card.Title>
        
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Termi i përgjithshëm:</strong> {formulas.generalTerm}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Formula e shumës:</strong> {formulas.sumFormula}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Shuma e {sequence.numTerms} termave të parë:</strong> {sequence.terms.reduce((sum, term) => sum + term, 0)}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default ExplanationPanel;