import React, { useState } from "react";
import { NewUserContainer } from "../containers/index";
// import { useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';
import { useDb } from "../../contexts/DbContext";
import Modal from 'react-bootstrap/Modal';

import avatars11 from '../../assets/app-assets/images/portrait/small/avatar-s-11.jpg';
import logo from '../../assets/app-assets/images/logo/logo.png';
import decoreleft from '../../assets/app-assets/images/elements/decore-left.png';
import decoreright from '../../assets/app-assets/images/elements/decore-right.png';
import qr from '../../assets/app-assets/images/icons/qr.png';
import qrImage from '../../assets/app-assets/images/qr.png';
import calendario from '../../assets/app-assets/images/icons/calendario.png';
import almuerzo from '../../assets/app-assets/images/icons/almuerzo.png';
import almuerzo2 from '../../assets/app-assets/images/icons/almuerzoo.png';
import menu from '../../assets/app-assets/images/icons/menu.png';


import '../../assets/app-assets/css/core/menu/menu-types/vertical-menu.css';
import '../../assets/app-assets/css/core/colors/palette-gradient.css';
import '../../assets/app-assets/css/pages/dashboard-analytics.css';
import '../../assets/app-assets/css/pages/card-analytics.css';
import '../../assets/app-assets/css/plugins/tour/tour.css';

