 import React from 'react'
 import { useState,useEffect } from 'react'
 import axios from 'axios'
import Products from './Products';

 function Productfeed({products}){    
    return(
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:cols-4'>            
            {/* {Array.isArray(products)? */}
            
            {products.slice(0,3).map(({id,title,price,description,category,image})=>
            (<Products
                key={products.id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
            />))}

            <img className="md:col-span-full" src="https://links.papareact.com/dyz" alt="" />

            <div className="md-col-span-2 lg:col-span-2">
            {products.slice(3,4).map(({id,title,price,description,category,image})=>
            (<Products
                key={products.id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
            />))}
            </div>

             {products.slice(5,products.legnth).map(({id,title,price,description,category,image})=>
            (<Products
                key={products.id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
            />))}

            

        </div>
    )
 }
 export default Productfeed