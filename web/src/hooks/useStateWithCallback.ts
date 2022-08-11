import {
  useCallback, useEffect, useRef, useState,
} from 'react';

const useStateWithCallback = (initialState: Array<null>) : Array<any> => {
  const [state, setState] = useState(initialState);

  const cbRef : any = useRef(null);

  const updateState = useCallback((newState: any, cb: any) : void => {
    cbRef.current = cb;

    setState((prev) => (typeof newState === 'function' ? newState(prev) : newState));
  }, []);

  useEffect(() => {
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = null;
    }
  }, [state]);

  return [state, updateState];
};

export default useStateWithCallback;
