import { ImageSourcePropType } from "react-native";

// ----------------- INTERFACE -----------------

export interface Product {
  image: ImageSourcePropType;
  productText: string;
  productPrice: number | string;
  description?: string;
}

// ----------------- BANNERS -----------------

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

// ----------------- WOMEN PRODUCTS -----------------

export const womenProducts: Product[] = [
  {
    image: require("../../assets/images/prod1.png"),
    productText: "Winter Hineck",
    productPrice: 202,
    description:
      "Crafted with premium wool blend, this Winter Hineck sweater is designed to keep you warm without compromising on style. Featuring a snug fit with a high neckline, it’s perfect for layering during cold weather or styling as a statement piece.",
  },
  {
    image: require("../../assets/images/prod2.png"),
    productText: "Winter Coat",
    productPrice: 200,
    description:
      "A timeless winter essential, this coat combines elegance with practicality. Tailored to perfection, it features deep pockets, a soft inner lining, and a durable outer shell to protect you from chilly winds. Ideal for both casual and formal outings.",
  },
  {
    image: require("../../assets/images/prod3.png"),
    productText: "Casual Sleeper",
    productPrice: 100,
    description:
      "Relax in ultimate comfort with this casual sleeper. Made from breathable cotton fabric, it ensures a cozy fit while maintaining airflow. Whether lounging at home or enjoying a weekend getaway, this piece delivers effortless style and comfort.",
  },
  {
    image: require("../../assets/images/prod4.png"),
    productText: "Fashion Skirt",
    productPrice: 199,
    description:
      "This modern fashion skirt offers a flattering silhouette with its flowy cut and premium fabric. Versatile enough to pair with crop tops, blouses, or sweaters, it’s a wardrobe staple that transitions seamlessly from daywear to evening looks.",
  },
  {
    image: require("../../assets/images/whiteFashionHoodie.png"),
    productText: "White Fashion Hoodie",
    productPrice: 150,
    description:
      "A minimalist hoodie crafted from soft fleece cotton for superior comfort. The clean white tone adds versatility, making it easy to pair with jeans, joggers, or skirts. Perfect for casual streetwear or layering on chilly evenings.",
  },
];

export const womenProducts2: Product[] = [
  {
    image: require("../../assets/images/womListImg1.png"),
    productText: "Floral Summer Dress",
    productPrice: "49.99",
    description:
      "This lightweight summer dress features a vibrant floral print and a breathable fabric perfect for hot days. Its flowy design ensures comfort, while the fitted waistline provides a flattering silhouette. Ideal for beach trips, picnics, or casual gatherings.",
  },
  {
    image: require("../../assets/images/womListImg2.png"),
    productText: "Casual White Top",
    productPrice: "24.99",
    description:
      "A versatile white top crafted from soft cotton fabric. Designed with a relaxed fit, it pairs effortlessly with skirts, jeans, or shorts. A go-to staple for everyday wear and easy layering.",
  },
  {
    image: require("../../assets/images/womListImg3.png"),
    productText: "Elegant Evening Gown",
    productPrice: "89.99",
    description:
      "This elegant gown is made with flowing chiffon and delicate detailing. The floor-length design with a fitted bodice makes it the perfect outfit for weddings, galas, and special evening occasions.",
  },
  {
    image: require("../../assets/images/womListImg4.png"),
    productText: "Denim Skirt",
    productPrice: "34.99",
    description:
      "Trendy yet timeless, this denim skirt offers durability with a stylish edge. Featuring a button-down closure and subtle fade, it’s ideal for creating both casual and semi-formal looks.",
  },
];

// ----------------- MEN PRODUCTS -----------------

