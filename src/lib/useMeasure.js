import * as React from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export const useMeasure = () => {
  const ref = React.useRef();
  const [bounds, set] = React.useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });
  const [ro] = React.useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  );

  React.useEffect(() => {
    ro.observe(ref.current);

    return () => ro.disconnect;
  }, [bounds, ro]);

  return [{ ref }, bounds];
};
