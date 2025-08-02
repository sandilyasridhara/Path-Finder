

async function launchFastLookup() {
  addRealtimeAssistantTab();


  
  if (
    window.location.href.includes("sn_customerservice_case") ||
    window.location.href.includes("sn_customerservice_task")
  ) {
    document.getElementById("geniusSearchModel").style.display = "block";
    document.getElementById("geniusSearch").focus();

    const waitForElement = (id, callback) => {
      const check = () => {
        const el = document.getElementById(id);
        const displayEl = document.getElementById(`sys_display.${id}`);
        if (el && displayEl && el.value && displayEl.value) {
          callback({
            sys_id: el.value,
            displayValue: displayEl.value
          });
        } else {
          setTimeout(check, 100);
        }
      };
      check();
    };


  }
}

function addRealtimeAssistantTab() {


  const tabId = 'realtime-troubleshooting-tab';
  const tabTitle = '🧠 Troubleshooting Handbook';

  // Check if tab already exists
  if (document.getElementById(tabId)) return;



  // Create tab header button


  const headerBtn = document.createElement('button');
  headerBtn.className = 'tablinks ai-tab-header';
  headerBtn.innerHTML = `
  <div class="custom-button" style="
    display: flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    padding: 10px 18px;
    border-radius: 30px;
    font-family: 'Segoe UI', Tahoma, sans-serif;
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 3px 10px rgba(99, 102, 241, 0.2);
    cursor: pointer;
  ">
    <div style='
      width: 24px;
      height: 24px;
      background: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #7c3aed;
      font-size: 16px;
      font-weight: bold;
    '>🧠</div>

    <span>Troubleshooting Handbook</span>
    <span class="arrow" style="
      font-size: 12px;
      transform: translateY(1px);
    ">▼</span>
  </div>
  `;







  // Append to your tab container
  document.querySelector('.tab-header-container')?.appendChild(headerBtn);


  headerBtn.onclick = function () {
    const targetTab = document.getElementById(tabId);
    const isVisible = targetTab.style.display === 'block';

    // Hide all tabs and remove active class from all buttons
    document.querySelectorAll('.tabcontent').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.tablinks').forEach(el => el.classList.remove('active'));

    if (!isVisible) {
      targetTab.style.display = 'block';
      headerBtn.classList.add('active');

      // Add .hidden-box class to hide elements
      document.querySelectorAll('.custom-search-box, .case-box-wrapper').forEach(el => {
        el.classList.add('hidden-box');
      });

    } else {
      targetTab.style.display = 'none';

      // Remove .hidden-box class to show elements again
      document.querySelectorAll('.custom-search-box, .case-box-wrapper').forEach(el => {
        el.classList.remove('hidden-box');
      });
    }
  };

  // Add click handler





  // Append to tab header
  document.querySelector('.tab-header')?.appendChild(headerBtn);

  // Create content container
  const tabContent = document.createElement('div');
  tabContent.className = 'tabcontent';
  tabContent.id = tabId;


  tabContent.innerHTML = `
  <div style="
    background: linear-gradient(to bottom right, #eef2ff, #fdf2f8);
    border: 1px solid #dbeafe;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    max-width: 1000px;
    margin: 40px auto;
    font-family: 'Segoe UI', Tahoma, sans-serif;
  ">
    <h2 style="
      font-size: 1.85rem;
      margin-bottom: 16px;
      color: #1e3a8a;
      font-weight: 700;
    ">🧠 AI Powered Troubleshooting Assistant</h2>

    <p style="
      font-size: 1.05rem;
      margin-bottom: 12px;
      color: #374151;
    ">Paste the log below:</p>

    <textarea id="logInput" placeholder="Paste your log here..." style="
      width: 100%;
      height: 160px;
      padding: 14px;
      font-size: 1rem;
      border: 1px solid #cbd5e1;
      border-radius: 10px;
      resize: vertical;
      box-sizing: border-box;
      font-family: monospace;
      background-color: #ffffff;
      color: #111827;
      box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);
      transition: border-color 0.2s, box-shadow 0.2s;
    " onfocus="this.style.borderColor='#7c3aed'; this.style.boxShadow='0 0 0 3px rgba(124,58,237,0.2)';"
    onblur="this.style.borderColor='#cbd5e1'; this.style.boxShadow='inset 0 1px 3px rgba(0,0,0,0.05)';"
    ></textarea>

    <button id="analyzeLogBtn" style="
      margin-top: 20px;
      background: linear-gradient(135deg, #6366f1, #ec4899);
      color: white;
      padding: 12px 22px;
      font-size: 1rem;
      font-weight: 500;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(236,72,153,0.25);
      transition: background 0.3s, transform 0.2s;
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 240px;
      " onmouseover="this.style.transform='scale(1.02)';"
      onmouseout="this.style.transform='scale(1)';"
      >🚀 Analyze Log</button>

      <div id="logAnalysisResult" style="
      margin-top: 28px;
      padding: 20px;
      background-color: #f9fafb;
      border: 2px dashed #e5e7eb;
      border-radius: 12px;
      min-height: 120px;
      white-space: pre-wrap;
      color: #1f2937;
      font-size: 0.95rem;
      "></div>
      </div>
     `;


      // Append to content wrapper
      document.querySelector('.tab-content')?.appendChild(tabContent);

      // Add event listener for Analyze button
      setTimeout(() => {

      document.getElementById('analyzeLogBtn')?.addEventListener('click', async () => {
      const log = document.getElementById('logInput')?.value.trim();


      const logKeyword = extractMainError(log);
      const caseResults = await fetchRelevantCases(logKeyword);


      const resultDiv = document.getElementById('logAnalysisResult');

      if (!log) {
        resultDiv.innerHTML = `<p style="color:red;">⚠️ Please paste a log to analyze.</p>`;
        return;
      }

      //resultDiv.innerHTML = `<p><b>🔄 Analyzing log using LLM...</b></p>`;

  // Step 1: Show initial loading message
  resultDiv.innerHTML = `
    <p><b>🔄 Analyzing log using LLM...</b></p>
    <p><b>📂 Searching for relevant closed cases...</b></p>
  `;
  

      function extractMainError(logText) {
        const lines = logText.split('\n');
        for (let line of lines) {
          if (/error|exception|fail/i.test(line)) {
            return line.replace(/[\[\]{}<>]/g, '').trim().slice(0, 150); // Clean up and limit length
          }
        }
        return logText.slice(0, 100); // fallback
      }

      async function fetchRelevantCases(rawKeyword) {
        const table = 'sn_customerservice_case';
        const fields = 'number,short_description,close_notes';
        const limit = 3;

        const cleanedKeyword = rawKeyword
          .replace(/\d{1,2}:\d{2}:\d{2}\.\d{3}/g, '') // Remove timestamps
          .replace(/\d+/g, '')                        // Remove numbers
          .replace(/[^\w\s]/g, '')                    // Remove special characters
          .split(/\s+/)
          .filter(word => word.length > 2)
          .join(' ');

        const encodedKeyword = encodeURIComponent(cleanedKeyword);
        const query = `short_descriptionLIKE${encodedKeyword}^ORdescriptionLIKE${encodedKeyword}^ORclose_notesLIKE${encodedKeyword}`;
        const url = `https://support.servicenow.com/api/now/table/${table}?sysparm_query=${query}&sysparm_fields=${fields}&sysparm_limit=${limit}&sysparm_no_count=true&sysparm_query_category=custom`;

        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open("GET", url);
          xhr.setRequestHeader('Accept', 'application/json');
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.setRequestHeader('X-UserToken', token); // Assumes token is globally available

          xhr.onload = async function () {
            if (xhr.status >= 200 && xhr.status < 300) {
              try {
                const data = JSON.parse(xhr.responseText);

                if (data.result?.length > 0) {
                  chrome.storage.sync.get(["geminiApiKey"], async ({ geminiApiKey }) => {
                    if (!geminiApiKey) {
                      resolve(`<p style="color:red;">⚠️ Gemini API key not found. Please set it in extension settings.</p>`);
                      return;
                    }

                    const html = await Promise.all(
                      data.result.map(async c => {
                        let summaryHTML = '';

                        if (c.close_notes) {
                          const prompt = `
                      Summarize the following customer support case notes:

                      1. Brief Summary (max 2 sentences)
                      2. Root Cause (if any)
                      3. Actions Taken
                      4. Important Keywords (comma-separated)

                      Close Notes:
                      ${c.close_notes}
                    `.trim();

                          try {
                            const summary = await fetchGeminiInsights(prompt, geminiApiKey);
                            summaryHTML = `
                        <div style="
                          background: #f9fafb;
                          margin-top: 12px;
                          padding: 12px;
                          border-left: 4px solid #7c3aed;
                          border-radius: 8px;
                          font-size: 1.2rem;
                          color: #334155;
                          white-space: pre-wrap;
                          word-wrap: break-word;
                          overflow-wrap: break-word;
                          max-width: 100%;
                          box-sizing: border-box;
                        ">
                          ${summary.replace(/\n/g, "<br>")}
                        </div>
                      `;
                          } catch (e) {
                            summaryHTML = `<div style="color: #ef4444; margin-top: 10px;">⚠️ Failed to summarize notes.</div>`;
                          }
                        }

                        return `
                    <div style="
                      margin-bottom: 24px;
                      padding: 22px 24px;
                      background: linear-gradient(145deg, #f0f9ff, #fdf4ff);
                      border-left: 6px solid #7c3aed;
                      border-radius: 14px;
                      box-shadow: 0 6px 18px rgba(124, 58, 237, 0.12);
                      font-family: 'Segoe UI', Tahoma, sans-serif;
                      color: #1e293b;
                      transition: transform 0.2s ease, box-shadow 0.2s ease;
                    "
                    onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 10px 28px rgba(124, 58, 237, 0.2)';"
                    onmouseout="this.style.transform='none'; this.style.boxShadow='0 6px 18px rgba(124, 58, 237, 0.12)';">
                      <div style="
                        font-weight: 700;
                        margin-bottom: 10px;
                        font-size: 1.5rem;
                        color: #6d28d9;
                      ">${c.number}</div>

                      <div style="
                        font-size: 1.5rem;
                        line-height: 1.6;
                        color: #374151;
                      ">${c.short_description}</div>

                      ${summaryHTML}
                    </div>
                  `;
                      })
                    );

                    resolve(html.join(''));
                  });
                } else {
                  resolve(`<p style="color:gray;">No matching closed cases found.</p>`);
                }
              } catch (e) {
                console.error("JSON parse error:", e);
                reject(`<p style="color:red;">Error parsing response.</p>`);
              }
            } else {
              console.error("ServiceNow API Error:", xhr.status, xhr.responseText);
              reject(`<p style="color:red;">Failed to fetch cases. Status: ${xhr.status}</p>`);
            }
          };

          xhr.onerror = function () {
            reject(`<p style="color:red;">❌ Network error while querying ServiceNow.</p>`);
          };

          xhr.send();
        });
      }




      

      chrome.storage.sync.get(["geminiApiKey"], async ({ geminiApiKey }) => {
        if (!geminiApiKey) {
          resultDiv.innerHTML = `<p style="color:red;">⚠️ Gemini API key not found. Please set it in extension settings.</p>`;
          return;
        }

        try {
          // Extract the main error from the log
          const errorLine = extractMainError(log);
          const prompt = `
                        🔍 You are a Log Intelligence AI.

                        Your goal: Read the following system or application log and extract:
                        - Root cause (if identifiable)
                        - Next steps or recovery actions
                        - Any KB/article references if possible
                        - Important patterns or anomalies

                        Return your findings as:
                        1. Root Cause (short and technical)
                        2. Next Steps (as checklist)
                        3. Related KBs or Docs (use markdown links)
                        4. 🔑 Keywords to search similar cases (comma-separated, technical terms only)

                        ---
                        📜 Logs:
                        ===================
                        ${log}
                        `;

          const summary = await fetchGeminiInsights(prompt, geminiApiKey);


          resultDiv.innerHTML = `
                  <h4 style="
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 12px;
                    color: #db2777;
                    font-family: 'Segoe UI', Tahoma, sans-serif;
                  ">🔍 AI Log Analysis</h4>

                  <div style="
                    background: linear-gradient(to bottom right, #fdf4ff, #f0f9ff);
                    padding: 20px;
                    border-left: 5px solid #a855f7;
                    border-radius: 12px;
                    font-size: 1.05rem;
                    line-height: 1.7;
                    color: #1e293b;
                    font-family: 'Segoe UI', Tahoma, sans-serif;
                    box-shadow: 0 6px 16px rgba(168, 85, 247, 0.08);
                    white-space: pre-wrap;
                    word-break: break-word;
                    border-top: 1px solid #e0e7ff;
                    border-bottom: 1px solid #e0e7ff;
                    margin-bottom: 24px;
                  ">
                    ${summary.replace(/\n/g, "<div style='border-bottom: 1px dashed #e5e7eb; padding-bottom: 6px; margin-bottom: 6px;'></div>")}
                  </div>

                  <h4 style="
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin: 28px 0 12px;
                    color: #4f46e5;
                    font-family: 'Segoe UI', Tahoma, sans-serif;
                  ">📂 Relevant Cases</h4>

                  <div style="
                    background: #f8fafc;
                    border-left: 4px solid #60a5fa;
                    padding: 16px;
                    border-radius: 10px;
                    box-shadow: 0 4px 10px rgba(96, 165, 250, 0.08);
                    font-family: 'Segoe UI', Tahoma, sans-serif;
                    font-size: 1rem;
                    color: #334155;
                  ">
                    ${caseResults}
                  </div>
                `;



                const casePrefillText = `
Troubleshooting context:
------------------------
The user attempted to resolve the issue using the AI-powered troubleshooting tool by pasting the following log:

${log}

The AI analyzed the logs and provided the following insights:

${summary}

Despite reviewing the AI's suggestions, the issue remains unresolved. Hence, a support case is being created for further assistance.
`.trim();

resultDiv.innerHTML += `
  <h4 style="
    font-size: 1.2rem;
    font-weight: 600;
    margin: 30px 0 10px;
    color: #dc2626;
  ">📄 Case Summary</h4>

  <textarea id="casePrefillText" readonly style="
    width: 100%;
    height: 240px;
    padding: 14px;
    font-size: 1rem;
    border: 1px solid #cbd5e1;
    border-radius: 10px;
    resize: none;
    background-color: #fef2f2;
    color: #1e293b;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);
    font-family: monospace;
    margin-bottom: 10px;
  ">${casePrefillText}</textarea>

  <div style="text-align: center; margin-bottom: 20px;">
    <button id="copyCaseContentBtn" style="
      margin-right: 12px;
      background: #3b82f6;
      color: white;
      padding: 10px 18px;
      font-size: 0.95rem;
      font-weight: 500;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      box-shadow: 0 3px 8px rgba(59, 130, 246, 0.2);
      transition: transform 0.2s;
    " onmouseover="this.style.transform='scale(1.02)';"
    onmouseout="this.style.transform='scale(1)';">
      📋 Copy Case Content
    </button>

    <button id="createCaseBtn" style="
      background: linear-gradient(135deg, #dc2626, #f87171);
      color: white;
      padding: 10px 18px;
      font-size: 0.95rem;
      font-weight: 600;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(220, 38, 38, 0.25);
      transition: transform 0.2s;
    " onmouseover="this.style.transform='scale(1.02)';"
    onmouseout="this.style.transform='scale(1)';">
      📝 Create a Case
    </button>
  </div>
`;

setTimeout(() => {
  // Open case page
  document.getElementById("createCaseBtn")?.addEventListener("click", () => {
    window.open("https://support.servicenow.com/sn_customerservice_case.do", "_blank");
  });

  // Copy case content
  document.getElementById("copyCaseContentBtn")?.addEventListener("click", () => {
    const textarea = document.getElementById("casePrefillText");
    textarea.select();
    document.execCommand("copy");

    // Show "Copied" feedback
    const btn = document.getElementById("copyCaseContentBtn");
    const originalText = btn.innerText;
    btn.innerText = "✅ Copied!";
    setTimeout(() => btn.innerText = originalText, 1500);
  });
}, 0);


        } catch (err) {
          console.error("Log analysis error:", err);
          resultDiv.innerHTML = `<p style="color:red;">❌ Failed to analyze log.</p>`;
        }
      });
    });

  }, 100);
}

