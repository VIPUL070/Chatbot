import { useRef, useEffect } from 'react'

function useAutoScroll(dependencies) {
  const containerRef = useRef(null);                       //one feature to get an html element

  useEffect(() => {
    const containerElem = containerRef.current
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [dependencies]);                                               //dependency array   

  return containerRef;
}

export default useAutoScroll