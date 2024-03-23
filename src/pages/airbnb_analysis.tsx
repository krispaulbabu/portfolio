import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

export default function Bookfinder() {

  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/hello')
        .then(res => res.json())
        .then(data => {
            console.log(data.message)
            setMessage(data.message)
        })
}, [])

  return (
    <>
      {message}
    </>
  );
}