import React from 'react';
import { AiOutlineTags } from 'react-icons/ai';

const SubscriptionPlans = () => {
    return (
        <div className="w-10/12 mx-auto">
            <div className="min-h-screen  flex justify-center items-center py-20">
                <div className="container mx-auto p-12 bg-gray-100 rounded-xl">
                    <h1 className="text-4xl text-green-500 font-bold from-current mb-8 text-center">Subscription Plans</h1>
                    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 space-y-4 sm:space-y-0">

                        {/* single plan */}
                        <div className="bg-white">
                            <div>
                                <div className="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
                                    <div className="text-center">
                                        {/* <img className="w-full" src="https://i.imgur.com/lmYYa2s.png" /> */}
                                        <p className="text-4xl pt-10 font-bold text-green-600">$100 - $999</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,64L6.2,106.7C12.3,149,25,235,37,224C49.2,213,62,107,74,101.3C86.2,96,98,192,111,229.3C123.1,267,135,245,148,224C160,203,172,181,185,176C196.9,171,209,181,222,192C233.8,203,246,213,258,218.7C270.8,224,283,224,295,208C307.7,192,320,160,332,154.7C344.6,149,357,171,369,160C381.5,149,394,107,406,117.3C418.5,128,431,192,443,192C455.4,192,468,128,480,90.7C492.3,53,505,43,517,80C529.2,117,542,203,554,245.3C566.2,288,578,288,591,277.3C603.1,267,615,245,628,218.7C640,192,652,160,665,154.7C676.9,149,689,171,702,192C713.8,213,726,235,738,208C750.8,181,763,107,775,112C787.7,117,800,203,812,245.3C824.6,288,837,288,849,256C861.5,224,874,160,886,144C898.5,128,911,160,923,176C935.4,192,948,192,960,165.3C972.3,139,985,85,997,101.3C1009.2,117,1022,203,1034,229.3C1046.2,256,1058,224,1071,229.3C1083.1,235,1095,277,1108,261.3C1120,245,1132,171,1145,149.3C1156.9,128,1169,160,1182,160C1193.8,160,1206,128,1218,101.3C1230.8,75,1243,53,1255,48C1267.7,43,1280,53,1292,74.7C1304.6,96,1317,128,1329,149.3C1341.5,171,1354,181,1366,186.7C1378.5,192,1391,192,1403,181.3C1415.4,171,1428,149,1434,138.7L1440,128L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path></svg>
                                        
                                        <div className="px-4 py-2">
                                            <h1 className="text-xl pt-3 font-gray-700 font-bold">HR PREMIUM</h1>
                                            <div className="flex space-x-2 mt-3">
                                                <span><AiOutlineTags className="h-5 w-5 text-gray-400"/></span>
                                                <h3 className="text-sm text-gray-500  mb-2">Project : Colony HR</h3>
                                            </div>
                                            <p className="text-sm tracking-normal text-justify"><span className="text-green-600">Mobile, Web and IoT</span> integrated state of the art HR management system providing Attendance, Leave, Allowance, Tour monitoring and more. Separate apps for Android and iOS along with fully equipped web-based admin panel, multi-hierarchy supported access control and fingerprint scanner integration.</p>
                                            <button className="mt-5 w-full text-center bg-green-500 py-2 rounded-lg">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* single plan */}
                        <div className="bg-white">
                            <div>
                                <div className="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
                                    <div className="text-center">
                                        {/* <img className="w-full" src="https://i.imgur.com/lmYYa2s.png" /> */}
                                        <p className="text-4xl pt-10 font-bold text-green-600">$100 - $999</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,64L6.2,106.7C12.3,149,25,235,37,224C49.2,213,62,107,74,101.3C86.2,96,98,192,111,229.3C123.1,267,135,245,148,224C160,203,172,181,185,176C196.9,171,209,181,222,192C233.8,203,246,213,258,218.7C270.8,224,283,224,295,208C307.7,192,320,160,332,154.7C344.6,149,357,171,369,160C381.5,149,394,107,406,117.3C418.5,128,431,192,443,192C455.4,192,468,128,480,90.7C492.3,53,505,43,517,80C529.2,117,542,203,554,245.3C566.2,288,578,288,591,277.3C603.1,267,615,245,628,218.7C640,192,652,160,665,154.7C676.9,149,689,171,702,192C713.8,213,726,235,738,208C750.8,181,763,107,775,112C787.7,117,800,203,812,245.3C824.6,288,837,288,849,256C861.5,224,874,160,886,144C898.5,128,911,160,923,176C935.4,192,948,192,960,165.3C972.3,139,985,85,997,101.3C1009.2,117,1022,203,1034,229.3C1046.2,256,1058,224,1071,229.3C1083.1,235,1095,277,1108,261.3C1120,245,1132,171,1145,149.3C1156.9,128,1169,160,1182,160C1193.8,160,1206,128,1218,101.3C1230.8,75,1243,53,1255,48C1267.7,43,1280,53,1292,74.7C1304.6,96,1317,128,1329,149.3C1341.5,171,1354,181,1366,186.7C1378.5,192,1391,192,1403,181.3C1415.4,171,1428,149,1434,138.7L1440,128L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path></svg>
                                        
                                        <div className="px-4 py-2">
                                            <h1 className="text-xl pt-3 font-gray-700 font-bold">HR PREMIUM</h1>
                                            <div className="flex space-x-2 mt-3">
                                                <span><AiOutlineTags className="h-5 w-5 text-gray-400"/></span>
                                                <h3 className="text-sm text-gray-500  mb-2">Project : Colony HR</h3>
                                            </div>
                                            <p className="text-sm tracking-normal text-justify"><span className="text-green-600">Mobile, Web and IoT</span> integrated state of the art HR management system providing Attendance, Leave, Allowance, Tour monitoring and more. Separate apps for Android and iOS along with fully equipped web-based admin panel, multi-hierarchy supported access control and fingerprint scanner integration.</p>
                                            <button className="mt-5 w-full text-center bg-green-500 py-2 rounded-lg">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* single plan */}
                        <div className="bg-white">
                            <div>
                                <div className="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
                                    <div className="text-center">
                                        {/* <img className="w-full" src="https://i.imgur.com/lmYYa2s.png" /> */}
                                        <p className="text-4xl pt-10 font-bold text-green-600">$100 - $999</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,64L6.2,106.7C12.3,149,25,235,37,224C49.2,213,62,107,74,101.3C86.2,96,98,192,111,229.3C123.1,267,135,245,148,224C160,203,172,181,185,176C196.9,171,209,181,222,192C233.8,203,246,213,258,218.7C270.8,224,283,224,295,208C307.7,192,320,160,332,154.7C344.6,149,357,171,369,160C381.5,149,394,107,406,117.3C418.5,128,431,192,443,192C455.4,192,468,128,480,90.7C492.3,53,505,43,517,80C529.2,117,542,203,554,245.3C566.2,288,578,288,591,277.3C603.1,267,615,245,628,218.7C640,192,652,160,665,154.7C676.9,149,689,171,702,192C713.8,213,726,235,738,208C750.8,181,763,107,775,112C787.7,117,800,203,812,245.3C824.6,288,837,288,849,256C861.5,224,874,160,886,144C898.5,128,911,160,923,176C935.4,192,948,192,960,165.3C972.3,139,985,85,997,101.3C1009.2,117,1022,203,1034,229.3C1046.2,256,1058,224,1071,229.3C1083.1,235,1095,277,1108,261.3C1120,245,1132,171,1145,149.3C1156.9,128,1169,160,1182,160C1193.8,160,1206,128,1218,101.3C1230.8,75,1243,53,1255,48C1267.7,43,1280,53,1292,74.7C1304.6,96,1317,128,1329,149.3C1341.5,171,1354,181,1366,186.7C1378.5,192,1391,192,1403,181.3C1415.4,171,1428,149,1434,138.7L1440,128L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path></svg>
                                        
                                        <div className="px-4 py-2">
                                            <h1 className="text-xl pt-3 font-gray-700 font-bold">HR PREMIUM</h1>
                                            <div className="flex space-x-2 mt-3">
                                                <span><AiOutlineTags className="h-5 w-5 text-gray-400"/></span>
                                                <h3 className="text-sm text-gray-500  mb-2">Project : Colony HR</h3>
                                            </div>
                                            <p className="text-sm tracking-normal text-justify"><span className="text-green-600">Mobile, Web and IoT</span> integrated state of the art HR management system providing Attendance, Leave, Allowance, Tour monitoring and more. Separate apps for Android and iOS along with fully equipped web-based admin panel, multi-hierarchy supported access control and fingerprint scanner integration.</p>
                                            <button className="mt-5 w-full text-center bg-green-500 py-2 rounded-lg">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionPlans;