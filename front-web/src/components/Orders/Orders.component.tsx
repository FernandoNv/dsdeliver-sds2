import { useEffect, useState } from 'react';
import { fetchProducts, saveOrder } from '../../api';
import { toast } from 'react-toastify';
import Footer from '../Footer/Footer.component';
import { checkIsSelected } from './helpers';
import OrderLocation from './OrderLocation/OrderLocation.component';
import OrderSummary from './OrderSummary/OrderSummary.component';
import ProductsList from './ProductsList/ProductsList.component';
import StepsHeader from './StepsHeader/StepsHeader.component';
import { OrderLocationData, Product } from './types';
import './Orders.styles.css';

function Orders(){
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    const totalPrice = selectedProducts.reduce((sum, item) => (sum + item.price), 0);
    
    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => toast.warning('Erro ao listar produto'));
    }, []);

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);
      
        if (isAlreadySelected) {
          const selected = selectedProducts.filter(item => item.id !== product.id);
          setSelectedProducts(selected);
        } else {
          setSelectedProducts(previous => [...previous, product]);
        }
    };

    const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
          ...orderLocation!,
          products: productsIds
        }
      
        saveOrder(payload)
            .then((response) => {
                toast.error(`Pedido enviado com sucesso! N° ${response.data.id}`);
                setSelectedProducts([]);
            })
            .catch(() => {
                toast.warning('Erro ao enviar pedido');
            })
    }

    return(
        <>
            <div className="orders-container">
                <StepsHeader />
                <ProductsList 
                    products = {products} 
                    onSelectProduct = {handleSelectProduct}    
                    selectedProducts = {selectedProducts}
                />
                <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
                <OrderSummary
                    amount = {selectedProducts.length}
                    totalPrice = {totalPrice}
                    onSubmit = {handleSubmit}
                />
            </div>
            <Footer />
        </>
    );
}

export default Orders;