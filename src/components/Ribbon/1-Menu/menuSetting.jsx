import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Splitter, SplitterPanel } from "primereact/splitter";
import CustomInputText from "../../globalComponents/main/inputCom";
import { Accordion, AccordionTab } from "primereact/accordion";
import ribbonSlice from "../../../redux/ribbon/ribbonSlice";
import { fetchMenuSetting } from "../../../redux/ribbon/ribbonSlice";
import projectServices from "../../services/project.services";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Dialog } from "primereact/dialog";
import "../../Ribbon/ribbon.css";

export default function MenuSetting() {
  const toast = useRef(null);

  const dispatch = useDispatch();

  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedRowTable, setSelectedRowTable] = useState(null);
  const [selectedRowTab, setSelectedRowTab] = useState(null);
  const [selectedRowGroup, setSelectedRowGroup] = useState(null);
  const [selectedRowItem, setSelectedRowItem] = useState(null);
  const [showAccardeon, setShowAccardeon] = useState(false);
  const [accordionDisabled1, setAccordionDisabled1] = useState(true);
  const [accordionDisabled2, setAccordionDisabled2] = useState(true);
  const [accordionDisabled3, setAccordionDisabled3] = useState(true);
  const [activeIndex, setActiveIndex] = useState([]);
  const [dataMenuTab, setDataMenuTab] = useState([]);
  const [dataMenuTabRes, setDataMenuTabRes] = useState([]);
  const [dataMenuGroup, setDataMenuGroup] = useState([]);
  const [dataMenuGroupRes, setDataMenuGroupRes] = useState([]);
  const [dataMenuItem, setDataMenuItem] = useState([]);
  const [dataMenuItemRes, setDataMenuItemRes] = useState([]);
  const [disabledEdit, setDisabledEdit] = useState(true);
  const [disabledDelete, setDisabledDelete] = useState(true);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const [insertMenuRibbon, setInsertMenuRibbon] = useState({
    ID: 0,
    LastModified: null,
    ModifiedById: null,
    Name: "",
    Description: "",
    IsVisible: true,
  });

  const dataMenuSetting = useSelector(
    (state) => state.dataMenuSetting.dataMenuSetting
  );

  const handleRowClick = (event) => {
    console.log("main", event.data);
    // setSelectedRow(event.data);
    setSelectedRowTable(event.data);
    setDisabledEdit(false);
    setDisabledDelete(false);
  };

  const handleRowClickTab = (event) => {
    setSelectedRowTab(event.data);
  };

  const handleRowClickGroup = (event) => {
    setSelectedRowGroup(event.data);
  };

  const handleRowClickItem = (event) => {
    setSelectedRowItem(event.data);
  };

  const handleTab0 = (event) => {
    setSelectedRow(event.data);
    setShowAccardeon(false);
    setAccordionDisabled1(false);
    setAccordionDisabled2(false);
    setAccordionDisabled3(false);
    setActiveIndex([]);
    setTimeout(() => {
      setShowAccardeon(true);
      // setAccordionDisabled1(true);
      setAccordionDisabled2(true);
      setAccordionDisabled3(true);
      setDataMenuTabRes([]);
      setDataMenuGroupRes([]);
      setDataMenuItemRes([]);
    }, 50);
    setActiveIndex([0]);
  };

  const handleTab1 = (event) => {
    console.log("ffffff", event);
    setDataMenuGroup(event.data);
    setAccordionDisabled2(false);
    activeIndex.push(1);
  };

  const handleTab2 = (event) => {
    setDataMenuItem(event.data);
    setAccordionDisabled3(false);
    activeIndex.push(2);
  };

  useEffect(() => {
    dispatch(fetchMenuSetting());
  }, []);

  useEffect(() => {
    if (selectedRow?.ID) {
      projectServices
        .getMenuTabByMenuId({ id: selectedRow?.ID })
        .then((res) => {
          console.log("AAAAAAAAAAAA", res.data);
          setDataMenuTabRes(res.data);
        })
        .catch(() => {});
    }
  }, [selectedRow, dataMenuTab]);

  useEffect(() => {
    if (dataMenuGroup?.ID) {
      projectServices
        .getMenuGroupByMenuTabId({ id: dataMenuGroup?.ID })
        .then((res) => {
          console.log("BBBBBBBBBBB", res.data);
          setDataMenuGroupRes(res.data);
        })
        .catch(() => {});
    }
  }, [dataMenuGroup]);

  useEffect(() => {
    if (dataMenuItem?.ID) {
      projectServices
        .getMenuItemByMenuGroupID({ id: dataMenuItem?.ID })
        .then((res) => {
          console.log("CCCCCCCCC", res.data);
          setDataMenuItemRes(res.data);
        })
        .catch(() => {});
    }
  }, [dataMenuItem]);

  useEffect(() => {
    console.log("ac", activeIndex);
  }, [activeIndex]);

  const handleRowSelectionChange = (event) => {
    // setSelectedRow(event.data);
    // setAccordionDisabled2(true);
    // setAccordionDisabled3(true);
  };

  const handleChange = (fieldName, value) => {
    setInsertMenuRibbon((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    setInsertMenuRibbon((prevFormData) => ({
      ...prevFormData,
      Name: selectedRowTable?.Name,
      Description: selectedRowTable?.Description,
    }));
  }, [selectedRowTable]);

  const insertMenu = (e) => {
    console.log("insert");
    projectServices
      .insertMenu(insertMenuRibbon)
      .then((res) => {
        dispatch(fetchMenuSetting());
        // dataMenuSetting = [...dataMenuSetting, res.data];
        insertMenuRibbon.Name = "";
        insertMenuRibbon.Description = "";
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Item Added successfully",
        });
      })
      .catch((err) => {});
  };

  const cancelDelete = () => {
    setSelectedRowTable(null);
    setShowDeleteConfirmation(false);
  };

  const handleDelete = () => {
    setSelectedRowTable(selectedRowTable);
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    projectServices
      .deleteMenu({ id: selectedRowTable?.ID })
      .then((res) => {
        dispatch(fetchMenuSetting());
        // dataMenuSetting = [...dataMenuSetting, res.data];
        insertMenuRibbon.Name = "";
        insertMenuRibbon.Description = "";
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Item deleted successfully",
        });
        setShowDeleteConfirmation(false);
      })
      .catch((err) => {});
  };
  return (
    <>
      <Toast ref={toast} position="top-right" />
      <Splitter className="custom-splitter">
        <SplitterPanel style={{ minwidth: "100px", overflow: "hidden" }}>
          <div
            className="card"
            style={{
              height: "95vh",
              overflow: "hidden",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin: "10px",
              }}
            >
              <Button
                rounded
                className="w-2rem h-2rem p-0"
                style={{
                  marginRight: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                severity="success"
                onClick={insertMenu}
              >
                <i className="pi pi-plus"></i>
              </Button>
              <Button
                rounded
                className="w-2rem h-2rem p-0"
                style={{
                  marginRight: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                severity="warning"
                disabled={disabledEdit}
              >
                <i className="pi pi-file-edit"></i>
              </Button>
              <Button
                rounded
                className="w-2rem h-2rem p-0"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                severity="danger"
                disabled={disabledDelete}
                onClick={() => {
                  handleDelete();
                }}
              >
                <i className="pi pi-trash"></i>
              </Button>
            </div>

            <Dialog
              visible={showDeleteConfirmation}
              onHide={cancelDelete}
              header="Confirmation"
              icon="pi pi-exclamation-triangle"
              position="center"
              footer={
                <div>
                  <Button
                    label="No"
                    icon="pi pi-times"
                    className="p-button-text"
                    onClick={cancelDelete}
                  />
                  <Button
                    label="Yes"
                    icon="pi pi-check"
                    className="p-button-text"
                    onClick={confirmDelete}
                  />
                </div>
              }
            >
              <div>Do you sure want to delete?</div>
            </Dialog>

            <div style={{ marginTop: "10px" }}>
              <DataTable
                value={dataMenuSetting}
                size="small"
                showGridlines
                selectionMode="single"
                selection={selectedRowTable}
                onSelectionChange={handleRowSelectionChange}
                onRowClick={(event) => handleRowClick(event)}
                onRowDoubleClick={handleTab0}
                className="custom-datatable"
                rowClassName={(rowData) =>
                  selectedRowTable && selectedRowTable.ID === rowData.ID
                    ? "selected-row"
                    : ""
                }
              >
                <Column field="Name" header="Name"></Column>
                <Column field="Description" header="Description"></Column>
              </DataTable>
            </div>
            <div style={{ display: "flex", marginTop: "40px" }}>
              <div style={{ margin: "10px", width: "50%" }}>
                <CustomInputText
                  value={insertMenuRibbon.Name}
                  label="Name"
                  onChange={(e) => handleChange("Name", e.target.value)}
                />
              </div>
              <div style={{ margin: "10px", width: "50%" }}>
                <CustomInputText
                  value={insertMenuRibbon.Description}
                  label="Description"
                  onChange={(e) => handleChange("Description", e.target.value)}
                />
              </div>
            </div>
          </div>
        </SplitterPanel>
        <SplitterPanel
          style={{
            overflowY: "auto",
            whiteSpace: "nowrap",
            height: "100vh",
            maxHeight: "calc(100vh - 10rem)",
            minWidth: "300px",
          }}
        >
          {showAccardeon && (
            <Accordion
              onChange={(e) => console.log("Ddddddd", e)}
              multiple
              activeIndex={activeIndex}
            >
              <AccordionTab header="Header I" disabled={accordionDisabled1}>
                <DataTable
                  value={dataMenuTabRes}
                  size="small"
                  showGridlines
                  selectionMode="single"
                  selection={selectedRowTab}
                  onSelectionChange={(e) => {
                    console.log("eeeeee", e.value);
                    setSelectedRowTab(e.value);
                    dispatch(
                      ribbonSlice.actions.setSelectedRowDataRibbon(e.value)
                    );
                  }}
                  onRowClick={(event) => handleRowClickTab(event)}
                  onRowDoubleClick={handleTab1}
                  className="custom-datatable"
                  rowClassName={(rowData) =>
                    selectedRowTab && selectedRowTab.ID === rowData.ID
                      ? "selected-row"
                      : ""
                  }
                  scrollable
                  scrollHeight="200px"
                >
                  <Column field="Name" header="Name"></Column>
                  <Column field="Description" header="Description"></Column>
                  <Column field="Order" header="Order"></Column>
                </DataTable>
              </AccordionTab>
              <AccordionTab header="Header II" disabled={accordionDisabled2}>
                <DataTable
                  value={dataMenuGroupRes}
                  size="small"
                  showGridlines
                  selectionMode="single"
                  selection={selectedRowGroup}
                  onSelectionChange={(e) => {
                    console.log("eeeeee", e.value);
                    setSelectedRowGroup(e.value);
                    dispatch(
                      ribbonSlice.actions.setSelectedRowDataRibbon(e.value)
                    );
                  }}
                  onRowClick={(event) => handleRowClickGroup(event)}
                  onRowDoubleClick={handleTab2}
                  className="custom-datatable"
                  rowClassName={(rowData) =>
                    selectedRowGroup && selectedRowGroup.ID === rowData.ID
                      ? "selected-row"
                      : ""
                  }
                  scrollable
                  scrollHeight="200px"
                >
                  <Column field="Name" header="Name"></Column>
                  <Column field="Description" header="Description"></Column>
                  <Column field="Order" header="Order"></Column>
                </DataTable>
              </AccordionTab>
              <AccordionTab header="Header III" disabled={accordionDisabled3}>
                <DataTable
                  value={dataMenuItemRes}
                  size="small"
                  showGridlines
                  selectionMode="single"
                  selection={selectedRowItem}
                  onSelectionChange={(e) => {
                    console.log("eeeeee", e.value);
                    setSelectedRowItem(e.value);
                    dispatch(
                      ribbonSlice.actions.setSelectedRowDataRibbon(e.value)
                    );
                  }}
                  onRowClick={(event) => handleRowClickItem(event)}
                  className="custom-datatable"
                  rowClassName={(rowData) =>
                    selectedRowItem && selectedRowItem.ID === rowData.ID
                      ? "selected-row"
                      : ""
                  }
                  scrollable
                  scrollHeight="200px"
                >
                  <Column field="Name" header="Name"></Column>
                  <Column field="category" header="Category"></Column>
                  <Column field="quantity" header="Quantity"></Column>
                </DataTable>
              </AccordionTab>
            </Accordion>
          )}
        </SplitterPanel>
      </Splitter>
    </>
  );
}
