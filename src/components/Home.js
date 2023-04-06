import React from 'react'
import Feed from './Feed'
import {Audio} from "react-loader-spinner";
import { useStoreState } from 'easy-peasy';


const Home = ({isLoading,fetchError}) => {
  const searchResults = useStoreState((state)=>state.searchResults);

  return (
    <main className="Home">
      {isLoading && 
        <div className = "statusMsg">
        <p>Loading posts...</p>
        <Audio
            
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
      
        />
        </div>
          }
      {!isLoading && fetchError && <p className="statusMsg" style = {{color:"red"}}>{fetchError}</p>}
      {!isLoading && !fetchError && (searchResults.length ? <Feed posts = 
      {searchResults} />:<p className="statusMsg">No posts to display.</p>)}
    </main>
  )
}



export default Home