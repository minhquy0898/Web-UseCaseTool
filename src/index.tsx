import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/style.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { Store, sagaMiddleware } from './redux/store'
import { rootSaga } from './redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { _signInSuccess } from './redux/user/auth';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
sagaMiddleware.run(rootSaga);
// ---------------handle user state
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user)
    Store.dispatch(_signInSuccess({
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoUrl: user.photoURL,
      emailVerified: user.emailVerified
    }))
  }else{
    console.log("no login")
  }
})

//-------------- render 
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
