import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../hook/useAdmin';
import useBuyer from '../hook/useBuyer';
import useSeller from '../hook/useSeller';
import Footer from '../pages/shared/Footer/Footer';
import Loading from '../pages/shared/Loading/Loading';
import Navbar from '../pages/shared/Navbar/Navbar';

const DashBoardLayout = () => {
  const {user,loading}  = useContext(AuthContext)
  const [isAdmin]  = useAdmin(user?.email) ;
  const [isSeller]  = useSeller(user?.email) ;
  const [isBuyer]  = useBuyer(user?.email) ;
  if(loading){
    return <Loading></Loading>
  }
 
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
   <Outlet></Outlet>  
  </div> 
  <div className="drawer-side bg-slate-200">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80  text-base-content">
      
      {isBuyer && 
      <li> <Link to ='/dashboard/myorders'>My Orders</Link> </li>
      }

      {isSeller && <li><Link to = '/dashboard/addproduct'>Add A Product</Link></li>}
      {isAdmin && <li><Link to = '/dashboard/allUsers'>All Users</Link></li>}
      {isSeller &&  <li><Link to = '/dashboard/myproducts'>My Products</Link></li>}
      
    </ul>
  
  </div>
</div>
            <Footer></Footer>
        </div>
    );
};

export default DashBoardLayout;