import { useEffect, useState } from "react";

type PropsType = {
  url: string
}

const useFetch = ({ url }: PropsType) => {
  const [data, setData] = useState([]);

  useEffect(() => {

    async function getData() {
      const res = await fetch(url)

      const data = await res.json()

      setData(data)
    }
    
    getData()
  }, [url]);

  return [data]
}

export default useFetch