"use client";
import Image from 'next/image';
import React, { useEffect, useState, ChangeEvent } from 'react';

interface GalleryModalProps {
    setShowGalleryModal: React.Dispatch<React.SetStateAction<boolean>>;
    setFiles: React.Dispatch<React.SetStateAction<(string | File)[]>>;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ setShowGalleryModal, setFiles }) => {
    const [activeTab, setActiveTab] = useState<'device' | 'url' | 'video'>('device');
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [imageURL, setImageURL] = useState<string>('');
    const [videoURL, setVideoURL] = useState<string>('');
    const [previewUrls, setPreviewUrls] = useState<(File | string)[]>([]);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    // Effect to handle outside click to close modal
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.classList.contains('fixed') && target.classList.contains('inset-0')) {
                setShowGalleryModal(false);
            }
        };

        window.addEventListener('click', handleOutsideClick);
        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [setShowGalleryModal]);

    // Handle file selection from device
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files);
            setSelectedFiles(filesArray);
            
            const fileReaders = filesArray.map(file => {
                return new Promise<string>((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => {
                        if (reader.result) {
                            resolve(reader.result as string);
                        } else {
                            reject('Failed to read file');
                        }
                    };
                    reader.onerror = () => reject('Failed to read file');
                    reader.readAsDataURL(file);
                });
            });

            Promise.all(fileReaders)
                .then(urls => {
                    const uniqueUrls = Array.from(new Set([...previewUrls, ...urls]));
                    setPreviewUrls(uniqueUrls);
                })
                .catch(err => {
                    console.error(err);
                    setErrorMessage('Failed to load some images. Please try again.');
                });
        }
    };

    // Add image URL to preview
    const handleAddImageURL = () => {
        if (imageURL.trim() === '') {
            setErrorMessage('Please enter a valid image URL.');
            return;
        }
        setPreviewUrls(prev => {
            const newUrls = [...prev, imageURL.trim()];
            return Array.from(new Set(newUrls));
        });
        setImageURL('');
        setErrorMessage(null);
    };

    // Add video URL to preview
    const handleAddVideoURL = () => {
        if (videoURL.trim() === '' || !isValidYouTubeURL(videoURL)) {
            setErrorMessage('Please enter a valid YouTube video URL.');
            return;
        }
        setPreviewUrls(prev => {
            const newUrls = [...prev, videoURL.trim()];
            return Array.from(new Set(newUrls));
        });
        setVideoURL('');
        setErrorMessage(null);
    };

    // Validate YouTube URL
    const isValidYouTubeURL = (url: string): boolean => {
        const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/i;
        return regex.test(url);
    };

    // Save and close modal
    const handleSave = () => {
        const filesToSave = activeTab === 'device' ? selectedFiles : previewUrls;
        setFiles(filesToSave);
        setShowGalleryModal(false);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg w-3/4 max-w-2xl">
                <div className="flex justify-between items-center p-4 border-b">
                    <h4 className="text-lg font-semibold">أضف صورة أو فيديو</h4>
                    <button
                        type="button"
                        className="btn-close text-2xl font-bold"
                        onClick={() => setShowGalleryModal(false)}
                        aria-label="Close modal"
                    >
                        &times;
                    </button>
                </div>

                <div className="modal-body p-4">
                    {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
                    <div className="flex space-x-2 border-b mb-4">
                        <button
                            type="button"
                            className={`py-2 px-4 ${activeTab === 'device' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
                            onClick={() => setActiveTab('device')}
                        >
                            صورة من جهازي
                        </button>
                        <button
                            type="button"
                            className={`py-2 px-4 ${activeTab === 'url' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
                            onClick={() => setActiveTab('url')}
                        >
                            صورة من رابط
                        </button>
                        <button
                            type="button"
                            className={`py-2 px-4 ${activeTab === 'video' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
                            onClick={() => setActiveTab('video')}
                        >
                            فيديو من يوتيوب
                        </button>
                    </div>

                    <div className="tab-content">
                        {activeTab === 'device' && (
                            <div id="from-device">
                                <div className="text-center">
                                    <label
                                        htmlFor="file-upload"
                                        className="btn btn-primary cursor-pointer flex items-center justify-center gap-2 bg-primary p-2 text-white"
                                    >
                                        <i className="fa fa-folder"></i>
                                        اختيار الصور
                                        <input
                                            id="file-upload"
                                            type="file"
                                            multiple
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        )}

                        {activeTab === 'url' && (
                            <div id="image-url">
                                <input
                                    type="text"
                                    className="form-input w-full p-2 mb-4 border rounded"
                                    placeholder="https://i.suar.me/xxxxxx"
                                    value={imageURL}
                                    onChange={(e) => setImageURL(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="btn btn-primary w-full"
                                    onClick={handleAddImageURL}
                                >
                                    <i className="fa fa-upload"></i> أضف الصورة
                                </button>
                            </div>
                        )}

                        {activeTab === 'video' && (
                            <div id="video-url">
                                <input
                                    type="text"
                                    className="form-input w-full p-2 mb-4 border rounded"
                                    placeholder="https://www.youtube.com/watch?v=xxxxxx"
                                    value={videoURL}
                                    onChange={(e) => setVideoURL(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="btn btn-primary w-full"
                                    onClick={handleAddVideoURL}
                                >
                                    <i className="fa fa-upload"></i> أضف الفيديو
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="mt-6">
                        <h5 className="text-md font-semibold mb-2">المعاينة:</h5>
                        <div className="grid grid-cols-3 gap-2">
                            {previewUrls.map((url, index) => (
                                <div key={index} className="relative">
                                    {typeof url === 'string' && (url.includes('youtube.com') || url.includes('youtu.be')) ? (
                                        <iframe
                                            className="w-full h-24 rounded"
                                            src={`https://www.youtube.com/embed/${url.split('v=')[1]}`}
                                            title={`Video ${index}`}
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        <Image
                                            src={url as string}
                                            alt={`Preview ${index}`}
                                            width={100}
                                            height={100}
                                            className="object-cover rounded"
                                            onError={(e) => { (e.target as HTMLImageElement).src = '/fallback-image.png'; }}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="modal-footer p-4 border-t">
                    <button
                        type="button"
                        className="btn btn-secondary mr-2 bg-red-500 p-2 text-white mx-3"
                        onClick={() => setShowGalleryModal(false)}
                    >
                        إلغاء
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary bg-primary p-2 text-white"
                        onClick={handleSave}
                    >
                        حفظ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GalleryModal;