const HomeView = (props) => {
    // const { email } = props;

    const { signout } = useAuth();
    const { userInfo, handlelogout } = useDb();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showqr, setShowQr] = useState(false);
    const handleShowQr = () => setShowQr(true);
    const handleCloseQr = () => setShowQr(false);

    async function handleSignout() {
        handlelogout();
        await signout();
    }

    if (userInfo && userInfo.hasLoggedIn) {
        return (
            <body className="vertical-layout vertical-menu-modern 2-columns  navbar-floating footer-static  " data-open="click" data-menu="vertical-menu-modern" data-col="2-columns">

                <nav className="header-navbar navbar-expand-lg navbar navbar-with-menu floating-nav navbar-light navbar-shadow">
                    <div className="navbar-wrapper">
                        <div className="navbar-container content">
                            <div className="navbar-collapse" id="navbar-mobile">
                                <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                                    <ul className="nav navbar-nav">
                                        <li className="nav-item mobile-menu d-xl-none mr-auto"><a className="nav-link nav-menu-main menu-toggle hidden-xs" href='/'><i className="ficon feather icon-menu"></i></a></li>
                                    </ul>


                                </div>
                                <ul className="nav navbar-nav float-right">

                                    <li className="dropdown dropdown-user nav-item"><a className="dropdown-toggle nav-link dropdown-user-link" href='/' data-toggle="dropdown">
                                        <div className="user-nav d-sm-flex d-none"><span className="user-name text-bold-600">Kevin Briones</span><span className="user-status">Activo</span></div><span><img className="round" src={avatars11} alt="avatar" height="40" width="40" /></span>
                                    </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="auth-login.html"><i className="feather icon-power"></i> Cerrar Sesión</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav flex-row">
                            <li className="nav-item mr-auto"><a className="navbar-brand" href="html/ltr/vertical-menu-template/index.html">
                                <div className="brand-logo"><img alt="Logo" src={logo} width="100%" height="auto" /></div>
                            </a></li>
                            <li className="nav-item nav-toggle"><a href='/' className="nav-link modern-nav-toggle pr-0" data-toggle="collapse"><i className="feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"></i><i className="toggle-icon feather icon-disc font-medium-4 d-none d-xl-block collapse-toggle-icon primary" data-ticon="icon-disc"></i></a></li>
                        </ul>
                    </div>
                    <div className="shadow-bottom"></div>
                    <div className="main-menu-content">
                        <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                            <li className="nav-item active"><a href="index.html"><i className="feather icon-home"></i><span className="menu-title" data-i18n="Inicio">Inicio</span></a>
                            </li>
                            <li className=" nav-item"><a href="pedidos.html"><i className="feather icon-shopping-cart"></i><span className="menu-title" data-i18n="Chat">Pedidos</span></a>
                            </li>
                            <li className=" nav-item"><a href="app-chat.html"><i className="feather icon-list"></i><span className="menu-title" data-i18n="Chat">Historial</span></a>
                            </li>
                            <li className=" nav-item"><a href="codigoqr.html"><i className="feather icon-grid"></i><span className="menu-title" data-i18n="Chat">Código QR</span></a>
                            </li>
                            <li className="nav-item"><a href="comunicados.html"><i className="feather icon-grid"></i><span className="menu-title" data-i18n="Chat">Comunicados</span></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="app-content content">
                    <div className="content-overlay"></div>
                    <div className="header-navbar-shadow"></div>
                    <div className="content-wrapper">
                        <div className="content-header row">
                        </div>
                        <div className="content-body">
                            <section id="dashboard-analytics">
                                <div className="row">
                                    <div className="col-lg-6 col-12 col-12">
                                        <div className="card bg-analytics text-white">
                                            <div className="card-content">
                                                <div className="card-body text-center">
                                                    <img src={decoreleft} className="img-left" alt="card-img-left" />
                                                    <img src={decoreright} className="img-right" alt="card-img-right" />
                                                    <div className="avatar avatar-xl bg-primary shadow mt-0">
                                                        <div className="avatar-content">
                                                            <i className="feather icon-user white font-large-1"></i>
                                                        </div>
                                                    </div>
                                                    <div className="text-center">
                                                        <h1 className="mb-2 text-white">Hola Kevin</h1>
                                                        <p className="m-auto w-75">Empresa: NIRSA</p><br />
                                                        <p className="m-auto w-75">Estamos muy contentos de que seas parte de esta comunidad, Aquí encontrarás un resumen de tu cuenta</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-12">
                                        <div className="card">
                                            <div className="card-header d-flex flex-column align-items-start pb-0">
                                                <div className="avatar bg-rgba-primary1 p-50 m-0">
                                                    <div className="avatar-content">
                                                        <i className="feather icon-users text-primary font-medium-5"></i>
                                                    </div>
                                                </div>
                                                <p className="mb-0">Tu pedido de hoy</p>
                                                <h2 className="text-bold-700 mt-1 mb-25">Dieta</h2>
                                                <p className="mb-0">Recuerda que puedes cancelar tu pedido de hoy hasta las 10:00 am.</p>
                                            </div>

                                            <div className="card-content">
                                                <div className="col-12">
                                                    <button type="button" onClick={handleShow} className="btn btn-primary1 ms-1" data-toggle="modal" data-target="#exampleModalCenter-cancelar">
                                                        Cancelar
                                                    </button>
                                                    <Modal centered show={show} onHide={handleClose}>
                                                        <div className="" role="dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h5 className="modal-title" id="exampleModalCenterTitle">Cancelar</h5>
                                                                    <button type="button" onClick={handleClose} className="close" data-dismiss="modal" aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <p>¿Estas seguro de que deseas cancelar tu pedido?</p>
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <a href='/'><div className="btn btn-primary">Sí, cancelar.</div></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Modal>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-12">
                                        <div className="card">
                                            <div className="card-header d-flex flex-column align-items-start pb-0">
                                                <div className="avatar bg-rgba-warning p-50 m-0">
                                                    <div className="avatar-content">
                                                        <img src={qr} alt="qr" width="50px" />
                                                    </div>
                                                </div>
                                                <p className="mb-0"><br /></p>
                                                <h2 className="text-bold-700 mt-1 mb-25">Código QR</h2>
                                                <p className="mb-0">Obtén acceso para consultar tu código QR</p>
                                            </div>
                                            <div className="card-content">
                                                <div className="col-12">


                                                    <button type="button" onClick={handleShowQr} className="btn btn-primary2 mr-1" data-toggle="modal" data-target="#qr">
                                                        Ver código QR
                                                    </button>
                                                    <Modal centered show={showqr} onHide={handleCloseQr}>
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalCenterTitle">Kevin aquí esta tu código QR</h5>
                                                                <button type="button" onClick={handleCloseQr} className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <p>Presenta este código en el comedor para registrar y solicitar tu almuerzo:<br />
                                                                    Ingresa desde tu teléfono a <b>delinirsa.com</b> para descargarlo.<br /><br />
                                                                    <img src={qrImage} alt="png" width="100%" /><br /><br />
                                                                    Click aquí para enviar este código a tu correo, luego utiliza la aplicación de Outlook en tu teléfono para     descargarlo.
                                                                </p>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-primary" data-dismiss="modal">Enviar</button>
                                                            </div>
                                                        </div>
                                                    </Modal>
                                                    <div className="modal fade" id="qr" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                        <div className="modal-dialog modal-dialog-centered modal-dialog-centered modal-dialog-scrollable" role="document">

                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="row">

                                    <div className="col-lg-3 col-md-6 col-12">
                                        <div className="card">
                                            <div className="card-header d-flex flex-column align-items-start pb-0">
                                                <div className="avatar bg-rgba-primary p-50 m-0">
                                                    <div className="avatar-content">
                                                        <img src={calendario} width="50px" alt="calendario" />
                                                    </div>
                                                </div>
                                                <h2 className="text-bold-700 mt-1 mb-25">20</h2>
                                                <p className="mb-0">Almuerzos solicitados en este periodo</p>
                                                <p className="mb-0">Se considera un periodo desde el 21 de cada mes al 20 del mes siguiente</p>
                                            </div>
                                            <div className="card-content">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-12">
                                        <div className="card">
                                            <div className="card-header d-flex flex-column align-items-start pb-0">
                                                <div className="avatar bg-rgba-warning p-50 m-0">
                                                    <div className="avatar-content">
                                                        <img src={almuerzo} width="60px" alt="almuerzo" />
                                                    </div>
                                                </div>
                                                <h2 className="text-bold-700 mt-1 mb-25">16</h2>
                                                <p className="mb-0">Almuerzos consumidos</p>
                                            </div>
                                            <div className="card-content">
                                                <div className="col-12">
                                                    <button type="button" onClick={handleShow} className="btn btn-primary mr-1">
                                                        Cancelar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-12">
                                        <div className="card">
                                            <div className="card-header d-flex flex-column align-items-start pb-0">
                                                <div className="avatar bg-rgba-warning p-50 m-0">
                                                    <div className="avatar-content">
                                                        <img src={almuerzo2} width="60px" alt="almuerzo" />
                                                    </div>
                                                </div>
                                                <h2 className="text-bold-700 mt-1 mb-25">4</h2>
                                                <p className="mb-0">Almuerzos por consumir</p>
                                            </div>
                                            <div className="card-content">
                                                <div className="col-12">

                                                    <button type="button" onClick={handleShow} className="btn btn-primary mr-1">
                                                        Cancelar
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-12">
                                        <div className="card">
                                            <div className="card-header d-flex flex-column align-items-start pb-0">
                                                <div className="avatar bg-rgba-warning p-50 m-0">
                                                    <div className="avatar-content">
                                                        <img src={menu} width="60px" alt="menu" />
                                                    </div>
                                                </div>
                                                <h2 className="text-bold-700 mt-1 mb-25">Menú del día</h2>
                                                <p className="mb-0">
                                                    Dieta: Ensalada cesar<br />
                                                    Regular: <br />
                                                    Op1: Sopa de pollo y seco<br />
                                                    Op2: Sancocho y menestra con carne
                                                </p>
                                            </div>
                                            <div className="card-content">
                                            </div>
                                        </div>
                                    </div>
                                </div>




                            </section>
                        </div>
                    </div>
                </div>


                <div className="sidenav-overlay"></div>
                <div className="drag-target"></div>


                <footer className="footer footer-static footer-light">
                    <p className="clearfix blue-grey lighten-2 mb-0"><span className="float-md-left d-block d-md-inline-block mt-25">COPYRIGHT &copy; 2022<a className="text-bold-800 grey darken-2" href="https://1.envato.market/pixinvent_portfolio">NIRSA</a> Todos los derechos reservados </span><span className="float-md-right d-none d-md-block">BY NIVEK</span>
                        <button className="btn btn-primary btn-icon scroll-top" type="button"><i className="feather icon-arrow-up"></i></button>
                    </p>
                </footer>

            </body>
        );
    } else if (userInfo && ~userInfo.hasLoggedIn) {
        return (
            <div>
                <NewUserContainer />
            </div>
        )
    }
    return <div>Loading...</div>
}

export default HomeView;