import Navbar from "./Navbar";
import Footer from "./Footer";
import WorkingProcess from "../../sections/WorkingProcess";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import CustomCursor from "../common/CustomCursor";
import ScrollToTop from "../common/ScrollToTop";
import { Toaster } from "react-hot-toast";
import { useTheme } from "../../context/ThemeContext";

const RootLayout = () => {
  const location = useLocation();
  const { theme } = useTheme();

  return (
    <>
      <CustomCursor />
      <ScrollToTop />
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: theme === 'dark' ? '#111' : '#fff',
            color: theme === 'dark' ? '#fff' : '#333',
            border: theme === 'dark' ? '1px solid #333' : '1px solid #eaeaea',
          },
        }}
      />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="min-h-screen pt-20" // Add pt-20 so nav doesn't cover content
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      {location.pathname !== "/contact" && <WorkingProcess />}
      <Footer />
    </>
  );
};

export default RootLayout;
