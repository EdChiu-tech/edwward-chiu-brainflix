import React from "react";
import { Link } from "react-router-dom"
import logo from "../../assets/logo/Logo-brainflix.svg"
import avatar from "../../assets/images/Mohan-muruge.jpg"
import upload from "../../assets/icons/Icon-upload.svg"
import "./Header.scss"


function Header() {
    return (
        <header className="header">
            <section className="header__logo-container">
                <Link to="/">
                    <img className="header__logo-image" src={logo} alt="brainflix logo" />
                </Link>
            </section>
            <section className="header__form-container">
                <form className="header__form">
                    <label className="header__form-heading" htmlFor="search"></label>
                    <input className="header__form-input" type="text" id="search" name="search" placeholder="Search">
                    </input>
                </form>
            </section>
            <section className="header__button-container">
                <Link to="/upload_page/" className="header__button">
                    <img className="header__button-icon" src={upload} alt="upload icon"></img>
                    UPLOAD
                </Link>
                <div className="header__avatar-container">
                    <img className="header__avatar" src={avatar} alt="user avatar" />
                </div>
            </section>
        </header>
    )
}

export default Header