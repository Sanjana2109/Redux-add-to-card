import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from './redux/Actions'

function CardDetails() {
  const data = useSelector(state => state.add.items)
  const dispatch = useDispatch()
  const handleRemove = (val) => {
    dispatch(removeFromCart(val))
  }

  return (
    <div className='container mt-2'>
      <h2 className='text-center'>items detail page</h2>
      {data.map((val, index) => {

        return (<>
          <section className='container mt-3'>
            <div className='iteamsdetails'>
              <div className='items_img'>
                <img src={val.imgdata} alt='' />
              </div>
              <div className='details'>
                <Table>
                  <tr>
                    <td>
                      <p><strong>Restaurant: </strong>{val.rname}</p>
                      <p><strong>Price: </strong>{val.price}</p>
                      <p><strong>Dishes: </strong>{val.address}</p>
                      <p><strong>Total: </strong>350</p>
                    </td> <td>
                      <p><strong>Rating: </strong><span style={{ backgroundColor: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{val.rating} ★</span></p>
                      <p><strong>Order review: </strong><span>{val.somedata}</span></p>
                      <p><strong>Remove: </strong><span><i className='fas fa-trash' style={{ color: "red", fontSize: "20px", cursor: "pointer" }} onClick={()=>handleRemove(val)}></i></span></p>
                    </td>
                  </tr>
                </Table>
              </div>
            </div>
          </section>
        </>)
      })}

    </div>
  )
}

export default CardDetails
