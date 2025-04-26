import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
    return (
     <header className="p-3 bg-blue-900">
      <div className="flex  justify-between">
        <div >
          <h1 className="font-bold text-xl text-white">新規投稿ページ</h1>
        </div>
        <div className="flex justify-around  w-1/4 text-white">
         <Link to="/">
          <p>求人検索</p>
         </Link>
         <Link to="/new-post">
          <p>求人投稿</p>
         </Link>
        </div>
      </div>
     </header>
    );
  };