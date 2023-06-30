"use client";

import { comment } from "@/redux/freatures/review/reviewSlice";
import { useSelector, useDispatch } from "react-redux";

const Page = () => {
  const defaultReview = useSelector((state: any) => state.review.value);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        className="text-black"
        type="text"
        placeholder="type anything for reviewing"
        onChange={(e) => dispatch(comment(e.target.value))}
      />
      <p>review: {defaultReview}</p>
    </div>
  );
};

export default Page;
