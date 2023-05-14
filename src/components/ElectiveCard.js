import { Button, Card, CardContent } from '@mui/material'
import React from 'react'

const style = {
  main: {
    width: 300,
    height: 250,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
}

const ElectiveCard = (props) => {
  return (
    <Card style = {style.main} elevation = {10}>
      <CardContent>
        <h1>{props.electiveName}</h1>
        <Button>Enroll</Button>
      </CardContent>
    </Card>
  )
}

export default ElectiveCard