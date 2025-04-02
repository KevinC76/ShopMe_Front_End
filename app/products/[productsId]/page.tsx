import { Button } from '@mui/material';
import Image from 'next/image';

async function Page_Detail({
  params,
}: {
  params: Promise<{ productsId: string }>;
}) {
  const productsId = (await params).productsId;

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
            <h1 className="text-2xl sm:text-4xl font-bold">Nama Products {productsId}</h1>
            <p className="text-lg sm:text-2xl text-[#2563ea]">Rp 1.000.000</p>
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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                iste recusandae ipsum necessitatibus minima maiores, quos
                doloribus aspernatur facilis quis nisi, aut inventore! Est
                perspiciatis numquam a, accusantium rem enim. Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Velit architecto
                corporis ipsum incidunt, harum natus at voluptatibus ratione
                vero reprehenderit. Nesciunt fugiat ducimus laboriosam culpa
                aperiam reiciendis quam, facilis vitae, tenetur accusamus odit
                deleniti ab atque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page_Detail;
