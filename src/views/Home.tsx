import { TabView, TabPanel } from "primereact/tabview";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import tabData from "../utils/tabData";
import MainComponent from "../components/MainComponent";
import { useDispatch, useSelector } from "react-redux";
import { mainSlice } from "../redux/mainSlice";
import { RootState } from "../redux/store";
import projectService from "../components/services/project.services";


const MyTabs = () => {

  const dispatch = useDispatch();

  // const handleMainTabClick = (index: number) => {
  //   resetSubTab();
  //   setActiveIndex(index);
  // };

  const activeIndex = useSelector((state:RootState)=>state.mainTab.valueMainTab);
  console.log("activeIndex",activeIndex)

  projectService
  .getAllCompany()
  .then((res) => {
    console.log("dataaaaaaaaa",res.data)
  })
  .catch((err) => {
    // messageShow(messageIcon.error, err.request.responseText);
  });


  return (
    <>
      <TabView
        activeIndex={activeIndex}
        onTabChange={(e) => {
          const newValue = dispatch(mainSlice.actions.setvalueMainTab(e.index)).payload;
          const resetVal = dispatch(mainSlice.actions.setSubTab("")).payload
          return newValue;
        }}
      >
        {tabData.map((tab, tabIndex) => (
          <TabPanel key={tabIndex} header={tab.tabName}>
            {tab.subTabs && (
              <div style={{ display: "flex" }}>
                {tab.subTabs.map((subTab, subTabIndex) => (
                  <div
                    key={subTabIndex}
                    onClick={() =>
                      dispatch(mainSlice.actions.setSubTab(subTab.name)).payload
                    }
                  >
                    <span style={{ marginRight: "20px" }}>{subTab.name}</span>
                  </div>
                ))}
              </div>
            )}
          </TabPanel>
        ))}
      </TabView>
      <MainComponent />
    </>
  );
};

export default MyTabs;
