import React from "react";
import FilterCard from "./FilterCard";
import CardHeader from "./CardHeader";
import ListItem from "./ListItem";
import List from "./List";
import CardBody from "./CardBody";
import CheckboxInput from "./form-control/CheckBoxInput";
import Badge from "./Badge";

export default function OrdersSidebar() {
  return (
    <div className="mx-20 w-full">
      <FilterCard>
        <CardHeader>حالة الطلب</CardHeader>
        <CardBody>
          <List>
            <ListItem>
              <CheckboxInput name="status">بانتظار التعليمات</CheckboxInput>
              <Badge>5</Badge>
            </ListItem>
            <ListItem>
              <CheckboxInput name="status">جاري تنفيذها</CheckboxInput>
              <Badge>31</Badge>
            </ListItem>
            <ListItem>
              <CheckboxInput name="status">بانتظار الاستلام</CheckboxInput>
              <Badge>15</Badge>
            </ListItem>
            <ListItem>
              <CheckboxInput name="status">تم تسليمها</CheckboxInput>
              <Badge>4</Badge>
            </ListItem>
            <ListItem>
              <CheckboxInput name="status">ملغية</CheckboxInput>
              <Badge>0</Badge>
            </ListItem>
          </List>
        </CardBody>
      </FilterCard>
    </div>
  );
}
