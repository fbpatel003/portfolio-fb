import React, { useState } from "react";
import MobileComponent from "./Components/MobileComponent";
import DesktopComponent from "./Components/DesktopComponent";
import PreLoader from "./PreLoader";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import Tooltip from "@mui/material/Tooltip";

const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};

const MyComponent = () => {
  const { width } = useViewport();
  const breakpoint = 900;
  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default function App() {
  const [Loading, setLoading] = useState(true);
  const [DwnldBtn, showDwnldBtn] = useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      showDwnldBtn(true);
    }, 10000);
  }, []);

  const DownloadClicked = () => {
    fetch("Fenil's Resume 1005.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Fenil's Resume 1005.pdf";
        alink.click();
      });
    });
  };

  return (
    <>
      {DwnldBtn ? (
        <>
          <Tooltip title="Download Resume">
            <button onClick={DownloadClicked} className="DownloadBtn">
              <DownloadRoundedIcon sx={{ fontSize: 40 }} />
            </button>
          </Tooltip>
        </>
      ) : null}

      {Loading ? (
        <PreLoader />
      ) : (
        <ViewportProvider>
          <MyComponent />
        </ViewportProvider>
      )}
    </>
  );
}
