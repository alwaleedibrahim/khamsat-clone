import React from 'react'
import FilterCard from './FilterCard'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import SearchInput from './form-control/SearchInput'
import List from './List'
import ListItem from './ListItem'
import SubList from './SubList'
import Badge from './Badge'
import RatingInput from './form-control/RatingInput'
import { FaTimes } from 'react-icons/fa'
import CheckboxInput from './form-control/CheckBoxInput'

export default function Sidebar() {
  return (
    <div className='mx-20'>
        <FilterCard>
            <CardHeader><span>بحث</span></CardHeader>
            <CardBody>
                <SearchInput />
            </CardBody>
        </FilterCard>
        <FilterCard>
            <CardHeader><span>الاقسام</span></CardHeader>
            <CardBody>
                <List>
                    <ListItem>تصميم <Badge>234</Badge></ListItem>
                    <ListItem>كتابة وترجمة <Badge>345</Badge></ListItem>
                    <ListItem>
                        <SubList>
                            <ListItem>ترجمة <Badge>598</Badge></ListItem>
                            <ListItem>
                                <SubList>
                                    <ListItem>الانجليزية <Badge>12</Badge></ListItem>
                                    <ListItem>العربية <Badge>55</Badge></ListItem>
                                    <ListItem>الانجليزية <Badge>18</Badge></ListItem>
                                    <ListItem>الانجليزية <Badge>43</Badge></ListItem>
                                    <ListItem>الانجليزية <Badge>54</Badge></ListItem>
                                    <ListItem>الانجليزية</ListItem>
                                </SubList>
                            </ListItem>
                            <ListItem>كتابة إبداعية</ListItem>
                        </SubList>
                    </ListItem>
                </List>
            </CardBody>
        </FilterCard>
        <FilterCard>
            <CardHeader>تقييم الخدمة <FaTimes /></CardHeader>
            <CardBody>
                <List>
                    <ListItem>
                        <RatingInput rating={4}/>
                    </ListItem>
                    <ListItem>
                        <RatingInput rating={3}/>
                    </ListItem>
                    <ListItem>
                        <RatingInput rating={2}/>
                    </ListItem>
                    <ListItem>
                        <RatingInput rating={1}/>
                    </ListItem>
                </List>
            </CardBody>
        </FilterCard>
        <FilterCard>
            <CardHeader> مستوى البائع<FaTimes /></CardHeader>
            <CardBody>
                <List>
                    <ListItem>
                        <CheckboxInput name='level'>بائع موثوق / مميز</CheckboxInput>
                    </ListItem>
                    <ListItem>
                        <CheckboxInput name='level'>بائع نشيط</CheckboxInput>
                    </ListItem>
                    <ListItem>
                        <CheckboxInput name='level'>بائع جديد</CheckboxInput>
                    </ListItem>
                </List>
            </CardBody>
        </FilterCard>
        <FilterCard>
            <CardHeader> حالة البائع<FaTimes /></CardHeader>
            <CardBody>
                <List>
                    <ListItem>
                        <CheckboxInput name='status'>متواجد حاليا</CheckboxInput>
                    </ListItem>
                    <ListItem>
                        <CheckboxInput name='status'>هوية موثقة</CheckboxInput>
                    </ListItem>
                </List>
            </CardBody>
        </FilterCard>
        
    </div>
  )
}
