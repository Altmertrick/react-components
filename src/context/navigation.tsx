import { createContext, useState, useEffect } from 'react';

const NavigationContext = createContext<any>({});

const NavigationProvider: React.FC<any> = ({ children }) => {
  //window.location.pathname - reading path from search bar

  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    //we need to know what is current path
    //when user clicks '->' or '<-' buttons in browser to jump in history
    //ALSO we need to rerender component wen path is changed so we use 'currentPath' peace of state for that
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    //'popstate' event occurs when when user clicks '->' or '<-'
    window.document.addEventListener('popstate', handler);

    return window.document.removeEventListener('popstate', handler);
  }, []);

  const navigate = (to: string) => {
    //updating history stack without page reload

    window.history.pushState({}, '', to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ a: 5 }}>
      {currentPath}
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationProvider };
export default NavigationContext;
