const deleteItemFromArrayByIndex = (array, index) => {
  return array.slice(0, index).concat(array.slice(index + 1));
};

const deleteItemFromArrayById = (array, id) => {
  return array.filter((item) => item.id !== id);
};

const deleteFunctions = {
  deleteItemFromArrayByIndex,
  deleteItemFromArrayById,
};

export default deleteFunctions;
