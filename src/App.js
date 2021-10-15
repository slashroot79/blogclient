import Blogs from "./Components/Blogs"
import CreateBlogPost from "./Components/CreateBlogPost"
import {Switch, Route} from 'react-router-dom'
import NavBar from './Components/Navbar'

function App() {
  return (
    <>
      <NavBar />
      <Switch>
          <Route path='/' exact component={Blogs}/>
          <Route path='/create' component={CreateBlogPost}/>
      </Switch>
    </>
  );
}

export default App;
