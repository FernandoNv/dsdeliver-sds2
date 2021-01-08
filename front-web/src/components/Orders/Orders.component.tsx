import { useEffect, useState } from 'react';
import { fetchProducts } from '../../api';
import OrderLocation from './OrderLocation/OrderLocation.component';
import './Orders.styles.css';
import ProductsList from './ProductsList/ProductsList.component';
import StepsHeader from './StepsHeader/StepsHeader.component';
import { OrderLocationData, Product } from './types';

function Orders(){
    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    
    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error));
    }, []);

    return(
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products = {products} />
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
        </div>
    );
}

export default Orders;