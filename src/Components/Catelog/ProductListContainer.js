import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";



const ProductList = () => {

    const list = [
        {
          "id": 1,
          "name": "Rosalyn",
          "description": "C# compiler",
          "price": 10,
          "pictureFileName": "1.png",
          "pictureUri": "http://localhost:5000/images/",
          "productTypeId": 1,
          "brandId": 1,
          "availableStock": 9,
          "restockThreshold": 50,
          "maxStockThreshold": 100,
          "onRecorder": true
        },
        {
          "id": 2,
          "name": "C#10",
          "description": "C# 10th edition",
          "price": 10,
          "pictureFileName": "2.png",
          "pictureUri": "http://localhost:5000/images/",
          "productTypeId": 1,
          "brandId": 1,
          "availableStock": 9,
          "restockThreshold": 50,
          "maxStockThreshold": 100,
          "onRecorder": true
        },
        {
          "id": 3,
          "name": ".net 5",
          "description": ".net version 5",
          "price": 10,
          "pictureFileName": "3.png",
          "pictureUri": "http://localhost:5000/images/",
          "productTypeId": 1,
          "brandId": 2,
          "availableStock": 9,
          "restockThreshold": 50,
          "maxStockThreshold": 100,
          "onRecorder": true
        },
        {
          "id": 4,
          "name": ".net6",
          "description": ".net version 6",
          "price": 10,
          "pictureFileName": "4.png",
          "pictureUri": "http://localhost:5000/images/",
          "productTypeId": 1,
          "brandId": 2,
          "availableStock": 9,
          "restockThreshold": 50,
          "maxStockThreshold": 100,
          "onRecorder": true
        }
      ];

    

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        //call product api and get the product array
        axios.get('https://localhost:5001/product').then((result) => {
            setProductList(result.data);
        })

    },[])

    //iterate using map
    return(
        <>
            {productList.map((product) => <ProductCard url={product.pictureUri} name={product.name} price={product.price} fileName={product.pictureFileName} />)}
        </>
    )
}

export default ProductList;