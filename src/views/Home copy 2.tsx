import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import tabData from "../utils/tabData";
import MainComponent from "../components/MainComponent";
import { useSubTab } from "../contexts/TabContext";

const MyTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { selectedSubTab, setSubTab } = useSubTab();

  const handleSubTabClick = (subTabName: any) => {
    setSubTab(subTabName);
  };

  return (
    <>
      {selectedSubTab}
      <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
        {tabData.map((tab, tabIndex) => (
          <TabPanel key={tabIndex} header={tab.tabName}>
            {tab.subTabs && (
              <div style={{ display: "flex" }}>
                {tab.subTabs.map((subTab, subTabIndex) => (
                  <div key={subTabIndex} onClick={() => handleSubTabClick(subTab.name)}>
                    <span style={{ marginRight: "20px" }}>{subTab.name}</span>
                  </div>
                ))}
              </div>
            )}
          </TabPanel>
        ))}
      </TabView>
    </>
  );
};

export default MyTabs;
