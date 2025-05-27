import React from 'react';
import { Download, FileDown } from 'lucide-react';

const Home = () => {

  const apkUrl = 'https://github.com/xdashutosh/apks/raw/refs/heads/main/app-release.apk';
  const fileName = 'app-release.apk';

  const handleDownload = () => {
    // Create a temporary link element for direct download
    const link = document.createElement('a');
    link.href = apkUrl;
    link.download = fileName;
    link.target = '_blank'; // Open in new tab as fallback
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <FileDown className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">APK Downloader</h1>
          <p className="text-gray-600">Click the button below to download the APK file</p>
        </div>

        <div className="mb-6">
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <p className="text-sm text-gray-700 font-medium">File: {fileName}</p>
            <p className="text-xs text-gray-500 mt-1 break-all">{apkUrl}</p>
          </div>
        </div>

        {/* Progress section removed since we can't track progress with direct download */}

        <button
          onClick={handleDownload}
          className="w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 hover:shadow-lg"
        >
          <Download className="w-5 h-5" />
          Download APK
        </button>

        <p className="text-xs text-gray-500 mt-4">
          Make sure to enable installation from unknown sources in your Android settings
        </p>
      </div>
    </div>
  );
};

export default Home;