// Call this on page load or on trigger
addRealtimeAssistantTab();




function validateSearchField(input, fieldLabel) {
  if (!input?.trim()) {
    alert(`Please provide valid ${fieldLabel} value`);
    return false;
  }
  return true;
}

function triggerQuickScan() {
  console.log("Search Started");

  const keywords = document.getElementById('geniusSearch').value;

  if (!validateSearchField(keywords, "keywords")) return;

  // Show loaders and clear old results
  const loaderHtml = '<div class="ripple-loader"><div></div><div></div><div></div></div>';
  $('#rel_case').html(loaderHtml);
  $('#rel_kb').html(loaderHtml);
  $('#rel_doc').html(loaderHtml);
  $('#rel_taxonomy').html(loaderHtml);

  $("#case_view_table").find("tr:not(:first)").remove();
  document.getElementById("case_view_table").style.display = "none";

  // Compute last 12 months date range
  const endDate = new Date();
  const startDate = new Date();
  startDate.setFullYear(endDate.getFullYear() - 1);

  const formatDate = (date) => date.toISOString().split('T')[0];
  const start_date = formatDate(startDate);
  const end_date = formatDate(endDate);

  const groupSysId = document.getElementById('sn_customerservice_case.assignment_group')?.value || '';

  // Load Case Data
  loadRelevantCases(keywords, start_date, end_date, {
    table: 'sn_customerservice_case',
    fields: 'sys_id,number,short_description,close_notes',
    globalSearch: false,
    fixed: true,
    matchAll: true,
    searchField: resolveSearchFields('sn_customerservice_case'),
    stateFilter: 'state=6^ORstate=3',
    orderQuery: '^ORDERBYsys_created_on^ORDERBYDESCsys_created_on',
    target: 'rel_case',
    group: groupSysId,
    displayTable: "case_view_table",
    limit: 20
  });


}





