export async function getProductById(id: string) {
  try {
    const res = await fetch(`http://localhost:8000/api/products/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || 'Failed to fetch data');
    }

    return data.product;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch data');
  }
}
