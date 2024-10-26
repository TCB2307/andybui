import myAva from "../images/avatar.png";
import arrow from "../images/arrow.svg";
import img01 from "../images/img01.png";
import Button from "../components/Button";

function Homepage() {
  return (
    <div className="px-12 pt-8">
      <div className="flex py-8 space-x-14">
        <div className="flex flex-col space-y-4 w-3/5 pt-10 pl-14">
          <div className="text-7xl font-semibold py-4">I'm Andy</div>
          <div className="flex space-x-5 font-normal text-5xl pt-4">
            <div className="px-4 py-2 border-2 text-[#14BECA]">Digital</div>
            <div className="flex items-center font-medium">&</div>
            <div className="px-4 py-2 border-2 text-[#14BECA]">
              Frontend Developer
            </div>
          </div>
          <div className="text-[1.1rem] pt-5">
            I design and build clean, simple solutions websites with code.
            <br />
            Bringing ideas to life through thoughtful design is what I love
            most.
          </div>
          <div className="flex space-x-4 text-1xl pt-3">
            <Button text="WEBSITES" />
            <Button text="EDMS" />
            <Button text="ANIMATIONS" />
          </div>
          <div className="flex space-x-4 pt-3">
            <div className="text-1xl underline underline-offset-8">
              FIND OUT MORE
            </div>
            <img src={arrow} alt="arrow" className="w-5" />
          </div>
        </div>
        <div className="text-1xl w-2/5 flex justify-center items-center pt-10">
          <img src={myAva} alt="Avatar" className="w-80" />
        </div>
      </div>
      <div className="flex items-center justify-center ml-20 mt-20">
        <img src={img01} alt="IMG01" className="w-9/12" />
      </div>
    </div>
  );
}

export default Homepage;
