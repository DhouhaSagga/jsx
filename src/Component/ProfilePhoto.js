import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function ProfilePhoto() {
  return (
    <div >
        <h1> Welcome To my World</h1>
        <img src="me.png" className='img'/>
         {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="me.png" />
      <Card.Body>
        <Card.Title>Dhouha Sagga</Card.Title>
        <Card.Text>
          Phd Doctor 
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card> */}
    </div>
  )
}

export default ProfilePhoto