import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
  useEffect,
} from "react";
import axios from "axios";

interface SubTabContextValue {
  selectedSubTab: string;
  setSubTab: (subTabName: string) => void;
  resetSubTab: () => void;
  showSplitPane: boolean;
  displayHeader: String;
  dynamicTableHeaders: String;
  dynamicTableFields: String;
  loading: Boolean;
  apiData: any[];
}

const SubTabContext = createContext<SubTabContextValue | undefined>(undefined);

interface SubTabProviderProps {
  children: ReactNode;
}

export const SubTabProvider: FC<SubTabProviderProps> = ({ children }) => {
  const [selectedSubTab, setSelectedSubTab] = useState<string>("");
  const [showSplitPane, setShowSplitPane] = useState<boolean>(false);
  const [displayHeader, setDisplayHeader] = useState<String>("");
  const [dynamicTableHeaders, setDynamicTableHeaders] = useState<String>("");
  const [loading, setLoading] = useState<Boolean>(Boolean);
  const [dynamicTableFields, setDynamicTableFields] = useState<String>("");
  const [apiData, setApiData] = useState<any[]>([]);

  //subtas////////////////////////////////////////////////////////////////////////////////////////////////
  const setSubTab = (subTabName: string) => {
    setSelectedSubTab(subTabName);
  };

  const resetSubTab = () => {
    setSelectedSubTab("");
  };

  //api/////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    setLoading(true);
    if (selectedSubTab === "Configuration") {
      setDisplayHeader("Configuration");
      setDynamicTableHeaders("titleName|bodyName");
      setDynamicTableFields("title|body");
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          setApiData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else if (selectedSubTab === "Commands") {
      setDisplayHeader("Commands");
      setDynamicTableHeaders("names|emailes");
      setDynamicTableFields("name|email");
      axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
          setApiData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [selectedSubTab]);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  const contextValue: SubTabContextValue = {
    selectedSubTab,
    setSubTab,
    resetSubTab,
    showSplitPane,
    displayHeader,
    dynamicTableHeaders,
    dynamicTableFields,
    loading,
    apiData,
  };

  return (
    <SubTabContext.Provider value={contextValue}>
      {children}
    </SubTabContext.Provider>
  );
};

export const useSubTab = () => {
  const context = useContext(SubTabContext);
  if (!context) {
    throw new Error("useSubTab must be used within a SubTabProvider");
  }
  return context;
};
