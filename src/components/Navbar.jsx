import { AppBar } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import AddPlanBtn from './AddPlanBtn'

function Navbar() {

    return (

            <AppBar position='static'>
        <nav className="nav-wrapper py-2">
                   <div className="container justify-content-between d-flex">
                <div className="text-center">
                    <Link to='/' className='brand-logo text-decoration-none text-light display-6'>Worklist</Link>
                </div>
                <div className='my-auto' >
                    <AddPlanBtn />
                </div>
            </div>
         
        </nav>
            </AppBar>
    )
}

export default Navbar;