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
import CustomRadioButtons from "../../globalComponents/main/RadioButtonComp";

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
  const [disabledEditTab, setDisabledEditTab] = useState(true);
  const [disabledEditGroup, setDisabledEditGroup] = useState(true);
  const [disabledEditItem, setDisabledEditItem] = useState(true);
  const [disabledDelete, setDisabledDelete] = useState(true);
  const [disabledDeleteTab, setDisabledDeleteTab] = useState(true);
  const [disabledDeleteGroup, setDisabledDeleteGroup] = useState(true);
  const [disabledDeleteItem, setDisabledDeleteItem] = useState(true);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showDeleteConfirmationTab, setShowDeleteConfirmationTab] =
    useState(false);
  const [showDeleteConfirmationGroup, setShowDeleteConfirmationGroup] =
    useState(false);
    const [showDeleteConfirmationItem, setShowDeleteConfirmationItem] =
    useState(false);
  
  const [ingredient, setIngredient] = useState(1);


  const [insertMenuRibbon, setInsertMenuRibbon] = useState({
    ID: 0,
    LastModified: null,
    ModifiedById: null,
    Name: "",
    Description: "",
    IsVisible: true,
  });

  const [rightRibbon, setRightRibbon] = useState({
    ID: 0,
    LastModified: null,
    ModifiedById: null,
    Name: "",
    Order: 0,
    Description: "",
    IsVisible: true,
    nMenuId: 0,
  });

  const [dataGroupRibbon, setDataGroupRibbon] = useState({
    ID: 0,
    LastModified: "2022-08-21T14:06:09.421Z",
    ModifiedById: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    Name: "",
    Order: 0,
    Description: "",
    IsVisible: true,
    nMenuTabId: 0,
  });

  const [dataItemRibbon, setDataItemRibbon] = useState({
    ID: 0,
    LastModified: null,
    ModifiedById: null,
    Name: "",
    Description: "",
    Order: 0,
    Command: "",
    CommandWeb: "",
    CommandMobile: "",
    HelpText: "",
    KeyTip: "",
    Size: 0,
    IsVisible: true,
    nMenuGroupId: 0,
    IconImageId: null,
  })

  rightRibbon.nMenuId = selectedRowTable?.ID;
  dataGroupRibbon.nMenuTabId = selectedRowTab?.ID;
  dataItemRibbon.nMenuGroupId = selectedRowGroup?.ID;

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
    setDisabledEditTab(false);
    setDisabledDeleteTab(false);
  };

  const handleRowClickGroup = (event) => {
    setSelectedRowGroup(event.data);
    setDisabledEditGroup(false);
    setDisabledDeleteGroup(false);
  };

  const handleRowClickItem = (event) => {
    setSelectedRowItem(event.data);
    setDisabledEditItem(false);
    setDisabledDeleteItem(false);
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
      setAccordionDisabled2(true);
      setAccordionDisabled3(true);
      setSelectedRowTab();
      setDisabledEditTab(true);
      setDisabledDeleteTab(true);
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
        .catch(() => { });
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
        .catch(() => { });
    }
  }, [dataMenuGroup]);

  useEffect(() => {
    if (dataMenuItem?.ID) {
      projectServices
        .getMenuItemByMenuGroupID({ id: dataMenuItem?.ID })
        .then((res) => {
          setDataMenuItemRes(res.data);
        })
        .catch(() => { });
    }
  }, [dataMenuItem]);

  useEffect(() => {
    console.log("ac", activeIndex);
  }, [activeIndex]);

  const handleRowSelectionChange = (event) => { };

  const handleChange = (fieldName, value) => {
    setInsertMenuRibbon((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const handleChangeRightRibbon = (fieldName, value) => {
    setRightRibbon((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const handleChangeGroupRibbon = (fieldName, value) => {
    setDataGroupRibbon((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const handleChangeItemRibbon = (fieldName, value) => {
    console.log("aaaaaaaaa",fieldName,value);
    setDataItemRibbon((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  ////////////////////////////Main Table//////////////////////////////////////////////////////

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

        setDisabledEdit(true);
        setDisabledDelete(true);

        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Item Added successfully",
        });
      })
      .catch((err) => { });
  };

  const handleEdit = () => {
    const updatedSelectedRow = {
      ...selectedRowTable,
      Name: insertMenuRibbon.Name,
      Description: insertMenuRibbon.Description,
    };

    projectServices
      .updateMenu(updatedSelectedRow)
      .then((res) => {
        dispatch(fetchMenuSetting());

        insertMenuRibbon.Name = "";
        insertMenuRibbon.Description = "";
        insertMenuRibbon.Order = 0

        setDisabledEdit(true);
        setDisabledDelete(true);

        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Item updated successfully",
        });
      })
      .catch((err) => { });
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

        insertMenuRibbon.Name = "";
        insertMenuRibbon.Description = "";
        setDisabledEdit(true);
        setDisabledDelete(true);
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Item deleted successfully",
        });
        setShowDeleteConfirmation(false);
      })
      .catch((err) => { });
  };

  /////////////////////////Tab TABLE///////////////////////////////////////////////////////////////////////

  useEffect(() => {
    setRightRibbon((prevFormData) => ({
      ...prevFormData,
      Name: selectedRowTab?.Name,
      Description: selectedRowTab?.Description,
      Order: selectedRowTab?.Order,
    }));
  }, [selectedRowTab]);

  const insertRightRibbon = () => {
    setShowAccardeon(false);
    projectServices
      .insertMenuTab(rightRibbon)
      .then((res) => {
        setTimeout(() => {
          setShowAccardeon(true);
          setAccordionDisabled2(true);
          setAccordionDisabled3(true);
          setDataMenuTabRes([...dataMenuTabRes, res.data]);
        }, 50);
        rightRibbon.Name = "";
        rightRibbon.Description = "";
        rightRibbon.Order = 0;
        setDisabledEditTab(true);
        setDisabledDeleteTab(true);
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Item Added successfully",
        });
      })
      .catch((err) => { });
  };

  const handleEditRightRibbon = () => {
    setShowAccardeon(false);
    const updatedSelectedRow = {
      ...selectedRowTab,
      Name: rightRibbon?.Name,
      Description: rightRibbon?.Description,
      Order: rightRibbon?.Order,
    };

    console.log("id", updatedSelectedRow?.ID);
    projectServices
      .updateMenuTab(updatedSelectedRow)
      .then((res) => {
        const updatedIndex = dataMenuTabRes.findIndex(
          (item) => item.ID === selectedRowTab.ID
        );

        if (updatedIndex !== -1) {
          const newDataMenuTabRes = [...dataMenuTabRes];
          newDataMenuTabRes[updatedIndex] = Object.assign(
            {},
            newDataMenuTabRes[updatedIndex],
            updatedSelectedRow
          );

          setDataMenuTabRes(newDataMenuTabRes);
        }

        setTimeout(() => {
          setShowAccardeon(true);
        }, 50);

        rightRibbon.Name = "";
        rightRibbon.Description = "";
        rightRibbon.Order = 0;

        setDisabledEditTab(true);
        setDisabledDeleteTab(true);

        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Item updated successfully",
        });
      })
      .catch((err) => { });
  };

  const cancelDeleteTab = () => {
    setSelectedRowTab(null);
    setShowDeleteConfirmationTab(false);
  };

  const handleDeleteTab = () => {
    setSelectedRowTab(selectedRowTab);
    setShowDeleteConfirmationTab(true);
  };

  const confirmDeleteTab = () => {
    setShowAccardeon(false);
    const deletedItemId = selectedRowTab?.ID;

    projectServices
      .deleteMenuTab({ id: deletedItemId })
      .then((res) => {
        // Remove the item from dataMenuTabRes
        const newDataMenuTabRes = dataMenuTabRes.filter(
          (item) => item.ID !== deletedItemId
        );

        setDataMenuTabRes(newDataMenuTabRes);
        setShowDeleteConfirmationTab(false);

        setTimeout(() => {
          setShowAccardeon(true);
          setAccordionDisabled2(true);
          setAccordionDisabled3(true);
        }, 50);

        rightRibbon.Name = "";
        rightRibbon.Description = "";
        rightRibbon.Order = 0;

        setDisabledEditTab(true);
        setDisabledDeleteTab(true);

        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Item deleted successfully",
        });
      })
      .catch((err) => { });
  };

  //////////////////////Group Tabel///////////////////////////////////////////////////////////////////////

  useEffect(() => {
    setDataGroupRibbon((prevFormData) => ({
      ...prevFormData,
      Name: selectedRowGroup?.Name,
      Description: selectedRowGroup?.Description,
      Order: selectedRowGroup?.Order,
    }));
  }, [selectedRowGroup]);

  const insertMenuGroup = (e) => {
    setShowAccardeon(false);
    console.log("insert");
    projectServices
      .insertMenuGroup(dataGroupRibbon)
      .then((res) => {
        setTimeout(() => {
          setShowAccardeon(true);
          setDataMenuGroupRes([...dataMenuGroupRes, res.data]);
        }, 50);

        console.log("AAAAAAAAA", dataMenuGroupRes);
        console.log("BBBBBBBBB", res.data);
        console.log("CCCCCCCCC", [...dataMenuGroupRes, res.data]);

        dataGroupRibbon.Name = "";
        dataGroupRibbon.Description = "";
        dataGroupRibbon.Order = 0;

        setDisabledEditGroup(true);
        setDisabledDeleteGroup(true);

        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Item Added successfully",
        });
      })
      .catch((err) => { });
  };

  const handleEditMenuGroup = () => {
    setShowAccardeon(false);
    const updatedSelectedRow = {
      ...selectedRowGroup,
      Name: dataGroupRibbon?.Name,
      Description: dataGroupRibbon?.Description,
      Order: dataGroupRibbon?.Order,
    };

    projectServices
      .updateMenuGroup(updatedSelectedRow)
      .then((res) => {
        const updatedIndex = dataMenuGroupRes.findIndex(
          (item) => item.ID === selectedRowGroup.ID
        );

        if (updatedIndex !== -1) {
          const newDataMenuGroupRes = [...dataMenuGroupRes];
          newDataMenuGroupRes[updatedIndex] = Object.assign(
            {},
            newDataMenuGroupRes[updatedIndex],
            updatedSelectedRow
          );

          setDataMenuGroupRes(newDataMenuGroupRes);
        }

        setTimeout(() => {
          setShowAccardeon(true);
        }, 50);

        dataGroupRibbon.Name = "";
        dataGroupRibbon.Description = "";
        dataGroupRibbon.Order = 0;

        setDisabledEditGroup(true);
        setDisabledDeleteGroup(true);

        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Item updated successfully",
        });
      })
      .catch((err) => { });
  };

  const cancelDeleteGroup = () => {
    setSelectedRowGroup(null);
    setShowDeleteConfirmationGroup(false);
  };

  const handleDeleteGroup = () => {
    setSelectedRowGroup(selectedRowGroup);
    setShowDeleteConfirmationGroup(true);
  };

  const confirmDeleteGroup = () => {
    setShowAccardeon(false);
    const deletedItemId = selectedRowGroup?.ID;

    projectServices
      .deleteMenuGroup({ id: deletedItemId })
      .then((res) => {
        // Remove the item from dataMenuTabRes
        const newDataMenuGroupRes = dataMenuGroupRes.filter(
          (item) => item.ID !== deletedItemId
        );

        setDataMenuGroupRes(newDataMenuGroupRes);
        setShowDeleteConfirmationGroup(false);

        setTimeout(() => {
          setShowAccardeon(true);
        }, 50);

        dataGroupRibbon.Name = "";
        dataGroupRibbon.Description = "";
        dataGroupRibbon.Order = 0;

        setDisabledEditTab(true);
        setDisabledDeleteTab(true);

        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Item deleted successfully",
        });
      })
      .catch((err) => { });
  };

  //////////////////////item Tabel///////////////////////////////////////////////////////////////////////
  useEffect(() => {
    setDataItemRibbon((prevFormData) => ({
      ...prevFormData,
      Name: selectedRowItem?.Name,
      Description: selectedRowItem?.Description,
      Order: selectedRowItem?.Order,
      HelpText: selectedRowItem?.HelpText,
      Command: selectedRowItem?.Command,
      CommandWeb: selectedRowItem?.CommandWeb,
      CommandMobile: selectedRowItem?.CommandMobile,
      KeyTip: selectedRowItem?.KeyTip,
    }));
  }, [selectedRowItem]);

  const insertMenuItem = () => {
    setShowAccardeon(false);
    projectServices
      .insertMenuItem(dataItemRibbon)
      .then((res) => {
        setTimeout(() => {
          setShowAccardeon(true);
          setAccordionDisabled2(true);
          setAccordionDisabled3(true);
          setDataMenuItemRes([...dataMenuItemRes, res.data]);
        }, 50);

        dataItemRibbon.Name = "";
        dataItemRibbon.Description = "";
        dataItemRibbon.Order = 0;
        dataItemRibbon.HelpText = "";
        dataItemRibbon.Command = "";
        dataItemRibbon.CommandWeb = "";
        dataItemRibbon.CommandMobile = "";
        dataItemRibbon.KeyTip = "";

        setDisabledEditItem(true);
        setDisabledDeleteItem(true);

        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Item Added successfully",
        });
      })
      .catch((err) => { });
  };

  const handleEditItem = () => {
    setShowAccardeon(false);
    const updatedSelectedRow = {
      ...selectedRowItem,
      Name: dataItemRibbon?.Name,
      Description: dataItemRibbon?.Description,
      Order: dataItemRibbon?.Order,
      HelpText:dataItemRibbon?.HelpText,
      Command:dataItemRibbon?.Command ,
      CommandWeb:dataItemRibbon?.CommandWeb ,
      CommandMobile:dataItemRibbon?.CommandMobile ,
      KeyTip:dataItemRibbon?.KeyTip ,
    };

    projectServices
      .updateMenuItem(updatedSelectedRow)
      .then((res) => {
        const updatedIndex = dataMenuItemRes.findIndex(
          (item) => item.ID === selectedRowItem.ID
        );

        if (updatedIndex !== -1) {
          const newDataMenuItemRes = [...dataMenuItemRes];
          newDataMenuItemRes[updatedIndex] = Object.assign(
            {},
            newDataMenuItemRes[updatedIndex],
            updatedSelectedRow
          );

          setDataMenuItemRes(newDataMenuItemRes);
        }

        setTimeout(() => {
          setShowAccardeon(true);
        }, 50);

        dataItemRibbon.Name = "";
        dataItemRibbon.Description = "";
        dataItemRibbon.Order = 0;
        dataItemRibbon.HelpText = "";
        dataItemRibbon.Command = "";
        dataItemRibbon.CommandWeb = "";
        dataItemRibbon.CommandMobile = "";
        dataItemRibbon.KeyTip = "";

        setDisabledEditGroup(true);
        setDisabledDeleteGroup(true);

        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Item updated successfully",
        });
      })
      .catch((err) => { });
  };

  const cancelDeleteItem= () => {
    setSelectedRowItem(null);
    setShowDeleteConfirmationItem(false);
  };

  const handleDeleteItem = () => {
    setSelectedRowItem(selectedRowItem);
    setShowDeleteConfirmationItem(true);
  };

  const confirmDeleteItem = () => {
    setShowAccardeon(false);
    const deletedItemId = selectedRowItem?.ID;

    projectServices
      .deleteMenuItem({ id: deletedItemId })
      .then((res) => {
        // Remove the item from dataMenuTabRes
        const newDataMenuItemRes = dataMenuItemRes.filter(
          (item) => item.ID !== deletedItemId
        );

        setDataMenuItemRes(newDataMenuItemRes);
        setShowDeleteConfirmationItem(false);

        setTimeout(() => {
          setShowAccardeon(true);
        }, 50);

        dataItemRibbon.Name = "";
        dataItemRibbon.Description = "";
        dataItemRibbon.Order = 0;
        dataItemRibbon.HelpText = "";
        dataItemRibbon.Command = "";
        dataItemRibbon.CommandWeb = "";
        dataItemRibbon.CommandMobile = "";
        dataItemRibbon.KeyTip = "";

        setDisabledEditItem(true);
        setDisabledDeleteItem(true);

        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Item deleted successfully",
        });
      })
      .catch((err) => { });
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
                onClick={() => {
                  handleEdit();
                }}
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

            <div>
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    margin: "5px",
                    marginTop: "-10px",
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
                    onClick={insertRightRibbon}
                  >
                    <i style={{ fontSize: "10px" }} className="pi pi-plus"></i>
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
                    disabled={disabledEditTab}
                    onClick={() => {
                      handleEditRightRibbon();
                    }}
                  >
                    <i
                      style={{ fontSize: "10px" }}
                      className="pi pi-file-edit"
                    ></i>
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
                    disabled={disabledDeleteTab}
                    onClick={() => {
                      handleDeleteTab();
                    }}
                  >
                    <i style={{ fontSize: "10px" }} className="pi pi-trash"></i>
                  </Button>
                  <Dialog
                    visible={showDeleteConfirmationTab}
                    onHide={cancelDeleteTab}
                    header="Confirmation"
                    icon="pi pi-exclamation-triangle"
                    position="center"
                    footer={
                      <div>
                        <Button
                          label="No"
                          icon="pi pi-times"
                          className="p-button-text"
                          onClick={cancelDeleteTab}
                        />
                        <Button
                          label="Yes"
                          icon="pi pi-check"
                          className="p-button-text"
                          onClick={confirmDeleteTab}
                        />
                      </div>
                    }
                  >
                    <div>Do you sure want to delete?</div>
                  </Dialog>
                </div>
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
                  scrollHeight="150px"
                >
                  <Column field="Name" header="Name"></Column>
                  <Column field="Description" header="Description"></Column>
                  <Column field="Order" header="Order"></Column>
                </DataTable>
                <div style={{ display: "flex", marginTop: "10px" }}>
                  <div style={{ margin: "10px", width: "50%" }}>
                    <CustomInputText
                      value={rightRibbon.Name}
                      label="Name"
                      onChange={(e) =>
                        handleChangeRightRibbon("Name", e.target.value)
                      }
                    />
                  </div>
                  <div style={{ margin: "10px", width: "50%" }}>
                    <CustomInputText
                      value={rightRibbon.Description}
                      label="Description"
                      onChange={(e) =>
                        handleChangeRightRibbon("Description", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div style={{ display: "flex", marginTop: "5px" }}>
                  <div
                    style={{
                      margin: "10px",
                      width: "100%",
                    }}
                  >
                    <CustomInputText
                      value={rightRibbon.Order}
                      label="Order"
                      onChange={(e) =>
                        handleChangeRightRibbon("Order", e.target.value)
                      }
                    />
                  </div>
                </div>
              </AccordionTab>
              <AccordionTab header="Header II" disabled={accordionDisabled2}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    margin: "5px",
                    marginTop: "-8px",
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
                    onClick={insertMenuGroup}
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
                    disabled={disabledEditGroup}
                    onClick={handleEditMenuGroup}
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
                    disabled={disabledDeleteGroup}
                    onClick={() => {
                      handleDeleteGroup();
                    }}
                  >
                    <i className="pi pi-trash"></i>
                  </Button>
                  <Dialog
                    visible={showDeleteConfirmationGroup}
                    onHide={cancelDeleteGroup}
                    header="Confirmation"
                    icon="pi pi-exclamation-triangle"
                    position="center"
                    footer={
                      <div>
                        <Button
                          label="No"
                          icon="pi pi-times"
                          className="p-button-text"
                          onClick={cancelDeleteGroup}
                        />
                        <Button
                          label="Yes"
                          icon="pi pi-check"
                          className="p-button-text"
                          onClick={confirmDeleteGroup}
                        />
                      </div>
                    }
                  >
                    <div>Do you sure want to delete?</div>
                  </Dialog>
                </div>
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
                <div style={{ display: "flex", marginTop: "10px" }}>
                  <div style={{ margin: "10px", width: "50%" }}>
                    <CustomInputText
                      value={dataGroupRibbon.Name}
                      label="Name"
                      onChange={(e) =>
                        handleChangeGroupRibbon("Name", e.target.value)
                      }
                    />
                  </div>
                  <div style={{ margin: "10px", width: "50%" }}>
                    <CustomInputText
                      value={dataGroupRibbon.Description}
                      label="Description"
                      onChange={(e) =>
                        handleChangeGroupRibbon("Description", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div style={{ display: "flex", marginTop: "5px" }}>
                  <div
                    style={{
                      margin: "10px",
                      width: "100%",
                    }}
                  >
                    <CustomInputText
                      value={dataGroupRibbon.Order}
                      label="Order"
                      onChange={(e) =>
                        handleChangeGroupRibbon("Order", e.target.value)
                      }
                    />
                  </div>
                </div>
              </AccordionTab>
              <AccordionTab header="Header III" disabled={accordionDisabled3}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    margin: "5px",
                    marginTop: "-10px",
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
                    onClick={insertMenuItem}
                  >
                    <i style={{ fontSize: "10px" }} className="pi pi-plus"></i>
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
                    disabled={disabledEditItem}
                    onClick={handleEditItem}
                  >
                    <i
                      style={{ fontSize: "10px" }}
                      className="pi pi-file-edit"
                    ></i>
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
                    disabled={disabledDeleteItem}
                    onClick={handleDeleteItem}
                  >
                    <i style={{ fontSize: "10px" }} className="pi pi-trash"></i>
                  </Button>
                  <Dialog
                    visible={showDeleteConfirmationItem}
                    onHide={cancelDeleteItem}
                    header="Confirmation"
                    icon="pi pi-exclamation-triangle"
                    position="center"
                    footer={
                      <div>
                        <Button
                          label="No"
                          icon="pi pi-times"
                          className="p-button-text"
                          onClick={cancelDeleteItem}
                        />
                        <Button
                          label="Yes"
                          icon="pi pi-check"
                          className="p-button-text"
                          onClick={confirmDeleteItem}
                        />
                      </div>
                    }
                  >
                    <div>Do you sure want to delete?</div>
                  </Dialog>
                </div>
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
                  <Column field="Command" header="Command"></Column>
                  <Column field="KeyTip" header="KeyTip"></Column>
                  <Column field="Order" header="Order"></Column>
                  <Column field="Description" header="Description"></Column>
                </DataTable>
                <div style={{ display: "flex", marginTop: "10px" }}>
                  <div style={{ margin: "10px", width: "50%" }}>
                    <CustomInputText
                      value={dataItemRibbon.Name}
                      label="Name"
                      onChange={(e) =>
                        handleChangeItemRibbon("Name", e.target.value)
                      }
                    />
                  </div>
                  <div style={{ margin: "10px", width: "50%" }}>
                    <CustomInputText
                      value={dataItemRibbon.Description}
                      label="Description"
                      onChange={(e) =>
                        handleChangeItemRibbon("Description", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div style={{ display: "flex", marginTop: "10px" }}>
                  <div style={{ margin: "10px", width: "50%" }}>
                    <CustomInputText
                      value={dataItemRibbon.Order}
                      label="Order"
                      onChange={(e) =>
                        handleChangeItemRibbon("Order", e.target.value)
                      }
                    />
                  </div>
                  <div style={{ margin: "10px", width: "50%" }}>
                    <CustomInputText
                      value={dataItemRibbon.HelpText}
                      label="Help Text"
                      onChange={(e) =>
                        handleChangeItemRibbon("HelpText", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div style={{ display: "flex", marginTop: "10px" }}>
                  <div style={{ margin: "10px", width: "50%" }}>
                    <CustomInputText
                      value={dataItemRibbon.Command}
                      label="Windows App Command"
                      onChange={(e) =>
                        handleChangeItemRibbon("Command", e.target.value)
                      }
                    />
                  </div>
                  <div style={{ margin: "10px", width: "50%" }}>
                    <CustomInputText
                      value={dataItemRibbon.CommandWeb}
                      label="Web App Command"
                      onChange={(e) =>
                        handleChangeItemRibbon("CommandWeb", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div style={{ display: "flex", marginTop: "10px" }}>
                  <div style={{ margin: "10px", width: "50%" }}>
                    <CustomInputText
                      value={dataItemRibbon.CommandMobile}
                      label="Mobile App Command"
                      onChange={(e) =>
                        handleChangeItemRibbon("CommandMobile", e.target.value)
                      }
                    />
                  </div>
                  <div style={{ margin: "10px", width: "50%" }}>
                    <CustomInputText
                      value={dataItemRibbon?.KeyTip}
                      label="Key Tip"
                      onChange={(e) =>
                        handleChangeItemRibbon("KeyTip", e.target.value)
                        // console.log("ew",e.target.value)
                      }
                    />
                  </div>
                </div>
                {/* <div style={{ marginTop: "10px" }}>
                  <div>
                    <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
                      State:
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "50%",
                      marginTop: "10px",
                    }}
                  >
                    <CustomRadioButtons
                      value={ingredient}
                      onChange={(e) => {
                        setIngredient(e.target.value);
                        handleChangeItemRibbon("WFStateForDeemed", e.target.value);
                      }}
                      checked={ingredient}
                      options={[
                        { value: 1, label: "Accept" },
                        { value: 2, label: "Reject" },
                        { value: 3, label: "Close" },
                      ]}
                    />
                  </div>
                </div> */}
              </AccordionTab>
            </Accordion>
          )}
        </SplitterPanel>
      </Splitter>
    </>
  );
}
