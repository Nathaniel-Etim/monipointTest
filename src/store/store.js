import { createSlice, configureStore } from "@reduxjs/toolkit";
import shoe1 from "../props/categoryShoes/1-1.jpg";
import shoe2 from "../props/categoryShoes/1-2.jpg";
import shoe3 from "../props/categoryShoes/1-3.jpg";
import shoe4 from "../props/categoryShoes/1-4.jpg";
import shoe5 from "../props/categoryShoes/1-6.jpg";
import shoe6 from "../props/categoryShoes/1-7.jpg";
import femaleDress1 from "../props/fDress/fe-dress2.jpg";
import femaleDress2 from "../props/fDress/femaildress.jpg";
import femaleDress4 from "../props/fDress/fmdress4.jpg";
import femaleDress400 from "../props/fDress/fgown4-001.jpg";
import femaleDress401 from "../props/fDress/fgown4-002.jpg";
import femaleDress3 from "../props/fDress/fmdress3.jpg";
import femaleDress301 from "../props/fDress/fmdress3--001.jpg";
import femaleDress302 from "../props/fDress/fmdress3--002.jpg";
import greentop from "../props/mDress/greentop.jpg";
import greentop1 from "../props/mDress/greentop1.jpg";

import menshoes1 from "../props/mDress/menshoes1.jpg";
import menshoes01 from "../props/mDress/menshoes1-001.jpg";
import menshoes02 from "../props/mDress/menshoes1-002.jpg";

const AllProducts = [
  {
    id: "porduct-1",
    name: "Female dress",
    mainImg: greentop,
    images: {
      img1: greentop1,
    },
    details: {
      price: 9.5,
      discription: "A nice looking female wear for all event",
      rating: "1k rating",
      storeName: "Anoda world",
      quality: "10",
    },
    orderQuantity: 2,
    cartigory: "female",
  },
  {
    id: "product-2",
    name: "Snekers",
    mainImg: shoe2,
    images: {},
    details: {
      price: 23,
      discription: "An all purpose shoes for all event",
      rating: ".2k rating",
      storeName: "Anoda world",
      quality: "10",
    },
    orderQuantity: 2,
    cartigory: "male",
  },
  {
    id: "product-3",
    name: "Sneakers (multipurpose)",
    mainImg: shoe3,
    images: {},
    details: {
      price: 9.9,
      discription: "this is a nice item for people of all age",
      rating: ".2k rating",
      storeName: "Anoda world",
      quality: "10",
    },
    orderQuantity: 2,
    cartigory: "male",
  },
  {
    id: "product-4",
    name: "Dress",
    mainImg: menshoes1,
    images: {
      img1: menshoes01,
      img2: menshoes02,
    },
    details: {
      price: 1,
      discription: "this is a nice dress for working class women",
      rating: ".2.5k rating",
      storeName: "stop n shop",
      quality: "10",
    },
    orderQuantity: 2,
    cartigory: "female",
  },
  {
    id: "product-5",
    name: "black gown",
    mainImg: femaleDress1,
    images: {
      // ? other images
    },
    details: {
      price: 6.9,
      discription: "shining black gown for busines , marrid and single wowen",
      rating: "2.8k rating",
      storeName: "Anoda world",
      quality: "10",
    },
    orderQuantity: 2,
    cartigory: "female",
  },
  {
    id: "product-6",
    name: "Red gown",
    mainImg: femaleDress2,
    images: {
      // ? other images
    },
    details: {
      price: 14,
      discription: "Amulty purpose gown",
      rating: ".2k rating",
      storeName: "Anoda world",
      quality: "10",
    },
    orderQuantity: 2,
    cartigory: "",
  },
  {
    id: "product-7",
    name: "sneakers",
    mainImg: shoe1,
    images: {
      // ? other images
    },
    details: {
      price: 7.0,
      discription: "this is a nice unisex shoe",
      rating: ".2k rating",
      storeName: "Anoda world",
      quality: "10",
    },
    orderQuantity: 2,
    cartigory: "",
  },
  {
    id: "product-8",
    name: "White Snekers",
    mainImg: shoe4,
    images: {
      // ? other images
    },
    details: {
      price: 1.9,
      discription:
        "this is a unisex sneakers avalable for track and formal event",
      rating: ".2k rating",
      storeName: "Anoda world",
      quality: "10",
    },
    orderQuantity: 2,
    cartigory: "male",
  },

  {
    id: "product-9",
    name: "Football boot",
    mainImg: shoe5,
    images: {
      // ? other images
    },
    details: {
      price: 99.9,
      discription: "this is a nice item for people of all age",
      rating: ".2k rating",
      storeName: "Anoda world",
      quality: "10",
    },
    orderQuantity: 2,
    cartigory: "male",
  },
  {
    id: "product-0",
    name: "Red male jordan boot",
    mainImg: shoe6,
    images: {
      // ? other images
    },
    details: {
      price: 100.1,
      discription: "this is a nice item for people of all age",
      rating: ".2k rating",
      storeName: "Anoda world",
      quality: "10",
    },
    orderQuantity: 2,
    cartigory: "male",
  },
  {
    id: "product-10",
    name: "Female Dress",
    mainImg: femaleDress4,
    images: {
      img1: femaleDress400,
      img2: femaleDress401,
    },
    details: {
      price: 10.1,
      discription: "this is a nice item for people of all age",
      rating: ".2k rating",
      storeName: "Anoda world",
      quality: "10",
    },
    orderQuantity: 2,
    cartigory: "female",
  },
  {
    id: "product-11",
    name: "Female multy purpose dress",
    mainImg: femaleDress3,
    images: {
      img1: femaleDress301,
      img2: femaleDress302,
    },
    details: {
      price: 100.1,
      discription: "this is a nice item for people of all age",
      rating: ".2k rating",
      storeName: "Anoda world",
      quality: "10",
    },
    orderQuantity: 2,
    cartigory: "male",
  },
];

const allProduct = createSlice({
  name: "products",
  initialState: AllProducts,
  reducers: {},
});

const store = configureStore({
  reducer: { items: allProduct.reducer },
});

export default store;
