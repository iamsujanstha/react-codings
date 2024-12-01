import { NavLink, useLocation } from "react-router";
import { sidebarData, SidebarItemType } from "./sidebar-data";
import { FaAngleRight } from "react-icons/fa6";
import { useState } from "react";
import clsx from "clsx";

interface SidebarProps {
  menuData?: SidebarItemType[];
}

const Sidebar: React.FC<SidebarProps> = ({ menuData = sidebarData }) => {
  const renderMenu = (items: SidebarItemType[]) => {
    return (
      <ul className="flex flex-col">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    );
  };

  return (
    <nav>
      {renderMenu(menuData)}
    </nav>
  );
};


const MenuItem: React.FC<{ item: SidebarItemType }> = ({ item }) => {
  const [isExpanded, setExpanded] = useState(false);

  const hasChildren = item.modulePrivilege?.length > 0;

  const location = useLocation();
  const isActive = item.url === location.pathname

  const handleClick = () => {
    setExpanded((prev) => !prev)
  }

  return (
    <li className={clsx("p-2 px-4 ", isActive ? "bg-slate-300" : "")}>
      <NavLink
        to={item.url || location.pathname}
        className={clsx("flex items-center justify-between",)}
        onClick={handleClick}
      >
        <span>
          {item.nameEnglish}
        </span>
        {hasChildren && <FaAngleRight />}
      </NavLink>
      {hasChildren && isExpanded && (
        <ul className="">
          {item.modulePrivilege.map((child) => (
            <MenuItem key={child.id} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Sidebar;
