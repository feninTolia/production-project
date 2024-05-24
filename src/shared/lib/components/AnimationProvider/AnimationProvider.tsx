import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

interface IAnimationContextPayload {
  Gesture?: GestureType;
  Spring?: SpringType;
  isLoaded?: boolean;
}

const AnimationContext = createContext<IAnimationContextPayload>({});

const getAsyncAnimationModules = async () => {
  return await Promise.all([
    import('@react-spring/web'),
    import('@use-gesture/react'),
  ]);
};

export const useAnimationLibs = () => {
  return useContext(AnimationContext) as Required<IAnimationContextPayload>;
};

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const GestureRef = useRef<GestureType>();
  const SpringRef = useRef<SpringType>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    void getAsyncAnimationModules().then(([Spring, Gesture]) => {
      SpringRef.current = Spring;
      GestureRef.current = Gesture;
      setIsLoaded(true);
    });
  }, []);

  const values = useMemo(
    () => ({
      Gesture: GestureRef.current,
      Spring: SpringRef.current,
      isLoaded,
    }),
    [isLoaded]
  );

  return (
    <AnimationContext.Provider value={values}>
      {children}
    </AnimationContext.Provider>
  );
};
