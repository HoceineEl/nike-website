import bigShoe1 from "../assets/images/big-shoe1.png";
import bigShoe2 from "../assets/images/big-shoe2.png";
import bigShoe3 from "../assets/images/big-shoe3.png";
import bigShoe4 from "../assets/images/product12.png";
import bigShoe5 from "../assets/images/product1.png";
import bigShoe6 from "../assets/images/product2.png";
import bigShoe7 from "../assets/images/product3.png";
import bigShoe8 from "../assets/images/product5.png";
import bigShoe9 from "../assets/images/product6.png";
import bigShoe10 from "../assets/images/product8(1).png";
import bigShoe11 from "../assets/images/1.png";
import bigShoe12 from "../assets/images/hero.png";
import { facebook, instagram, shieldTick as shieldTickIcon, support as supportIcon, truckFast as truckFastIcon, twitter } from "../assets/icons";
import { customer1, customer2 } from "../assets/images";
export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const statistics = [
    { value: "1K+", label: "Brands" },
    { value: "250+", label: "Shops" },
    { value: "250K+", label: "Customers" }
]
export const shoesCards = [
    { imgUrl: bigShoe5 },
    { imgUrl: bigShoe6 },
    { imgUrl: bigShoe7 },
    { imgUrl: bigShoe8 },
    { imgUrl: bigShoe9 },
    { imgUrl: bigShoe10 },
    { imgUrl: bigShoe11 },
    { imgUrl: bigShoe12 },
]
export const products = [
    { imgUrl: bigShoe6, label: "Nike Air Jordan-10", rating: "4.7", price: "230.20" },
    { imgUrl: bigShoe7, label: "Nike Air Jordan-10", rating: "4.7", price: "230.20" },
    { imgUrl: bigShoe8, label: "Nike Air Jordan-10", rating: "4.7", price: "230.20" },
    { imgUrl: bigShoe9, label: "Nike Air Jordan-10", rating: "4.7", price: "230.20" },
    { imgUrl: bigShoe10, label: "Nike Air Jordan-10", rating: "4.7", price: "230.20" },
    { imgUrl: bigShoe1, label: "Nike Air Jordan-10", rating: "4.7", price: "230.20" },
    { imgUrl: bigShoe2, label: "Nike Air Jordan-10", rating: "4.7", price: "230.20" },
    { imgUrl: bigShoe3, label: "Nike Air Jordan-10", rating: "4.7", price: "230.20" },
    { imgUrl: bigShoe4, label: "Nike Air Jordan-10", rating: "4.7", price: "230.20" },
    { imgUrl: bigShoe5, label: "Nike Air Jordan-10", rating: "4.7", price: "230.20" },

]



export const offers = [
    { iconUrl: truckFastIcon, label: "Free shipping", desc: "Enjoy seamless shopping with our complimentary shipping service." },
    { iconUrl: shieldTickIcon, label: "Secure Payment", desc: "Experience worry-free transactions with our secure payment options." },
    { iconUrl: supportIcon, label: "Love to help you", desc: "Our dedicated team is here to assist you every step of the way." },
]
export const customers = [
    { profileImg: customer1, name: "Morich Brown", rating: '4.5', comment: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!" },
    { profileImg: customer2, name: "Mohammed El idrissi", rating: '4.8', comment: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!" },
]
export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];