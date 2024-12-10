import { toast } from "react-toastify";

const getStoredList = () => {
  const storedListStr = localStorage.getItem("product-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredList = (id) => {
  const storedList = getStoredList();
  if (storedList.includes(id)) {
    toast.info("This book is already in your read list.");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("product-list", storedListStr);
    toast.success("This product add to card.");
  }
};

const getStoredWishList = () => {
  const storedWishListStr = localStorage.getItem("wish-list");
  if (storedWishListStr) {
    const storedWishList = JSON.parse(storedWishListStr);
    return storedWishList;
  } else {
    return [];
  }
};

const addToStoredWishList = (id) => {
  const storedWishList = getStoredWishList();
  if (storedWishList.includes(id)) {
    toast.info("This product is already in your wishlist.");
  } else {
    storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem("wish-list", storedWishListStr);
    toast.success("This product is added to your wishlist!");
  }
};

export {
  addToStoredList,
  addToStoredWishList,
  getStoredList,
  getStoredWishList,
};
