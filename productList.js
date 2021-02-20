//Mock Database
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

function renderList(results)
{
  const product_div = document.querySelector('#products-list-container');
  product_div.innerHTML = '';
  let prodList = results.map(function(result)
  {
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

function orderBy(sort_category)
{
  let results = (sort_category === 'title') ?
    products.sort(function(a, b)
    {
      let title1 = a.name.toUpperCase();
      let title2 = b.name.toUpperCase();
      if(title1 < title2)
      {
        return -1;
      }
      if(title1 > title2)
      {
        return 1;
      }
    }) :
    products.sort(function(a, b)
    {
      return a['price'] - b['price'];
    });

    renderList(results);
}

})();
