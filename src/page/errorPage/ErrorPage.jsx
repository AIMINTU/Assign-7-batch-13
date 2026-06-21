
import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6">
      <div className="max-w-md w-full text-center">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-2xl">
          {/* Error Icon */}
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-red-500/10 border border-red-500/20">
            <span className="text-4xl">⚠️</span>
          </div>

          {/* Error Code */}
          <h1 className="text-7xl font-extrabold text-white mb-2">
            404
          </h1>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-white mb-4">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="text-slate-400 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = "/")}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition"
            >
              Go Home
            </button>

            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 transition"
            >
              Go Back
            </button>
          </div>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          Error Code: 404
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;