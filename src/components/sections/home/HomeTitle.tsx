import Typewriter from 'typewriter-effect'
import { useInView } from "../../../hooks/useInView";
import { useRef, useEffect } from "react";

function Home() {

  const { ref, inView } = useInView<HTMLDivElement>(1);
  const typewriterRef = useRef<any>(null);

  useEffect(() => {
    if (!typewriterRef.current) return;

    if (inView) {
      typewriterRef.current.start();
    } else {
      typewriterRef.current.stop();
    }
  }, [inView]);

  return (
    <div
      className="flex-col text-center items-center pt-6 font-bold text-3xl text-white"
      ref={ref}
    >
      <p>My Name Is Alex D. Reyes</p>

      <div className="mt-5">
        <Typewriter
          onInit={(typewriter) => {
            typewriterRef.current = typewriter;

            typewriter
              .typeString('I am a Computer Science graduate from UCF, and')
              .pauseFor(1500)
              .deleteAll()
              .typeString('I will Be King Of The Software Engineers 👒😃')
              .pauseFor(1500)
              .deleteAll()
              .start();
          }}
          options={{
            autoStart: true,
            loop: true,
            cursor: '|',
            delay: 50,
            deleteSpeed: 40,
          }}
        />
      </div>
    </div>
  );
}

export default Home;
