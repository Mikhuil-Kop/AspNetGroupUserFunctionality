import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './Components/App/App';
import plotTypeReducer from './Redux/plotType/plotTypeReducer';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit"


export const storage = configureStore(
  {
    reducer: {
      plotType: plotTypeReducer,
    }
  }
);
const state = storage.getState();
export const useAppDispatch = useDispatch.withTypes<typeof storage.dispatch>();
export const useAppSelector = useSelector.withTypes<typeof state>();


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={storage}>
    <App/>
  </Provider>

);

