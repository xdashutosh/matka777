import React, { useState } from 'react';
import { Download, FileDown, Loader } from 'lucide-react';

const Home = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  const apkUrl = 'https://github.com/xdashutosh/apks/raw/refs/heads/main/app-release.apk';
  const fileName = 'app-release.apk';

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      setDownloadProgress(0);

      // Fetch the file
      const response = await fetch(apkUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentLength = response.headers.get('content-length');
      const total = parseInt(contentLength, 10);
      let loaded = 0;

      const reader = response.body.getReader();
      const chunks = [];

      while (true) {
        const { done, value } = await reader.read();
        
        if (done) break;
        
        chunks.push(value);
        loaded += value.length;
        
        if (total) {
          setDownloadProgress(Math.round((loaded / total) * 100));
        }
      }

      // Create blob from chunks
      const blob = new Blob(chunks, { type: 'application/vnd.android.package-archive' });
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      setIsDownloading(false);
      setDownloadProgress(0);
      
    } catch (error) {
      console.error('Download failed:', error);
      setIsDownloading(false);
      setDownloadProgress(0);
      alert('Download failed. Please try again.');
    }
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

        {isDownloading && (
          <div className="mb-6">
            <div className="bg-gray-200 rounded-full h-2 mb-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${downloadProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600">Downloading... {downloadProgress}%</p>
          </div>
        )}

        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 ${
            isDownloading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 hover:shadow-lg'
          }`}
        >
          {isDownloading ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              Downloading...
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              Download APK
            </>
          )}
        </button>

        <p className="text-xs text-gray-500 mt-4">
          Make sure to enable installation from unknown sources in your Android settings
        </p>
      </div>
    </div>
  );
};

export default Home;