export const AddCategoriesAction = (categories) => ({
  type: "ADD_CATEGORIES",
  payload : categories
})

export const RemoveCategoriesAction = (categories) => ({
  type: "REMOVE_CATEGORIES",
  payload : categories
})

export const RemoveAllCategoriesAction = (categories) => ({
  type: "REMOVE_ALL_CATEGORIES",
  payload : categories
})