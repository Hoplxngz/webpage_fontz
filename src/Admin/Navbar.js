import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

function Navbar() {

    const loginRegLink = (
        <div className="App">
            <div className="Navbar">
                <NavLink exact to="/" className="NavbarLeft">LogoBrand</NavLink>
                <ul>
                    <NavLink to="/signin" activeClassName="Active" className="NavbarRight">เข้าสู่ระบบ</NavLink>
                    <NavLink to="/signup" activeClassName="Active" className="NavbarRight">ลงทะเบียน</NavLink>
                </ul>

            </div>
        </div >
    )

    // const userLink = (
    //     <div className="App">
    //         <div className="Navbar">
    //             {this.render_type(this.state.get_user ? this.state.get_user.type_user : null)}

    //         </div>
    //     </div >
    // )


    return (
        <div>

            {loginRegLink}

        </div>
    );
}

export default withRouter(Navbar);