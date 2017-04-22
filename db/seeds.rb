Category.create! name: "Crab",
  description: "This is category of food",
  parent_id: nil

Category.create! name: "Crab",
  description: "This is category of food",
  parent_id: 1

Product.create! name: "Crab Food",
  description: "This is crab food",
  price: 50000,
  quantity: 2,
  current_score: 4,
  category_id: 2

ProductImage.create! image: "1.jpg",
  product_id: 1

User.create! name: "Framgia",
  email: "1@gmail.com",
  address: "Ha Noi",
  password: "1",
  role: 2,
  phone: 987654321

Comment.create! content: "This is a good food 1",
  user_id: 1,
  product_id: 1

Comment.create! content: "This is a good food 2",
  user_id: 1,
  product_id: 1
