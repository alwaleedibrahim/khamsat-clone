import React from "react";
import FilterCard from "./FilterCard";
import CardHeader from "./CardHeader";
import ListItem from "./ListItem";
import List from "./List";
import CardBody from "./CardBody";
import CheckboxInput from "./form-control/CheckBoxInput";

export default function OrdersSidebar() {
  return (
    <div className="mx-20 w-full">
      <FilterCard>
        <CardHeader>حالة الطلب</CardHeader>
        <CardBody>
          <List>
            <ListItem>
              <CheckboxInput name="status">بانتظار التعليمات</CheckboxInput>
            </ListItem>
            <ListItem>
              <CheckboxInput name="status">جاري تنفيذها</CheckboxInput>
            </ListItem>
            <ListItem>
              <CheckboxInput name="status">بانتظار الاستلام</CheckboxInput>
            </ListItem>
            <ListItem>
              <CheckboxInput name="status">تم تسليمها</CheckboxInput>
            </ListItem>
            <ListItem>
              <CheckboxInput name="status">ملغية</CheckboxInput>
            </ListItem>
          </List>
        </CardBody>
      </FilterCard>
    </div>
  );
}
