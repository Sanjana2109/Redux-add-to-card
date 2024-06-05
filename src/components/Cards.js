import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Cardsdata from './CardsData'
import "./style.css"

function Cards() {
  return (
    <div className='container mt-3'>
      <h2 className='text-center'> Add to cart</h2>
      <div className='row d-flex align-items-center justify-content-center'>
        {Cardsdata.map((val, index) => {

          return <>
            <Card style={{ width: '22rem', border:"none" }} id={val.id} className='mx-2 mt-4 card_style'>
              <Card.Img variant="top" src={val.imgdata} style={{height:'16rem'}} className='mt-3'/>
              <Card.Body>
                <Card.Title>{val.rname}</Card.Title>
                <Card.Text>
                 Price: ₹ {val.price}
                </Card.Text>
                <div className='button_div'>
                <Button variant="primary" className='col-lg-12'>Add to cart</Button>
                </div>
              </Card.Body>
            </Card>
          </>
        })

        }

      </div>
    </div>
  )
}

export default Cards
