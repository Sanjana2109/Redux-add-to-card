import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import addToCart, { removeFromCart, removeIndividualItem } from './redux/Actions'
import { useParams } from 'react-router-dom'

function CardDetails() {
  const data = useSelector(state => state.add.items)
  const id=useParams()
  const [renderData,filterData] = useState(data)
  const [totalPrice,updatePrice] = useState()
  useEffect(()=>{
    filterData(data.filter(e=> Number(e.id) === Number(id["id"])))
  })
  const dispatch = useDispatch()
  const handleRemove = (val) => {
    dispatch(removeFromCart(val))
  }

  const handleclick= (val) => {
    dispatch(addToCart(val))
  }

  const handledelete= (val) => {
    dispatch(removeIndividualItem(val))
  }

  useEffect(()=>{
    let total=0;
    renderData.map((val)=>{
      total = (val.qnty) * (val.price)
    })
    updatePrice(total)
  })

  return (
    <div className='container mt-2'>
      <h2 className='text-center'>items detail page</h2>
      {renderData.map((val, index) => {

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
                      <p><strong>Price: ₹</strong>{val.price}</p>
                      <p><strong>Dishes: </strong>{val.address}</p>
                      <p><strong>Total: </strong>{totalPrice}</p>
                      <div className='mt-5 d-flex align-items-center justify-content-between' style={{width:"100px",cursor:"pointer",background:"#ddd",color:"#111"}}>
                      <span style={{fontSize:"24px"}} onClick={()=>handledelete(val)}>-</span>
                      <span style={{fontSize:"24px"}}>{val.qnty}</span>
                      <span style={{fontSize:"24px"}} onClick={()=>handleclick(val)}>+</span>
                      </div>
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
