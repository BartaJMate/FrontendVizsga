import { use } from "react"
import { useEffect, useState } from "react"

export default function App() {
  const [cats, setCats] = useState([])
  const [shownCats, setShownCats] = useState([])
  const [query, setQuery] = useState("")
  

  useEffect(() => {
    fetch("/api/cats").then(r => r.json())
    .then(data => {
      setCats(data)
      setShownCats(data)
    }).catch(() => {
      setCats([])
      setShownCats([])
    })
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    const q = query.trim()
    if (q === "") {
      setShownCats(cats)
      return
    }
    const num = Number(q)
    const filtered = cats.filter(c => {
      const nameMatch = c.name.includes(q)
      const genderMatch = c.gender.includes(q)
      const colorMatch = c.color.cinludes(q)
      const ageMatch = !isNaN(num) && c.age === num
      return nameMatch || genderMatch || colorMatch || ageMatch
    })
    setShownCats(filtered)
  }

  const handleDelete = (id) => {
    setCats(prev => prev.filter( c=> c.id !== id))
    setShownCats(prev => prev.filter(c => c.id !==id))
  }
  return (
    <>
    <nav className ="navbar">
      <div className="container">
        
      </div> 
    </nav>
    </>
  )
}


