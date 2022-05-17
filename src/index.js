import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { SideProvider } from './context/sidebar_context.js'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
import { ModalProvider } from './context/modal_context'
ReactDOM.render(
 <Auth0Provider
  domain={process.env.REACT_APP_AUTH_DOMAIN}
  clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
  redirectUri={window.location.origin}
  cacheLocation="localstorage"
 >
  <UserProvider>
   <SideProvider>
    <CartProvider>
     <ModalProvider>
      <App />
     </ModalProvider>
    </CartProvider>
   </SideProvider>
  </UserProvider>
 </Auth0Provider>,
 document.getElementById('root')
)
