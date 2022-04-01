import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharactersGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]) // here we are setting the initial state of our items to be an empty array which will be modified after fetching the data 
  const [isLoading, setIsLoading] = useState(true) // here we are defining our fetch loading state which initially will be true which means that we are waiting for the data to be fetched and once it is done is gonna be setted to false 
  const [query, setQuery] = useState('') //Here we are defining our query to an empty array, and it will change once the user types something inside our search component in the app so in that way he can search by query taking the name as parameter 

  useEffect(() => { //  By using this Hook, you tell React that your component needs to do something after render.
    const fetchItems = async () => { // Here we are making use of async in order for the code tu still runnig while we wait for the http request and response
      const result = await axios( // here we are using axios which is a library that serves to make http requests with react, and the result represents the data that we get back from axios, and we are using the await keyword beacuse axios returns a promise 
        `https://www.breakingbadapi.com/api/characters?name=${query}`
        )

      console.log(result.data)

      setItems(result.data) //once we fetch the data from the API we want to make sure we set the items which is gonna change the 
      setIsLoading(false) // and also once we got the data, we need to set the SetIsLoading to false 
    }

    fetchItems()
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharactersGrid isLoading={isLoading} items={items} /*Here we are passing our global state into our Characters Grid*//>
    </div>
  );
}

export default App;
