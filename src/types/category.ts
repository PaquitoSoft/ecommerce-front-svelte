type Category = {
	id: string;
	code?: string;
	name: string;
	isHidden: boolean;
	subcategories: unknown[];
	parent?: unknown;
};

export default Category;
