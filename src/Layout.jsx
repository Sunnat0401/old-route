    import React from 'react'
    import { Link, NavLink } from 'react-router-dom'

    const Layout = () => {
    return (
        <div style={{display:"flex" , gap:"150px",alignItems:"center", padding:"0px 10px", }}>
        <h1>Router example</h1>
        <NavLink  style={{ textDecoration:"none", color:"#3d3d3d"}} to={"/home"}>Home</NavLink>
        <NavLink  style={{ textDecoration:"none", color:"#3d3d3d"}} to={"/about"}>About</NavLink>
        <NavLink  style={{ textDecoration:"none", color:"#3d3d3d"}} to={"/contact"}>Contact</NavLink>
        </div>
    )
    }

    export default Layout
