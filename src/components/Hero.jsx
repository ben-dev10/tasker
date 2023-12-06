import SpecialNote from "./SpecialNote";

export default function Hero() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  return (
    <div className="mt-3">
      <h2 className="text-xl font-bold">Welcome</h2>
      <div className="text-gray-500">{day + "th " + "Dec" + ", " + year}</div>
      <div className="mt-2 mb-5">
        <SpecialNote />
      </div>
    </div>
  );
}
