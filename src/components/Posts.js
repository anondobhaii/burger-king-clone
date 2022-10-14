import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  const postes = [
    {
        url: "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/30db8aac1cc78453b938cb18e2a68e16e08c53fc-1000x500.jpg?w=1280&q=40&fit=max&auto=format",
        title: "Get rewarded like Royalty",
        para: "Join Royal Perks to earn Crowns, redeem for BK® food and upsize a side or drink for free daily. See Terms.",
        button: "Sign Up to Redeem"
    },
    {
        url: "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/99b3ffc140339c0966fd59a532ae279b6f1bab58-2000x1000.jpg?w=1280&q=40&fit=max&auto=format",
        title: "Free* Whopper, Croissan’wich, or Original Chicken Sandwich on your first digital order",
        para: "Only on the BK® App and bk.com. Available on delivery. *Min $3+ Purch. req’d. See Terms.",
        button: "Sign Up to Redeem"
    },
    {
        url: "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/008b142800c2523b7733106dc64efab4765d4564-2000x1000.jpg?w=1280&q=40&fit=max&auto=format",
        title: "Join the team!",
        para: "At BK®, you can find work-life balance, flexibility and career growth, because you deserve to live life your way. It’s not just a job, it’s a career opportunity! Hiring decisions are determined solely by the franchisee who independently owns and operates each restaurant.",
        button: "Apply Today"
    },
    {
        url: "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/aa8dd6e0d92334a13b89b6ad7fbe5542547e3332-2000x1000.jpg?w=1280&q=40&fit=max&auto=format",
        title: "Stay in and save with a $0 Delivery Fee",
        para: "Thursday to Sunday when you place a $5+ order on the BK® App. Add’l fees and higher prices may apply. See Terms.",
        button: "Order Delivery"
    }
  ];

  const style = {
    postsContainer: "px-6 mt-[70px] md:grid grid-cols-2 md:gap-4 md:mt-[100px] lg:mt-[180px] md:mb-[150px]",
    post: "bg-white rounded-2xl overflow-hidden shadow-xl mb-5",
    postBody: "p-4 pb-6",
    postHeader: "text-[#502314] mb-2 md:text-[18px]",
    postParagraph: "text-[#502314] text-[12px] mb-4 flamesan md:text-[13px]",
    button:
      "text-[13px] md:text-[18px] md:float-right  p-[8px_16px] rounded-full border border-[#d62300] text-[#d62300] mb-2 hover:bg-[#d623101a] transition-all",
  };

  return (
    <div className={style.postsContainer}>
      {postes.map((p) => 
        <div className={style.post}>
          <img src={p.url} alt="Royale Perks Pic" />
          <div className={style.postBody}>
            <h2 className={style.postHeader}>{p.title}</h2>
            <p className={style.postParagraph}>{p.para}</p>
            <Link className={style.button} to="/signup">{p.button}</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Posts;
