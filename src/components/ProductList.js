import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import Product from "./Product";
import {loaded} from "../redux/product/actions";

const ProductList = () => {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loaded());
    }, [dispatch]);

    return (
        <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
            {
                products.map(product => (
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    );
};

export default ProductList;