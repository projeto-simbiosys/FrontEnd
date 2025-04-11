import EyeClosed from "../../icons/EyeClosed";
import EyeOpen from "../../icons/EyeOpen";
import useInput from "./hook";

export default function Input({ hasError = false, ...props }) {
  const { input } = useInput(props.type);

  return (
    <div
      className={`group w-full flex items-center border ${
        hasError ? "border-red-700" : "border-sys-main"
      } has-[:disabled]:bg-gray-disabled has-[:disabled]:border-gray-disabled rounded-md px-1.5 py-1.5 gap-2 bg-white shadow-sm`}
    >
      <input
        {...props}
        type={input.type}
        className={`${
          hasError ? "text-red-700" : "text-sys-main"
        } disabled:text-gray-detail-disabled disabled:cursor-not-allowed flex bg-transparent text-base placeholder-sys-main/40`}
      />
      {input.isPassword && (
        <button
          disabled={props.disabled}
          onClick={input.tooglePassword}
          className="group"
        >
          {input.showPassword ? (
            <EyeOpen
              className={`w-[25px] h-[25px] ${
                hasError ? "fill-red-700" : "fill-sys-main"
              } group-has-[:disabled]:fill-gray-detail-disabled`}
            />
          ) : (
            <EyeClosed
              className={`w-[25px] h-[25px] ${
                hasError ? "fill-red-700" : "fill-sys-main"
              } group-has-[:disabled]:fill-gray-detail-disabled`}
            />
          )}
        </button>
      )}
    </div>
  );
}
