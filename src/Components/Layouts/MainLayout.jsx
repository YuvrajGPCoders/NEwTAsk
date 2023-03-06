import React, { useEffect } from "react";
// import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { SessionStorage } from "../../SessionStorage/SessionStorage";
import { useNavigate } from "react-router-dom";
import Admin from "../DsashBoard/Admin";
// import Form from 'src/views/pages/Form'
const MainLayout = () => {
  const user = SessionStorage.getObj("user");
  const nav = useNavigate();
  useEffect(() => {
    if (!user) {
      nav("/login");
    }
  }, [user, nav]);

  return (
    // <div>
    //   <AppSidebar />
    //   <div className="wrapper d-flex flex-column min-vh-100 bg-light">
    //     <AppHeader />
    //     <div className="body flex-grow-1 px-3">
    //       <AppContent />
    //     </div>
    //     <AppFooter />
    //   </div>
    // </div>
    
    
    <>
    <Admin/>
    </>
  );
};

export default MainLayout;
