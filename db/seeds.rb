Category.create! name: "Crab",
  description: "This is category of food",
  parent_id: nil

Category.create! name: "Fish",
  description: "This is category of food",
  parent_id: 1

Product.create! name: "Crab Food",
  description: "This is crab food",
  price: 50000,
  quantity: 2,
  current_score: 4,
  category_id: 2

ProductImage.create! product_id: 1,
  remote_image_url: "http://www.mccain.com/SiteCollectionImages/McCainCorporate/goodfood-products/McCain-Smiles-N-America.png"

User.create! name: "Framgia",
  email: "1@gmail.com",
  address: "Ha Noi",
  password: "1",
  role: 0,
  phone: 987654321

Comment.create! content: "This is a good food 1",
  user_id: 1,
  product_id: 1

Comment.create! content: "This is a good food 2",
  user_id: 1,
  product_id: 1
