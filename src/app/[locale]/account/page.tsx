// app/profile/page.tsx
import Link from 'next/link';
import { FaBell, FaUser } from 'react-icons/fa';

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            {/* Main Content */}
            <div className="rounded-lg p-6 shadow-sm">
                {/* Right Sidebar */}
                <div className="mb-6 flex flex-col md:flex-row">
                    <div className=" mb-6 md:mb-0 md:w md:w-1/3 mx-4">
                        <div className="bg-white space-y-4 my-3">
                            <h2 className="font-bold">إعدادات</h2>
                            <div className="space-y-2">
                                <div className="font-semibold bg-primary font-semibold p-2 text-white flex">
                                    <FaUser className='ms-2 my-3' />
                                    <span className='m-2.5'>الملف الشخصي</span>

                                </div>
                                <div className='p-2 border-b flex'>
                                    <FaBell className='ms-2 my-3' />
                                    <span className='m-2.5'>الإشعارات</span>

                                </div>
                                <div className='p-2 border-b flex'>
                                    <span className='ms-2 my-3'>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="20px" width="18px" xmlns="http://www.w3.org/2000/svg"><path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"></path></svg>
                                    </span>
                                    <span className='m-2.5'>المزيد</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white space-y-4 my-3 p-3">
                            <h3 className="text-lg font-semibold border-b p-3">خطوات إكمال الحساب</h3>
                            <div className="flex items-center space-x-2 border-b p-3">
                                <div className="h-4 w-4 rounded-full border-2 border-gray-300"></div>
                                <span>أضف خدمتك الأولي</span>
                            </div>
                            <div className="flex items-center space-x-2 border-b p-3">
                                <div className="h-4 w-4 rounded-full border-2 border-gray-300"></div>
                                <span>توثيق الهوية</span>
                            </div>
                        </div>

                    </div>

                    {/* Main Form Area */}
                    <div className="md:w-3/4 p-3">
                        <form className="space-y-6">

                            <div className="space-y-4">
                                <div className="flex ">
                                    <h3>نوع الحساب</h3>
                                    <span className="text-red-500">*</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <input type="radio" name="accountType" id="customer" />
                                        <label htmlFor="customer">مشتري</label>
                                        <span className="text-gray-500 text-sm">(أبحث عن خدمات لشرائها)</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <input type="radio" name="accountType" id="seller" />
                                        <label htmlFor="seller">بائع</label>
                                        <span className="text-gray-500 text-sm">(أبيع خدماتي على المنصة)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex">
                                    <h3>المسمى الوظيفي</h3>
                                    <span className="text-red-500">*</span>
                                </div>
                                <select className="w-full rounded-md border border-gray-300 p-2">
                                    <option>أدخل مسمى وظيفي مثل: مهندس معماري</option>
                                </select>
                            </div>

                            <div className="space-y-4">
                                <h3>النبذة التعريفية</h3>
                                <textarea
                                    className="w-full rounded-md border border-gray-300 p-2"
                                    rows={6}
                                />
                                <p className="text-sm text-gray-500">
                                    المعلومات التي ستظهر في صفحة خاصة باقي المستخدمين. لا تدخل رقم جوال أو وسائل تواصل خارجية
                                </p>
                            </div>

                            <button
                                type="submit"
                                className="rounded-md bg-green-600 px-6 py-2 text-white"
                            >
                                حفظ
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}