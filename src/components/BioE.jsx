import { GoArrowRight } from "react-icons/go";
const BioE = () => {
  return (
    <>
      <div className="bg-black text-white px-[10vw] py-[15vh]">
        <div className="flex flex-col gap-10 max-w-[50%]">
          <div className="text-3xl font-bold font-mono">
            <h1>Hammad Abassi</h1>
            <h1>Cinematographer, Filmmaker, Storyteller</h1>
          </div>
          <div className="text-xl italic font-extralight">
            Passionate filmmaker blending storytelling and visual artistry.
            Expert in directing, cinematography, and editing, crafting
            compelling narratives across genres
          </div>
          <div className="text-xl flex">
            <h1 className="italic font-thin">Read More </h1>
            <GoArrowRight className="w-8 pt-1 text-2xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BioE;
