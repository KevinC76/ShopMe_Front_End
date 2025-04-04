'use client';

import { Button } from '@mui/material';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getProductById } from './actions';

function Page_Detail() {
  const params = useParams();
  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    const fetchProduct = async () => {
      setProduct(await getProductById(String(params.productsId)));
    };

    fetchProduct();
  }, [params]);

  console.log(product);

  return (
    <div className="flex-1 p-8 sm:p-16">
      <div className="flex flex-col xl:flex-row justify-between items-start gap-8 ">
        {/* left */}
        <div className="flex justify-center items-center">
          <Image
            width={1000}
            height={500}
            src="/hero_banner.jpg"
            alt="Products Image"
            className="shadow-xl w-[1000px] sm:w-[800px] xl:w-[1000px]"
          />
        </div>

        {/* right */}
        <div className="flex flex-col justify-start gap-4">
          {/* top */}
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl sm:text-4xl font-bold">{product.name}</h1>
            <p className="text-lg sm:text-2xl text-[#2563ea]">
              {new Intl.NumberFormat('id-US', {
                style: 'currency',
                currency: 'IDR',
              }).format(product.price)}
            </p>
            <div className="flex gap-4">
              <Button variant="contained">Buy Now</Button>
              <Button variant="outlined">Add to Chart</Button>
            </div>
          </div>
          <hr />
          {/* bottom */}
          <div className="flex flex-col gap-2 sm:gap-4 xl:w-[1000px]">
            <h1 className="font-bold text-xl">Detail Products</h1>
            <div>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page_Detail;
