import React from "react";
import ScrollVelocity from "../hook/ScrollVelocity";

const Page8 = () => {
  const velocity = 100; // ✅ Define velocity here

  return (
    <div>
      <ScrollVelocity
        texts={["DON'T PUT IT OFF", "DON'T PUT IT OFF", "DON'T PUT IT OFF"]}
        velocity={velocity}
        className="custom-scroll-text"
      />
    </div>
  );
};

export default Page8;
