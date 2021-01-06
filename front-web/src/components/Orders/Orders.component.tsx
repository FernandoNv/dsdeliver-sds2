import { useEffect, useState } from 'react';
import { fetchProducts } from '../../api';
import './Orders.styles.css';
import ProductsList from './ProductsList/ProductsList.component';
import StepsHeader from './StepsHeader/StepsHeader.component';
import { Product } from './types';

function Orders(){
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error));
    }, []);

    return(
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products = {products} />
        </div>
    );
}

export default Orders;