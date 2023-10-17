import Image from 'next/image';
import styles from './Wishlist.module.scss';
import { useWishlist } from '@/Contexts/WishlistContext';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function WishlistComponent({ property }) {
    const { wishlist, getWishlist, addToWishlist, removeFromWishlist } = useWishlist();
    const [isInwishlist, setIsInWishlist] = useState(false);
    useEffect(() => {
        let wishListNew = getWishlist();
        setIsInWishlist(wishListNew.includes(property));
    }, [isInwishlist]);

    const handleWishlist = () => {
        if (isInwishlist) {
            removeFromWishlist(property);
            setIsInWishlist(false);
        } else {
            addToWishlist(property);
            setIsInWishlist(true);
        }
    }
    return (
        <div className={`${styles.heart_box} ${styles.bg}`} onClick={handleWishlist}>
            <button onClick={handleWishlist} style={{outline: "none"}}>
                <Image src={(isInwishlist) ? "https://www.barrattlondonmena.com/img/heart_active.png" : 'https://www.barrattlondonmena.com/img/heart.png'} alt='heart image' width={25} height={25} />
            </button>
        </div>
    )
}

export default WishlistComponent;