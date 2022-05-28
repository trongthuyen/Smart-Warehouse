import {Link} from 'react-router-dom';
import '../styles/Login.css';

const Signup = () => {
    return(
        <div className="Login-container">
            <div className="container">
                <div className="form-box-signup">
                    <div className="header-form">
                        <h3 className="text-primary text-center" style={{margin: "10% 0 5% 0"}}>
                            SIGN UP
                        </h3>
                        <div className="image">
                        </div>
                    </div>
                    <div className="body-form">
                        <form>
                        <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                                    </svg>
                                    </span>
                                </div>
                                <input type="text" className="form-control" placeholder="Email" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                        </svg>
                                    </span>
                                </div>
                                <input type="text" className="form-control" placeholder="Username" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                                        </svg>
                                    </span>
                                </div>
                                <input type="text" className="form-control" placeholder="Password" />
                            </div>
                            <div className='Login-button'>
                            <Link to="../dashboard">
                                <button type="button">
                                    SIGN UP 
                                </button>
                            </Link>
                            </div>
                            <div className='Signup'>
                                <div> Have an account <Link to="../">Log in now!</Link></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>   
        </div>
    );
}

export default Signup