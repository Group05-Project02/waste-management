async function editFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('input[name="product-name"]').value.trim();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/product/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-product-form').addEventListener('submit', editFormHandler);