import API from "./index";

// export const GetAllShoeAPI = ({ page, limit, sort, brand, category, price }) => API.get("/shoesPage", {
//     params: {
//         page,
//         limit,
//         sort,
//         brand,
//         category,
//         price
//     }
// });
const data = {
  "shoes": [
    {
      "id": 1,
      "brand": "Timberland",
      "category": "Boots",
      "price": 160.00,
      "description": "Timberland classic waterproof boots for durability and style.",
      "image_link": "1.jpg"
    },
    {
      "id": 2,
      "brand": "Dr. Martens",
      "category": "Boots",
      "price": 140.00,
      "description": "Dr. Martens leather boots with iconic yellow stitching.",
      "image_link": "2.jpg"
    },
    {
      "id": 3,
      "brand": "Columbia",
      "category": "Boots",
      "price": 130.00,
      "description": "Columbia waterproof hiking boots for rugged terrain.",
      "image_link": "3.webp"
    },
    {
      "id": 4,
      "brand": "Sorel",
      "category": "Boots",
      "price": 180.00,
      "description": "Sorel insulated winter boots for extreme cold weather.",
      "image_link": "4.webp"
    },
    {
      "id": 5,
      "brand": "Gucci",
      "category": "Loafers",
      "price": 650.00,
      "description": "Gucci luxury leather loafers with horsebit detail.",
      "image_link": "5.avif"
    },
    {
      "id": 6,
      "brand": "Cole Haan",
      "category": "Loafers",
      "price": 200.00,
      "description": "Cole Haan penny loafers with classic design and comfort.",
      "image_link": "6.jpg"
    },
    {
      "id": 7,
      "brand": "Clarks",
      "category": "Loafers",
      "price": 100.00,
      "description": "Clarks comfortable and stylish leather loafers.",
      "image_link": "7.jpg"
    },
    {
      "id": 8,
      "brand": "Salvatore Ferragamo",
      "category": "Loafers",
      "price": 750.00,
      "description": "Salvatore Ferragamo premium leather loafers with signature Gancini ornament.",
      "image_link": "8.webp"
     },
    {
      "id": 9,
      "brand": "Jimmy Choo",
      "category": "Heels",
      "price": 850.00,
      "description": "Jimmy Choo elegant high heels with a sophisticated design.",
      "image_link": "9.webp"
    },
    {
      "id": 10,
      "brand": "Christian Louboutin",
      "category": "Heels",
      "price": 950.00,
      "description": "Christian Louboutin signature red sole stiletto heels.",
      "image_link": "10.jpg"
    },
    {
      "id": 11,
      "brand": "Manolo Blahnik",
      "category": "Heels",
      "price": 1050.00,
      "description": "Manolo Blahnik classic pumps with timeless elegance.",
      "image_link": "11.avif"
    },
    {
      "id": 12,
      "brand": "Stuart Weitzman",
      "category": "Heels",
      "price": 400.00,
      "description": "Stuart Weitzman comfortable and stylish high heels.",
      "image_link": "12.webp"
    },
    {
      "id": 13,
      "brand": "Birkenstock",
      "category": "Sandals",
      "price": 120.00,
      "description": "Birkenstock supportive and comfortable sandals with cork footbed.",
      "image_link": "13.webp"
    },
    {
      "id": 14,
      "brand": "Teva",
      "category": "Sandals",
      "price": 60.00,
      "description": "Teva rugged and durable sport sandals for outdoor activities.",
      "image_link": "14.jpg"
    },
    {
      "id": 15,
      "brand": "Chaco",
      "category": "Sandals",
      "price": 100.00,
      "description": "Chaco adjustable strap sandals for a custom fit.",
      "image_link": "15.webp"
    },
    {
      "id": 16,
      "brand": "Steve Madden",
      "category": "Sandals",
      "price": 80.00,
      "description": "Steve Madden stylish sandals perfect for casual outings.",
      "image_link": "16.jpg"
    },
    {
      "id": 17,
      "brand": "Nike",
      "category": "Sneakers",
      "price": 130.00,
      "description": "Nike high-performance sneakers with innovative design.",
      "image_link": "17.webp"
    },
    {
      "id": 18,
      "brand": "Adidas",
      "category": "Sneakers",
      "price": 110.00,
      "description": "Adidas stylish and comfortable sneakers for everyday wear.",
      "image_link": "18.webp"
    },
    {
      "id": 19,
      "brand": "Puma",
      "category": "Sneakers",
      "price": 90.00,
      "description": "Puma lightweight and breathable sneakers for sports and casual wear.",
      "image_link": "19.jpg"
    },
    {
      "id": 20,
      "brand": "Reebok",
      "category": "Sneakers",
      "price": 100.00,
      "description": "Reebok classic sneakers with a retro design and modern comfort.",
      "image_link": "20.webp"
    }
  ]
}




export function GetAllShoes(){
    return data.shoes
  }


export function GetShoeByCategory(cat){
  return data.shoes.find(product => product.cat === cat);

}

export function GetShoeById(id){
  return data.shoes.find(product => product.id === id);

}


export const GetTopShoeAPI = () => API.get("/shoesPage/top");
export const GetShoeByIdAPI = (id) => API.get(`/shoesPage/${id}`);
export const CreateShoeAPI = (AddProductData) => API.post("/shoesPage", AddProductData);
export const GetFilterData = () => API.get("/shoesPage/filter");