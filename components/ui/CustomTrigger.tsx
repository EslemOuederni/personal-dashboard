" use client";
import { useSidebar } from "@/components/ui/sidebar";
import Image from "next/image";

function CustomTrigger() {
  const { toggleSidebar, state } = useSidebar();

  console.log(state);
  return (
    <button onClick={toggleSidebar} className="focus:outline-none">
      <Image
        src="/assets/icons/navbar-closed-arrow.svg"
        alt="icon"
        width={state === "collapsed" ? 40 : 30}
        height={state === "collapsed" ? 40 : 30}
        className={`transition-all duration-300 ${state === "collapsed" ? "rotate-180 " : ""}`}
      />{" "}
    </button>
  );
}

export default CustomTrigger;
