export async function getProducts() {
  try {
    const res = await fetch('http://localhost:8000/api/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }

    return data.products;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch products');
  }
}
