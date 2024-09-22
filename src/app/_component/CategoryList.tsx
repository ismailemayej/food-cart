"use client";
import React, { useEffect, useState } from "react";
import { GetCategory } from "../GlobalApi";
import Image from "next/image";

const CategoryList = () => {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    getCategorylist();
  }, []);
  const getCategorylist = () => {
    GetCategory().then((res: any) => {
      setCategoryData(res?.categories);
    });
  };
  return (
    <div className="flex gap-2">
      {categoryData &&
        categoryData.map((category: any) => (
          <div key={category.id}>
            <div className=" text-center border rounded-xl p-2 hover:bg-yellow-600">
              <Image
                className="rounded-xl p-1 h-20"
                src={category?.icon?.url}
                alt={category?.name}
                height={90}
                width={90}
              />
              <p className="text-lg">{category.name}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CategoryList;
