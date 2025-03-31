'use client';

import ProductsCard from '@/components/card';
import { Button } from '@mui/material';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex-1">
      {/* top */}
      <div className="flex-col xl:flex-row flex px-8 sm:px-16 py-8 justify-between items-center gap-8 xl:gap-16 bg-[#f9fafc] relative h-auto xl:h-[550px] ">
        {/* left */}
        <div className="flex flex-col gap-4 xl:gap-8 xl:w-[40%] order-2 xl:order-1 items-center xl:items-start">
          <h1 className="font-bold text-3xl sm:text-6xl text-center xl:text-start">
            Minimalist Design, Maximum Style
          </h1>
          <p className="text-lg text-center sm:text-start sm:text-2xl font-[300]">
            Discover our curated collection of minimalist products.
          </p>
          <div>
            <Button
              color="primary"
              variant="contained"
              sx={{
                paddingX: { xs: 2, sm: 4 },
                paddingY: { xs: 1, sm: 2 },
                fontSize: 14,
              }}
            >
              Shop Now
            </Button>
          </div>
        </div>
        {/* right */}
        <div className="xl:absolute top-0 right-16 flex items-center order-1 xl:order-2">
          <Image
            width={1250}
            height={1000}
            src="/hero_banner.jpg"
            alt="Hero Image"
            className="shadow-xl w-[1000px] sm:w-[800px] xl:w-[1000px]"
          />
        </div>
      </div>
      {/* Bottom */}
      <div className="flex-1 px-8 sm:px-16 pt-8 xl:pt-36 pb-16 bg-white  ">
        <h1 className="font-bold text-2xl text-center sm:text-start sm:text-4xl text-[#2563ea]">
          Feature Products
        </h1>
        {/* products */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:flex justify-between items-center pt-4 xl:pt-8 gap-4">
          {/* Product Card 1 */}
          <div className="w-full lg:w-[425px]">
            <ProductsCard
              imageUrl="/hero_banner.jpg"
              productName="Test Product"
              productDescription="try our finest product"
              price={100000}
            />
          </div>

          {/* Product Card 2 */}
          <div className="w-full lg:w-[425px]">
            <ProductsCard
              imageUrl="/hero_banner.jpg"
              productName="Test Product"
              productDescription="try our finest product"
              price={100000}
            />
          </div>

          {/* Product Card 3 */}
          <div className="w-full lg:w-[425px] ">
            <ProductsCard
              imageUrl="/hero_banner.jpg"
              productName="Test Product"
              productDescription="try our finest product"
              price={100000}
            />
          </div>

          {/* Product Card 4 */}
          <div className="w-full lg:w-[425px] ">
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
