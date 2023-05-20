export function findInInventory(inventory, productId) {
  return inventory.find((product) => product._id === productId);
}

export function removeFromInventory(inventory, productId) {
  return inventory.filter((product) => product._id !== productId);
}

export function filterInventoryCategory(inventory, query) {
  if (query === "all") {
    return inventory;
  }
  return inventory.filter((product) => product.categories.includes(query));
}
