import React from 'react';

const CartItem = (props) => {
    const { price, title, qty } = props.product;

    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props;
    return (
        <div className='cart-item'>
            <div className='left-block'>
                <img style={styles.image} alt="" src={product.img}/>
            </div>
            <div className='right-block'>
                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color: '#777' }}>Rs {price}</div>
                <div style={{ color: '#777' }}>Qty: {qty}</div>
                <div className='cart-item-actions'>
                    {/* Buttons */}
                    <img alt="increase" className='action-icons' onClick={() => onIncreaseQuantity(product)} src="https://cdn-icons-png.flaticon.com/512/992/992651.png" />
                    <img alt="decrease" className='action-icons' onClick={() => onDecreaseQuantity(product)} src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                    <img alt="delete" className='action-icons' onClick={() => onDeleteProduct(product.id)} src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png" />
                </div>
            </div>
        </div>
    );
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;