import React from 'react'
import FilterCard from './FilterCard'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import SearchInput from './form-control/SearchInput'
import List from './List'
import ListItem from './ListItem'
import SubList from './SubList'
import RatingInput from './form-control/RatingInput'
import { FaTimes } from 'react-icons/fa'
import CheckboxInput from './form-control/CheckBoxInput'
import categoriesLoader from '../../_lib/axios/categoryLoader'
import subcategoriesLoader from '../../_lib/axios/subCategoryLoader'

export default async function Sidebar() {
    const categories = await categoriesLoader()
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
                    {categories.map(async (c)=> {
                        const subcat = await subcategoriesLoader(c._id)
                        return (<>
                        <ListItem key={c._id}>{c.name.ar}</ListItem>
                        <ListItem>
                            <SubList>
                                {subcat?.map(sub=> {
                                    return (
                                        <>
                                    <ListItem key={sub._id}>{sub.title.ar}</ListItem>
                                    <ListItem>
                                        <SubList>
                                        {sub.subcategories.map(subsub=> {
                                        return (
                                        <ListItem key={subsub._id}>{subsub.title.ar}</ListItem>
                                        )
                                    }
                                        )}
                                        </SubList>
                                    </ListItem>
                                    </>
                                )
                                })}
                            </SubList>
                        </ListItem>
                        </>)
                    })}
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