import React from 'react'
import { Table } from 'react-bootstrap'

function CardDetails() {
  return (
    <div className='container mt-2'>
      <h2 className='text-center'>items detail page</h2>

      <section className='container mt-3'>
        <div className='iteamsdetails'>
          <div className='items_img'>
            <img src='https://b.zmtcdn.com/data/pictures/7/19639627/94c0a4cf15c02d3982d154e2c5dd8cbb_o2_featured_v2.jpg' alt='' />
          </div>
          <div className='details'>
    <Table>
      <tr>
        <td>
          <p><strong>Restaurant: </strong>dosa</p>
          <p><strong>Price: </strong>350</p>
          <p><strong>Dishes: </strong>punjabi, chinese, dosa</p>
          <p><strong>Total: </strong>350</p>
        </td> <td>
          <p><strong>Rating: </strong><span style={{backgroundColor:"green", color:"#fff",padding:"2px 5px", borderRadius:"5px"}}>3.5 ★</span></p>
          <p><strong>Order review: </strong><span>oerders placed recently</span></p>
          <p><strong>Remove: </strong><span><i className='fas fa-trash' style={{color:"red", fontSize:"20px", cursor:"pointer"}}></i></span></p>
        </td>
      </tr>
    </Table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CardDetails
