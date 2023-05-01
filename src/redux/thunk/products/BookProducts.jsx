import { toast } from "react-hot-toast";
import { productAction } from "../../actions/productAction";



export const bookProductData = (booking) => {
    

    return async (dispatch,getState) =>  {
        const res = await fetch('https://unused-products-server.vercel.app/bookings',{
               method:'POST',
               headers:{'Content-type': 'application/json'},
               body:JSON.stringify(booking)
             });
             const data = await res.json();
             if(data.acknowledged){
                
                toast.success('booking confirmed');
                dispatch(productAction({
                    _id: data.insertedId,
                    ...booking,
                }))
             }
    }
}