const deleteItemFromArrayByIndex = (array, index) => {
  return array.slice(0, index).concat(array.slice(index + 1));
};

const deleteItemFromArrayById = (array, id) => {
  return array.filter((item) => item.id !== id);
};

const insertUpdatedItemIntoArrayByIndex = (array, index, updatedItem) => {
  const beforeItem = array.slice(0, index);
  beforeItem.push(updatedItem);
  const afterItem = array.slice(index + 1);
  const updatedArray = beforeItem.concat(afterItem);
  return updatedArray;
};

const deleteFunctions = {
  deleteItemFromArrayByIndex,
  deleteItemFromArrayById,
  insertUpdatedItemIntoArrayByIndex,
};

export default deleteFunctions;
