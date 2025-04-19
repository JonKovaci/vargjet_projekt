import React, { useState } from 'react';
import { Container, Tab, Tabs, Alert } from 'react-bootstrap';
import SequenceForm from './components/SequenceForm';
import SequenceTable from './components/SequenceTable';
import SequenceChart from './components/SequenceChart';
import ExplanationPanel from './components/ExplanationPanel';
import SeriesCalculator from './components/SeriesCalculator';
import ProblemSolver from './components/ProblemSolver';
import SequenceGame from './components/SequenceGame';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('sequences');
  const [sequence, setSequence] = useState({
    type: 'arithmetic',
    firstTerm: 1,
    difference: 1,
    terms: [],
    numTerms: 5
  });
  const [error, setError] = useState(null);

  const updateSequence = (newValues) => {
    try {
      setSequence(prev => ({ ...prev, ...newValues }));
      setError(null);
    } catch (err) {
      setError('Gabim në përditësimin e vargut');
      console.error(err);
    }
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Studio i Vargjeve Numerike</h1>
      
      {error && <Alert variant="danger" className="mb-3">{error}</Alert>}

      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-3"
      >
        <Tab eventKey="sequences" title="Vargjet Bazë">
          <div className="mt-3">
            <SequenceForm sequence={sequence} updateSequence={updateSequence} />
            
            {sequence.terms.length > 0 && (
              <div className="mt-4">
                <div className="row">
                  <div className="col-md-6">
                    <SequenceTable terms={sequence.terms} />
                  </div>
                  <div className="col-md-6">
                    <SequenceChart terms={sequence.terms} />
                  </div>
                </div>
                <ExplanationPanel sequence={sequence} />
              </div>
            )}
          </div>
        </Tab>

        <Tab eventKey="series" title="Llogaritës i Serive">
          <SeriesCalculator />
        </Tab>

        <Tab eventKey="problems" title="Probleme">
          <ProblemSolver />
        </Tab>

        <Tab eventKey="game" title="Loja">
          <SequenceGame />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default App;