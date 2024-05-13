import React from "react";
import { useParams } from "react-router-dom";

const data = {
    "맘스터치": {
        title: "싸이버거 세트",
        price: "6,900원"
    },
    "맥도날드": {
        title: "빅맥 세트",
        price: "7,200원"
    },
    "롯데리아": {
        title: "데리버거 세트",
        price: "5,600원"
    },
    "KFC": {
        title: "징거버거",
        price: "7,800원"
    },
    "버거킹": {
        title: "통새우 와퍼 세트",
        price: "9,800원",
    }
}


const Product = () => {

    const { brandInput } = useParams();

    for ( const key in data) {
        if (brandInput === key) {
            return (
                <>
                    <h1>{brandInput}</h1>
                    <p>{data[brandInput].title}</p>
                    <p>{data[brandInput].price}</p>
                </>
            );
        }
    }
    
    return (
        <p>해당 브랜드의 제품을 찾을 수 없습니다.</p>
    );
}

export default Product;