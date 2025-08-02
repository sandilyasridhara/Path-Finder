
//new


function GeniusSearch() {
  console.log("GeniusSearch !");
  var zNode = document.createElement('span');
  zNode.innerHTML = `<!DOCTYPE html>
  <html>
  <head>
  
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(to right, #eef2f3, #ffffff);
  color: #1a1a1a;
  margin: 0;
}



.modal-custom {
  display: none;
  position: fixed;
  z-index: 9999;
  padding-top: 75px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  backdrop-filter: blur(8px) saturate(180%);
  background-color: rgba(0, 0, 0, 0.55);
  animation: modalFadeIn 0.3s ease-in-out;
}

.modal-custom-content {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.92),
    rgba(241, 245, 255, 0.95),
    rgba(248, 250, 255, 0.9)
  );
  margin: auto;
  padding: 40px 48px;
  border-radius: 24px;
  width: 95%;
  max-width: 1100px;
  box-shadow:
    0 14px 35px rgba(99, 102, 241, 0.18),
    0 28px 80px rgba(0, 0, 0, 0.12);
  animation: slideUpFade 0.5s ease-out;
  backdrop-filter: blur(14px);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border: 1px solid rgba(99, 102, 241, 0.12);
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.modal-custom-content:hover {
  transform: translateY(-2px);
  box-shadow:
    0 18px 40px rgba(99, 102, 241, 0.2),
    0 35px 90px rgba(0, 0, 0, 0.15);
}

.modal-custom-content::before {
  content: '';
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  border-radius: 28px;
  z-index: -1;
  background: linear-gradient(120deg, #6366f1, #a78bfa, #f472b6);
  opacity: 0.3;
  filter: blur(8px);
}

/* Animations */
@keyframes modalFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUpFade {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}





/* Modal */

.custom-search-box {
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: 20px auto;
  padding: 6px 10px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.3s ease;
}

.custom-search-box:focus-within {
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3); /* #6366f1 highlight */
}

.summary-line {
  background: #f4f6f8;
  margin-bottom: 8px;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.6;
  color: #1a1a1a;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  transition: background-color 0.3s ease;
  word-wrap: break-word;
  overflow-wrap: anywhere;
}

.summary-line:hover {
  background: #e8eef4;
}

.summary-line a {
  color: #1d4ed8;
  text-decoration: underline dotted;
  word-break: break-word;
}

.custom-search-input {
  flex: 1;
  padding: 10px 14px;
  font-size: 15px;
  border: none;
  border-radius: 10px;
  background: transparent;
  outline: none;
  color: #1a1a1a;
}

.custom-search-input::placeholder {
  color: #888;
}

.custom-search-button {
  background-color: #6366f1;
  border: none;
  color: white;
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-search-button:hover {
  background-color: #4f46e5;
}




@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: scale(1); }
}

/* Loader */
.loader {
  border: 6px solid #e0e0e0;
  border-top: 6px solid #38bdf8;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Search */

.button {
  margin-left: 1em;
  background-color: #3b82f6;
  color: #fff;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: background-color 0.25s ease;
}

.button:hover {
  background-color: #2563eb;
}

/* Info Box */
/* Centering container for case-box */
.case-box-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* changed from center */
  margin: 2em 0;
  gap: 2em; /* spacing between case-box and fallback_resources */
  flex-wrap: wrap; /* optional if you want responsiveness */
}


/* Info Box */
.case-box {
  background: radial-gradient(circle at top left, #f0f4ff, #e5e7eb);
  border: 4px solid #6366f1;
  border-radius: 50%;
  width: 240px;
  height: 240px;
  padding: 32px;
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.2);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #333;
  position: relative;
  overflow: hidden;
}

.case-box::before {
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  background: conic-gradient(from 90deg, #a5b4fc, #6366f1, #a5b4fc);
  animation: rotate 6s linear infinite;
  z-index: 0;
  opacity: 0.2;
}

.case-box > * {
  z-index: 1;
}

.case-box:hover {
  transform: scale(1.05) rotate(1deg);
  box-shadow: 0 12px 36px rgba(99, 102, 241, 0.3);
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

.info-header {
  font-size: 16px;
  font-weight: 600;
  color: #4b5563;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.7px;
}

.info-title {
  background-color: #6366f1;
  color: white;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
}

.info-content {
  font-size: 36px;
  font-weight: 700;
  color: #1f2937;
  margin-top: 6px;
}


/* Grid containers */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 14px;
}

.grid-item {
  background-color: #f1f5f9;
  border-radius: 12px;
  padding: 14px;
  font-size: 22px;
  text-align: center;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
}

.grid-header {
  background-color: #4f46e5;
  color: #fff;
  padding: 8px;
  font-weight: 700;
  border-radius: 6px;
  margin-bottom: 8px;
}

/* Settings grid */
.grid-setting-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
}
@media (min-width: 768px) {
  .grid-setting-container {
    grid-template-columns: 1fr 1fr;
  }
}

.grid-item-setting {
  background-color: #f8fafc;
  padding: 14px;
  border-radius: 10px;
  font-size: 15px;
  border: 1px solid #e2e8f0;
}

/* Table */
#case_view_table th,
#case_view_table td {
  border: 1px solid #e5e7eb;
  padding: 12px;
  text-align: left;
  word-break: break-word;     /* Break long words if needed */
  white-space: normal;        /* Allow wrapping to next line */
  overflow-wrap: anywhere;    /* Ensures breaking of long URLs, JSON, etc. */
  max-width: 350px;           /* Optional: controls max column width */
}


#case_view_table th,
#case_view_table td {
  border: 1px solid #e5e7eb;
  padding: 12px;
  text-align: left;
}

#case_view_table th {
  background-color: #4f46e5;
  color: #ffffff;
}

#case_view_table tr:nth-child(even) {
  background-color: #f9fafb;
}

#case_view_table tr:hover {
  background-color: #e0e7ff;
}

/* Switch styling */
.switch {
  width: 40px;
  height: 22px;
}

.slider {
  background-color: #d1d5db;
  border-radius: 20px;
}

.slider:before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  border-radius: 50%;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #3b82f6;
}

input:checked + .slider:before {
  transform: translateX(16px);
}

/* Close button */
.close {
  background-color: #ef4444;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.close:hover {
  background-color: #dc2626;
}

/* Utility classes */
.separator-line {
  height: 1px;
  background-color: #d1d5db;
  margin: 24px 0;
}

.checkbox-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
}

.menu-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 14px;
}

.ripple-loader {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.ripple-loader div {
  position: absolute;
  border: 4px solid #6366f1;
  border-radius: 50%;
  animation: ripple 1.2s infinite;
}
.ripple-loader div:nth-child(2) {
  animation-delay: -0.6s;
}

@keyframes ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 56px;
    height: 56px;
    opacity: 0;
  }
}


.stars a {
  display: inline-flex;
  padding: 0.5em;
  opacity: 0.7;
  transition: 0.25s ease;
}

.stars a:hover {
  opacity: 1;
}



    .qs-header-left {
      display: flex;
      align-items: center;
    }

    .qs-header-icon {
      height: 26px;
      width: 26px;
      margin-right: 10px;
    }


    .close {
      background-color: transparent;
      border: none;
      color: #fff;
      font-size: 24px;
      font-weight: bold;
      cursor: pointer;
      transition: color 0.2s ease;
    }

    .close:hover {
      color: #ffdfdf;
    }

/* Hidden containers */
.menu-container,
.info-box-no-need,
.grid-setting-container,
.info-box-no-need {
  display: none;
}

.qs-header-credit {
  font-size: 11.5px;
  color: #9ca3af;
  margin-top: 2px;
  line-height: 1.4;
}

/* Header Wrapper with elevated enterprise feel */
.qs-modal-header.horizontal-header-pro {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 28px;
  background: linear-gradient(to right, #eef2ff, #f1f5ff, #ffffff);
  border-bottom: 1px solid #e0e7ff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0 2px 10px rgba(99, 102, 241, 0.1);
  backdrop-filter: blur(4px);
  animation: fadeInTop 0.4s ease-out;
}

/* Left: title + credit in a responsive row */
.qs-header-left-pro {
  display: flex;
  align-items: center;
  gap: 22px;
  flex-wrap: wrap;
}

/* Gradient Title with extra shine */
.qs-header-title-pro {
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 0.6px;
  background: linear-gradient(to right, #6366f1, #7c3aed, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmerText 3s infinite linear;
}

/* Developer Credit Box with glow */
.qs-header-credit-pro {
  display: flex;
  flex-direction: column;
  padding: 12px 18px;
  background: linear-gradient(to right, #e0e7ff, #f3f4f6);
  border-left: 4px solid #6366f1;
  border-radius: 14px;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.1);
  font-family: 'Segoe UI', sans-serif;
  animation: fadeInRight 0.6s ease;
  min-width: 270px;
  max-width: 100%;
}

/* Tag: Developed by */
.dev-by-label {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.65px;
  color: #4f46e5;
  margin-bottom: 3px;
}

/* Developer Name */
.dev-name-pro {
  font-size: 16px;
  font-weight: 700;
  color: #1e3a8a;
}

/* Role/Designation */
.qs-header-role-pro {
  font-size: 13.5px;
  color: #475569;
  margin-top: 3px;
  letter-spacing: 0.35px;
}

/* Animations */
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(25px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInTop {
  from {
    opacity: 0;
    transform: translateY(-25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shimmerText {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}


.genai-loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 28px;
  padding: 18px 28px;
  border-radius: 16px;
  background: linear-gradient(135deg, #eef2ff, #f9faff, #ffffff);
  border-left: 5px solid #6366f1;
  box-shadow:
    0 4px 20px rgba(99, 102, 241, 0.1),
    0 2px 8px rgba(0, 0, 0, 0.04);
  animation: fadeInUp 0.5s ease;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
  overflow: hidden;
}

/* Optional shimmer border glow */
.genai-loader-container::before {
  content: '';
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  z-index: -1;
  background: linear-gradient(120deg, #6366f1, #a78bfa, #f9a8d4);
  opacity: 0.2;
  filter: blur(10px);
  border-radius: 18px;
}

/* Bouncing dots container */
.genai-loader-dots {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

/* Each dot with animated bounce and color gradient */
.genai-loader-dots span {
  width: 10px;
  height: 10px;
  background: linear-gradient(to right, #6366f1, #8b5cf6);
  border-radius: 50%;
  animation: bounce 1.2s infinite ease-in-out;
  box-shadow: 0 1px 4px rgba(99, 102, 241, 0.2);
}

/* Staggered animation delays */
.genai-loader-dots span:nth-child(2) {
  animation-delay: 0.2s;
}
.genai-loader-dots span:nth-child(3) {
  animation-delay: 0.4s;
}
.genai-loader-dots span:nth-child(4) {
  animation-delay: 0.6s;
}

/* Text below dots */
.genai-loader-text {
  font-size: 15px;
  color: #374151;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.4px;
  opacity: 0.85;
  animation: fadeInText 1s ease;
}

/* Bounce animation */
@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0.9);
    opacity: 0.5;
  }
  40% {
    transform: scale(1.3);
    opacity: 1;
  }
}

/* Fade In animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInText {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 0.85;
    transform: translateY(0);
  }
}

@keyframes bounceDot {
  from { transform: translateY(0); }
  to { transform: translateY(-6px); }
}

@keyframes shimmerBG {
  0% { background-position: -100px; }
  100% { background-position: 100px; }
}

@keyframes pulseGlow {
  0% { box-shadow: 0 0 0 rgba(99, 102, 241, 0.0); }
  50% { box-shadow: 0 0 18px rgba(99, 102, 241, 0.3); }
  100% { box-shadow: 0 0 0 rgba(99, 102, 241, 0.0); }
}

.summary-line {
  margin-bottom: 6px;
}

#fallback_resources {
  margin-top: 24px;
  animation: fadeInUp 0.4s ease-in-out;
}

.fallback-card {
  background: linear-gradient(135deg, #ffffff, #f9fafe);
  border-left: 5px solid #6366f1;
  border-radius: 16px;
  padding: 20px 24px;
  margin-bottom: 18px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.05);
  transition: transform 0.25s ease;
}

.fallback-card:hover {
  transform: translateY(-4px);
}

.fallback-header {
  font-size: 16px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.fallback-header span {
  font-size: 20px;
}

.fallback-summary {
  font-size: 14px;
  color: #4b5563;
  line-height: 1.6;
  background: #f1f5f9;
  border-radius: 12px;
  padding: 12px 16px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.04);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dot-loader span {
  animation: blink 1.4s infinite both;
  font-weight: bold;
  color: #6366f1;
}

.dot-loader span:nth-child(2) {
  animation-delay: 0.2s;
}

.dot-loader span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes blink {
  0% { opacity: 0.2; }
  20% { opacity: 1; }
  100% { opacity: 0.2; }
}

.qs-modal-header.horizontal-header-pro {
  display: flex;
  align-items: center;
  gap: 8px; /* spacing between image and text */
}

.qs-tab {
  display: inline-block;
  padding: 10px 16px;
  background: #e0e0f0;
  margin-right: 8px;
  cursor: pointer;
  border-radius: 8px 8px 0 0;
  font-weight: bold;
}

.qs-tab.active {
  background: #8076a3;
  color: white;
}

.qs-tab-panel {
  padding: 16px;
  border: 1px solid #ccc;
  border-top: none;
}
.tabcontent {
  display: none;
}
.info-box label {
  font-weight: 600;
  font-size: 18px;
  color: #455A64;
  letter-spacing: 0.5px;
}

/* 🔷 Wrapper container */
.info-box.bar.custom-search-box {
  background-color: #f3f4f6 !important;
  border: 1px solid #d1d5db !important;
  padding: 16px !important;
  border-radius: 12px !important;
  display: flex !important;
  align-items: center !important;
  gap: 12px !important;
  margin-bottom: 16px !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05) !important;
  max-width: 100% !important;
}

/* 🔶 Label styling */
.custom-search-box label {
  font-weight: 600 !important;
  color: #374151 !important;
  font-size: 14px !important;
  margin-right: 8px !important;
  white-space: nowrap !important;
}

/* 🔍 Search input (fixed) */
.searchbar.custom-search-input {
  flex: 1 !important;
  width: 100% !important;
  min-width: 200px !important;
  padding: 12px 16px !important;
  font-size: 15px !important;
  border-radius: 10px !important;
  border: 1px solid #cbd5e1 !important;
  background-color: #fff !important;
  color: #111827 !important;
  outline: none !important;
  transition: border 0.2s ease !important;
  box-sizing: border-box !important;
}

/* 🔍 Focus state */
.searchbar.custom-search-input:focus {
  border-color: #6366f1 !important;
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2) !important;
}

/* 🟣 Search button */
.button.custom-search-button {
  padding: 10px 12px !important;
  background-color: #6366f1 !important;
  border: none !important;
  border-radius: 8px !important;
  cursor: pointer !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  transition: background-color 0.3s ease !important;
}

/* 🔄 Hover effect on button */
.button.custom-search-button:hover {
  background-color: #4f46e5 !important;
}

/* 🔎 Search icon inside button */
.button.custom-search-button svg.now-icon {
  fill: white !important;
  width: 16px !important;
  height: 16px !important;
}

/* 🧱 Base .searchbar override to prevent width conflict */
.searchbar {
  width: 100% !important;
  height: 46px !important;
  font-size: 16px !important;
  border-radius: 10px !important;
  padding: 0 16px !important;
  border: 1px solid #ccc !important;
  background: #fff !important;
  transition: 0.25s ease !important;
  box-sizing: border-box !important;
}

/* 🔲 Optional focus for base .searchbar if used elsewhere */
.searchbar:focus {
  border-color: #3b82f6 !important;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2) !important;
  outline: none !important;
}

/* 🧱 Base .bar styling preserved */
.bar {
  display: flex !important;
  align-items: center !important;
  border-radius: 12px !important;
  border: 1px solid #ddd !important;
  padding: 6px 12px !important;
  background-color: #fdfdfd !important;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05) !important;
  margin-bottom: 1.5rem !important;
}

.ai-tab-header {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(99, 102, 241, 0.15); /* translucent blue-violet */
  border: 1px solid rgba(99, 102, 241, 0.3);
  backdrop-filter: blur(8px);
  color: #fff;
  padding: 12px 20px;
  border-radius: 16px;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.3);
  cursor: pointer;
  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;
}

.ai-tab-header > div {
  display: flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  font-family: 'Segoe UI', Tahoma, sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  padding: 12px 20px;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.ai-tab-header > div:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.5);
}


.ai-tab-header:hover {
  background: rgba(139, 92, 246, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(139, 92, 246, 0.4);
}

.ai-tab-header::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.15), transparent 70%);
  animation: pulse-glow 2.5s infinite ease-in-out;
  pointer-events: none;
  z-index: 0;
}

.ai-tab-header span,
.ai-tab-header svg {
  z-index: 1;
}

.tab-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 16px 24px;
  background: linear-gradient(to right, #e8f5e9, #ede7f6);
  border-bottom: 2px solid #ccc;
  font-family: 'Segoe UI', sans-serif;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);
}

.ai-icon-svg {
  flex-shrink: 0;
  filter: drop-shadow(0 0 3px #6366f1);
}

/* Subtle glowing pulse effect */
@keyframes pulse-glow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.4;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.6;
  }
}

.hidden-box {
  display: none !important;
}



.log-analyzer-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.log-analyzer-highlight {
  background: linear-gradient(135deg, #dcedc8, #c8e6c9);
  color: #2e7d32;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.arrow {
  font-size: 18px;
  color:rgb(246, 7, 7);
}

.ai-tab-button {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #7e57c2;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.ai-tab-button:hover {
  background-color: #673ab7;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.ai-tab-icon {
  font-size: 18px;
}

.ai-tab-arrow {
  font-size: 14px;
}

.close-pro {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ef4444; /* Tailwind red-500 */
  color: white;
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.close-pro:hover {
  background: #dc2626; /* Tailwind red-600 */
}
.genius-wrapper {
  padding: 24px;
  margin-top: 20px;
  background: linear-gradient(to bottom right, #fdfbff, #edf2f8);
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
}
.toggle-button {
  background-color: #8076a3;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 10px;
  font-weight: bold;
}

.genius-button-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
}


.genius-toggle-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  background: linear-gradient(145deg, #7f68aa, #caa9e9);
  border: none;
  border-radius: 999px;
  cursor: pointer;
  box-shadow:
    0 6px 14px rgba(0, 0, 0, 0.12),
    0 0 0 2px rgba(255, 255, 255, 0.1) inset;
  transition: transform 0.2s ease, background 0.3s ease;
  position: relative;
  overflow: hidden;
}

.genius-toggle-button:hover {
  background: linear-gradient(145deg, #b89fd4, #a184d0);
  transform: scale(1.04);
}

.genius-toggle-button::before {
  content: '🧬';
  font-size: 16px;
  margin-right: 4px;
  position: relative;
  top: 1px;
}

.genius-button-text {
  font-size: 14px;
}

.genius-button-arrow {
  font-size: 12px;
  transform: translateY(1px);
  transition: transform 0.3s ease;
}

.genius-toggle-button.open .genius-button-arrow {
  transform: rotate(180deg);
}

.genius-panel-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 28px;
  background: linear-gradient(135deg, #f9f9ff, #e3e8f8);
  border: 2px solid #d1d5db;
  border-left: 8px solid #9bc400;
  border-radius: 20px;
  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.08),
    inset 0 0 8px rgba(255, 255, 255, 0.3);
  font-family: 'Segoe UI', Tahoma, sans-serif;
  width: 100%;
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;
}

/* Optional: a subtle AI glow effect */
.genius-panel-wrapper::before {
  content: "";
  position: absolute;
  top: -40%;
  left: -40%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at center, rgba(156, 255, 247, 0.1), transparent 60%);
  animation: glowMove 6s linear infinite;
  z-index: 0;
}

@keyframes glowMove {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Keep content above glow effect */
.genius-panel-wrapper > * {
  position: relative;
  z-index: 1;
}

.genius-panel-message {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: linear-gradient(to right, #fcfcfd, #eef1f8);
  padding: 16px 20px;
  border-radius: 16px;
  box-shadow:
    inset 0 0 4px rgba(0, 0, 0, 0.04),
    0 4px 12px rgba(0, 0, 0, 0.04);
}

.genius-icon {
  font-size: 32px;
  background: linear-gradient(135deg, #9bc400, #7b9e23);
  color: white;
  border-radius: 12px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 8px rgba(155, 196, 0, 0.3);
}

.genius-texts {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.genius-title {
  font-size: 18px;
  font-weight: bold;
  color: #374151;
  font-family: 'Segoe UI', Tahoma, sans-serif;
}

.genius-subtitle {
  font-size: 14px;
  color: #4b5563;
  line-height: 1.5;
}

/* overall wrapper */
.cs-wrapper {
  background: #2d2d42;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,.35);
  margin-top: 20px;
  overflow: hidden;
}

/* header bar */
.cs-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #363654;
  padding: 12px 16px;
  cursor: pointer;
  color: #f0f0f0;
  font-weight: 600;
}

/* header text */
.cs-title {
  font-size: 16px;
}

/* toggle button */
.cs-toggle {
  background: none;
  border: none;
  color: #fff;
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  transition: transform .3s ease;
}

.cs-toggle.cs-rotated {            /* rotate when open */
  transform: rotate(180deg);
}

/* collapsible body */
.cs-content {
  display: none;                   /* jQuery toggles this */
  padding: 16px;
  background: #1f1f30;
  color: #ddd;
  font-size: 14px;
}
.cs-toggle {
  transition: transform 0.2s ease;
}

.cs-toggle.cs-rotated {
  transform: rotate(180deg);
}
.cs-spinner {
  font-style: italic;
  color: #666;
}

.cs-summary-text {
  white-space: pre-wrap;
  color: #222;
  padding-top: 5px;
}


  </style>
  </head>
  <body>
  
  
<div id="geniusSearchModel" class="modal-custom">
  <div class="modal-custom-content">

    <!-- Branded Header -->
<div class="qs-modal-header horizontal-header-pro">
  <div class="qs-header-left-pro">
    <span class="qs-header-title-pro">Path Find - Now</span>
 <div class="qs-header-credit-pro">
  <div class="dev-by-label">Developed by</div>
  <strong class="dev-name-pro">Sridhara Venkata Subrahmanya Sandilya</strong>
  <span class="qs-header-role-pro">Staff TSE • User Experience Team</span>
</div>

  </div>
  <button class="close-pro" id="clsBtn" title="Close Search">×</button>
</div>



   
    <div class="separator-line"></div>

<!-- First Collapsible Block -->
<div class="cs-wrapper">
  <div class="cs-header">
    <span class="cs-title">📝 Case Summary Output</span>
    <button
      class="cs-toggle"
      data-target="#case-summary-output"
      aria-label="Toggle summary"
    >
      ▼
    </button>
  </div>
  <div id="case-summary-output" class="cs-content">
    <p>This is the first summary content.</p>
  </div>
</div>
  <div class="separator-line"></div>
<!-- Second Collapsible Block -->
<div class="cs-wrapper">
  <div class="cs-header">
    <span class="cs-title">📄 Additional Summary</span>
    <button
      class="cs-toggle"
      data-target="#case-summary-output1"
      aria-label="Toggle summary"
    >
      ▼
    </button>
  </div>
  <div id="case-summary-output1" class="cs-content">
    <p>This is the second summary content (output1).</p>
  </div>
</div>

  <div class="separator-line"></div>



<div class="tab-header">
  <div class="log-analyzer-container">
    <div class="log-analyzer-highlight">
      🚀 <strong>Explore the new Log Analyzer tool!</strong>
      <span class="arrow">➡</span>
    </div>

  
  </div>
</div>





<div class="tab-content"></div>




  <!-- Toggle Button -->
<div class="genius-panel-wrapper">
  <div class="genius-panel-message">
    <div class="genius-icon">🧠</div>
    <div class="genius-texts">
      <div class="genius-title">AI-Driven Guidance</div>
      <div class="genius-subtitle">
        We tried generating clear next steps. If nothing worked, we ran a semantic search to find helpful matches.
      </div>
    </div>
  </div>

  <div class="genius-button-wrapper">
    <button id="toggleGeniusWrapper" class="genius-toggle-button">
      <span class="genius-button-text">Show Genius Panel</span>
      <span class="genius-button-arrow">▼</span>
    </button>
  </div>
</div>




  <!-- keep the existing ID & class exactly as requested -->
  <div id="case-summary-output" class="case-summary-container cs-content">
    <div id="case-summary-output1" class="case-summary-container cs-content">
    <!-- Dynamic content injected via JS -->
  </div>
</div>




<div class="genius-wrapper" id="geniusWrapper">
    <!-- Search Bar -->
<div class="info-box bar custom-search-box">
  <label for="geniusSearch">AI powered Next steps generator:</label>
  <input
    id="geniusSearch"
    class="searchbar custom-search-input"
    type="text"
    placeholder="Search Example: Flow Designer, Null Pointer"
    aria-label="Enter search keywords"
  />
  <button id="SearchIcon" class="button custom-search-button" title="Search">
    <svg class="now-icon -md" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
      <path d="M10.727 10.02a5.5 5.5 0 1 0-.707.707l4.127 4.127a.5.5 0 1 0 .707-.707l-4.127-4.127zM11 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0z"/>
    </svg>
  </button>
</div>




<div id="genai-status" class="genai-loader-container" style="display: none;">
  <div class="genai-loader-dots">
    <span></span><span></span><span></span><span></span>
  </div>
  <div class="genai-loader-text">Gen AI is analyzing and Generating Next Steps...</div>
</div>

      <br>
      <br>

<!-- Search Tip or Stats Section -->
<div class="case-box-wrapper">
  <div id="search_tip" class="case-box">
    <div class="info-header">
      <span class="info-title">Next Steps</span>
    </div>
    <div class="info-content" id="rel_case">0</div>
  </div>

  <div id="fallback_resources" style="display: none;">
    <!-- Injected content goes here -->
  </div>
</div>



      <br>

      <!-- Results Table -->
      <table id="case_view_table" style="display: none;">
        <thead class="table_head">
          <tr>
            <th id="cs_head" colspan="3" style="text-align: center; cursor: pointer;">- Hide Recent Cases</th>
          </tr>
          <tr>
            <th id="case_view_head_num">Case Number</th>
            <th id="case_view_head_short_desc">Short Description</th>
            <th id="case_view_head_close_notes">Close Notes</th>
          </tr>
        </thead>
        <tbody>
          <!-- Results will be populated here -->
        </tbody>
      </table>
</div>
    </div>

  </div>






  
  </body>
  </html>`

  $('body').append(zNode);

  // const iconElement = document.getElementById("quickSearchIcon");
  // if (iconElement) {
  //   iconElement.src = chrome.runtime.getURL("icons/pathfinder.png");
  // }

  const header = document.querySelector(".qs-modal-header.horizontal-header-pro");

  if (header) {
    // Add the image at the beginning
    const imgStart = document.createElement("img");
    imgStart.src = chrome.runtime.getURL("icons/icon16.png");
    imgStart.alt = "Pathfinder Start";
    imgStart.style.height = "80px";
    imgStart.style.marginRight = "10px";
    imgStart.style.borderRadius = "8px";
    header.prepend(imgStart);

    // Add the image at the end
    // const imgEnd = document.createElement("img");
    // imgEnd.src = chrome.runtime.getURL("icons/pathfinder.png");
    // imgEnd.alt = "Pathfinder End";
    // imgEnd.style.height = "80px";
    // imgEnd.style.marginLeft = "10px";
    // imgEnd.style.borderRadius = "8px";
    // header.appendChild(imgEnd);
    // Create a container for animation
    const roverContainer = document.createElement("div");
    roverContainer.style.position = "relative";
    roverContainer.style.overflow = "visible";
    roverContainer.style.display = "inline-block";
    roverContainer.style.animation = "roverMove 2s ease-out forwards";

    // Create the image element
    const imgEnd = document.createElement("img");
    imgEnd.src = chrome.runtime.getURL("icons/pathfinder.png");
    imgEnd.alt = "Pathfinder End";
    imgEnd.style.height = "80px";
    imgEnd.style.marginLeft = "10px";
    imgEnd.style.marginRight = "30px";
    imgEnd.style.borderRadius = "8px";
    imgEnd.style.zIndex = "2";
    imgEnd.style.position = "relative";

    // Create a simple smoke trail (optional)
    const smoke = document.createElement("div");
    smoke.style.position = "absolute";
    smoke.style.left = "-30px";
    smoke.style.bottom = "0";
    smoke.style.width = "20px";
    smoke.style.height = "20px";
    smoke.style.background = "radial-gradient(circle, #bbb, transparent)";
    smoke.style.borderRadius = "50%";
    smoke.style.animation = "smokePuff 2s ease-out infinite";
    smoke.style.opacity = "0.6";
    smoke.style.zIndex = "1";

    // Append smoke and image
    roverContainer.appendChild(smoke);
    roverContainer.appendChild(imgEnd);
    header.appendChild(roverContainer);

    // Inject CSS animations
    const style = document.createElement("style");
    style.textContent = `
@keyframes roverMove {
  0% {
    transform: translateX(100px) scale(0.8) rotate(-10deg);
    opacity: 0;
  }
  60% {
    opacity: 1;
    transform: translateX(-10px) scale(1.05);
  }
  100% {
    transform: translateX(0px) scale(1) rotate(0deg);
  }
}

@keyframes smokePuff {
  0% {
    transform: scale(1) translateY(0);
    opacity: 0.6;
  }
  100% {
    transform: scale(1.8) translateY(-20px);
    opacity: 0;
  }
}
`;
    document.head.appendChild(style);

  }



  // const toggleBtn = document.getElementById('toggleGeniusWrapper');
  // const geniusWrapper = document.getElementById('geniusWrapper');

  // let isVisible = false;

  // toggleBtn.addEventListener('click', () => {
  //   isVisible = !isVisible;
  //   geniusWrapper.style.display = isVisible ? 'block' : 'none';
  //   toggleBtn.textContent = isVisible ? 'Hide Genius Panel' : 'Show Genius Panel';
  // });

  // // Optional: Start hidden
  // geniusWrapper.style.display = 'none';






$(document).on('click', '.cs-toggle, .cs-header', function () {
  // Get the toggle button regardless of whether .cs-header or .cs-toggle was clicked
  const $btn = $(this).hasClass('cs-toggle') ? $(this) : $(this).find('.cs-toggle');
  const targetSelector = $btn.data('target');
  const $target = $(targetSelector);

  if ($target.length) {
    $target.slideToggle(200);           // toggle visibility
    $btn.toggleClass('cs-rotated');     // rotate arrow
  } else {
    console.warn(`No element found for selector: ${targetSelector}`);
  }
});




  const toggleBtn = document.getElementById('toggleGeniusWrapper');
const geniusWrapper = document.getElementById('geniusWrapper');
const btnText = toggleBtn.querySelector('.genius-button-text');
const btnArrow = toggleBtn.querySelector('.genius-button-arrow');

let isVisible = false;

toggleBtn.addEventListener('click', () => {
  isVisible = !isVisible;
  geniusWrapper.style.display = isVisible ? 'block' : 'none';
  btnText.textContent = isVisible ? 'Hide Genius Panel' : 'Show Genius Panel';
  btnArrow.textContent = isVisible ? '▲' : '▼'; // optional arrow toggle
});

// Optional: Start hidden
geniusWrapper.style.display = 'none';



  document.getElementById("clsBtn").addEventListener("click", dismissSearchWindow, false);
  document.getElementById("SearchIcon").addEventListener("click", triggerQuickScan, false);

  var search_now = document.getElementById("geniusSearch");
  search_now.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  // checks whether the pressed key is "Enter"
      validate(e);
    }
  });

  const searchBtn = document.getElementById("SearchIcon");
  const loader = document.getElementById("genai-status");

  if (searchBtn && loader) {
    searchBtn.addEventListener("click", function () {
      const input = document.getElementById("geniusSearch").value.trim();
      if (input) {
        loader.style.display = "flex";
        setTimeout(() => {
          loader.style.display = "none";
        }, 9000);
      }
    });
  }


  // popup.js

  // model.js
  // function waitForElement(id, callback) {
  //   const check = () => {
  //     const el = document.getElementById(id);
  //     if (el && el.value) {
  //       callback(el.value);
  //     } else {
  //       setTimeout(check, 100); // try again after 100ms
  //     }
  //   };
  //   check();
  // }

  // waitForElement('sys_display.sn_customerservice_case.assignment_group', function(value) {
  //   window.selectedGroup = value;
  //   const span = document.getElementById('selectedGroup');
  //   if (span) {
  //     span.textContent = value;
  //   }
  // });
  function waitForElementByIds(ids, callback) {
    const check = () => {
      for (let id of ids) {
        const el = document.getElementById(id);
        if (el && el.value) {
          callback(el.value, id); // pass id as well if needed
          return;
        }
      }
      setTimeout(check, 100); // try again after 100ms
    };
    check();
  }

  // List of possible input field IDs
  const assignmentGroupIds = [
    'sys_display.sn_customerservice_case.assignment_group',
    'sys_display.sn_customerservice_task.assignment_group'
  ];

  // waitForElementByIds(assignmentGroupIds, function(value, matchedId) {
  //   window.selectedGroup = value;
  //   const span = document.getElementById('selectedGroup');
  //   if (span) {
  //     span.textContent = value;
  //   }
  //   console.log(`Matched ID: ${matchedId}`);
  // });



