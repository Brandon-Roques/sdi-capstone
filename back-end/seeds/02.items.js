/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    {userid: 1, item_name: "box", description: "box", quantity: 1},
    {userid: 1, item_name: "circle", description: "box", quantity: 1},
    {userid: 2, item_name: "triangle", description: "box", quantity: 1},
    {userid: 2, item_name: "square", description: "box", quantity: 1},
    {userid: 2, item_name: "rectangle", description: "box", quantity: 1},
    {userid: 2, item_name: "sphere", description: "box", quantity: 1}
  ]);
};