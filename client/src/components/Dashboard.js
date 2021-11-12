import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom'
import { currentUser, logout } from "../JS/actions/user"
import ListArticl from '../components/articl/ListArticl'
import Home2 from './home2/home2'
import { currentArticl, getArticls } from '../JS/actions/articlAction'

const Dashboard = () => {
    const dispatch = useDispatch()
    const history = useHistory()
  

    
    const loading = useSelector(state => state.userReducer.loading)
    
    useEffect(() => {
        dispatch(currentUser())
        dispatch(currentArticl())
    }, [])
    
    return (
        <div>
            <button onClick={() => { dispatch(logout()); history.push("/login") }}>logout</button>
            <button onClick={() => { dispatch(getArticls()); history.push("/listes") }}>ARTICLES</button>
            {/* {loading ? <h1>loading...</h1> :<ListArticl/> } */}
              {loading ? <h1>loading...</h1> :<Home2/> }
        </div>
    )
}

export default Dashboard