function resolveSearchFields(table) {
  switch (table) {
    case "sn_customerservice_case":
      return ['short_description', 'description', 'close_notes', 'u_technical_action_plan'];
    default:
      return [];
  }
}





async function fetchGeminiInsights(text, apiKey) {
  const maxLength = 20000;
  const truncatedText = text.length > maxLength ? text.substring(0, maxLength) + "..." : text;


  const prompt = `
🧠 **You are TechOps AI – The Support Strategist.**

Your prime directive: Decode internal case notes and deliver a laser-focused **battle plan** for a Technical Support Engineer (TSE) to follow.

🔍 **Your Objective**:
Extract **only the most relevant, technical, and actionable** steps a TSE should take to diagnose or resolve a similar issue.

💡 Think like an elite troubleshooter:
- What exact steps should they perform?
- What tools should they use?
- What logs/configs/commands should they pull?
- Which internal/external docs or KBs should they refer to?

🛠️ **You Must**:
- Skip the fluff (no greetings, no summaries, no emotions).
- Focus purely on **actions, diagnostics, tools, CLI commands**, and **technical references**.
- Highlight any artifacts (log names, config paths, database tables, scripts, etc.) mentioned.
- Use [Markdown-style links](https://example.com) if a KB or doc is referenced.

📐 **Formatting Protocol**:
1. Begin with a numbered checklist — no intro, no headings.
2. Each item = max 1–2 lines. Think commands, not commentary.
3. Use inline code blocks for commands or files (e.g., \`cat /var/log/xyz\`, \`show ip route\`).
4. Make it copy-paste friendly for engineers in the trenches.

---

📁 **Internal Case Notes**:
==============================
${truncatedText}
`;


  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      //
      // const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {


      //const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
      // const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, { 

      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.2 },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "API request failed");
    }

    const data = await response.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No summary available.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to generate summary.");
  }
}

//document.addEventListener("DOMContentLoaded", populateSupportGroups);

function revealCaseDetails() {
  document.getElementById('related-records').style.display = 'none';
  document.getElementById('sn_customerservice_case.form_scroll').style.display = 'block';
}



function constructQueryString(keywords, startDate, endDate, options) {
  const dateQuery = `sys_created_onBETWEENjavascript:gs.dateGenerate('${startDate}','00:00:00')@javascript:gs.dateGenerate('${endDate}','23:59:59')`;

  let orFieldQuery = '';

  if (keywords.includes(',')) {
    // Comma-separated multiple keywords
    const keywordList = keywords
      .split(',')
      .map(k => k.trim())
      .filter(k => k.length > 0)
      .map(encodeURIComponent);

    orFieldQuery = keywordList
      .flatMap((keyword, i) =>
        options.searchField.map((field, j) => {
          const isFirst = i === 0 && j === 0;
          const prefix = isFirst ? '' : '^OR';
          return `${prefix}${field}LIKE${keyword}`;
        })
      )
      .join('');
  } else {
    // Single keyword — old logic
    const encodedKeyword = encodeURIComponent(keywords.trim());
    orFieldQuery = options.searchField
      .map((field, i) => {
        const prefix = i === 0 ? '' : '^OR';
        return `${prefix}${field}LIKE${encodedKeyword}`;
      })
      .join('');
  }

  let finalQuery = `${dateQuery}`;
  if (orFieldQuery) {
    finalQuery += `^${orFieldQuery}`;
  }

  if (options.stateFilter) {
    finalQuery += `^${options.stateFilter}`;
  }

  if (
    options.group &&
    options.group !== 'all' &&
    ['sn_customerservice_case'].includes(options.table)
  ) {
    finalQuery += `^assignment_group=${options.group}`;
  }

  if (options.orderQuery) {
    finalQuery += options.orderQuery;
  }

  return finalQuery;
}


// script.js





function createXHRRequest(table, fields, query, limit = 10) {

  const url = `https://support.servicenow.com/api/now/table/${table}?sysparm_query=${query}&sysparm_fields=${fields}&sysparm_limit=${limit}&sysparm_no_count=true&sysparm_query_category=custom`;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('X-UserToken', token);
  return xhr;
}









