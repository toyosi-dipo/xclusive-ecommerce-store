export function findInInventory(inventory, productId) {
  return inventory.find((product) => product._id === productId);
}

export function removeFromInventory(inventory, productId) {
  return inventory.filter((product) => product._id !== productId);
}
