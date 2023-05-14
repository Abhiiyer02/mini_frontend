import React, {useState, useCallback, useContext} from 'react'
import { AppBar, Button } from '@mui/material'
import ElectiveCard from '../../components/ElectiveCard'
import SortableList from '../../components/SortableList'

import AuthContext from '../../context/AuthContext'

const StudentPage = () => {
  const {user} = useContext(AuthContext)

  const student =

  const [items, setItems] = useState([
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
  ]);
  
  const handleSort = useCallback(newItems => {
    setItems(newItems);
  }, []);

  return (
    <div>
      <AppBar position = "static">
        <h1>Welcome {}</h1>
        <Button variant = "contained" color = "primary">Logout</Button>
      </AppBar>
      {/* <ElectiveCard electiveName = "Open Elective 1"/> */}

      <SortableList items={items} onSort={handleSort} />
    </div>
  )
}

export default StudentPage