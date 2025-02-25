import { TEXT_PRESET_4 } from "../twcssPresets";

function Button() {
  return (
    <a
      className={`group relative flex h-36 w-36 cursor-pointer items-center justify-center rounded-full bg-white text-blue-900 uppercase md:h-68 md:w-68 ${TEXT_PRESET_4}`}
    >
      Explore
      <span className="absolute inset-0 scale-0 rounded-full bg-white/10 transition-all duration-500 group-hover:scale-200 md:group-hover:scale-150"></span>
    </a>
  );
}

export default Button;
