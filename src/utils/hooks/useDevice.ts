import { useEffect, useMemo, useState } from 'react';

export const useDevice = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // TODO: DEBOUCE
  const resizeDocumentHandler = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeDocumentHandler);

    return () => {
      window.removeEventListener('resize', resizeDocumentHandler);
    };
  }, []);

  const detectDevice = useMemo(() => {
    // TODO: DEVICE DETECT
    const device = 'unknown';

    if (windowWidth < 1025) {
      return { isMobile: true, device };
    }

    return { isMobile: false, device };
  }, [windowWidth]);

  return detectDevice;
};
