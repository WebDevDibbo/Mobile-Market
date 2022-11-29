import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useSeller from '../../../hook/useSeller';
import Loading from '../../../pages/shared/Loading/Loading';


 const SellerRoute = ({children}) => {
    const {user,loading}  = useContext(AuthContext);
    const [isSeller,isSellerLoading] = useSeller(user?.email);
    console.log('isSeller',isSeller,isSellerLoading);
    const location = useLocation();
    if(loading || isSellerLoading){
        
        return <Loading></Loading>
    }
    
    if(user && isSeller) {
        return children;
    }
    <Navigate to='/login' state={{from:location}} replace></Navigate>
}
export default SellerRoute;