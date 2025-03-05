import { useEffect, useState } from 'react';

const useTabTitle = (focusedTitle: string, blurredTitle: string): void => {
  const [isTabFocused, setIsTabFocused] = useState<boolean>(document.hasFocus());

  useEffect(() => {
    const handleFocus = () => {
      setIsTabFocused(true);
      document.title = focusedTitle;
    };

    const handleBlur = () => {
      setIsTabFocused(false);
      document.title = blurredTitle;
    };

    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);

    // Initial title set
    document.title = isTabFocused ? focusedTitle : blurredTitle;

    return () => {
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
    };
  }, [focusedTitle, blurredTitle, isTabFocused]);
};

export default useTabTitle;