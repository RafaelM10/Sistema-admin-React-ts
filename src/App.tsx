import React from 'react';
import './App.css';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList, UserCreate, UserEdit  } from "./users/index";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource 
      name='users' 
      list={UserList} 
      create={UserCreate} 
      edit={UserEdit} />
    </Admin>
  );
}

export default App;
