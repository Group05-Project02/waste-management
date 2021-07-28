async function newProductHandler(event) {
    event.preventDefault();
    
    alert("response");
  
    // const name = document.querySelector('input[name="itemInput"]').value;
    // const price = document.querySelector('input[name="costInput"]').value;
    // const quantity = document.querySelector('input[name="qtyInput"]').value;
    // const consumption = document.querySelector('input[name="consumptionInput"]').value;

    // const response = await fetch(`/api/products`, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     name,
    //     price,
    //     quantity,
    //     consumption,
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
  
    // if (response.ok) {
    //   document.location.replace('/dashboard');
    // } else {
    //   alert(response.statusText);
    // }
  }
  
  document.querySelector('#submitButton').addEventListener('click', newProductHandler);