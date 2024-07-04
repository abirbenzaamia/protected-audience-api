import './shoes.json'


export async function getAllShoes(){
    // Fetch the JSON file
    fetch('shoes.json')
      .then(response => {
        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        // Log the data to the console
        console.log(data);
        return data.shoes
       
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
}