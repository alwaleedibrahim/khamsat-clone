import React from 'react';
import ButtonA from '../buttons/ButtonA';

interface ISearchForm {
    action?: string;
}

const SearchForm: React.FC<ISearchForm> = ({
    action = '/search',
}) => {
    return (
        <form action={action} method="get" className="flex w-[100%] items-center relative">
            <input
                name="q"
                className="h-[70px] pl-[18%] mb-0 w-full text-md text-primary px-3 py-1.5 bg-white border border-gray-300 rounded-none block focus:outline-none focus:border-primary transition-colors"
                placeholder="ابحث عن خدمة"
            />
            <ButtonA text='بحث' extraStyle='absolute h-[53px] left-[9px] top-[50%] translate-x-[1%] -translate-y-1/2'/>
        </form>
    );
};

export default SearchForm;
