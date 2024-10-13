"use client";
import Image from 'next/image';
import React, { useEffect, useState, ChangeEvent } from 'react';

interface GalleryModalProps {
    setShowGalleryModal: React.Dispatch<React.SetStateAction<boolean>>;
    handleImages: (images: (File | string)[]) => void; 
    setFiles: React.Dispatch<React.SetStateAction<File[]>>; 
}

const GalleryModal: React.FC<GalleryModalProps> = ({ setShowGalleryModal, handleImages, setFiles }) => {
    const [activeTab, setActiveTab] = useState<'device' | 'url' | 'video'>('device');
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [imageURL, setImageURL] = useState<string>('');
    const [videoURL, setVideoURL] = useState<string>('');
    const [previewUrls, setPreviewUrls] = useState<(File | string)[]>([]); 

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
  }, []); 
  

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files);
            setSelectedFiles(filesArray);
            setFiles(filesArray); 

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
                    setPreviewUrls(prev => [...prev, ...urls, ...filesArray]); 
                })
                .catch(err => {
                    console.error(err);
                    alert('Failed to load some images. Please try again.');
                });
        }
    };

    const handleAddImageURL = () => {
        if (imageURL.trim() === '') {
            alert('Please enter a valid image URL.');
            return;
        }
        setPreviewUrls(prev => [...prev, imageURL.trim()]);
        setImageURL('');
    };

    const handleAddVideoURL = () => {
        if (videoURL.trim() === '' || !isValidYouTubeURL(videoURL)) {
            alert('Please enter a valid YouTube video URL.');
            return;
        }
        setPreviewUrls(prev => [...prev, videoURL.trim()]);
        setVideoURL('');
    };

    const isValidYouTubeURL = (url: string): boolean => {
        const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/i;
        return regex.test(url);
    };

    const handleSave = () => {
        handleImages(previewUrls); 
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
                                        className="btn btn-primary cursor-pointer flex items-center justify-center gap-2"
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
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {previewUrls.map((url, index) => {
                                const isYouTube = typeof url === 'string' && (url.includes('youtube.com') || url.includes('youtu.be'));
                                return (
                                    <div key={index} className="relative">
                                        {isYouTube ? (
                                            <iframe
                                                width="100%"
                                                height="150"
                                                src={`https://www.youtube.com/embed/${extractYouTubeID(url)}`}
                                                title="YouTube video player"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        ) : (
                                            <Image
                                                src={url as string}
                                                alt={`Preview ${index + 1}`}
                                                layout="responsive"
                                                width={300}
                                                height={200}
                                                objectFit="cover"
                                                className="rounded-lg"
                                                onError={(e) => {
                                                    e.currentTarget.src = '/fallback-image.png';
                                                }}
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-4 flex justify-end">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleSave}
                        >
                            حفظ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const extractYouTubeID = (url: string) => {
    const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/i;
    const matches = url.match(regex);
    return matches ? matches[1] : '';
};

export default GalleryModal;
