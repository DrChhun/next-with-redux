"use client";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@/redux/freatures/counter/counterSlice"; //import method for modify state
import { greeting, congrate } from "@/redux/freatures/comment/commentSlice";
import { comment } from "@/redux/freatures/review/reviewSlice";
import Link from "next/link";

const Home = () => {
  const count = useSelector((state: any) => state.counter.value); //import counter value from global state
  const defaultComment = useSelector((state: any) => state.comment.value);
  const review = useSelector((state: any) => state.review.value);
  const dispatch = useDispatch(); //dispatch function use to handle function in global state

  return (
    <div>
      <Link href="/home">Heading to home page</Link>
      <button onClick={() => dispatch(increment())}>Increase counter</button>
      <p>counter value : {count}</p>
      <button onClick={() => dispatch(decrement())}>Decrease counter</button>

      <h1>Commnet sections:</h1>
      <button onClick={() => dispatch(greeting())}>
        say greeting from comment
      </button>
      <p>{defaultComment}</p>
      <button onClick={() => dispatch(congrate())}>
        say greeting from comment
      </button>

      <div className="text-center">
        <input
          className="text-black"
          onChange={(e) => dispatch(comment(e.target.value))}
          type="text"
          placeholder="you can review any thing"
        />
        <p>review: {review}</p>
      </div>
    </div>
  );
};

export default Home;
