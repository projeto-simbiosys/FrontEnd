export default function Notification({ type, show, title, body }) {
  return (
    <div
      className={`fixed top-6 right-0 mx-2 sm:right-6 max-w-xs bg-white rounded-md shadow-lg transition-all duration-500 transform ${
        show
          ? "translate-x-0 opacity-100"
          : "translate-x-10 opacity-0 pointer-events-none"
      } z-[1000]`}
    >
      <div
        className={`${
          type === "success" ? "bg-green-700" : "bg-red-700"
        } p-3 text-white font-semibold text-lg rounded-t-md`}
      >
        {title}
      </div>
      <div
        className={`p-3 rounded-b-md border ${
          type === "success" ? "border-green-700" : "border-red-700"
        }`}
      >
        {body}
      </div>
    </div>
  );
}
