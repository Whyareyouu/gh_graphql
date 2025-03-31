"use client";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import React from "react";

interface PageTabsProps {
  type: string;
  id: string;
  title: string;
}

export const PageTabs = ({ type, id, title }: PageTabsProps) => {
  const pathname = usePathname();
  const navigationItems = React.useMemo(
    () => [
      { label: "Overview", href: `/${type}/${id}/${title}` },
      { label: "Characters", href: `/${type}/${id}/${title}/characters` },
      { label: "Staff", href: `/${type}/${id}/${title}/staff` },
      { label: "Relations", href: `/${type}/${id}/${title}/relations` },
      { label: "Reviews", href: `/${type}/${id}/${title}/reviews` },
    ],
    [title, type, id],
  );

  return (
    <NavigationMenu className="justify-center items-center mx-auto">
      <NavigationMenuList>
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <NavigationMenuItem key={item.label}>
              <Link href={item.href} passHref legacyBehavior>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  style={{
                    backgroundColor: isActive ? "rgba(255, 255, 255, 0.1)" : "transparent",
                    color: isActive ? "#ffffff" : "#a0a0a0",
                    fontWeight: isActive ? "bold" : "normal",
                    borderBottom: isActive ? "2px solid #ffffff" : "none",
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  {item.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
