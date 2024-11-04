'use client'
import React, { useEffect, useState } from "react";
import FilterCard from "./FilterCard";
import CardHeader from "./CardHeader";
import ListItem from "./ListItem";
import List from "./List";
import CardBody from "./CardBody";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function OrdersSidebar() {
  const t = useTranslations();
  const router = useRouter();
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const statuses = [
    "Awaiting Instructions",
    "In Progress",
    "Awaiting Confirmation",
    "Delivered",
    "Canceled",
  ];
  const handleCheckboxChange = (status: string) => {
    setSelectedStatuses((prevStatuses) => {
      if (prevStatuses.includes(status)) {
        return prevStatuses.filter((s) => s != status);
      } else {
        return [...prevStatuses, status];
      }
    });
  };
  useEffect(() => {    
    const queryString =
      selectedStatuses.length > 0
        ? `?status=${selectedStatuses.join(",")}`
        : "?status=";
    router.push(`${queryString}`);
  }, [selectedStatuses,router]);
  
  return (
    <div className="mx-20 w-full">
      <FilterCard>
        <CardHeader>{t("OrdersSidebar.title")}</CardHeader>
        <CardBody>
          <List>
            {statuses.map((s, index) => (
              <ListItem key={index}>
                <label htmlFor={`status-${index}`} className="flex">
                  <input
                    type="checkbox"
                    name="status"
                    id={`status-${index}`}
                    className="checked:bg-primary checked:border-primary me-3"
                    checked={selectedStatuses.includes(s)}
                    onChange={() =>
                      handleCheckboxChange(s)
                    }
                  />
                  {t(`OrdersSidebar.status.${s}`)}
                </label>
              </ListItem>
            ))}
          </List>
        </CardBody>
      </FilterCard>
    </div>
  );
}
