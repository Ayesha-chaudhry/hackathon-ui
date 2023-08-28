import { defineField } from "sanity";

export const product = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
         name: "title", 
         title: "Product",
         type: "string" 
    },
    {
        name: "description",
        title: "Description",
        type: "string"
    },
    {
        name: "price",
        title: "price",
        type: "number"
    },
    {
        name: "image",
        title: "Image",
        type: "image"
    }
  ]
};