function loadRelevantCases(keywords, startDate, endDate, options) {


  chrome.storage.sync.get(["geminiApiKey"], async ({ geminiApiKey }) => {
    const query = constructQueryString(keywords, startDate, endDate, options);
    const tableUrl = `https://support.servicenow.com/${options.table}_list.do?sysparm_query=${query}`;
    const req = createXHRRequest(options.table, options.fields, query, 10);


    req.onreadystatechange = async function () {
      if (this.readyState === 4 && this.status === 200) {
        const results = JSON.parse(this.response)?.result || [];
        $(`#${options.target}`).text(results.length).wrap(`<a href="${tableUrl}" target="_blank">`);

        // if (!results.length) return;
        if (!results.length) {
          document.getElementById(options.target).textContent = '0';
          showFallbackResources(keywords); // ✅ pass keywords dynamically
          return;
        }




        const container = document.getElementById(options.displayTable);
        if (!container) return console.error(`Container with ID '${options.displayTable}' not found.`);
        container.innerHTML = "";
        container.style.display = "block";

        for (const item of results.slice(0, 10)) {
          const card = document.createElement("div");
          card.className = "info-box";
          card.innerHTML = `
          <div style="
            background: linear-gradient(135deg, #f9fafb, #eef1f8);
            border-left: 6px solid #4f46e5;
            border-radius: 20px;
            padding: 20px 24px;
            margin-bottom: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            font-family: 'Segoe UI', 'Roboto', sans-serif;
            max-width: 100%;
          " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 12px 36px rgba(0, 0, 0, 0.1)'" 
            onmouseout="this.style.transform='none'; this.style.boxShadow='0 10px 30px rgba(0, 0, 0, 0.07)'">

            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px; background: linear-gradient(90deg, #6366f1, #8b5cf6); color: white; padding: 14px 20px; border-radius: 14px; font-size: 15px; font-weight: 600; box-shadow: 0 4px 16px rgba(99, 102, 241, 0.2); animation: pulseGlow 2s infinite; position: relative; overflow: hidden;">
              <style>
                @keyframes pulseGlow {
                  0% { box-shadow: 0 0 0 rgba(139, 92, 246, 0); }
                  50% { box-shadow: 0 0 15px rgba(139, 92, 246, 0.4); }
                  100% { box-shadow: 0 0 0 rgba(139, 92, 246, 0); }
                }
                @keyframes typing {
                  from { width: 0; }
                  to { width: 100%; }
                }
                @keyframes blinkCaret {
                  0%, 100% { border-color: transparent; }
                  50% { border-color: white; }
                }
              </style>

              <div style="background: #ffffff22; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; animation: pulseGlow 1.5s infinite;">🤖</div>

              <div style="white-space: nowrap; overflow: hidden; position: relative;">
                <span style="display: inline-block; font-family: 'Courier New', monospace; border-right: 2px solid white; width: 0; animation: typing 3s steps(40, end) forwards, blinkCaret 1s step-end infinite;">
                  Agentic Bot is generating clear next steps for you...
                </span>
              </div>
            </div>


            <div style="
              font-weight: 700;
              font-size: 17px;
              margin-bottom: 12px;
              word-break: break-word;
            ">
              <a href="https://support.servicenow.com/${options.table}.do?sys_id=${item.sys_id}" 
                target="_blank"
                style="
                  color: #fff;
                  background: linear-gradient(90deg, #6366f1, #8b5cf6);
                  text-decoration: none;
                  padding: 6px 14px;
                  border-radius: 14px;
                  display: inline-block;
                  box-shadow: 0 2px 6px rgba(99,102,241,0.3);
                  font-size: 14px;
                  transition: background 0.3s ease;
                  max-width: 100%;
                  overflow-wrap: break-word;
                "
                onmouseover="this.style.background='linear-gradient(90deg, #4f46e5, #7c3aed)'"
                onmouseout="this.style.background='linear-gradient(90deg, #6366f1, #8b5cf6)'">
                🔗 ${item.number}
              </a>
            </div>

            <div style="
              color: #1f2937;
              font-size: 15px;
              line-height: 1.6;
              margin-bottom: 14px;
              background: #f0f4ff;
              padding: 10px 14px;
              border-left: 4px solid #93c5fd;
              border-radius: 10px;
              word-break: break-word;
              box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.03);
            ">
              ${item.short_description?.slice(0, 200) || "<em>No short description available.</em>"}
            </div>

            <div class="summary-wrapper" style="margin-top: 12px; position: relative;">
              <div class="ripple-loader" style="
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 13px;
                font-style: italic;
                color: #374151;
                background: linear-gradient(90deg, #dbeafe, #eef2ff);
                border-radius: 10px;
                padding: 8px 12px;
                width: fit-content;
                animation: shimmerBG 2s infinite linear alternate;
                background-size: 200% 100%;
                box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.04);
              ">
                <div class="bouncing-dots" style="display: flex; gap: 5px; align-items: center;">
                  <div style="width: 6px; height: 6px; border-radius: 50%; background-color: #4f46e5; animation: bounceDot 0.6s infinite alternate;"></div>
                  <div style="width: 6px; height: 6px; border-radius: 50%; background-color: #4f46e5; animation: bounceDot 0.6s 0.2s infinite alternate;"></div>
                  <div style="width: 6px; height: 6px; border-radius: 50%; background-color: #4f46e5; animation: bounceDot 0.6s 0.4s infinite alternate;"></div>
                </div>
                <span class="summary-text">Generating Clear Next Steps...</span>
              </div>
            </div>
          </div>`;

          container.appendChild(card);

          try {
            let summary = item.close_notes ? item.close_notes.slice(0, 119) : "No notes available.";
            if (geminiApiKey && item.close_notes) {
              summary = await fetchGeminiInsights(item.close_notes, geminiApiKey);
            }

            function formatSummaryToHTML(summary) {
              const lines = summary.split('\n').filter(Boolean);
              return lines.map(line => {
                const words = line.split(" ");
                const formattedWords = words.map(word => {
                  if (word.startsWith("https://") && word.includes(".service-now.com")) {
                    try {
                      const url = new URL(word);
                      const maskedText = url.href.replace(url.hostname, "<instance>.service-now.com");
                      return `<a href="${url.href}" target="_blank">${maskedText}</a>`;
                    } catch (e) {
                      return word;
                    }
                  }
                  return word;
                });
                return `<div class="summary-line">${formattedWords.join(" ")}</div>`;
              }).join("");
            }

      
               const summaryDiv = document.createElement("div");
              summaryDiv.style.marginTop = "16px";
              summaryDiv.style.padding = "18px";
              summaryDiv.style.borderRadius = "12px";
              summaryDiv.style.background = "linear-gradient(145deg, #f0f4ff, #e2e8f0)";
              summaryDiv.style.borderLeft = "6px solid #7c3aed";
              summaryDiv.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
              summaryDiv.style.color = "#1e293b";
              summaryDiv.style.fontSize = "14px";
              summaryDiv.style.lineHeight = "1.6";
              summaryDiv.style.fontFamily = "'Segoe UI', sans-serif";
              summaryDiv.innerHTML = formatSummaryToHTML(summary);


                            const caseMessage = `
                  🧪 *AI Suggested Troubleshooting Attempted*

                  Tried the recommended steps based on AI guidance:
                  🔹 "${item.short_description?.slice(0, 100)}..."

                  ❌ Unfortunately, the issue still persists. Proceeding to create a support case for further analysis and resolution.

                  🔍 *AI Summary Highlights*
                  ${summary}
                  `;

              const caseToolsDiv = document.createElement("div");
            caseToolsDiv.style.marginTop = "16px";
            caseToolsDiv.innerHTML = `
              <div style="
                background: linear-gradient(135deg, #fdfbff, #e4eaf7);
                border-left: 6px solid #9bc400;
                padding: 24px;
                border-radius: 16px;
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
                font-family: 'Segoe UI', sans-serif;
                color: #1f2937;
              ">
                <h3 style="
                  margin: 0 0 12px;
                  font-size: 18px;
                  color: #374151;
                ">📩 Case Creation Note</h3>

                <pre id="case-note-${item.sys_id}" style="
                  white-space: pre-wrap;
                  background: #beb6b6ff;
                  padding: 16px;
                  border-radius: 12px;
                  border: 1px solid #d1d5db;
                  font-size: 14px;
                  line-height: 1.5;
                  color: #111827;
                  overflow-x: auto;
                  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.05);
                ">${caseMessage}</pre>

                <div style="margin-top: 16px;">
                  <button data-copy-id="case-note-${item.sys_id}" style="
                    background-color: #9bc400;
                    border: none;
                    color: white;
                    padding: 10px 16px;
                    font-size: 14px;
                    border-radius: 8px;
                    cursor: pointer;
                    margin-right: 10px;
                    transition: background-color 0.2s ease;
                  " onmouseover="this.style.backgroundColor='#85a900'" onmouseout="this.style.backgroundColor='#9bc400'">
                    📋 Copy Note
                  </button>

                  <a href="https://support.servicenow.com/sn_customerservice_case.do" target="_blank" style="text-decoration: none;">
                    <button style="
                      background-color: #8076a3;
                      border: none;
                      color: white;
                      padding: 10px 16px;
                      font-size: 14px;
                      border-radius: 8px;
                      cursor: pointer;
                      transition: background-color 0.2s ease;
                    " onmouseover="this.style.backgroundColor='#6f6691'" onmouseout="this.style.backgroundColor='#8076a3'">
                      📝 Create a Case
                    </button>
                  </a>
                </div>
              </div>
            `;

            caseToolsDiv.querySelector('button[data-copy-id]').addEventListener('click', (e) => {
              const targetId = e.target.getAttribute('data-copy-id');
              const text = document.getElementById(targetId).innerText;
              navigator.clipboard.writeText(text)
                .then(() => alert('✅ Case note copied!'))
                .catch(err => console.error('Copy failed:', err));
            });





            const wrapper = card.querySelector(".summary-wrapper");
            const header = card.querySelector(".agentic-header");

            if (wrapper) {
              wrapper.innerHTML = "";
              wrapper.appendChild(summaryDiv);
              wrapper.appendChild(caseToolsDiv);
              wrapper.style.opacity = 0;
              setTimeout(() => {
                wrapper.style.transition = "opacity 0.4s ease";
                wrapper.style.opacity = 1;
              }, 50);
            }

            if (header) {
              header.style.transition = "opacity 0.3s ease";
              header.style.opacity = 0;
              setTimeout(() => header.remove(), 300);
            }

          } catch (err) {
            const fallback = document.createElement("div");
            fallback.style.color = "#dc3545";
            fallback.style.marginTop = "10px";
            fallback.textContent = "Summary failed.";
            const wrapper = card.querySelector(".summary-wrapper");
            if (wrapper) wrapper.innerHTML = fallback.outerHTML;
            console.error("Gemini summary error:", err);
          }
        }
      }
    };

    req.send();
  });
}





