import { useEffect, useState } from 'react'


function App() {
  const [jokes, setJokes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  // fetching jokes from this api 
  //https://v2.jokeapi.dev/joke/Any?type=single
 // using async function
 const fetchJokes = async() =>{
  try
  {
    setLoading(true)
    const res = await fetch('https://v2.jokeapi.dev/joke/Any?type=single')
    const data = await res.json()
    setJokes(data)
    setLoading(false)
    setError(null)
    // console.log(data)
  }catch(err){
    setError('Not Found')
    console.log(err.message)
  }
}
  useEffect(()=>{
    fetchJokes()
  },[])

  return (
    <div className='app'>
      <div className="btn">
      <button disabled={loading} onClick={fetchJokes}>Generate Joke</button>
      </div>
      <div className="loading">
        {loading && <h4>Loading...</h4>}
      </div>
       {!loading && <div className="jokes" key={jokes?.id}>
        <h1>{jokes?.joke}</h1>
        <p>{jokes?.category}</p>
       </div>}
       <div className="erro">
        {error && <p>{error}</p>}
       </div>
    </div>
  )
}

export default App
