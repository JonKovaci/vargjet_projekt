import React from 'react';
import { Table } from 'react-bootstrap';

const SequenceTable = ({ terms }) => {
  return (
    <>
      <h3>Termat e Vargut</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Termi</th>
            <th>Vlera</th>
            <th>Shuma deri këtu</th>
          </tr>
        </thead>
        <tbody>
          {terms.map((term, index) => (
            <tr key={index}>
              <td>a<sub>{index + 1}</sub></td>
              <td>{term}</td>
              <td>{terms.slice(0, index + 1).reduce((sum, t) => sum + t, 0)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default SequenceTable;