import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Listing() {
    const [products, Setproducts] = useState([])
    const [categories, Setcategories] = useState([])
    const { category_slug } = useParams();

    const getProduct = () => {
        axios.get("https://dummyjson.com/products").then(
            (success) => {
                Setproducts(success.data.products)
            }

        ).catch(
            (error) => {
            console.log(error)
            }
        )
    }

    const getCategory = () => {
      axios.get("https://dummyjson.com/products/categories").then(
        (success) => {
          Setcategories(success.data)
        }
      ).catch(
        (error) => {
          console.log(error)
        }
      )
    }

    useEffect(
      () => {
        if (category_slug != null)
        axios.get(`https://dummyjson.com/products/category/${category_slug}`).then(
          (success) => {
              Setproducts(success.data.products)
          }

      ).catch(
          (error) => {
          console.log(error)
          }
      )
      },
        [category_slug]
    )





    useEffect(
        () => {
        getProduct()
        getCategory()
        },
        []
    )
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className='grid grid-cols-5'>
        <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Category Product</h2>
        <ul>
          {
            categories.map((cat, index) => {
            return(
              <Link key={index} to={`/${cat.slug}`}>
              <li className='shadow mx-4 cursor-pointer hover:bg-cyan-800
               p-2 text-[18px] hover:text-white mt-2'>{cat.name}</li>
              </Link>
            )
            })
          }
        
        </ul>

        </div>
        <div className="mt-6 col-span-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <img
              alt={product.imageAlt}
              src={product.thumbnail}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <Link to={`/detail/${product.id}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.title}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      </div>

     

   
    </div>
  </div>
  )
} 


export default Listing;
