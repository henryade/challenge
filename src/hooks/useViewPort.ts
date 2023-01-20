import { useCallback, useEffect, useState } from "react";

export interface IViewport {
  currentScreenSize: IViewportData;
}
export interface ICurrentSize {
  [x: string]: { width: number; height: number };
}

export interface IViewportData {
  width: number;
  height: number;
}


const useViewport = (): IViewport => {
  const [currentScreenSize, setCurrentScreenSize] = useState<IViewportData>({
    width: 0,
    height: 0,
  });
  const handleWindowResize = () => {
    const width = window?.innerWidth;
    const height = window?.innerHeight;
    setCurrentScreenSize({ width, height });
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return {
    currentScreenSize,
  };
};

export default useViewport;
