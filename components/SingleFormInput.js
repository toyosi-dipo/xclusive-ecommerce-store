import { useState } from "react";
import { IconEye, IconEyeSlashFill } from "../assets/icons";
// import { useGlobalContext } from "../contexts/GlobalContext";

function SingleInput({ type = "text", placeholder, name }) {
  const [showPassword, setShowPassword] = useState(false);
  // const { formInputs, updateFormInputs } = useGlobalContext();

  function showPasswordHandler() {
    setShowPassword(!showPassword);
  }

  // function formInputHandler(e) {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   updateFormInputs(name, value);
  // }

  return (
    <div className="mb-6 flex gap-4 border-b px-2 py-2">
      <input
        type={type === "password" ? (showPassword ? "text" : type) : type}
        placeholder={placeholder}
        name={name}
        // value={formInputs[name]}
        // onChange={formInputHandler}
        className="grow focus:outline-none"
      />
      {type === "password" && (
        <div
          className="text-2xl text-gray-400 duration-300 hover:cursor-pointer hover:text-hoverButton1"
          onClick={showPasswordHandler}
        >
          {showPassword ? <IconEyeSlashFill /> : <IconEye />}
        </div>
      )}
    </div>
  );
}

export default SingleInput;
