"use client"
import { useLocale } from 'next-intl';
import React, { useState, KeyboardEvent, useEffect } from 'react';

interface Tag {
  title: {
    ar: string;
    en: string;
  };
}

interface TagInputProps {
  handlekeywords: (tags: Tag[]) => void;
}

const TagInput: React.FC<TagInputProps> = ({ handlekeywords }) => {
  const localActive = useLocale()
  const [tags, setTags] = useState<Tag[]>([]);
  const [inputValueAr, setInputValueAr] = useState<string>('');
  const [inputValueEn, setInputValueEn] = useState<string>('');

  const maxTags = 5;

  useEffect(() => {
    handlekeywords(tags);
  }, [tags]);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault();
      const trimmedAr = inputValueAr.trim();
      const trimmedEn = inputValueEn.trim();
      if (
        trimmedAr &&
        trimmedEn &&
        !tags.some(tag => tag.title.ar === trimmedAr && tag.title.en === trimmedEn) &&
        tags.length < maxTags
      ) {
        setTags([...tags, { title: { ar: trimmedAr, en: trimmedEn } }]);
        setInputValueAr('');
        setInputValueEn('');
      }
    }
  };

  const handleDelete = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white font-kufi">
      <div className="u-margin-bottom">
        <div className="control-group">
          <label htmlFor="select-tags" className="block mb-[11px] text-style1">كلمات مفتاحية</label>
          <div className="border p-2 w-full text-style2 focus:outline-none focus:border-primary flex gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <span key={index} className="bg-primary text-[12px] font-kufi text-white px-[8px] py-[4px] transition-all leading-[1.8] flex items-center">
                {tag.title.ar}
                    <br />
                {tag.title.en}
                <button
                  type="button"
                  onClick={() => handleDelete(index)}
                  className={`${localActive === "ar" ? 'mr-2' : 'ml-2'} font-bolder text-white focus:outline-none`}
                  aria-label={`Remove tag ${tag.title.ar}`}
                >
                  &times;
                </button>
              </span>
            ))}
            {tags.length < maxTags && (
              <div className="flex flex-col">
                <input
                  type="text"
                  id="input-ar"
                  value={inputValueAr}
                  onChange={(e) => setInputValueAr(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="أضف كلمة مفتاحية بالعربية"
                  className="outline-none mb-1"
                />
                <input
                  type="text"
                  id="input-en"
                  value={inputValueEn}
                  onChange={(e) => setInputValueEn(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Add keyword in English"
                  className="outline-none"
                />
              </div>
            )}
          </div>
          <p className="text-[12px] text-gray-600 mt-[10px]">اختر الكلمات المفتاحية المناسبة بحد أقصى 5 كلمات</p>
        </div>
      </div>
    </div>
  );
};

export default TagInput;
