import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Phone, 
  MessageCircle,
  Play,
  ChevronDown,
  ChevronRight,
  Download,
  Home,
  PieChart
} from 'lucide-react';
import { BsAndroid2 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export default function Home1() {
  const [expandedFaq, setExpandedFaq] = useState(0);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? -1 : index);
  };
  const navigate = useNavigate();

   const apkUrl = 'https://github.com/xdashutosh/apks/raw/refs/heads/main/app-release.apk';
  const fileName = 'app-release.apk';

  const handleDownload = async () => {
    try {
      console.log('Fetching file...');
      
      // Fetch the file with no-cors to avoid redirect issues
      const response = await fetch(apkUrl, {
        method: 'GET',
        mode: 'cors', // Try cors first
        cache: 'no-cache'
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Get the blob data
      const blob = await response.blob();
      console.log('File fetched, size:', blob.size, 'bytes');
      
      // Force download using blob URL
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = fileName;
      
      document.body.appendChild(a);
      a.click();
      
      // Cleanup
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 100);
      
      console.log('Download initiated');
      
    } catch (error) {
      console.error('Blob download failed:', error);
      
      // Alternative method - create iframe download
      try {
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = apkUrl + '?download=1';
        document.body.appendChild(iframe);
        
        setTimeout(() => {
          document.body.removeChild(iframe);
        }, 5000);
        
        console.log('Iframe download initiated');
      } catch (iframeError) {
        console.error('Iframe download failed:', iframeError);
        // Last resort - forced download attribute
        const link = document.createElement('a');
        link.href = apkUrl;
        link.download = fileName;
        link.setAttribute('download', fileName);
        link.click();
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-white font-bold text-lg leading-tight">Sara</div>
                  <div className="text-white font-bold text-sm leading-tight">777</div>
                </div>
              </div>
              <div className="text-2xl font-bold">
                <span className="text-gray-900">Sara</span>
                <span className="text-orange-500">777</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-12">
              <span onClick={()=>navigate("/")} className="text-gray-700 hover:text-orange-500 font-medium text-lg transition-colors">
                Home
              </span>
              <span onClick={()=>navigate("/main-market")} className="text-gray-700 hover:text-orange-500 font-medium text-lg transition-colors">
                Charts
              </span>
            </nav>

            {/* Download Button */}
            <Button 
            onClick={handleDownload}
              variant="outline" 
              className=" md:flex border-orange-400 text-orange-600 hover:bg-orange-50 hover:border-orange-500 px-6 py-2 rounded-lg font-medium"
            >
              Download App
            </Button>

            {/* Mobile Menu Button */}
          
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-16 left-12 w-20 h-20 bg-yellow-400 rounded-full opacity-80"></div>
          <div className="absolute top-32 right-16 w-16 h-16 bg-teal-400 rounded-full opacity-70"></div>
          <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-teal-300 rounded-full opacity-60"></div>
          <div className="absolute bottom-48 right-12 w-18 h-18 bg-orange-400 rounded-full opacity-75"></div>
          <div className="absolute top-48 left-1/3 w-12 h-12 bg-orange-300 rounded-full opacity-60"></div>
          <div className="absolute bottom-16 right-1/3 w-14 h-14 bg-red-300 rounded-full opacity-70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="text-center">
            <div className="mb-12">
              <img 
                src="https://saraa777.site/images/screenshots/banner-shot.png" 
                alt="Betting Professional with Money" 
                className="w-86 h-96 sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[500px] mx-auto object-cover"
                style={{ clipPath: 'none' }}
              />
            </div>
           
            {/* Full-Width Download App Button */}
            <div className="mb-8 px-4">
              <Button 
               onClick={handleDownload}
                size="lg" 
                className="w-full max-w-4xl bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold px-8 py-6 rounded-full text-xl shadow-xl transform hover:scale-105 transition-all duration-200"
              >
               <BsAndroid2 />
               Download App
              </Button>
            </div>
            
            {/* Call and WhatsApp Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button 
                size="lg" 
                className="flex-1 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Button 
                size="lg" 
                className="flex-1 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Pricing Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Game Rates</h2>
          
          {/* Top Row - 3 Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <Card className="relative bg-white shadow-sm">
              <div className="absolute left-0 top-0 w-1 h-full bg-orange-400"></div>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Single Digit</h3>
                <p className="text-gray-600 text-lg">1 KA 10</p>
              </CardContent>
            </Card>

            <Card className="relative bg-white shadow-sm">
              <div className="absolute left-0 top-0 w-1 h-full bg-orange-400"></div>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Jodi Digits</h3>
                <p className="text-gray-600 text-lg">1 KA 100</p>
              </CardContent>
            </Card>

            <Card className="relative bg-white shadow-sm">
              <div className="absolute left-0 top-0 w-1 h-full bg-orange-400"></div>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Single Pana</h3>
                <p className="text-gray-600 text-lg">1 KA 150</p>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Row - 4 Cards */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="relative bg-white shadow-sm">
              <div className="absolute left-0 top-0 w-1 h-full bg-orange-400"></div>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Double Pana</h3>
                <p className="text-gray-600 text-lg">1 KA 300</p>
              </CardContent>
            </Card>

            <Card className="relative bg-white shadow-sm">
              <div className="absolute left-0 top-0 w-1 h-full bg-orange-400"></div>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Triple Pana</h3>
                <p className="text-gray-600 text-lg">1 KA 700</p>
              </CardContent>
            </Card>

            <Card className="relative bg-white shadow-sm">
              <div className="absolute left-0 top-0 w-1 h-full bg-orange-400"></div>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Half Sangam</h3>
                <p className="text-gray-600 text-lg">1 KA 1000</p>
              </CardContent>
            </Card>

            <Card className="relative bg-white shadow-sm">
              <div className="absolute left-0 top-0 w-1 h-full bg-orange-400"></div>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Full Sangam</h3>
                <p className="text-gray-600 text-lg">1 KA 10000</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
       <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Live Games</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'SRIDEVI MORNING', numbers: '120 - 35 - 357', status: 'Betting is Close' },
              { name: 'MANGAL MORNING', numbers: '457 - 63 - 337', status: 'Betting is Close' },
              { name: 'SITA MORNING', numbers: '468 - 85 - 267', status: 'Betting is Close' },
              { name: 'GEETA MORNING', numbers: '358 - 67 - 359', status: 'Betting is Close' },
              { name: 'GEETA MORNING', numbers: '358 - 67 - 359', status: 'Betting is Close' },
              { name: 'KARNATAKA DAY', numbers: '250 - 70 - 389', status: 'Betting is Close' },
              { name: 'SITA MORNING', numbers: '468 - 85 - 267', status: 'Betting is Close' },
              { name: 'SITA MORNING', numbers: '468 - 85 - 267', status: 'Betting is Close' },
              { name: 'MANGAL MORNING', numbers: '457 - 63 - 337', status: 'Betting is Close' },
              { name: 'MANGAL MORNING', numbers: '457 - 63 - 337', status: 'Betting is Close' },
              { name: 'MANGAL MORNING', numbers: '457 - 63 - 337', status: 'Betting is Close' },
              { name: 'MANGAL MORNING', numbers: '457 - 63 - 337', status: 'Betting is Close' },
              { name: 'SITA MORNING', numbers: '468 - 85 - 267', status: 'Betting is Close' },
              { name: 'TULSI MORNING', numbers: '145 - 06 - 899', status: 'Betting is Close' },
              { name: 'TULSI MORNING', numbers: '145 - 06 - 899', status: 'Betting is Close' },
              { name: 'TULSI MORNING', numbers: '145 - 06 - 899', status: 'Betting is Close' }
            ].map((game, index) => (
              <Card key={index} className="relative bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-gray-900">{game.name}</h3>
                        <div className="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center">
                          <span className="text-xs text-gray-500">i</span>
                        </div>
                      </div>
                      <p className="text-red-500 text-sm font-medium">{game.status}</p>
                    </div>
                    <Button size="sm" className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-full w-12 h-12 p-0">
                      <Play className="w-5 h-5 fill-current" />
                    </Button>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-2xl font-bold text-gray-900 mb-2">{game.numbers}</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button onClick={()=>navigate('/chart/jodichart')} variant="outline" className="flex-1 border-orange-400 text-orange-600 hover:bg-orange-50">
                      Jodi Chart
                    </Button>
                    <Button onClick={()=>navigate('/chart/panachart')} variant="outline" className="flex-1 border-orange-400 text-orange-600 hover:bg-orange-50">
                      Pana Chart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">SARA 777</h3>
            <p className="text-gray-600 mb-4">We offer a wide selection of betting games:</p>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <ul className="space-y-2">
                <li>• Market Trend Analysis</li>
                <li>• Portfolio Performance Tracking</li>
                <li>• Risk Assessment Dashboard</li>
                <li>• Sector Comparison Tools</li>
                <li>• Technical Analysis Charts</li>
              </ul>
              <ul className="space-y-2">
                <li>• Economic Indicator Tracking</li>
                <li>• News Sentiment Analysis</li>
                <li>• Predictive Modeling</li>
                <li>• Custom Alert System</li>
                <li>• Mobile Analytics Platform</li>
              </ul>
            </div>
            <p className="text-gray-600 mt-4">
              Each analytics tool is updated regularly to ensure users have access to the most accurate and current 
              market data for their investment analysis.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              SARA 777 Pro Market Analysis - Track Investment Trends
            </h3>
            <p className="text-gray-600">
              The Market Analysis Dashboard on SARA 777 Pro provides users with comprehensive market data and 
              trend analysis. By tracking historical performance and current market conditions, users can make 
              better-informed investment decisions and optimize their portfolio strategies.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently asked <span className="text-orange-500">questions?</span>
          </h2>
          
          <div className="space-y-4">
            {[
              {
                question: "What is SARA 777 Pro?",
                answer: "SARA 777 Pro is a comprehensive Betting analytics platform where you can track markets, analyze investments, and access professional-grade Betting tools."
              },
              {
                question: "What analytics tools are available on SARA 777 Pro?",
                answer: "We offer market tracking, portfolio analysis, risk assessment, technical charts, news sentiment analysis, and many other professional Betting tools."
              },
              {
                question: "Is SARA 777 Pro licensed and regulated?",
                answer: "Yes, SARA 777 Pro operates under proper Betting data licensing and follows industry-standard security protocols for Betting information."
              },
              {
                question: "What is the minimum subscription and data access?",
                answer: "Our basic plan starts at $29/month with access to essential analytics tools. Premium features are available with higher-tier subscriptions."
              },
              {
                question: "Why choose SARA 777 Pro among other providers?",
                answer: "We offer real-time data, advanced analytics, user-friendly interface, mobile access, and comprehensive market coverage all in one platform."
              },
              {
                question: "What is SARA 777 Pro, and how does it help with Betting analysis?",
                answer: "SARA 777 Pro is a professional analytics platform that provides market insights, portfolio tracking, and investment analysis tools to help make informed Betting decisions."
              },
              {
                question: "How often are the analytics on SARA 777 Pro updated?",
                answer: "Our market data and analytics are updated in real-time during market hours, with historical data and reports updated daily."
              }
            ].map((faq, index) => (
              <Card key={index} className="cursor-pointer" onClick={() => toggleFaq(index)}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-medium text-gray-900">
                      {faq.question}
                    </CardTitle>
                    {expandedFaq === index ? 
                      <ChevronDown className="w-5 h-5 text-orange-500" /> : 
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    }
                  </div>
                </CardHeader>
                {expandedFaq === index && (
                  <CardContent className="pt-0">
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">F</span>
            </div>
            <span className="text-xl font-bold">SARA 777 Pro</span>
          </div>
          <p className="text-gray-400">
            © 2025 SARA 777 Pro. Professional Betting Analytics Platform.
          </p>
        </div>
      </footer>
    </div>
  );
}