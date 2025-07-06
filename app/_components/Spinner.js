import ClipLoader from "react-spinners/ClipLoader";

export default function Spinner() {
  return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <ClipLoader size={50} color="black" />
    </div>
  );
}
