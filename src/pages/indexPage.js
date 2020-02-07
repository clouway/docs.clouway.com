import React, {Component} from 'react'

import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'

class IndexPage extends Component {
    render() {
        const { navigate, location, products, button, title } = this.props;

        if(!products) {
            return null;
        }

        return (
            <Layout navigate={navigate} location={location}>
                <div>
                    <br/>
                    <p className='text-center text-blue-700 font-bold text-3xl sm:text-4xl'>
                        {title}
                    </p>
                    <div className='flex flex-col sm:flex-row'>
                        {
                            products.map((product, i) => (
                                <ProductCard
                                    key={i}
                                    icon={product.icon}
                                    image={product.image}
                                    productName={product.name}
                                    title={product.title}
                                    addition={product.addition}
                                    description={product.description}
                                    url={product.url}
                                    button={button}
                                />
                            ))
                        }
                    </div>
                </div>
            </Layout>
        )
    }
}

export default IndexPage
