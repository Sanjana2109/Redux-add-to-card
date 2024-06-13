import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Table } from "react-bootstrap";
import Badge from '@mui/material/Badge';
import { NavLink } from "react-router-dom";
import Menu from '@mui/material/Menu';
import { useDispatch, useSelector } from "react-redux";
import {removeFromCart} from "./redux/Actions"

export default function Header() {
    const dispatch = useDispatch()
    const data = useSelector(state => state.add.items)
    const [total,settotal]=useState()
    
    useEffect(()=>{
        let count=0;
        data.map(val=> count=(val.price*val.qnty)+count)
        settotal(count)
    })

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    return (<>
        <Navbar bg="dark" data-bs-theme="dark" style={{ height: "60px" }}>
            <Container>
                <NavLink to="/" className="text-decoration-none text-light mx-3">Add to cart</NavLink>
                <Nav className="me-auto">
                    <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
                </Nav>
                <Badge badgeContent={data.length} color="primary" style={{ fontSize: "24px", cursor: "pointer" }} id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                    <i class="fa-solid fa-cart-shopping text-light"> </i>
                </Badge>
            </Container>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {data.length ?
                    <div className="card_details" style={{ width: "24rem", padding: "10px" }}>
                        <Table>
                            <thead>
                                <tr>
                                    <th>
                                        Photo
                                    </th>
                                    <th>
                                        Reastarant name
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(e => {
                                    return (<>
                                        <tr>
                                            <td>
                                              <NavLink to={`/cart/${e.id}`}> <img src={e.imgdata} alt="" style={{ height: "5rem", width: "5rem" }} onClick={handleClose} /></NavLink>
                                               
                                            </td>
                                            <td>
                                                <p>{e.rname}</p>
                                                <p>Price: ₹{e.price}</p>
                                                <p>Quantity: {e.qnty}</p>
                                                <p style={{ color: "red", fontSize: "20px", cursor: "pointer" }}>
                                                    <i className='fas fa-trash smalltrash' ></i>
                                                </p>
                                            </td>
                                            <td className="mt-5">
                                                <i onClick={()=>{dispatch(removeFromCart(e))}} className='fas fa-trash largetrash' style={{ color: "red", fontSize: "20px", cursor: "pointer" }} ></i>
                                            </td>
                                        </tr>
                                    </>)
                                })}
                            </tbody>
                        </Table>
                    </div> :
                    <div className="card_details d-flex justify-content-center align-items-center" style={{ width: "24rem", padding: "10px", position: "relative" }}>
                        <i className="fas fa-close smallclose" style={{ position: "absolute", top: "2px", right: "20px", fontSize: "23px", cursor: "pointer" }} onClick={() => setAnchorEl(null)}></i>
                        <p style={{ fontSize: "22px" }}>
                            your cart is empty
                        </p>
                        <img src="./cart.gif" alt="" className="emptycart_img" style={{ width: "5rem", padding: "10px" }} />
                    </div>
                }
                <p className="text-center">Total: ₹{total}</p>
            </Menu>
        </Navbar>
    </>)
}