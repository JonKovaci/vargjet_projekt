import React, { useState } from 'react';
import { Form, Button, Table, Alert } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';

const SeriesCalculator = () => {
  const [generalTerm, setGeneralTerm] = useState('n^2');
  const [terms, setTerms] = useState([]);
  const [sum, setSum] = useState(0);
  const [numTerms, setNumTerms] = useState(5);
  const [error, setError] = useState('');

  const calculateSeries = () => {
    try {
      const newTerms = [];
      let currentSum = 0;
      
      for (let n = 1; n <= numTerms; n++) {
        const term = eval(generalTerm.replace(/n/g, n));
        newTerms.push(term);
        currentSum += term;
      }
      
      setTerms(newTerms);
      setSum(currentSum);
      setError('');
    } catch (err) {
      setError('Formula është e pasaktë');
    }
  };

  const chartData = {
    labels: terms.map((_, i) => i + 1),
    datasets: [{
      label: 'Vlera e termave',
      data: terms,
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    }]
  };

  return (
    <div className="mt-4">
      <h3>Llogaritës i Serive</h3>
      <Form>
        <Form.Group>
          <Form.Label>Formula e termit të përgjithshëm (aₙ)</Form.Label>
          <Form.Control
            type="text"
            value={generalTerm}
            onChange={(e) => setGeneralTerm(e.target.value)}
            placeholder="P.sh. n^2, 2*n+1, 1/n"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Numri i termave</Form.Label>
          <Form.Control
            type="number"
            value={numTerms}
            onChange={(e) => setNumTerms(parseInt(e.target.value))}
            min="1"
            max="50"
          />
        </Form.Group>

        <Button onClick={calculateSeries} className="mt-2">
          Llogarit
        </Button>
      </Form>

      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}

      {terms.length > 0 && (
        <div className="mt-4">
          <h5>Rezultatet:</h5>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Termi (n)</th>
                <th>Vlera (aₙ)</th>
                <th>Shuma e pjesshme</th>
              </tr>
            </thead>
            <tbody>
              {terms.map((term, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{term}</td>
                  <td>{terms.slice(0, i + 1).reduce((a, b) => a + b, 0)}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="mt-3">
            <h5>Shuma totale: {sum}</h5>
            <div style={{ height: '300px' }}>
              <Line data={chartData} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeriesCalculator;