import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const CategoryData = () => {
    
     const data = useLoaderData()
  

    
    
    return (
        <section className='grid gap-10 grid-cols-1 lg:grid-cols-4 my-10 w-[90%] mx-auto'>
            {
                data.map(v => <Card key={v._id} obj={v} />)
            }
         </section>
    );
};

export default CategoryData;