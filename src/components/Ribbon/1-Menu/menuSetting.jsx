import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Splitter, SplitterPanel } from "primereact/splitter";

export default function MenuSetting() {

    const [products, setProducts] = useState([
        { code: "a", name: "a", category: "a", quantity: "a" }
    ]);

    return (
        <div>
            <Splitter>
                <SplitterPanel style={{ minWidth: "200px" }}>
                    <div>
                        <DataTable value={products} size='small'>
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>
                    </div>
                    <div>
                        <span>aaaaaaaa</span>
                    </div>
                </SplitterPanel>
                <SplitterPanel style={{ minWidth: "300px" }}>
                    <span>aaaa</span>
                </SplitterPanel>
            </Splitter>

        </div>
    );
}
