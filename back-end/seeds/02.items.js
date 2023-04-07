/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    {userid: 1, item_name: "posuere lorem ipsum dolor sit", description: "this particlular description is going to be very long because I need to only display 100 characters of text. this will be the item I am testing and i hope as I am typing this out it has been over 100 characters long.", quantity: 1},
    {userid: 1, item_name: "amet mauris commodo quis imperdiet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.", quantity: 1},
    {userid: 1, item_name: "volutpat maecenas volutpat blandit aliquam", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.", quantity: 1},
    {userid: 1, item_name: "dolor purus non enim praesent", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.", quantity: 1},
    {userid: 1, item_name: "massa massa ultricies mi quis", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.", quantity: 1},
    {userid: 1, item_name: "sagittis aliquam malesuada bibendum arcu", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.", quantity: 1}
  ]);
};