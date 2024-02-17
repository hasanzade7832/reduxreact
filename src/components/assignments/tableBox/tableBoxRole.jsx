import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "../styles/tableStyles.css"

export default function TableBoxRole() {
  const dataTableValues = [
    { id: 1, Name: 'John Doe' },
    { id: 2, Name: 'Jane Smith' },
    { id: 3, Name: 'Mary Johnson'},
    { id: 4, Name: 'Michael Clark'}
  ];

  return (
    <div className="table-container">
      <h2>Employee Information</h2>
      <DataTable value={dataTableValues}>
        <Column field="Name" header="Name"></Column>
      </DataTable>
    </div>
  );
}
