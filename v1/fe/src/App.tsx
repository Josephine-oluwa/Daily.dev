import { RouterProvider } from "react-router-dom"
import { mainRoute } from "./Routes/mainRoute"
import {Provider} from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store } from "./Global/Store"
import persistStore from "redux-persist/es/persistStore"


const persistor = persistStore(store)
const App = () => {
  return (
    <div>
      <Provider store ={store}>
   
<PersistGate loading= {null} persistor={persistor}>
  <RouterProvider router={mainRoute} />
</PersistGate>
      </Provider>
   
    </div>
  )
}

export default App

// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <RouterProvider router={mainRoute} />
//     </div>
//   )
// }

// export default App