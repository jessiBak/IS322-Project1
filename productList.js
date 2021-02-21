//Mock Database + product rendering, sorting, and filtering
(function () {
const products = [
{"title": "Spicy Chicken Pasta Soup", "price": "8.99", "type": "soup", "img_src": "https://www.eatwell101.com/wp-content/uploads/2016/10/homemade-chicken-soup-recipe-1.jpg", "category": "spicy",},
{"title": "T Shirt", "price": "5.99", "type": "clothes", "img_src": "https://res.cloudinary.com/teepublic/image/private/s--qYWqBEPI--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1608115657/production/designs/17444308_0.jpg", "category": "other",},
{"title": "Spicy Beef Soup", "price": "10.99", "type": "soup", "img_src": "https://www.thespruceeats.com/thmb/1wA2lD669y5gTuYIEjTfTBqkPI8=/3000x3000/smart/filters:no_upscale()/korean-spicy-beef-soup-yukaejang-recipe-2118942-hero-01-a9ef75a252ad4ea4b0d15e972c755eaf.jpg", "category": "spicy",},
{"title": "Creamy Chicken Pasta Soup", "price": "7.35", "type": "soup", "img_src": "https://www.eatwell101.com/wp-content/uploads/2020/02/chicken-soup-recipe-3.jpg", "category": "creamy",},
{"title": "Creamy Tomato Soup", "price": "6.50", "type": "soup", "img_src": "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/17228-creamy-tomato-soup-600x600.jpg?ext=.jpg", "category": "creamy",},
{"title": "Chunky Potato Soup", "price": "4.86", "type": "soup", "img_src": "https://lh3.googleusercontent.com/Td3UKvXlaNT-MdxWd4dhufp_74CieyhNtNYAz-Rn3J5xsqFPBY_LQFCl2zHLW6arIbRGLP_7Q5zK3-hlL5dACOv1CbWb_thHO2vULz_4=w600-rj-l68-e365", "category": "chunky",},
{"title": "Chunky Meat and Veggie Soup", "price": "7.25", "type": "soup", "img_src": "https://res.cloudinary.com/paleoleap/image/upload/f_auto,q_80/v1429434554/chunky-soup-main_quftju.jpg", "category": "chunky",},
{"title": "Green Greens Vegetable Soup", "price": "2.99", "type": "soup", "img_src": "https://thecozyapron.com/wp-content/uploads/2018/07/vegetable-soup_thecozyapron_1.jpg", "category": "veggie",},
{"title": "Simple Veggie Soup", "price": "3.55", "type": "soup", "img_src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwPdb-1d03GPcPhb-4sKT8VxivbqXQ7n9vA&usqp=CAU", "category": "veggie",},
];

//function to display the list of products given a mock database of product objects
function renderList(results)
{
  const product_div = document.querySelector('#products-list-container');
  product_div.innerHTML = '';
  let prodList = results.map(function(result)
  {
    if(result.type === 'clothes')
    {
      return (
        '<div class=\"card\"> \n' +
        '<img class=\"card-img-top\" src=' + result.img_src + ' alt=\"Product Image\"> \n' +
        '<div class=\"card-body\"> \n' +
          '<h5 class=\"card-title\">' + result.title + '</h5> \n' +
          '<p class=\"price">$' + result.price + '</p> \n' +
          '<a href=\"#\" class=\"btn btn-warning\" id=\"clothes_button\">See details</a> \n' +
        '</div> \n' +
      '</div> \n'
      );
    }
    return (
      '<div class=\"card\"> \n' +
      '<img class=\"card-img-top\" src=' + result.img_src + ' alt=\"Product Image\"> \n' +
      '<div class=\"card-body\"> \n' +
        '<h5 class=\"card-title\">' + result.title + '</h5> \n' +
        '<p class=\"price">$' + result.price + '</p> \n' +
        '<a href=\"#\" class=\"btn btn-primary\">See details</a> \n' +
      '</div> \n' +
    '</div> \n'
    );
  });


  prodList.forEach(function (card) {
			product_div.innerHTML += card; // += adds to HTML instead of overwriting it entirely.
		});
}

renderList(products);

//function to sort products based name or price (ascending/descending) based on selected category
function orderBy(sort_category)
{
  //console.log('button was clicked!')
  let results = [];
  if(sort_category === 'name')
  {
    results = products.sort(function(a, b)
    {
      let title1 = a.title.toUpperCase();
      let title2 = b.title.toUpperCase();
      if(title1 < title2)
      {
        return -1;
      }
      if(title1 > title2)
      {
        return 1;
      }
      return 0;
    })
  }
  else if(sort_category === 'price-l')
  {
    results = products.sort(function(a, b)
    {
      return a.price - b.price;
    });
  }
  else//sort_category === price-h
  {
    results = products.sort(function(a, b)
    {
      return b.price - a.price;
    });
}
    //console.log('rendering newly sorted products list...')
    renderList(results);
}

//function to filter products based on selected sort_category spicy creamy chunky veggie other
function filterProducts(category)
{
  let filtered = [];
  if(category === 'spicy')
  {
    filtered = products.filter(function(item)
    {
      return item.category === 'spicy';
    });
  }
  else if(category === 'creamy')
  {
    filtered = products.filter(function(item)
    {
      return item.category === 'creamy';
    });
  }
  else if(category === 'chunky')
  {
    filtered = products.filter(function(item)
    {
      return item.category === 'chunky';
    });
  }
  else if(category === 'veggie')
  {
    filtered = products.filter(function(item)
    {
      return item.category === 'veggie';
    });
  }
  else if(category === 'other')
  {
    filtered = products.filter(function(item)
    {
      return item.category === 'other';
    });
  }
  else if(category === 'under5')
  {
    filtered = products.filter(function(item)
    {
      return item.price < 5;
    });
  }
  else if(category === 'fiveto8')
  {
    filtered = products.filter(function(item)
    {
      return (item.price >= 5 && item.price < 8);
    });

  }
  else if(category === 'eightplus')
  {
    filtered = products.filter(function(item)
    {
      return item.price >= 8;
    });
  }
  else //reset (display all products in original order)
  {
    filtered = products;
  }
  renderList(filtered);
}

//assigning onclick events
document.getElementById('spicy').onclick = function()
{
  filterProducts('spicy');
}

document.getElementById('creamy').onclick = function()
{
  filterProducts('creamy');
}

document.getElementById('chunky').onclick = function()
{
  filterProducts('chunky');
}

document.getElementById('veggie').onclick = function()
{
  filterProducts('veggie');
}

document.getElementById('under5').onclick = function()
{
  filterProducts('under5');
}

document.getElementById('fiveto8').onclick = function()
{
  filterProducts('fiveto8');
}

document.getElementById('eightplus').onclick = function()
{
  filterProducts('eightplus');
}

document.getElementById('other').onclick = function()
{
  filterProducts('other');
}

document.getElementById('reset').onclick = function()
{
  filterProducts('reset');
}

document.getElementById('name').onclick = function()
{
  orderBy('name');
}

document.getElementById('price-l').onclick = function()
{
   orderBy('price-l');
}

document.getElementById('price-h').onclick = function()
{
  orderBy('price-h');
}

let details_buttons = document.getElementsByClassName('btn btn-primary');
for(let i = 0; i < details_buttons.length; i++)
{
  details_buttons[i].onclick = function()
  {
    alert('Sorry, this item is sold out.');
  }
}

document.getElementById('clothes_button').onclick = function()
{
  alert('Why are you buying CLOTHES from the SOUP store??');
}

})();
