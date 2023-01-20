import { SideBar } from "components";
import Header from "components/Header";
import useViewport from "hooks/useViewPort";
import Settings from "pages/Settings";
import Drawer, { DrawerProps } from "rc-drawer";
import { useState } from "react";

// export const maskMotion: DrawerProps['maskMotion'] = {
//   motionAppear: true,
//   motionName: 'mask-motion',
//   onAppearEnd: console.warn,
// };

// export const motion: DrawerProps['motion'] = placement => ({
//   motionAppear: true,
//   motionName: `panel-motion-${placement}`,
// });

// const motionProps: Partial<DrawerProps> = {
//   maskMotion,
//   motion,
// };

const App = () => {
  const { currentScreenSize } = useViewport();
  const [isDrawerOpen, setDrawerState] = useState(false);
  return (
    <div className="fixed h-screen w-full">
      <div className="flex flex-col md:flex-row">
        {currentScreenSize.width <= 768 ?
          <>
            <Header handleClick={() => setDrawerState(true)} />
            <hr />
          </>
          :
          <SideBar />}
        <div className="w-full h-screen overflow-y-auto shrink">
          <Settings />
        </div>
      </div>
      <Drawer open={isDrawerOpen} className="drawer" onClose={() => setDrawerState(false)} placement="left" width={"70%"}>
        <SideBar width="w-full" />
      </Drawer>
    </div>
  )
}


export default App;
