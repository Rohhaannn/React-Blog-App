import React from "react";

function Cards({item}) {
  console.log(item);
  return (
    <>
      <div className="mt-5 my-5 gap-3">
        <div className="card w-96 shadow-2xl hover:scale-105 duration-200">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
              width={350}
              height={350}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p> {item.title} </p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline"> ${item.price} </div>
              <div className="cursor-pointer px-3 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"> Buy Now </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
