const Cart = require('../models/cart');

exports.addItemToCart = (req, res) => {
    
    //Cart.find({ user: req.user._id})
    
    const cart = new Cart({
        user: req.user._id,
        cartItems: req.body.cartItems
    });

    cart.save((error, cart) => {
        if(error) return res.status(400).json({error});
        if(cart){
            res.status(201).json({ cart });
        }
    });

};