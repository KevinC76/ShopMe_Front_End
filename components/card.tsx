'use client';

import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

type productsCardType = {
  imageUrl: string;
  productName: string;
  productDescription: string;
  price: number;
};

function ProductsCard({
  imageUrl,
  productName,
  productDescription,
  price,
}: productsCardType) {
  const navigate = () => {
    console.log('test');
  };

  return (
    <div onClick={navigate} className="cursor-pointer">
      <Card sx={{ minWidth: 100, minHeight: 100 }}>
        <CardMedia
          component="img"
          image={imageUrl}
          alt="products image"
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: 400,
            objectFit: 'scale-down',
            p: 2,
            backgroundColor: 'rgba(0, 0, 0, 0.02)',
          }}
        />
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            {productName}
          </Typography>
          <Typography sx={{ fontSize: 16, mt: 2 }}>
            {productDescription}
          </Typography>
          <Typography
            sx={{ fontWeight: 'bold', fontSize: 16, mt: 2 }}
            color="primary"
          >
            {new Intl.NumberFormat('id-US', {
              style: 'currency',
              currency: 'IDR',
            }).format(price)}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductsCard;
