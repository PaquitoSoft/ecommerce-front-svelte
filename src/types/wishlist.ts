import type Product from "./product";

type Wishlist = {
	id: string;
	userId: string;
	name: string;
	products: Product[];
};

export default Wishlist;
