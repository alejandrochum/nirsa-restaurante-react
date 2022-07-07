import logoadmnilog from '../../assets/images/logoadminlog.png';
import login from '../../assets/images/login-dos.png';

import { useRef, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useDb } from '../../contexts/DbContext';

const NewUserView = (props) => {

    const { updatepassword, signout } = useAuth();
    const { firstpasschange, hasloggedintotrue } = useDb();

    const passwordRef = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setLoading(true);
            await updatepassword(passwordRef.current.value);
            await firstpasschange();
            setSuccess(true);
        } catch (error) {
            if (error.code === 'auth/requires-recent-login') {
                alert('Su sesion ha expirado, por favor inicia sesion nuevamente');
                await signout();
            }
            if (error.code === 'auth/weak-password') {
                alert('La contraseña es muy corta');
            }
        }
        setLoading(false);
    }

    if (success) {
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
                                <div className="col-xl-7 col-md-9 col-10 d-flex justify-content-center px-0">
                                    <div className="card bg-authentication rounded-0 mb-0" style={{ backgroundColor: '#F7BA09' }}>
                                        <div className="row m-0">
                                            <div className="col-lg-6 d-lg-block d-none text-center align-self-center">
                                                <img src={login} alt="branding logo" width="320px;" />
                                            </div>
                                            <div className="col-lg-6 col-12 p-0">
                                                <div className="card rounded-0 mb-0 px-2 py-1">
                                                    <div className="card-header pb-1">
                                                        <div className="card-title">
                                                            <h4 className="mb-0">!Felicidades!</h4>
                                                        </div>
                                                    </div>
                                                    <p className="px-2 mb-0">Tu nueva contraseña ha sido registrada actualizada exitosamente. <br />Ahora da click en el botón ingresar.</p>

                                                    <div className="card-content">
                                                        <div className="card-body">

                                                            <div className="float-md-right d-block mb-1">
                                                                <button onClick={hasloggedintotrue} className="btn btn-primary btn-block px-75">Ingresar</button>
                                                            </div>

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
        )
    }
    return <>
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
                            <div className="col-xl-7 col-md-9 col-10 d-flex justify-content-center px-0">
                                <div className="card bg-authentication rounded-0 mb-0" style={{ backgroundColor: '#F7BA09' }}>
                                    <div className="row m-0">
                                        <div className="col-lg-6 d-lg-block d-none text-center align-self-center">
                                            <img src={login} alt="branding logo" width="320px;" />
                                        </div>
                                        <div className="col-lg-6 col-12 p-0">
                                            <div className="card rounded-0 mb-0 px-2 py-1">
                                                <div className="card-header pb-1">
                                                    <div className="card-title">
                                                        <h4 className="mb-0">Ingresa tu nueva contraseña</h4>
                                                    </div>
                                                </div>
                                                <p className="px-2 mb-0">Cambia tu contraseña para mayor seguridad.<br />Te recomendamos utilizar una contraseña segura que puedas recordar</p>
                                                <div className="card-content">
                                                    <div className="card-body">
                                                        <form onSubmit={handleSubmit}>
                                                            <div className="form-label-group">
                                                                <input type="password" id="inputEmail" ref={passwordRef} className="form-control" placeholder="Escribe tu nueva contraseña" />
                                                                <label htmlFor="inputEmail">Nueva contraseña</label>
                                                            </div>
                                                            <div className="float-md-right d-block mb-1">
                                                                <button disabled={loading} type='submit' className="btn btn-primary btn-block px-75">Genera tu nueva contraseña</button>
                                                            </div>
                                                        </form>
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
    </>
}

export default NewUserView;