export const menProducts: Product[] = [
  {
    image: require("../../assets/images/men1.png"),
    productText: "Casual Denim Jacket",
    productPrice: 59.99,
    description:
      "A wardrobe essential, this denim jacket features a rugged yet stylish design. Built from durable denim fabric, it offers multiple pockets, a button-up front, and a tailored fit. Perfect for layering over t-shirts or hoodies, suitable for all seasons.",
  },
  {
    image: require("../../assets/images/men2.png"),
    productText: "Slim Fit T-Shirt",
    productPrice: 19.9,
    description:
      "Designed for modern comfort, this slim fit T-shirt hugs the body while allowing flexibility and movement. Made from soft cotton with a breathable finish, it’s ideal for everyday wear, workouts, or layering under jackets.",
  },
  {
    image: require("../../assets/images/men3.png"),
    productText: "Classic Chinos",
    productPrice: 39.99,
    description:
      "Tailored for smart-casual versatility, these chinos feature a slim yet comfortable cut. Made from a cotton-elastane blend, they provide durability with a touch of stretch. Style them with shirts, polos, or casual tees for any occasion.",
  },
  {
    image: require("../../assets/images/men4.png"),
    productText: "Leather Sneakers",
    productPrice: 89.99,
    description:
      "Crafted from genuine leather, these sneakers combine comfort and sophistication. Featuring cushioned soles and sleek detailing, they’re designed for both everyday use and casual evening outings.",
  },
  {
    image: require("../../assets/images/men5.png"),
    productText: "Wool Winter Coat",
    productPrice: 129.99,
    description:
      "Stay warm in style with this classic wool coat. Designed with a tailored fit and full inner lining, it provides exceptional insulation during colder months. Ideal for pairing with both formal wear and casual layers.",
  },
];

export const menProducts2: Product[] = [
  {
    image: require("../../assets/images/menListImg1.png"),
    productText: "Casual Polo Shirt",
    productPrice: "29.99",
    description:
      "A breathable cotton polo with a modern cut and ribbed collar. Perfect for casual Fridays, weekend outings, or layering under blazers for a smart-casual look.",
  },
  {
    image: require("../../assets/images/menListImg2.png"),
    productText: "Slim Fit Jeans",
    productPrice: "49.99",
    description:
      "Cut from high-quality denim with a slim tapered fit, these jeans offer both comfort and durability. Versatile enough to pair with sneakers or dress shoes.",
  },
  {
    image: require("../../assets/images/menListImg3.png"),
    productText: "Sports Hoodie",
    productPrice: "39.99",
    description:
      "Built for active lifestyles, this hoodie features moisture-wicking fabric and a relaxed fit. Ideal for workouts, outdoor runs, or casual wear.",
  },
  {
    image: require("../../assets/images/menListImg4.png"),
    productText: "Leather Jacket",
    productPrice: "99.99",
    description:
      "A bold fashion statement, this leather jacket combines rugged durability with sleek style. Includes zippered pockets and a comfortable lining for year-round wear.",
  },
];

// ----------------- ACCESSORIES -----------------

export const accessories: Product[] = [
  {
    image: require("../../assets/images/acess1.png"),
    productText: "Leather Wallet",
    productPrice: "19.99",
    description:
      "This compact wallet is made from 100% genuine leather and features multiple card slots, a coin pocket, and a slim design to fit comfortably in your pocket.",
  },
  {
    image: require("../../assets/images/acess2.png"),
    productText: "Classic Sunglasses",
    productPrice: "24.99",
    description:
      "Protect your eyes in style with these UV-blocking sunglasses. The lightweight frame ensures comfort while the classic design complements any outfit.",
  },
  {
    image: require("../../assets/images/acess3.png"),
    productText: "Analog Wrist Watch",
    productPrice: "49.99",
    description:
      "A timeless wristwatch featuring a stainless-steel body and leather straps. Its analog display exudes sophistication, making it perfect for both formal and casual wear.",
  },
  {
    image: require("../../assets/images/acess4.png"),
    productText: "Canvas Belt",
    productPrice: "14.99",
    description:
      "Durable and adjustable, this canvas belt is designed for everyday use. Featuring a sturdy buckle and neutral tones, it pairs effortlessly with jeans or chinos.",
  },
  {
    image: require("../../assets/images/acess5.png"),
    productText: "Woolen Scarf",
    productPrice: "12.99",
    description:
      "Stay cozy and stylish with this woolen scarf. Soft to the touch and lightweight, it adds warmth while enhancing any winter outfit.",
  },
];

export default womenProducts;