function showFallbackResources(keywords) {
  const container = document.getElementById("fallback_resources");
  if (!container) return;

  container.style.display = "block";




  container.innerHTML = `
        <div style="margin-top: 20px; font-family: 'Segoe UI', sans-serif;">
        <div style="background: linear-gradient(to right, #f3f4fc, #f8f9ff); border-radius: 16px; padding: 24px 32px; box-shadow: 0 8px 20px rgba(99, 102, 241, 0.1); animation: fadeIn 0.6s ease-in-out; transition: all 0.3s ease;">
          <h3 style="font-size: 20px; margin-bottom: 20px; color: #2c3e50; letter-spacing: 0.3px;">
            🤖 No Next Steps Found from cases – Searching Other Sources via 
            <span style="color: #7c3aed; font-weight: 600;">RAG</span>
          </h3>

          <div id="rag_sources" style="display: grid; gap: 18px;">
            ${['Servicenow Knowledge Base', 'Servicenow Product Documentation', 'Servicenow Developer Portal', 'Servicenow Community'].map(source => `
              <div class="rag-card" style="position: relative; background: white; padding: 18px 24px 18px 28px; border-left: 6px solid #7c3aed; border-radius: 16px; box-shadow: 0 3px 10px rgba(99,102,241,0.08); overflow: hidden; transition: transform 0.25s ease, box-shadow 0.3s ease;">
                <div style="display: flex; align-items: center; gap: 14px;">
                  <div style="width: 32px; height: 32px; border-radius: 50%; background: #ede9fe; display: flex; align-items: center; justify-content: center; font-size: 18px;">🔍</div>
                  <strong style="font-size: 16px; color: #2f2f2f;">${source}</strong>
                </div>
                <div style="margin-top: 14px;" class="rag-summary rag-summary-${source.toLowerCase().replace(/\s/g, '-')}">
                  <div class="ripple-loader"></div>
                  <div class="summary-line" style="color: #555; font-size: 14px;">Fetching summary from <em>${source}</em>...</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        </div>


    <style>
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(12px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .ripple-loader {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-right: 6px;
      border-radius: 50%;
      background-color: #6366f1;
      animation: ripple 1.2s infinite ease-in-out;
      vertical-align: middle;
    }

    @keyframes ripple {
      0% {
        transform: scale(0.8);
        opacity: 0.7;
      }
      50% {
        transform: scale(1.5);
        opacity: 0.2;
      }
      100% {
        transform: scale(0.8);
        opacity: 0.7;
      }
    }

    .rag-card::before {
      content: '';
      position: absolute;
      top: -40px;
      right: -40px;
      width: 80px;
      height: 80px;
      background: radial-gradient(circle, rgba(99,102,241,0.1) 20%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
    }

    .rag-card > * {
      position: relative;
      z-index: 1;
    }

    .rag-summary {
      background: #f9fafb;
      border-radius: 8px;
      padding: 12px 16px;
      font-size: 14px;
      color: #374151;
      line-height: 1.6;
      margin-top: 8px;
      box-shadow: inset 0 1px 3px rgba(0,0,0,0.04);
      position: relative;
    }

    .rag-summary .summary-line {
      background: linear-gradient(90deg, #e0e7ff 0%, #f0f4ff 100%);
      padding: 4px 8px;
      border-radius: 6px;
      margin-bottom: 6px;
      color: #1e293b;
      font-weight: 500;
      animation: pulseLine 1.8s infinite ease-in-out;
    }

    @keyframes pulseLine {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .rag-summary .summary-line:nth-child(even) {
      background: linear-gradient(90deg, #fef3c7 0%, #fcd34d 100%);
      color: #78350f;
    }

    .rag-summary .summary-line:nth-child(odd):not(:first-child) {
      background: linear-gradient(90deg, #f0fdfa 0%, #99f6e4 100%);
      color: #065f46;
    }
  </style>
  `;



  chrome.storage.sync.get(["geminiApiKey"], async ({ geminiApiKey }) => {
    if (!geminiApiKey) return;



    const sources = [
      {
        name: "Servicenow Knowledge Base",
        prompt: `List top KBs that directly help a TSE troubleshoot: ${keywords}. Follow formatting protocol: numbered checklist, max 2-line actions, inline code for commands/paths, markdown links for docs.`,
        url: "https://support.servicenow.com/kb?id=kb_home"
      },
      {
        name: "Servicenow Product Documentation",
        prompt: `Extract only the most relevant docs to resolve: ${keywords}. Format as a copy-paste-ready checklist with commands, tools, and artifacts. Use inline code and markdown links.`,
        url: "https://www.servicenow.com/docs/bundle"
      },
      {
        name: "Servicenow Developer Portal",
        prompt: `Find technical how-tos, code snippets, or scripts for: ${keywords}. Return in numbered action list with inline code blocks. Prioritize diagnostic or implementation steps.`,
        url: "https://developer.servicenow.com/dev.do"
      },
      {
        name: "Servicenow Community",
        prompt: `Surface community-validated solutions for: ${keywords}. Summarize into a concise checklist using CLI commands, config paths, tool names, and markdown links where needed.`,
        url: "https://www.servicenow.com/community/"
      }
    ];

    for (const src of sources) {
      try {
        const summary = await fetchGeminiInsights(src.prompt, geminiApiKey);
        const className = `.rag-summary-${src.name.toLowerCase().replace(/\s/g, '-')}`;
        const summaryDiv = container.querySelector(className);
        if (summaryDiv) {
          summaryDiv.innerHTML = formatSummaryToHTML(summary);
        }
      } catch (e) {
        console.error(`LLM fetch error for ${src.name}:`, e);
        const summaryDiv = container.querySelector(`.rag-summary-${src.name.toLowerCase().replace(/\s/g, '-')}`);
        // if (summaryDiv) {
        //   summaryDiv.innerHTML = `<span style="color: #dc2626;">❌ Failed to retrieve summary</span>`;
        // }
        if (summaryDiv) {
          summaryDiv.innerHTML = formatSummaryToHTML(summary, src.url);
        }

      }
    }



    // Collect all summaries into a single string (optional, based on your setup)
// 1️⃣ Gather all text from rendered RAG summaries
let combinedSummary = '';
sources.forEach(src => {
  const className = `.rag-summary-${src.name.toLowerCase().replace(/\s/g, '-')}`;
  const summaryDiv = container.querySelector(className);
  if (summaryDiv) {
    combinedSummary += ' ' + summaryDiv.textContent;
  }
});

// 2️⃣ Extract keywords safely
const keywordsforcase = extractKeywords(combinedSummary);
const keywordsStr = Array.isArray(keywordsforcase) ? keywordsforcase.join(', ') : 'N/A';


// ✅ Use them for your fallback note
const caseSummary = `
🧪 *AI Suggested Troubleshooting Attempted*

Tried recommended steps from these sources:
- Servicenow Knowledge Base
- Product Documentation
- Developer Portal
- Community

❌ Unfortunately, the issue still persists. Proceeding to create a support case for deeper analysis.

🔍 *Keywords Explored*: ${keywordsStr}

📎 *Next Step*: Share this context while creating a support case.
`;



const fallbackActionDiv = document.createElement("div");
fallbackActionDiv.style.marginTop = "24px";
fallbackActionDiv.innerHTML = `
  <div style="
    background: linear-gradient(135deg, #fff7f7, #f5f5fc);
    border-left: 6px solid #ef4444;
    padding: 24px;
    border-radius: 16px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
    font-family: 'Segoe UI', sans-serif;
    color: #1f2937;
  ">
    <h3 style="
      margin: 0 0 12px;
      font-size: 18px;
      color: #dc2626;
    ">📩 Case Creation Triggered</h3>

    <pre id="case-fallback-note" style="
      white-space: pre-wrap;
      background: #fef2f2;
      padding: 16px;
      border-radius: 12px;
      border: 1px solid #fca5a5;
      font-size: 14px;
      line-height: 1.5;
      color: #7f1d1d;
      overflow-x: auto;
      box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.05);
    ">${caseSummary}</pre>

    <div style="margin-top: 16px;">
      <button id="copy-fallback-note" style="
        background-color: #ef4444;
        border: none;
        color: white;
        padding: 10px 16px;
        font-size: 14px;
        border-radius: 8px;
        cursor: pointer;
        margin-right: 10px;
        transition: background-color 0.2s ease;
      " onmouseover="this.style.backgroundColor='#dc2626'" onmouseout="this.style.backgroundColor='#ef4444'">
        📋 Copy Note
      </button>

      <a href="https://support.servicenow.com/sn_customerservice_case.do" target="_blank" style="text-decoration: none;">
        <button style="
          background-color: #7c3aed;
          border: none;
          color: white;
          padding: 10px 16px;
          font-size: 14px;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        " onmouseover="this.style.backgroundColor='#6b21a8'" onmouseout="this.style.backgroundColor='#7c3aed'">
          📝 Create a Case
        </button>
      </a>
    </div>
  </div>
`;

container.appendChild(fallbackActionDiv);

document.getElementById("copy-fallback-note")?.addEventListener("click", () => {
  const text = document.getElementById("case-fallback-note").innerText;
  navigator.clipboard.writeText(text)
    .then(() => alert("✅ Case note copied!"))
    .catch(err => console.error("Copy failed:", err));
});



  });


  function extractKeywords(text, maxKeywords = 5) {
    const stopWords = new Set(["the", "is", "at", "which", "on", "and", "a", "to", "in", "with", "for", "of", "that", "as", "are", "this"]);
    const words = text.toLowerCase().match(/\b[a-z]{4,}\b/g) || [];
    const frequency = {};

    words.forEach(word => {
      if (!stopWords.has(word)) {
        frequency[word] = (frequency[word] || 0) + 1;
      }
    });

    return Object.entries(frequency)
      .sort((a, b) => b[1] - a[1])  // sort by frequency
      .slice(0, maxKeywords)
      .map(entry => entry[0]);
  }



  //new
  function formatSummaryToHTML(summary) {
    const lines = summary
      .split('\n')
      .filter(Boolean)
      .map(line => `<div style="margin: 6px 0; line-height: 1.5;">${line}</div>`)
      .join('');

    const keywords = extractKeywords(summary);
    const query = encodeURIComponent(keywords.join(' '));
    const dynamicURL = `https://www.google.com/search?q=${query}&aep=1&udm=50&ntc=1`;

    return `
    ${lines}
    <div style="margin-top: 10px;">
      <a href="${dynamicURL}" target="_blank" style="font-size: 13px; color: #4f46e5; text-decoration: underline;">
        🔗 View Source
      </a>
    </div>
  `;
  }
  //
  function formatSummaryToHTML(summary) {
    const lines = summary
      .split('\n')
      .filter(Boolean)
      .map((line, index) => {
        const isEven = index % 2 === 0;
        return `
        <div class="summary-line ${isEven ? 'even' : 'odd'}">
          ${highlightKeywords(line)}
        </div>
      `;
      })
      .join('');

    const keywords = extractKeywords(summary);
    const query = encodeURIComponent(keywords.join(' '));
    const dynamicURL = `https://www.google.com/search?q=${query}&aep=1&udm=50&ntc=1`;

    return `
    <div class="summary-wrapper">
      ${lines}
      <div class="summary-source-link">
        <a href="${dynamicURL}" target="_blank">
          🔗 View Source
        </a>
      </div>
    </div>

    <style>
      .summary-wrapper {
        margin-top: 10px;
        font-family: 'Segoe UI', sans-serif;
        animation: fadeIn 0.4s ease-in-out;
      }

      .summary-line {
        padding: 8px 12px;
        margin: 6px 0;
        border-radius: 8px;
        font-size: 14px;
        line-height: 1.6;
        animation: slideIn 0.3s ease-in;
      }

      /* Light minty green and soft gray-blue for readability */
      .summary-line.even {
        background: linear-gradient(90deg, #f9fdfc 0%, #e6f7f4 100%);
        color: #2f4f4f;
      }

      .summary-line.odd {
        background: linear-gradient(90deg, #f8f9ff 0%, #e8edff 100%);
        color: #3a4750;
      }

      .summary-line strong {
        color: #7c3aed;
      }

      .summary-source-link {
        margin-top: 12px;
        font-size: 13px;
      }

      .summary-source-link a {
        color: #4f46e5;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.2s;
      }

      .summary-source-link a:hover {
        color: #3730a3;
        text-decoration: underline;
      }

      @keyframes slideIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    </style>
  `;
  }

  // Utility to bold extracted keywords inside lines
  function highlightKeywords(text) {
    const keywords = extractKeywords(text);
    const uniqueKeywords = [...new Set(keywords.filter(k => k.length > 3))]; // Remove duplicates & short noise

    let highlighted = text;
    uniqueKeywords.forEach(word => {
      const pattern = new RegExp(`\\b(${word})\\b`, 'gi');
      highlighted = highlighted.replace(pattern, '<strong>$1</strong>');
    });

    return highlighted;
  }



}


////////////////////////////////////////

const caseContent = {
  number: $('#sys_readonly\\.sn_customerservice_case\\.number').val(),
  description: $('#sn_customerservice_case\\.description').val(),
  stepsToReproduce: $('#sn_customerservice_case\\.u_steps_to_reproduce').val()
};
fetchCaseNotesAndComments(caseContent.number);
console.log("Case Content:", JSON.stringify(caseContent, null, 2));

async function fetchCaseNotesAndComments(caseNumber) {
  return new Promise((resolve, reject) => {
    // First, look up the case to get the sys_id using the number
    const lookupUrl = `https://support.servicenow.com/api/now/table/sn_customerservice_case?sysparm_query=number=${caseNumber}&sysparm_fields=sys_id&sysparm_limit=1`;

    const lookupXhr = new XMLHttpRequest();
    lookupXhr.open("GET", lookupUrl, true);
    lookupXhr.setRequestHeader("Accept", "application/json");
    lookupXhr.setRequestHeader("Content-Type", "application/json");
    lookupXhr.setRequestHeader("X-UserToken", token);

    lookupXhr.onload = function () {
      if (lookupXhr.status === 200) {
        const lookupResp = JSON.parse(lookupXhr.responseText);
        if (lookupResp.result && lookupResp.result.length > 0) {
          const sysId = lookupResp.result[0].sys_id;

          // ✅ FIXED: Correct journal URL query format
          const journalUrl = `https://support.servicenow.com/api/now/table/sys_journal_field` +
            `?sysparm_query=elementINwork_notes,comments^element_id=${sysId}^ORDERBYDESCsys_created_on` +
            `&sysparm_fields=element,value,sys_created_by,sys_created_on&sysparm_limit=10`;

          const notesXhr = new XMLHttpRequest();
          notesXhr.open("GET", journalUrl, true);
          notesXhr.setRequestHeader("Accept", "application/json");
          notesXhr.setRequestHeader("Content-Type", "application/json");
          notesXhr.setRequestHeader("X-UserToken", token);

          notesXhr.onload = () => {
            if (notesXhr.status === 200) {
              try {
                const notesResp = JSON.parse(notesXhr.responseText);
                const result = notesResp.result || [];

                // Optional: Log available element names to debug
                const availableElements = [...new Set(result.map(n => n.element))];
                console.log("Elements found:", availableElements);

                const comments = result
                  .filter(n => n.element === "comments" && n.value)
                  .slice(0, 10)
                  .map(n => `• ${n.value}`)
                  .join('\n');

                const work_notes = result
                  .filter(n => n.element === "work_notes" && n.value)
                  .slice(0, 10)
                  .map(n => `• ${n.value}`)
                  .join('\n');

                resolve({ comments, work_notes });
              } catch (err) {
                reject(`Failed to parse response: ${err.message}`);
              }
            } else {
              reject(`Failed to fetch notes: ${notesXhr.statusText}`);
            }
          };

          notesXhr.onerror = () => reject("❌ Failed to fetch sys_journal_field notes");
          notesXhr.send();
        } else {
          reject("❌ No case found for given number.");
        }
      } else {
        reject(`❌ Failed to resolve sys_id: ${lookupXhr.statusText}`);
      }
    };

    lookupXhr.onerror = () => reject("❌ Error looking up case sys_id.");
    lookupXhr.send();
  });
}

// function generateCaseSummary() {
//   chrome.storage.sync.get(["geminiApiKey"], async ({ geminiApiKey }) => {
//     if (!geminiApiKey) {
//       console.error("⚠️ Gemini API key not found. Please set it in extension settings.");
//       return;
//     }

//           try {
//             const notesData = await fetchCaseNotesAndComments(caseContent.number, geminiApiKey);
//             console.log(`📋 Comments for ${caseContent.number}:`, notesData.comments);
//             console.log(`🛠️ Work Notes for ${caseContent.number}:`, notesData.work_notes);

//             const caseContext = `
//       Short Description:
//       ${caseContent.description}

//       Steps to Reproduce:
//       ${caseContent.stepsToReproduce}

//       Customer Comments:
//       ${notesData.comments}

//       Internal Work Notes:
//       ${notesData.work_notes}
//             `.trim();

//       const summaryPrompt = `
//         You are a senior ServiceNow technical expert analyzing a customer support case. Your goals are:

//         1. Understand the technical problem or question the customer is raising.
//         2. Assess the customer’s tone or urgency (frustrated, blocked, urgent, etc.).
//         3. Extract any ServiceNow products, modules, or terminology mentioned.
//         4. Understand what's already been tried or investigated via internal work notes.
//         5. Create a short, professional summary of the case.
//         6. Suggest 3–5 specific ServiceNow-based actions to troubleshoot or resolve the issue.

//         Use clear and technical language in this format:

//         🔹 Technical Summary  
//         🔹 Customer Sentiment Analysis  
//         🔹 Recommended Next Steps

//         Here is the full case context:
//         ${caseContext}
//               `.trim();

//       const summary = await fetchGeminiInsights(summaryPrompt, geminiApiKey);
//       console.log("🔍 Gemini Summary:\n", summary);

//       // Inject Summary Output
//       let outputEl = document.getElementById("case-summary-output");
//       if (!outputEl) {
//         outputEl = document.createElement("div");
//         outputEl.id = "case-summary-output";
//         outputEl.style.whiteSpace = "pre-wrap";
//         outputEl.style.border = "1px solid #ccc";
//         outputEl.style.padding = "10px";
//         outputEl.style.marginTop = "10px";
//         outputEl.style.background = "#f9f9f9";
//         document.body.appendChild(outputEl);
//       }

//         // outputEl.innerText = `🔍 Summary:\n${summary}`;
//         outputEl.innerHTML = `
//       <h2 style="margin-top:0;">📝 Summary</h2>
//       <pre style="white-space:pre-wrap; font-size:14px;">${summary}</pre>
//     `;


//             // Use full context for intelligent search, not keywords
//       const sources = [
//         {
//           name: "ServiceNow Knowledge Base",
//           prompt: `
//       Using the case summary provided, identify 3–5 highly relevant Knowledge Base articles from ServiceNow that may help troubleshoot or resolve the issue.

//       For each suggestion, provide:
//       - A short KB title
//       - 1–2 sentence explanation of relevance

//       Do NOT include links or markdown formatting.
//       Refer the user to the main KB portal for navigation.`,
//           url: "https://support.servicenow.com/kb?id=kb_home"
//         },
//         {
//           name: "ServiceNow Product Documentation",
//           prompt: `
//       Based on the case summary, list the most relevant official documentation pages.

//       For each, provide:
//       - Doc title or module
//       - What it helps with and why it's relevant

//       Do NOT include URLs. A link to the documentation portal is already provided.`,
//           url: "https://www.servicenow.com/docs/bundle"
//         },
//         {
//           name: "ServiceNow Developer Portal",
//           prompt: `
//       Identify any useful developer tools, APIs, or scripts that may help resolve the issue.

//       For each, include:
//       - Title
//       - Explanation
//       - Small code snippet (optional)

//       Do NOT include any links. Use the main Dev Portal link instead.`,
//           url: "https://developer.servicenow.com/dev.do"
//         },
//         {
//           name: "ServiceNow Community",
//           prompt: `
//       List relevant ServiceNow Community discussions that might contain a solution or helpful workaround.

//       For each:
//       - Provide the discussion title
//       - Give a short summary of the content or workaround

//       Avoid including URLs. Use the community homepage for navigation.`,
//           url: "https://www.servicenow.com/community/"
//         }
//       ];




//             for (const source of sources) {

//       const combinedPrompt = `
//       You are a senior ServiceNow expert. Based on this case summary, provide recommendations from ${source.name}.

//       🔹 Case Summary:
//       ${summary}

//       🔹 Task:
//       ${source.prompt}
//       `.trim();


//     const searchResult = await fetchGeminiInsights(combinedPrompt, geminiApiKey);
//       console.log("🔍 Gemini Summary 1:\n", searchResult);

//         // const resultEl = document.createElement("div");
//         // resultEl.style.marginTop = "20px";
//         // resultEl.style.padding = "10px";
//         // resultEl.style.borderTop = "1px solid #aaa";
//         // resultEl.style.background = "#eef1f5";
//         // Inject styled container if it doesn't exist
//       let outputEl = document.getElementById("case-summary-output1");
//       if (!outputEl) {
//         outputEl = document.createElement("div");
//         outputEl.id = "case-summary-output1";

//         // Container styling
//         outputEl.style.marginTop = "20px";
//         outputEl.style.padding = "20px";
//         outputEl.style.background = "#ffffff";
//         outputEl.style.border = "1px solid #d0d7de";
//         outputEl.style.borderRadius = "10px";
//         outputEl.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.05)";
//         outputEl.style.fontFamily = "Segoe UI, Roboto, sans-serif";
//         outputEl.style.maxHeight = "500px";
//         outputEl.style.overflowY = "auto";
//         outputEl.style.color = "#1f2328";

//         // Optional: Add a heading
//         const heading = document.createElement("div");
//         heading.textContent = "🧾 Summary Output";
//         heading.style.fontSize = "16px";
//         heading.style.fontWeight = "bold";
//         heading.style.marginBottom = "12px";
//         heading.style.color = "#24292f";
//         outputEl.appendChild(heading);

//         document.body.appendChild(outputEl);
//       }

//       // Create and style the result block
//       const resultEl = document.createElement("div");
//       resultEl.style.marginTop = "12px";
//       resultEl.style.padding = "12px";
//       resultEl.style.borderTop = "1px solid #ccc";
//       resultEl.style.background = "#f7f9fc";
//       resultEl.style.borderRadius = "6px";
//       resultEl.style.boxShadow = "inset 0 1px 2px rgba(0, 0, 0, 0.03)";
//       resultEl.style.whiteSpace = "pre-wrap";
//       resultEl.style.fontSize = "14px";
//       resultEl.style.lineHeight = "1.6";
//       resultEl.style.color = "#333";

//       // Add result content here
//       resultEl.textContent = "This is the summary result content...";

//       // Append to main container
//       outputEl.appendChild(resultEl);



//   resultEl.innerHTML = `
//   <div style="
//     background-color: #f8f9fa;
//     border: 1px solid #dee2e6;
//     border-radius: 8px;
//     padding: 16px;
//     margin-top: 12px;
//     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//     box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
//   ">
//     <h3 style="
//       margin-top: 0;
//       margin-bottom: 12px;
//       font-size: 18px;
//       font-weight: 600;
//       color: #343a40;
//     ">
//       🔗 
//       <a href="${source.url}" target="_blank" style="
//         text-decoration: none;
//         color: #0077cc;
//         transition: color 0.3s;
//       " onmouseover="this.style.color='#005999'" onmouseout="this.style.color='#0077cc'">
//         ${source.name}
//       </a>
//     </h3>
//     <pre style="
//       white-space: pre-wrap;
//       font-size: 14px;
//       color: #212529;
//       background-color: #ffffff;
//       border: 1px solid #ced4da;
//       border-radius: 6px;
//       padding: 12px;
//       overflow-x: auto;
//       max-height: 400px;
//     ">
//   ${searchResult}
//       </pre>
//     </div>
//   `;

//           document.body.appendChild(resultEl);
//         }

//       } catch (err) {
//         console.error("❌ Error generating summary and search:", err);
//       }
//     });
//   }





// // Call the function


function generateCaseSummary() {
  chrome.storage.sync.get(["geminiApiKey"], async ({ geminiApiKey }) => {
    if (!geminiApiKey) {
      console.error("⚠️ Gemini API key not found. Please set it in extension settings.");
      return;
    }

    try {
      // STEP 1: Show spinners in both output divs
      ['case-summary-output', 'case-summary-output1'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          el.innerHTML = `<div class="cs-spinner">⏳ Loading summary...</div>`;
        }
      });

      // STEP 2: Fetch case notes
      const notesData = await fetchCaseNotesAndComments(caseContent.number, geminiApiKey);
      console.log(`📋 Comments for ${caseContent.number}:`, notesData.comments);
      console.log(`🛠️ Work Notes for ${caseContent.number}:`, notesData.work_notes);

              const caseContext = `
        Short Description:
        ${caseContent.description}

        Steps to Reproduce:
        ${caseContent.stepsToReproduce}

        Customer Comments:
        ${notesData.comments}

        Internal Work Notes:
        ${notesData.work_notes}
              `.trim();

      const summaryPrompt = `
        You are a senior ServiceNow technical expert analyzing a customer support case. Your goals are:

        1. Understand the technical problem or question the customer is raising.
        2. Assess the customer’s tone or urgency (frustrated, blocked, urgent, etc.).
        3. Extract any ServiceNow products, modules, or terminology mentioned.
        4. Understand what's already been tried or investigated via internal work notes.
        5. Create a short, professional summary of the case.
        6. Suggest 3–5 specific ServiceNow-based actions to troubleshoot or resolve the issue.

        Use clear and technical language in this format:

        🔹 Technical Summary  
        🔹 Customer Sentiment Analysis  
        🔹 Recommended Next Steps

        Here is the full case context:
        ${caseContext}
              `.trim();

      // STEP 3: Get summary
      const summary = await fetchGeminiInsights(summaryPrompt, geminiApiKey);
      console.log("🔍 Gemini Summary:\n", summary);

      // STEP 4: Inject to case-summary-output
      const output1 = document.getElementById("case-summary-output");
      if (output1) {
        output1.innerHTML = `
          <h2 style="margin-top:0;">📝 Summary</h2>
          <pre style="white-space:pre-wrap; font-size:14px;">${summary}</pre>
        `;
      }

      // STEP 5: Now handle sources & second output
//             // Use full context for intelligent search, not keywords
      const sources = [
        {
          name: "ServiceNow Knowledge Base",
          prompt: `
      Using the case summary provided, identify 3–5 highly relevant Knowledge Base articles from ServiceNow that may help troubleshoot or resolve the issue.

      For each suggestion, provide:
      - A short KB title
      - 1–2 sentence explanation of relevance

      Do NOT include links or markdown formatting.
      Refer the user to the main KB portal for navigation.`,
          url: "https://support.servicenow.com/kb?id=kb_home"
        },
        {
          name: "ServiceNow Product Documentation",
          prompt: `
      Based on the case summary, list the most relevant official documentation pages.

      For each, provide:
      - Doc title or module
      - What it helps with and why it's relevant

      Do NOT include URLs. A link to the documentation portal is already provided.`,
          url: "https://www.servicenow.com/docs/bundle"
        },
        {
          name: "ServiceNow Developer Portal",
          prompt: `
      Identify any useful developer tools, APIs, or scripts that may help resolve the issue.

      For each, include:
      - Title
      - Explanation
      - Small code snippet (optional)

      Do NOT include any links. Use the main Dev Portal link instead.`,
          url: "https://developer.servicenow.com/dev.do"
        },
        {
          name: "ServiceNow Community",
          prompt: `
      List relevant ServiceNow Community discussions that might contain a solution or helpful workaround.

      For each:
      - Provide the discussion title
      - Give a short summary of the content or workaround

      Avoid including URLs. Use the community homepage for navigation.`,
          url: "https://www.servicenow.com/community/"
        }
      ];

      const container2 = document.getElementById("case-summary-output1");
      if (container2) {
        container2.innerHTML = `<div class="cs-spinner">⏳ Loading recommendations...</div>`;
      }

      let combinedResultsHTML = "";

      for (const source of sources) {
        const combinedPrompt = `
      You are a senior ServiceNow expert. Based on this case summary, provide recommendations from ${source.name}.

      🔹 Case Summary:
      ${summary}

      🔹 Task:
      ${source.prompt}
      `.trim();

        const searchResult = await fetchGeminiInsights(combinedPrompt, geminiApiKey);
        console.log(`🔍 Result for ${source.name}:\n`, searchResult);

        const sourceBlock = `
      <div style="
        background-color: #f8f9fa;
        border: 1px solid #dee2e6;
        border-radius: 8px;
        padding: 16px;
        margin-top: 12px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
      ">
        <h3 style="
          margin-top: 0;
          margin-bottom: 12px;
          font-size: 18px;
          font-weight: 600;
          color: #343a40;
        ">
          🔗 
          <a href="${source.url}" target="_blank" style="
            text-decoration: none;
            color: #0077cc;
            transition: color 0.3s;
          " onmouseover="this.style.color='#005999'" onmouseout="this.style.color='#0077cc'">
            ${source.name}
          </a>
        </h3>
        <pre style="
          white-space: pre-wrap;
          font-size: 14px;
          color: #212529;
          background-color: #ffffff;
          border: 1px solid #ced4da;
          border-radius: 6px;
          padding: 12px;
          overflow-x: auto;
          max-height: 400px;
        ">
      ${searchResult}
        </pre>
      </div>`;
        combinedResultsHTML += sourceBlock;
      }

      if (container2) {
        container2.innerHTML = `
          <div style="font-weight:bold; font-size:16px; margin-bottom:12px;">🧾 Summary Output</div>
          ${combinedResultsHTML}
        `;
      }

    } catch (err) {
      console.error("❌ Error generating summary and search:", err);
    }
  });
}

generateCaseSummary();









async function fetchRawData(endpoint, params) {
  const res = await fetch(`${endpoint}?${params}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-UserToken': token,
    },
  });
  return res;
}





