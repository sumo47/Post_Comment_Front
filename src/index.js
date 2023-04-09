import React from 'react';
import { createRoot } from 'react-dom/client';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import LoginPage from './Components/LoginPage'
import CreatePost from './Components/CreatePost'
import GetPost from './Components/getPost'
import GetPostById from './Components/getPostById'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <>
  <BrowserRouter>
  <Routes>
  <Route path = '/' element= {<LoginPage/>}/>
  <Route path = '/CreatePost' element= {<CreatePost/>}/>
  <Route path = '/getPost' element= {<GetPost/>}/>
  <Route path = '/getPost/:postId' element= {<GetPostById/>}/>
  </Routes>
  </BrowserRouter>
  </>
);