var caseContent = {
  number: $('#sys_readonly\\.sn_customerservice_case\\.number').val(),
  description: $('#sn_customerservice_case\\.description').val(),
  stepsToReproduce: $('#sn_customerservice_case\\.u_steps_to_reproduce').val()
};

console.log("Case Data:", JSON.stringify(caseContent, null, 2)); // Pretty print






  function validate(e) {
    if (e.target.value == "") {
      alert("Please Enter the search term");
      return;
    }

    triggerQuickScan();
  }

  window.onclick = function (event) {
    if (event.target == geniusSearchModel) {
      geniusSearchModel.style.display = "none";
    }
  }

  $('#selected_cs_group').focus(function () {
    this.value = "";
  });
  $('#selected_cs_group').focusout(function () {
    if (this.value == '') {
      if (window.location.href.indexOf("sn_customerservice_case") > -1) {
        this.value = document.getElementById('sys_display.sn_customerservice_case.assignment_group').value;
      }
      else {
        this.value = "All Groups";
      }
    }
  });

  document.getElementById("cs_head").onclick = function () {
    if ($(this).html() == "- Hide Recent Cases") {
      $(this).html("+ Show Recent Cases");
    }
    else {
      $(this).html("- Hide Recent Cases");
    }
    $("#case_view_table").find("tr:not(:first)").toggle("slow");
  }





}


