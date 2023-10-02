import { logo } from "../exports";
import Form from "../form/signup";

function Container() {
  return (
    <div className=" bg-bgContainer bg-cover  w-full ">
      <div className=" bg-black bg-opacity-70 flex md:justify-center">
        <div className=" lg:flex hidden  items-center justify-center h-screen w-1/2">
          <div className="  h-[80vh]  w-[80%]">
            <div>
              <img className="w-[37.6rem] h-[24.8]" src={logo} alt="" />
            </div>
            <div className="ml-28">
              <h1 className="text-[3rem]">HOME OF MOVIES</h1>
              <ul>
                <li className="list-disc">WATCH MOVIES FOR FREE </li>
                <li className="list-disc">DOWNLOAD MOVIES TO WORK OFFLINE</li>
                <li className="list-disc">WATCH MOVIES ANYWHERE</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] w-full flex items-center flex-col justify-center">
          <div className="">
            <div className="text-[10rem] text-[#ff1717]">SIGNUP</div>
            {/* form section */}
            <Form />
            {/* form ends here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
