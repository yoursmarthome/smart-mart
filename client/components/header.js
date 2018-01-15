import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../store'

function Header (props) {
	const {isLoggedIn, handleLogoutClick} = props;
  return (
    <header id="header">
		<div className="header_top">
			<div className="container">
				<div className="row">
					<div className="col-sm-6">
						<div className="contactinfo">
							<ul className="nav nav-pills">
								<li><a href="#"><i className="fa fa-envelope" />Contact Us: info@smart-mart.com</a></li>
							</ul>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="social-icons pull-right">
							<ul className="nav navbar-nav">
								<li><a href="#"><i className="fa fa-facebook" /></a></li>
								<li><a href="#"><i className="fa fa-twitter" /></a></li>
								<li><a href="#"><i className="fa fa-linkedin" /></a></li>
								<li><a href="#"><i className="fa fa-dribbble" /></a></li>
								<li><a href="#"><i className="fa fa-google-plus" /></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="header-middle">
			<div className="container">
				<div className="row">

					<div className="col-md-4 clearfix">
						<div className="logo pull-left">
							<Link to="/"><h1 className="logo">Smart-Mart</h1></Link>
						</div>
					</div>

					<div className="col-md-8 clearfix">
						<div className="shop-menu clearfix pull-right">
							<ul className="nav navbar-nav">
								<li><Link to="/"><i className="fa fa-user" /> Products</Link></li>
								<li><Link to="/home"><i className="fa fa-user" /> Account</Link></li>
								<li><Link to="/checkout"><i className="fa fa-crosshairs" /> Checkout</Link></li>
								<li><Link to="/cart"><i className="fa fa-shopping-cart" /> Cart <span className="badge">
								{
									props.cart.length ?
									props.cart.reduce((itemCount, item) => {
										itemCount += item.quantity
										return itemCount
									}, 0) :
									'0'
								}
								</span></Link></li>
								{
									isLoggedIn ?
									<li><a onClick={() => handleLogoutClick()} className="logout-link"><i className="fa fa-lock" /> Logout</a></li> :
									<li><Link to="/login"><i className="fa fa-lock" /> Login</Link></li>
								}

							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
  )
}

const mapState = (state) => {
  return {
		cart: state.cart.myCart,
		isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleLogoutClick () {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Header)
