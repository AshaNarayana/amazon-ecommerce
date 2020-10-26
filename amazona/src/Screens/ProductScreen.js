import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom'
function ProductScreen (props) {
	//var id_path = props.match.params.id;
	console.log('id_path',typeof(props.match.params.id));
	console.log('data valie' ,data.products);

	const product = data.products.find( product => product._id.toString() === 	props.match.params.id );
	//console.log('product1', product1);
	return <div>
				<div className = "back-to-result"><Link to="/">Back to Result</Link> </div>
			 	<div>
				 	<div  className= "details">
						<div className="details-image">
							<img src={product.image} alt="product_image"/>
						</div>
						<div className="details-info">
							<ul>
							<li><h4>{product.name}</h4></li>
							<li>{product.ratings} Stars ({product.reviews})</li>
							<li><b> Price: ${product.price} </b></li>
							<li>Descripton: <div>{product.description}
							</div></li>
							</ul>
						</div>
						<div className="details-action">
						  <ul>
							<li><b> Price: ${product.price} </b></li>
							<li>Status: {product.status}</li>
							<li>Qty: <select>
								<option>1</option>
								<option>2</option>
								<option>3</option>	
								<option>4</option>
								<option>5</option>
								<option>6</option>
							</select></li>
							<li><button className="button"> Add to Cart</button></li>
						  </ul>
						</div>
					</div>
				</div>
				
		</div>
    
}    


export default ProductScreen;