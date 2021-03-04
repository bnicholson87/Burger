document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
  
    const changeEatBtns = document.querySelectorAll('.change-eat');
    console.log(changeEatBtns)
    if (changeEatBtns) {
      
      changeEatBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
          console.log(button)
          const id = e.target.getAttribute('data-id');
          // const newDevour = e.target.getAttribute('data-newdevour');
  
          const newEatState = {
            devour: 1,
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
              console.log(`Status changed to: ${newEatState}`);
              location.reload('/');
            } else {
              alert('Not devoured!');
            }
          });
        });
      });
    }
  
    const insertBurgerBtn = document.getElementById('insert-form');
  
    if (insertBurgerBtn) {
      insertBurgerBtn.addEventListener('submit', (e) => {
        e.preventDefault();

        const newBurger = {
          burger: document.getElementById('burgerName').value.trim(),
          devoured: 0,
        };
        console.log(newBurger)
        // Send POST request to create a new quote
        fetch('/api/burgers', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
  
          // make sure to serialize the JSON body
          body: JSON.stringify(newBurger),
        }).then(() => {
          // Empty the form
          document.getElementById('burgerName').value = '';
  
          // Reload the page so the user can see the new quote
          console.log('Order submitted');
          location.reload();
        });
      });
    }
  })