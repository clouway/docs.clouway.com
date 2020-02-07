import React from 'react'
import PropTypes from 'prop-types'

import Link from 'components/Link'

export const ProductCard = ({icon, image, productName, title, addition, description, url, button}) => (
    <div className='w-full sm:w-1/3 p-2'>
        <div className='p-4 bg-gray-100'>
            <p><img className='h-12 m-5 float-left' src={icon}/></p>
            <h1 className='mt-8 text-left text-3xl font-bold text-blue-800'>{productName}</h1>
            <img className='mt-6 rounded-lg shadow-2xl' src={image}/>
            <h1 className='mt-6 text-2xl font-bold text-left'>{title}</h1>
            <div className='mt-2 text-2xl font-bold text-left text-blue-800'>
                {addition}
            </div>
            <p className='h-40 mt-6 text-left text-lg text-gray-600 overflow-auto'>{description}</p>
            <div className='my-4 text-left'>
                <Link to={url}
                      className='px-5 py-2 text-xl text-white rounded-lg shadow-lg inline-block
                      bg-blue-800 hover:text-white hover:bg-blue-700'>
                    {button}
                </Link>
            </div>
        </div>
    </div>
)

ProductCard.propTypes = {
    icon: PropTypes.any.isRequired,
    image: PropTypes.any.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
    addition: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired
};

export default ProductCard
