import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Badge from '@mui/material/Badge';
import { NavLink } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
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
                <Badge badgeContent={4} color="primary" style={{ fontSize: "24px", cursor: "pointer" }} id="basic-button"
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
                <div className="card_details">
                    <i className="fas fa-close"></i>
                    <p>
                    your cart is empty
                    </p>
                </div>
            </Menu>
        </Navbar>
    </>)
}