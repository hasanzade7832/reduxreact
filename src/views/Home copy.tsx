import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import tabData from "../utils/tabData";
import MainComponent from "../components/MainComponent";
import { useSubTab } from "../contexts/TabContext";

const MyTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { selectedSubTab, setSubTab } = useSubTab();

  const handleSubTabClick = (subTabName:any) => {
    setSubTab(subTabName);
  };

  return (
    <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
      {tabData.map((tab, tabIndex) => (
        <TabPanel key={tabIndex} header={tab.tabName}>
          {tab.subTabs && (
            <div className="sub-tabs-container">
              {tab.subTabs.map((subTab, subTabIndex) => (
                <div
                  key={subTabIndex}
                  className={`sub-tab ${selectedSubTab === subTab.name ? 'active' : ''}`}
                  onClick={() => handleSubTabClick(subTab.name)}
                >
                  <img src={subTab.imageURL} alt={subTab.name} />
                  <h3>{subTab.name}</h3>
                  {/* Add more content or customize the sub-tab as needed */}
                </div>
              ))}
            </div>
          )}
        </TabPanel>
      ))}
    </TabView>
  );
};

export default MyTabs;
