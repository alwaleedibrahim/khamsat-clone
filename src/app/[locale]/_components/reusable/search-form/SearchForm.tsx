import React from 'react';
import ButtonA from '../buttons/ButtonA';
import { useLocale } from 'next-intl';

interface ISearchForm {
    action?: string;
}

const SearchForm: React.FC<ISearchForm> = ({
    action = '/search',
}) => {
    const localActive = useLocale()

    return (
<form action={action} method="get" className={`flex w-[100%] items-center relative`}>
<input
                name="q"
                className={`h-[70px] ${localActive === "en" ? "pr-[18%]" : "pl-[18%]"}  mb-0 w-full text-md text-black px-3 py-1.5 bg-white border border-gray-300 rounded-none block text-gray-800 focus:outline-none focus:border-primary transition-colors`}
                placeholder={`${localActive === "en"? "search for service": "ابحث عن خدمة"}`}
            />
            <ButtonA text={`${localActive === "en"? "search": "بحث"}`} extraStyle={`absolute h-[53px] ${localActive === "en" ? "right-[9px]" : "left-[9px]"}  top-[50%] translate-x-[1%] -translate-y-1/2`}/>
        </form>
    );
};

export default SearchForm;
