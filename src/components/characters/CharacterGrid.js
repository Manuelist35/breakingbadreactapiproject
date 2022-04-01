import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner' // here we are importing the spinner component which is just a gif that we are gonna display for a better UX while the user waits for the data to be fetched

const CharactersGrid = ({items, isLoading /*Here we are using destruturing to acces our desired paremeters or props*/ }) => {
  return isLoading ? (
    < Spinner /> //Here we are using our spinner component for show it to the user to have a better UX while the user waits for the data to be fetched
  ) : ( // once is loading becomes false, that means our data has been fetched so we want to map that array in order to display it inside this section container which is styled with the classname card
  <section className='cards'>
    {items.map(item => ( 
      <CharacterItem key={item.char_id} /*Here we are giving every item an unique id which is pretty important in react otherwise is gonna make an error*/item={item}></CharacterItem> 
    ))}
  </section>
  )
}

export default CharactersGrid