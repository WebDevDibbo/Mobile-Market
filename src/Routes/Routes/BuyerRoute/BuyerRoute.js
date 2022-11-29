import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useBuyer from '../../../hook/useBuyer';
import Loading from '../../../pages/shared/Loading/Loading';


 const BuyerRoute = ({children}) => {
    const {user,loading}  = useContext(AuthContext);
    const [isBuyer,isBuyerLoading] = useBuyer(user?.email);
    console.log('isBuyer',isBuyer,isBuyerLoading);
    const location = useLocation();
    if(loading || isBuyerLoading){
        
        return <Loading></Loading>
    }
    
    if(user && isBuyer) {
        return children;
    }
    <Navigate to='/login' state={{from:location}} replace></Navigate>
}
export default BuyerRoute;