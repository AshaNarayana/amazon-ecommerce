import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
//import data from '../data';
import axios from 'axios';
function HomeScreen (props) {
		const [ products, setProducts] = useState([]); //set to default value
			//fetch data from server
		useEffect (()=> {
				const fetchData = async () => {
				const {data} = await axios.get("/api/products");
				setProducts(data);
			 		}

			 	fetchData();
			 	return ()=>{
		 				//
		 		}; 
 		},[])
	return <ul className="products"> 
	{
  products.map( product =>
	<li key = {product._id}>
    <div className="product">
    <Link to={'/product/'+ product._id}><img className="product-image" src={product.image} alt="productImage Not found"/></Link>
    <div className="product-name"><Link to={'/product/'+product._id}>{product.name}</Link></div>
    <div className="product-brand">{product.brand}</div>
    <div className="product-price">${product.price}</div>
    <div className="product-ratings">{product.ratings} stars {product.reviews} reviews </div>
    </div>
    </li>
    )
}    
	</ul>

}

export default HomeScreen;