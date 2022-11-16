import React from "react";
import MobileComponent from "./Components/MobileComponent";
import DesktopComponent from "./Components/DesktopComponent";

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
  return (
    <ViewportProvider>
      <MyComponent />
    </ViewportProvider>
  );
}
