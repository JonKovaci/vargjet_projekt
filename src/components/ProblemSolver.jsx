import React, { useState } from 'react';
import { Accordion, Card, Button, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProblemSolver = () => {
  const problems = [
    {
      id: 1,
      title: "Vargu aritmetik",
      description: "Gjej termin e 10-të të vargut ku a₁ = 3 dhe diferenca d = 5",
      solution: "aₙ = a₁ + (n-1)d ⇒ a₁₀ = 3 + (10-1)*5 = 48",
      steps: [
        "Identifikoni vargun si aritmetik",
        "Përdorni formulën e termit të përgjithshëm: aₙ = a₁ + (n-1)d",
        "Zëvendësoni vlerat: a₁ = 3, d = 5, n = 10",
        "Llogaritni: 3 + (10-1)*5 = 3 + 45 = 48"
      ]
    },
    {
      id: 2,
      title: "Vargu gjeometrik",
      description: "Gjej termin e 5-të të vargut ku a₁ = 2 dhe raporti r = 3",
      solution: "aₙ = a₁ * r^(n-1) ⇒ a₅ = 2 * 3^(5-1) = 162",
      steps: [
        "Identifikoni vargun si gjeometrik",
        "Përdorni formulën e termit të përgjithshëm: aₙ = a₁ * r^(n-1)",
        "Zëvendësoni vlerat: a₁ = 2, r = 3, n = 5",
        "Llogaritni: 2 * 3^(4) = 2 * 81 = 162"
      ]
    },
    {
      id: 3,
      title: "Shuma e vargut aritmetik",
      description: "Gjej shumën e 15 termave të parë të vargut aritmetik ku a₁ = 4 dhe d = 3",
      solution: "Sₙ = n/2 * (2a₁ + (n-1)d) ⇒ S₁₅ = 15/2 * (8 + 42) = 375",
      steps: [
        "Identifikoni vargun si aritmetik",
        "Përdorni formulën e shumës: Sₙ = n/2 * (2a₁ + (n-1)d)",
        "Zëvendësoni vlerat: a₁ = 4, d = 3, n = 15",
        "Llogaritni: 15/2 * (2*4 + (15-1)*3) = 7.5 * (8 + 42) = 7.5 * 50 = 375"
      ]
    }
  ];

  const [activeSteps, setActiveSteps] = useState({});

  const toggleSteps = (problemId) => {
    setActiveSteps(prev => ({
      ...prev,
      [problemId]: !prev[problemId]
    }));
  };

  return (
    <div className="mt-4">
      <h3 className="text-center mb-4">Zgjidhës i Problemeve të Vargjeve Numerike</h3>
      
      <Accordion defaultActiveKey="0">
        {problems.map((problem, index) => (
          <Accordion.Item key={problem.id} eventKey={index.toString()} className="mb-3 shadow-sm">
            <Accordion.Header>
              <h5 className="mb-0">{problem.title}</h5>
            </Accordion.Header>
            
            <Accordion.Body>
              <Card.Text className="lead">{problem.description}</Card.Text>
              
              <div className="bg-light p-3 mb-3 rounded">
                <h5>Zgjidhja:</h5>
                <p className="font-weight-bold">{problem.solution}</p>
              </div>

              <Button 
                variant="outline-primary"
                onClick={() => toggleSteps(problem.id)}
                className="mb-3"
              >
                {activeSteps[problem.id] ? 'Fshih hapat' : 'Shiko hapat e detajuar'}
              </Button>

              {activeSteps[problem.id] && (
                <ListGroup>
                  {problem.steps.map((step, stepIndex) => (
                    <ListGroup.Item key={stepIndex}>
                      <span className="text-primary font-weight-bold">Hapi {stepIndex + 1}:</span> {step}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default ProblemSolver;