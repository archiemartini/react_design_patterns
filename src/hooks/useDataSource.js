import { useState, useEffect } from 'react'

const useDataSource = (getResourceFunc) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await getResourceFunc();
      console.log(result)
      setResource(result)
    })()
  }, [])

  return resource;
}

export default useDataSource;