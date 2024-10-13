"use client";
import React, { useState, KeyboardEvent, useEffect } from 'react';

interface TagInputProps {
  handlekeywords: (tags: string[]) => void;
}

const TagInput: React.FC<TagInputProps> = ({ handlekeywords }) => {
    const [tags, setTags] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const maxTags = 5;

    useEffect(() => {
        handlekeywords(tags);
    }, [tags, handlekeywords]);

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' || event.key === ',') {
            event.preventDefault();
            const trimmedValue = inputValue.trim();
            if (trimmedValue && !tags.includes(trimmedValue) && tags.length < maxTags) {
                setTags([...tags, trimmedValue]);
                setInputValue('');
            }
        }
    };

    const handleDelete = (index: number) => {
        setTags(tags.filter((_, i) => i !== index));
    };

    return (
        <form className="bg-white font-kufi">
            <div className="u-margin-bottom">
                <div className="control-group">
                    <label htmlFor="select-tags" className="block mb-[11px] text-style1">كلمات مفتاحية</label>
                    <div className="border p-2 w-full text-style2 focus:outline-none focus:border-primary flex gap-2 flex-wrap">
                        {tags.map((tag, index) => (
                            <span key={index} className="bg-primary text-[12px] font-kufi text-white px-[8px] py-[4px] transition-all leading-[1.8] flex items-center">
                                {tag}
                                <button
                                    type="button"
                                    onClick={() => handleDelete(index)}
                                    className="ml-2 font-bolder text-white focus:outline-none"
                                    aria-label={`Remove tag ${tag}`}
                                >
                                    &times;
                                </button>
                            </span>
                        ))}
                        {tags.length < maxTags && (
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="أضف كلمات مفتاحية"
                                className="outline-none flex-1 border-none"
                            />
                        )}
                    </div>
                    <p className="text-[12px] text-gray-600 mt-[10px]">اختر الكلمات المفتاحية المناسبة بحد أقصى 5 كلمات</p>
                </div>
            </div>
        </form>
    );
};

export default TagInput;
