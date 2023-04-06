import Home from './components/Home';
import NewPost from './components/NewPost';
import EditPost from './components/EditPost';
import PostPage from './components/PostPage';
import About from './components/About';
import Missing from './components/Missing';
import Layout from './components/Layout';
import {Route ,Routes} from 'react-router-dom';
import {useEffect} from 'react';
import useAxiosFetch from './hooks/useAxiosFetch';
import {useStoreActions} from 'easy-peasy';

const App = ()=> {

  const {data,fetchError,isLoading} = useAxiosFetch("http://localhost:3500/posts");
  const setPosts = useStoreActions((actions)=>actions.setPosts);
   
  useEffect(()=>{
    setPosts(data);
  },[data,setPosts])

  return (
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home isLoading = {isLoading} fetchError = {fetchError} />} />
            <Route path="post" element={<NewPost />} />
            <Route path="/post/:id" element={<PostPage />} />
              <Route path="post/:id/edit/:id" element={<EditPost />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<Missing />} />
            </Route>
      </Routes>
  );
}

export default App;
