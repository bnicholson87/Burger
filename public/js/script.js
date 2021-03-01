document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
  
    const changeEatBtns = document.querySelectorAll('.change-eat');
  
    if (changeEatBtns) {
      changeEatBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
          const id = e.target.getAttribute('data-id');
          const newSleep = e.target.getAttribute('data-newdevour');
  
          const newEatState = {
            devour: newDevour,
          };
  
          fetch(`/api/burgers/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
            body: JSON.stringify(newEatState),
          }).then((response) => {
            if (response.ok) {
              console.log(`Status changed to: ${newDevour}`);
              location.reload('/');
            } else {
              alert('Not devoured!');
            }
          });
        });
      });
    }
  
    // const createCatBtn = document.getElementById('create-form');
  
    // if (createCatBtn) {
    //   createCatBtn.addEventListener('submit', (e) => {
    //     e.preventDefault();
  
    //     // Grabs the value of the textarea that goes by the name, "quote"
    //     const newCat = {
    //       name: document.getElementById('ca').value.trim(),
    //       sleepy: document.getElementById('sleepy').checked,
    //     };
  
    //     // Send POST request to create a new quote
    //     fetch('/api/cats', {
    //       method: 'POST',
    //       headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //       },
  
    //       // make sure to serialize the JSON body
    //       body: JSON.stringify(newCat),
    //     }).then(() => {
    //       // Empty the form
    //       document.getElementById('ca').value = '';
  
    //       // Reload the page so the user can see the new quote
    //       console.log('Created a new cat!');
    //       location.reload();
    //     });
    //   });
    // }