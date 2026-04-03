const getRestaurants = `
  SELECT 
    id, 
    restaurant_name, 
    rating, 
    location, 
    type
  FROM pittsburgh_restaurants
  ORDER BY id DESC
`;

const getRestaurantById = `
  SELECT * FROM pittsburgh_restaurants WHERE id = $1
`;

const addRestaurant = `
  INSERT INTO pittsburgh_restaurants 
    (restaurant_name, rating, location, type)
  VALUES ($1, $2, $3, $4)
  RETURNING *
`;

const updateRestaurant = `
  UPDATE pittsburgh_restaurants
  SET 
    restaurant_name = $1,
    rating = $2,
    location = $3,
    type = $4
  WHERE id = $5
  RETURNING *
`;

module.exports = {
  getRestaurants,
  getRestaurantById,
  addRestaurant,
  updateRestaurant,
};