import { Outlet, Link, useLocation } from "react-router-dom";
import { AiOutlineSetting, AiOutlineHome } from "react-icons/ai";
import clsx from "clsx";

export default function Layout() {
  const location = useLocation();

  const selectedClass = "text-primary";
  const defaultClass = "h-10 w-10";

  return (
    <div className="flex flex-row min-w-screen min-h-screen overflow-hidden">
      <div className="w-20 bg-base-200 flex flex-col gap-2 p-3">
        <Link className="btn btn-ghost" to="/">
          <AiOutlineHome
            className={clsx(defaultClass, {
              [selectedClass]: location.pathname === "/",
            })}
          />
        </Link>
        <Link className="btn btn-ghost" to="/settings">
          <AiOutlineSetting
            className={clsx(defaultClass, {
              [selectedClass]: location.pathname === "/settings",
            })}
          />
        </Link>
      </div>
      <div className="w-screen h-screen">
        <Outlet />
      </div>
    </div>
  );
}
