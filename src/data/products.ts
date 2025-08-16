import { ImageSourcePropType } from "react-native";

export interface Product {
  image:ImageSourcePropType ; // require returns "any" in TS
  productText: string;
  productPrice: number;
}

export const womenBanner = [
  {
    head1: "NEW COLLECTION",
    head2: "HANG OUT\n& PARTY",
    image: require("../../assets/images/banner1.png"),
  },
  {
    head1: "Sale up to 40%",
    head2: "FOR SLIM\n& BEAUTY",
    image: require("../../assets/images/banner2.png"),
  },
  {
    head1: "Summer Collection 2021",
    head2: "Most Sexy\n& Fabulous\nDesign",
    image: require("../../assets/images/banner3.png"),
  },
];

export const menBanner = [
  {
    head1: "NEW ARRIVALS",
    head2: "URBAN STYLE\n& CASUAL",
    image: require("../../assets/images/menBan1.png"),
  },
  {
    head1: "Discount up to 35%",
    head2: "FOR COOL\n& CLASSY",
    image: require("../../assets/images/menBan2.png"),
  },
  {
    head1: "Winter Collection 2025",
    head2: "Stylish\n& Comfortable\nDesigns",
    image: require("../../assets/images/menBan3.png"),
  },
];

export const accessoriesBanner = [
  {
    head1: "Bridal Collection",
    head2: "Make Every Moment\nShine Bright",
    image: require("../../assets/images/jewBg1.png"),
  },
  {
    head1: "Trendy Goggles",
    head2: "Shades That Define\nYour Style",
    image: require("../../assets/images/jewBg2.png"),
  },
  {
    head1: "Luxury Watches",
    head2: "Timeless Elegance\nOn Your Wrist",
    image: require("../../assets/images/jewBg3.png"),
  },
];


const womenProducts: Product[] = [
  {
    image: require("../../assets/images/prod1.png"),
    productText: "Winter Hineck",
    productPrice: 202
  },
  {
    image: require("../../assets/images/prod2.png"),
    productText: "Winter Coat",
    productPrice: 200
  },
  {
    image: require("../../assets/images/prod3.png"),
    productText: "Casual Sleeper",
    productPrice: 100
  },
  {
    image: require("../../assets/images/prod4.png"),
    productText: "Fashion Skirt",
    productPrice: 199
  },
  {
    image: require("../../assets/images/whiteFashionHoodie.png"),
    productText: "White Fashion Hoodie",
    productPrice: 150
  }
];

export const menProducts: Product[] = [
  {
    image: require("../../assets/images/men1.png"),
    productText: "Casual Denim Jacket",
    productPrice: 59.99,
  },
  {
    image: require("../../assets/images/men2.png"),
    productText: "Slim Fit T-Shirt",
    productPrice: 19.9,
  },
  {
    image: require("../../assets/images/men3.png"),
    productText: "Classic Chinos",
    productPrice: 39.99,
  },
  {
    image: require("../../assets/images/men4.png"),
    productText: "Leather Sneakers",
    productPrice: 89.99,
  },
  {
    image: require("../../assets/images/men5.png"),
    productText: "Wool Winter Coat",
    productPrice: 129.99,
  },
];

export const womenProducts2 = [
  {
    image: require("../../assets/images/womListImg1.png"),
    productText: "Floral Summer Dress",
    productPrice: "$49.99",
  },
  {
    image: require("../../assets/images/womListImg2.png"),
    productText: "Casual White Top",
    productPrice: "$24.99",
  },
  {
    image: require("../../assets/images/womListImg3.png"),
    productText: "Elegant Evening Gown",
    productPrice: "$89.99",
  },
  {
    image: require("../../assets/images/womListImg4.png"),
    productText: "Denim Skirt",
    productPrice: "$34.99",
  },
 
];
export const menProducts2 = [
  {
    image: require("../../assets/images/menListImg1.png"),
    productText: "Casual Polo Shirt",
    productPrice: "$29.99",
  },
  {
    image: require("../../assets/images/menListImg2.png"),
    productText: "Slim Fit Jeans",
    productPrice: "$49.99",
  },
  {
    image: require("../../assets/images/menListImg3.png"),
    productText: "Sports Hoodie",
    productPrice: "$39.99",
  },
  {
    image: require("../../assets/images/menListImg4.png"),
    productText: "Leather Jacket",
    productPrice: "$99.99",
  },
];

export const accessories = [
  {
    image: require("../../assets/images/acess1.png"),
    productText: "Leather Wallet",
    productPrice: "$19.99",
  },
  {
    image: require("../../assets/images/acess2.png"),
    productText: "Classic Sunglasses",
    productPrice: "$24.99",
  },
  {
    image: require("../../assets/images/acess3.png"),
    productText: "Analog Wrist Watch",
    productPrice: "$49.99",
  },
  {
    image: require("../../assets/images/acess4.png"),
    productText: "Canvas Belt",
    productPrice: "$14.99",
  },
  {
    image: require("../../assets/images/acess5.png"),
    productText: "Woolen Scarf",
    productPrice: "$12.99",
  },
]

export default womenProducts;
