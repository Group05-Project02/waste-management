async function newProductHandler(event) {
    event.preventDefault();

    const name = document.querySelector("#itemInput").value;
    const price = document.querySelector("#costInput").value;
    const quantity = document.querySelector("#qtyInput").value;
    const consumption = document.querySelector("#consumptionInput").value;

    const response = await fetch(`/api/products`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        price,
        quantity,
        consumption,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      alert("Product added");
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#submitButton').addEventListener('click', newProductHandler);