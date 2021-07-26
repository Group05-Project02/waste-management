async function newFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('input[name="product-name"]').value;
    const price = document.querySelector('input[name="product-price"]').value;
    const quantity = document.querySelector('input[name="product-quantity"]').value;
    const consumption = document.querySelector('input[name="product-consumption"]').value;

    const response = await fetch(`/api/product`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        price,
        quantity,
        consumption
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-product-form').addEventListener('submit', newFormHandler);