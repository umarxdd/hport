import { BsCameraReels } from "react-icons/bs";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { GoVideo } from "react-icons/go";

const Types = () => {
  return (
    <>
      <div className="flex  px-[17vw] py-[10vh] text-xl justify-between">
        <div className="flex flex-col items-center justify-between">
          <BsCameraReels className="text-5xl text-gray-400" />
          <h1 className="font-bold my-6 text-xl">Narrative</h1>
          <div className="text-center font-light text-gray-700">
            Telling engaging stories through captivating narrative videos.
          </div>

          <div className=""></div>
        </div>
        <div className="flex flex-col items-center justify-between">
          <PiTelevisionSimpleLight className="text-5xl text-gray-400" />
          <h1 className="font-bold my-6 text-xl">Commercial</h1>
          <div className="text-center font-light text-gray-700">
            Creating impactful commercial videos that drive brand success.
          </div>

          <div className=""></div>
        </div>
        <div className="flex flex-col items-center justify-between">
          <GoVideo className="text-5xl text-gray-400" />
          <h1 className="font-bold my-6 text-xl">Music</h1>
          <div className="text-center font-light text-gray-700">
            Visually amplifying music with stunning, creative video productions.
          </div>

          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default Types;
