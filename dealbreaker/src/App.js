import Navbar from './components/Navbar'
import Post from './components/Post'
import Middle from './components/Middle'
import './App.css';

function App() {

  const posts=[
    {category:'Clothing'},
    {category:'Food'}
  ] 
  return (
    <div className="App">
      <Navbar />
      <Middle>
        
        {posts.map((key, value) => <Post category={key.category}/>)}

      </Middle>
     

    </div>
  );
}

export default App;
