import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Mobiles from '../../Mobiles.js/Mobiles';

const PhonesCollection = () => {

    const data = useLoaderData();
   console.log(data)
    
   
    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8'>
        {
            data.map(phone => <Mobiles key={phone._id}
                     phones = {phone}
            >   
            </Mobiles>)
        }
        </div>
        
        </>
    );
};

export default PhonesCollection;