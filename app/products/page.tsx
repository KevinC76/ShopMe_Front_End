import ProductsCard from '@/components/card';
import Search_Bar from '@/components/search_bar';
import React from 'react';

function Products() {
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
          <div>
            <ProductsCard
              imageUrl="/hero_banner.jpg"
              productName="Test Product"
              productDescription="try our finest product"
              price={100000}
            />
          </div>
          <div>
            <ProductsCard
              imageUrl="/hero_banner.jpg"
              productName="Test Product"
              productDescription="try our finest product"
              price={100000}
            />
          </div>
          <div>
            <ProductsCard
              imageUrl="/hero_banner.jpg"
              productName="Test Product"
              productDescription="try our finest product"
              price={100000}
            />
          </div>
          <div>
            <ProductsCard
              imageUrl="/hero_banner.jpg"
              productName="Test Product"
              productDescription="try our finest product"
              price={100000}
            />
          </div>
          <div>
            <ProductsCard
              imageUrl="/hero_banner.jpg"
              productName="Test Product"
              productDescription="try our finest product"
              price={100000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
