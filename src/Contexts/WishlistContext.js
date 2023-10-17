import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => {
    return useContext(WishlistContext);
};

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);
    useEffect(()=>{
        setWishlist(getWishlist());
    }, []);
    const getWishlist = () => {
        return JSON.parse(localStorage.getItem('wishlist')) || [];
    }

    const addToWishlist = (item) => {
        let newWishlist = getWishlist();
        if (!newWishlist.includes(item)) {
            localStorage.setItem('wishlist', JSON.stringify([...newWishlist, item]));
            setWishlist([...newWishlist, item]);
        }
    };

    const removeFromWishlist = (item) => {
        let newWishlist = getWishlist();
        const updatedWishlist = newWishlist.filter((wish) => wish !== item);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        setWishlist(updatedWishlist);
    };

    const contextValue = {
        wishlist,
        getWishlist,
        addToWishlist,
        removeFromWishlist,
    };

    return (
        <WishlistContext.Provider value={contextValue}>
            {children}
        </WishlistContext.Provider>
    );
};