import { useState, useCallback } from 'react';
// import ErrorModal from '../Design/UIElements/ErrorModal';
export const useRequest = ()=>
{
    const [isLoading,setisLoading] = useState(false);
    const [isError,setisError] = useState('')

    const sendRequest = useCallback(
        async (url,method='GET',body = null,headers={})=>
    {
        setisLoading(true)
        try{
        const response  = await fetch(url,{method,body,headers})
        const responseData = await response.json();
          if(!response.ok)
          {
            console.log(responseData)
            setisError(responseData)
              throw new Error(responseData.message)
          }
          
          setisLoading(false)
          return responseData
        }
    
    catch(err){
        setisError(err.message)
        setisLoading(false)
        throw err;
    }
    },[])

    const clearError = ()=>
    {
        setisError(null)
    }

    
    return {isLoading,isError,sendRequest,clearError}
}