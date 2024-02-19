import React, { useEffect } from "react";
import { Parallax } from "react-parallax";
import Lenis from "@studio-freight/lenis";

function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <h1 class="h1">Home page</h1>
      {/* <img src="images/1.webp" alt="" />
      <img src="images/2.webp" alt="" />
      <img src="images/3.webp" alt="" />
      <img src="images/4.webp" alt="" />
      <img src="images/5.webp" alt="" /> */}

      <Parallax bgImage="images/1.webp" strength={400}>
        <div class="content">
          <p class="text">normal parallax</p>
        </div>
      </Parallax>
      <Parallax bgImage="images/2.webp" strength={-400} blur={{ min: -5, max: 5 }}>
        <div class="content">
          <p class="text">blur parallax</p>
        </div>
      </Parallax>
      <Parallax bgImage="images/3.webp" strength={-600}>
        <div class="content">
          <p class="text">reverse parallax</p>
        </div>
      </Parallax>
      <Parallax bgImage="images/4.webp" strength={200} bgImageSizes="cover">
        <div class="content">
          <p class="text">normal parallax</p>
        </div>
      </Parallax>
      <Parallax bgImage="images/5.webp" strength={800}>
        <div class="content">
          <p class="text">normal parallax</p>
        </div>
      </Parallax>
    </div>
  );
}

export default Home;
