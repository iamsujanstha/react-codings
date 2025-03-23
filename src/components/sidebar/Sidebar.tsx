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
    <li className={clsx("p-2 px-4 cursor-pointer", isActive && "bg-slate-300")}>
      <div className="flex items-center justify-between" onClick={handleClick}>
        {item.url ? (
          <NavLink to={item.url} className="flex-1">
            {item.nameEnglish}
          </NavLink>
        ) : (
          <span className="flex-1">{item.nameEnglish}</span>
        )}
        {hasChildren && <FaAngleRight className={clsx("transition-transform", isExpanded && "rotate-90")} />}
      </div>

      {hasChildren && isExpanded && (
        <ul className="ml-4 border-l pl-2">
          {item.modulePrivilege.map((child) => (
            <MenuItem key={child.id} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Sidebar;
