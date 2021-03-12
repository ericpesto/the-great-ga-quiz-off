import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//import { useHistory } from 'react-router-dom'

const Home = () => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('food_and_drink')
  
  const handleNameChange = (event) => {
    const userName = event.target.value
    setName(userName)
  }
  console.log('name', name)

  const handleCategoryChange = (event) => {
    const categorySelect = event.target.value
    setCategory(categorySelect)
  }
  console.log('category', category)

  return (
    <div id="background">
      <div className="wrapper">
        <div>
          <div>
            <h1>The Great GA Quiz Off</h1>
            <div className="ui-wrapper">
              <div className="input-ui">
                <input
                  onChange={handleNameChange}
                  className="input"
                  value={name}
                  placeholder="Your name..."
                />
                <select
                  className="select"
                  onChange={handleCategoryChange}>
                  <option value="food_and_drink">Food/Drink</option>
                  <option value="geography">Geography</option>
                  <option value="movies">Movies</option>
                  <option value="music">Music</option>
                  <option value="sport_and_leisure">Sport/Leisure</option>
                </select>
              </div>
              <Link className="button" id="start-button" to={{
                pathname: `/quiz/${category}`,
                state: name,
              }} > START GAME</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home