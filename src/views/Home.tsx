import { TabView, TabPanel } from "primereact/tabview";
import { useRef, useEffect, useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import tabData from "../utils/tabData";
import MainComponent from "../components/MainComponent";
import { useDispatch, useSelector } from "react-redux";
import { mainSlice } from "../redux/mainSlice";
import { loginSlice } from "../redux/Login/loginSlice";
import { RootState } from "../redux/store";
import projectService from "../components/services/project.services";
import { Toast } from "primereact/toast";
import "../assets/styles/global.css";

const MyTabs = () => {
  const dispatch = useDispatch();
  const [selectedSubTab, setSelectedSubTab] = useState("");

  const activeIndex = useSelector(
    (state: RootState) => state.mainTab.valueMainTab
  );

  const loginSuccess = useSelector(
    (state: RootState) => state.dataLogin.loginSuccess
  );
  //////console.log("ZZZZZZZZZZZZZZZ", loginSuccess);

  const toast = useRef<Toast>(null);

  const showA = () => {
    if (loginSuccess) {
      toast.current?.show({
        severity: "success",
        summary: "",
        detail: "login Is Successful",
        life: 3000,
      });
    }
  };

  useEffect(() => {
    showA();
  }, []);

  

  return (
    <>
      <Toast ref={toast} />
      <div className="custom-tabview ">
        <TabView
          className="custom-tabview"
          activeIndex={activeIndex}
          onTabChange={(e) => {
            const newValue = dispatch(
              mainSlice.actions.setvalueMainTab(e.index)
            ).payload;
            const resetVal = dispatch(mainSlice.actions.setSubTab("")).payload;
            return newValue;
          }}
        >
          {tabData.map((tab, tabIndex) => (
            <TabPanel key={tabIndex} header={tab.tabName} style={{fontWeight:"bold"}}>
              {tab.subTabs && (
                <div style={{ display: "flex" }}>
                  {tab.subTabs.map((subTab, subTabIndex) => (
                    <div
                      key={subTabIndex}
                      onClick={() => {
                        dispatch(mainSlice.actions.setSubTab(subTab.name));
                        setSelectedSubTab(subTab.name);
                      }}
                      style={{
                        backgroundColor:
                          selectedSubTab === subTab.name
                            ? "#e1e1e1"
                            : "transparent",
                        cursor: "pointer",
                        padding: "15px",
                        textAlign: "center",
                      }}
                    >
                      <span style={{ marginRight: "20px" }}>{subTab.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </TabPanel>
          ))}
        </TabView>
      </div>
      <div className="main-component-wrapper">
        <MainComponent />
      </div>
    </>
  );
};

export default MyTabs;
