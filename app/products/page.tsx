'use client';

import ProductsCard from '@/components/card';
import Search_Bar from '@/components/search_bar';
import React, { useEffect, useState } from 'react';
import { getProducts } from './actions';

function Products() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setProducts(await getProducts());
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex-1">
      {/* container */}
      <div className="p-8 sm:p-16 flex flex-col gap-4">
        {/* Search Bar */}
        <div className="flex items-center justify-center">
          <Search_Bar />
        </div>
        {/* products list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductsCard
              key={product.id}
              imageUrl="/hero_banner.jpg"
              productName={product.name}
              productDescription={product.description}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
