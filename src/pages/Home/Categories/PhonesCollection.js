import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookModal from '../../BookModal/BookModal';
import Mobiles from '../../Mobiles.js/Mobiles';

const PhonesCollection = () => {
      const [service,setService] = useState(null);
    const data = useLoaderData();
    
    return (
        <section>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8'>
        {
            data.map(phone => <Mobiles key={phone._id}
                     phones = {phone}
                     setService = {setService}
            >   
            </Mobiles>)
        }
        </div>
        { service && 
        <BookModal
        service = {service}
        ></BookModal>}
        </section>
    );
};

export default PhonesCollection;