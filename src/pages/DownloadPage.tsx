import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Download, CheckCircle, Monitor, Smartphone, AlertCircle, Clock } from 'lucide-react';

interface AppVersion {
  id: string;
  platform: 'android' | 'windows';
  version_number: string;
  build_number: number;
  release_type: 'stable' | 'beta';
  file_url: string;
  changelog: string;
  is_latest: boolean;
  published_at: string;
}

export default function DownloadPage() {
  const [androidVersion, setAndroidVersion] = useState<AppVersion | null>(null);
  const [windowsVersion, setWindowsVersion] = useState<AppVersion | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLatestVersions() {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('app_versions')
          .select('*')
          .eq('is_latest', true);

        if (error) throw error;

        if (data) {
          const android = data.find((v) => v.platform === 'android');
          const windows = data.find((v) => v.platform === 'windows');
          
          if (android) setAndroidVersion(android);
          if (windows) setWindowsVersion(windows);
        }
      } catch (err) {
        console.error('Failed to fetch versions', err);
      } finally {
        setLoading(false);
      }
    }

    fetchLatestVersions();
  }, []);

  const handleDownload = async (fileUrl: string) => {
    // Note: If using a public bucket, we can just use the public URL directly or open it.
    window.open(fileUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-500/30">
      
      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100">
              <div className="w-5 h-5 rounded-md bg-[#00B571]" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">VidyaSetu AI</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-24">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-[#00B571] font-medium text-sm mb-8">
            <Download className="w-4 h-4" />
            <span>Download Center</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight mb-6 text-slate-900">
            Get the Latest Versions of <span className="text-[#00B571]">VidyaSetu AI</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            Download our secure software for your school's desktop computers or the mobile app for staff and parents. Always updated, always secure.
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 rounded-full border-2 border-[#00B571] border-t-transparent animate-spin" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Android Card */}
            <div className="relative group rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center border border-emerald-100 text-[#00B571]">
                    <Smartphone className="w-8 h-8" />
                  </div>
                  {androidVersion && (
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#00B571] text-sm font-medium border border-emerald-100 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Latest
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold mb-2 text-slate-900">Android App</h3>
                <p className="text-slate-500 mb-8">For School Admins, Teachers, Parents, and Drivers.</p>

                {androidVersion ? (
                  <div className="space-y-6 flex-1 flex flex-col">
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-slate-500">Version</span>
                        <span className="font-mono text-[#00B571] font-bold">v{androidVersion.version_number}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Released</span>
                        <span className="text-sm text-slate-600 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {new Date(androidVersion.published_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    {androidVersion.changelog && (
                      <div className="space-y-2 flex-1">
                        <span className="text-sm font-bold text-slate-700">What's New:</span>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {androidVersion.changelog}
                        </p>
                      </div>
                    )}

                    <button 
                      onClick={() => handleDownload(androidVersion.file_url)}
                      className="w-full h-14 rounded-xl bg-[#00B571] hover:bg-[#009c61] text-white font-bold flex items-center justify-center gap-2 transition-colors mt-auto shadow-sm shadow-emerald-500/20"
                    >
                      <Download className="w-5 h-5" />
                      Download APK
                    </button>
                  </div>
                ) : (
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 flex flex-col items-center justify-center text-center gap-3 flex-1 mt-auto">
                    <AlertCircle className="w-6 h-6 text-slate-400" />
                    <p className="text-sm text-slate-500">No Android version published yet.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Windows Card */}
            <div className="relative group rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100 text-blue-600">
                    <Monitor className="w-8 h-8" />
                  </div>
                  {windowsVersion && (
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium border border-blue-100 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Latest
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold mb-2 text-slate-900">Windows Software</h3>
                <p className="text-slate-500 mb-8">For School Office and Desktop Management.</p>

                {windowsVersion ? (
                  <div className="space-y-6 flex-1 flex flex-col">
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-slate-500">Version</span>
                        <span className="font-mono text-blue-600 font-bold">v{windowsVersion.version_number}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Released</span>
                        <span className="text-sm text-slate-600 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {new Date(windowsVersion.published_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    {windowsVersion.changelog && (
                      <div className="space-y-2 flex-1">
                        <span className="text-sm font-bold text-slate-700">What's New:</span>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {windowsVersion.changelog}
                        </p>
                      </div>
                    )}

                    <button 
                      onClick={() => handleDownload(windowsVersion.file_url)}
                      className="w-full h-14 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center justify-center gap-2 transition-colors mt-auto shadow-sm shadow-blue-500/20"
                    >
                      <Download className="w-5 h-5" />
                      Download EXE
                    </button>
                  </div>
                ) : (
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 flex flex-col items-center justify-center text-center gap-3 flex-1 mt-auto">
                    <AlertCircle className="w-6 h-6 text-slate-400" />
                    <p className="text-sm text-slate-500">No Windows version published yet.</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        )}
      </main>

    </div>
  );
}
