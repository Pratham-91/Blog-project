import React ,{useEffect,useState}from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Protected({children,authentication = true}){

    const navigate = useNavigate()
    const [loader,setLoader] = useState(true)
    const authStatus = useSelector(state=> state.auth.status)

    useEffect(()=>{

        // easier one --->
        // if(authStatus ===true){
        //     navigate("/")
        // }else if(authStatus === false){
        //     navigate("/login")
        // }

        // let authValue = authStatus === true ? true :false

        // TODO: it is a bit complicated , in the end make it more easy 
        if(authentication && authStatus !== authentication){
            navigate('/login')
        }else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    },[authStatus,navigate,authentication])

    return loader ? <h1>loading...</h1> : <>{children}</>
}