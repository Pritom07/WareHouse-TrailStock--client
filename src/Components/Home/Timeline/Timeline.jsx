import timeline_Img from "/Images/timelineImg.jpg";
import trakimg from "/Images/trak.jpg";
//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { TbTimelineEventPlus } from "react-icons/tb";

const Timeline = () => {
  return (
    <div className="mt-5">
      <p className="text-center font-semibold font-bebas text-xl sm:text-2xl md:text-3xl xl:text-4xl">
        Every Adventure Begins with the Right Gear
      </p>
      <section className="flex flex-col xl:flex-row">
        <div className="w-full xl:w-[40%] mt-8 xl:ml-2">
          <div className="flex flex-col justify-center items-center">
            <motion.img
              animate={{ x: [0, 130, -50] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              src={timeline_Img}
              className="w-96 rounded-xl border-4 border-green-500"
            />
            <motion.img
              animate={{ x: [0, -50, 130] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              src={trakimg}
              className="w-96 rounded-xl mt-6 border-4 border-green-500"
            />
          </div>
        </div>
        <div className="w-full xl:w-[60%] xl:mt-16">
          <div className="w-full px-2 xl:px-0 md:-ml-44 lg:-ml-48 xl:-ml-40">
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-5">
              <li>
                <hr />
                <div className="timeline-middle">
                  <TbTimelineEventPlus className="text-3xl text-green-600" />
                </div>
                <div className="timeline-end md:mb-10">
                  <div className="text-2xl font-black font-pacifico">
                    The Beginning: Plan & Pack
                  </div>
                  <p className="text-justify mt-2">
                    Every hiking adventure starts with preparation. From
                    studying the trail to selecting the right gear — sturdy
                    boots, trekking poles, tents, and hydration packs — packing
                    is where excitement builds. Each item chosen reflects
                    readiness for the challenges and joys of the journey ahead.
                  </p>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <TbTimelineEventPlus className="text-3xl text-green-600" />
                </div>
                <div className="timeline-end md:mb-10">
                  <div className="text-2xl font-black font-pacifico">
                    The Journey & Beyond
                  </div>
                  <p className="text-justify mt-2">
                    The trail unfolds with steps filled with energy, campfires
                    under starry skies, and the triumph of reaching the summit.
                    Reliable gear supports every moment — from meals at camp to
                    warmth at night. Returning home, the equipment carries marks
                    of the adventure, ready to serve again on the next hike.
                  </p>
                </div>
                <hr />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;
