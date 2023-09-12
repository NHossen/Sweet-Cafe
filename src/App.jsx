
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/header'

function App() {

  return (
    <body className='container mx-auto my-6'>
        <header>
          <Header/>
        </header>
        <main >

         <div className='md:flex my-8 '>
         <Blogs/> 
         <Bookmarks/>
        </div>

       </main>
      <footer>
        
      </footer>
    </body>
   
    
    
  )
}

export default App
