import React, { useState } from 'react';
import { ProjectsData } from '../data';

export const AppContext = React.createContext();

//   function usePersistState(key, defaultValue) {
//     const [state, setState] = React.useState(() => {
//       const persistedState = sessionStorage.getItem(key);
//       return persistedState ? JSON.parse(persistedState) : defaultValue;
//     });
  
//     React.useEffect(() => {
//       window.sessionStorage.setItem(key, JSON.stringify(state));
//     }, [state, key]);
//     return [state, setState];
//   }

  export default function Context(props) {
    const [appState, setAppState] = useState(ProjectsData);
    const context = React.useMemo(() => ({appState, setAppState}), [appState, setAppState]);

    return (
        <AppContext.Provider value={context} {...props} />
    );
  }