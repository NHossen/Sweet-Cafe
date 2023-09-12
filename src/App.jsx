
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/header'

function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const [readingTime,setReading]=useState(0);

  const handelBookmarks=(blog)=>{
    //console.log(blog)
    const newBookmark=[...bookmarks,blog];
    setBookmarks(newBookmark);
  }
  const handelReadingTime=time =>{
    //console.log('marking as read',time)
    const newReadingTime=readingTime+time
    setReading(newReadingTime);
  }

  return (
    <body className='container mx-auto my-6'>
        <header>
          <Header/>
        </header>
        <main >

         <div className='md:flex gap-8 my-8 '>
         <Blogs handelBookmarks={handelBookmarks} handelReadingTime={handelReadingTime} /> 
         <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
        </div>

       </main>
      <footer>

      </footer>
    </body>
   
    
    
  )
}

export default App
