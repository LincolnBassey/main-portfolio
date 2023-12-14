import "./Myimage.scss";

export default function Myimage() {
  return (
    <div className="Mypics  flex  p-6 items-center">
      <div className="rounded-full flex items-center justify-center shadow img w-[160px]  h-[160px] lg:w-[310px] lg:h-[310px] md:h-[200px] md:w-[200px]">
        <img
          src="./src/assets/IMG_20230426_132245.jpg"
          alt=""
          className=" object-cover w-[155px]  h-[155px] lg:w-[305px] lg:h-[305px] md:h-[195px] md:w-[195px] rounded-full"
        />
      </div>
    </div>
  );
}
