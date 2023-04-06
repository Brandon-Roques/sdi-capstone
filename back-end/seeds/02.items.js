/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    {userid: 1, item_name: "box", description: "this particlular description is going to be very long because I need to only display 100 characters of text. this will be the item I am testing and i hope as I am typing this out it has been over 100 characters long.", quantity: 1},
    {userid: 1, item_name: "circle", description: "box", quantity: 1},
    {userid: 2, item_name: "triangle", description: "box", quantity: 1},
    {userid: 2, item_name: "square", description: "box", quantity: 1},
    {userid: 2, item_name: "rectangle", description: "box", quantity: 1},
    {userid: 2, item_name: "sphere", description: "box", quantity: 1}
  ]);
};