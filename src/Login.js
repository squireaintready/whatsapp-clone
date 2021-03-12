import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import { actionTypes } from './Reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((res) =>{
                dispatch({
                    type: actionTypes.SET_USER,
                    user: res.user,
                })
            })
            .catch(e => alert(e.message))
    }
    return (
        <div className='login'>
            <div className='login__container'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1280px-WhatsApp.svg.png' alt='' />
                <div className='login__text'>
                    <h1>Sign in to chat</h1>
                </div>

                <Button onClick={signIn}>
                    Sign In With Google
               </Button>
            </div>
        </div>
    )
}

export default Login
