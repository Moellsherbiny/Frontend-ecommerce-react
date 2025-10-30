import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface WishlistItem {
  id: number;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
  sizes?: string[];
  oldPrice?: number;
  discount?: number;
  description: string;
  colours?: string[];
  rating: number;
  reviews: number;
  isNew: boolean;
  quantity: number;
  delivery: {
    freeDelivery: boolean;
    returnPolicy: string;
  };
  image: string;
}

interface WishlistState {
  items: WishlistItem[];
}

// ✅ قراءة wishlist من localStorage
const loadWishlistFromLocalStorage = (): WishlistItem[] => {
  try {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Failed to load wishlist:", error);
    return [];
  }
};

// ✅ حفظ wishlist في localStorage
const saveWishlistToLocalStorage = (items: WishlistItem[]) => {
  try {
    localStorage.setItem("wishlist", JSON.stringify(items));
  } catch (error) {
    console.error("Failed to save wishlist:", error);
  }
};

const initialState: WishlistState = {
  items: loadWishlistFromLocalStorage(),
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
        saveWishlistToLocalStorage(state.items);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveWishlistToLocalStorage(state.items);
    },
    clearWishlist: (state) => {
      state.items = [];
      saveWishlistToLocalStorage(state.items);
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
