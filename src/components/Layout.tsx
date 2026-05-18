import {Navbar, Footer} from './Navigation';
import {Outlet} from 'react-router-dom';
import {motion} from 'motion/react';
import {useLocation} from 'react-router-dom';
import {useEffect} from 'react';

export function Layout() {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <motion.div
          key={pathname}
          initial={{opacity: 0, y: 10}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: -10}}
          transition={{duration: 0.3, ease: 'easeOut'}}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
