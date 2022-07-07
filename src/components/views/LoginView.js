import logoadmnilog from '../../assets/images/logoadminlog.png';
import login from '../../assets/images/login.png';
import React, { useState, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

import '../../assets/app-assets/css/nivek.css';
import '../../assets/app-assets/css/core/menu/menu-types/vertical-menu.css';
import '../../assets/app-assets/css/core/colors/palette-gradient.css';
import '../../assets/app-assets/css/pages/authentication.css';
import '../../assets/assets/css/style.css';


const LoginView = (props) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signin } = useAuth();
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setLoading(true);
            await signin(emailRef.current.value, passwordRef.current.value);
        } catch (error) {
            setLoading(false);
            console.error(error);
            return
        }
        setLoading(false);
        navigate('/');
    }

    return (
        <body className="vertical-layout vertical-menu-modern 1-column  navbar-floating footer-static bg-full-screen-image  blank-page blank-page" data-open="click" data-menu="vertical-menu-modern" data-col="1-column">
            <div className="app-content content">
                <div className="content-overlay"></div>
                <div className="header-navbar-shadow"></div>
                <div className="content-wrapper">
                    <div className="content-header row">
                    </div>
                    <div className="content-body">

                        <div className="logoadmin">
                            <img src={logoadmnilog} width="100%" alt="delinirsalogo" />
                        </div>
                        <section className="row flexbox-container">
                            <div className="col-xl-8 col-11 d-flex justify-content-center">
                                <div className="card .bg-authentication rounded-0 mb-0" style={{ backgroundColor: '#F7BA09' }}>
                                    <div className="row m-0">
                                        <div className="col-lg-6 d-lg-block d-none text-center align-self-center px-1 py-0">
                                            <img src={login} alt="branding logo" width="320px;" />
                                        </div>
                                        <div className="col-lg-6 col-12 p-0">
                                            <div className="card rounded-0 mb-0 px-2">
                                                <div className="card-header pb-1">
                                                    <div className="card-title">
                                                        <h4 className="mb-0">¡Bienvenidos y bienvenidas!</h4>
                                                    </div>
                                                </div>
                                                <div className="card-content">
                                                    <div className="card-body pt-1">
                                                        <form onSubmit={handleSubmit}>
                                                            <fieldset className="form-label-group form-group position-relative has-icon-left">
                                                                <input type="text" className="form-control" id="user-name" ref={emailRef} placeholder="usuario@mail.com" required />
                                                                <div className="form-control-position">
                                                                    <i className="feather icon-user"></i>
                                                                </div>
                                                                <label htmlFor="user-name">Usuario</label>
                                                            </fieldset>

                                                            <fieldset className="form-label-group position-relative has-icon-left">
                                                                <input type="password" className="form-control" id="user-password" ref={passwordRef} placeholder="Contraseña" required />
                                                                <div className="form-control-position">
                                                                    <i className="feather icon-lock"></i>
                                                                </div>
                                                                <label htmlFor="user-password">Contraseña</label>
                                                            </fieldset>
                                                            <div className="form-group d-flex justify-content-between align-items-center">
                                                                <div className="text-left">

                                                                </div>
                                                                <div className="text-right"><a href="recuperar-contrasena-1.html" className="card-link">¿Olvidaste la contraseña?</a></div>
                                                            </div>

                                                            <button disabled={loading} type="submit" className="btn btn-primary float-right btn-inline">Ingresar</button>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="login-footer">
                                                    <div className="divider">
                                                        <div className="divider-text"></div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </body>
    );
}

export default LoginView;