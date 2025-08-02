

var token = document.getElementById('sysparm_ck').value;
var access = token;
var url = window.location.href;

// ===  Button ===
let headerbtn = document.createElement("button");
headerbtn.innerHTML = "<b>Path Finder</b>";
//headerbtn.setAttribute("style", 'color: white;margin-left:1em;display:inline-block;background-color:rgb(21, 114, 97);font-family: inherit;');
// Style the button
headerbtn.setAttribute("style", `
  position: relative;
  color: white;
  margin-left: 1em;
  display: inline-block;
  background: linear-gradient(135deg, #9b5de5, #7a6ded, #5f6df8);
  border: 2px solid #c77dff;
  border-radius: 12px;
  padding: 8px 16px;
  font-family: 'Segoe UI', sans-serif;
  font-weight: 600;
  box-shadow: 0 4px 10px rgba(123, 97, 255, 0.3);
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
`);

// Add button text with emojis
headerbtn.innerHTML = `✨✨ Path Finder ✨✨`;

// Hover effects
headerbtn.addEventListener("mouseenter", () => {
  headerbtn.style.transform = "scale(1.05)";
  headerbtn.style.boxShadow = "0 6px 15px rgba(123, 97, 255, 0.5)";
});
headerbtn.addEventListener("mouseleave", () => {
  headerbtn.style.transform = "scale(1)";
  headerbtn.style.boxShadow = "0 4px 10px rgba(123, 97, 255, 0.3)";
});

// Add animated sparkle
const sparkle = document.createElement("span");
sparkle.innerHTML = "✨✨";
sparkle.style.position = "absolute";
sparkle.style.top = "5px";
sparkle.style.right = "10px";
sparkle.style.animation = "twinkle 1.5s infinite ease-in-out";
sparkle.style.pointerEvents = "none";
sparkle.style.fontSize = "14px";
sparkle.style.opacity = "0.8";
headerbtn.appendChild(sparkle);

// Inject twinkle keyframes
const styleTag = document.createElement("style");
styleTag.textContent = `
  @keyframes twinkle {
    0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
    50% { transform: scale(1.4) rotate(15deg); opacity: 1; }
  }
`;
document.head.appendChild(styleTag);


headerbtn.addEventListener("click", launchFastLookup, false);
$(".navbar_ui_actions").prepend(headerbtn);


// === Initialization Calls ===
GeniusSearch();


// === Pre-fill selected assignment group on case form ===
// if (window.location.href.indexOf("sn_customerservice_case") > -1) {
//   $('#selected_cs_group').val(document.getElementById('sys_display.sn_customerservice_case.assignment_group').value);
// }

var selectedGroup = document.getElementById('sys_display.sn_customerservice_case.assignment_group')?.value || "";





// // === Ctrl+M triggers renderForm ===
// $(document).on('keydown', async function(event) {
//   if (event.ctrlKey && event.which == "77") {
//     var result = await renderForm();
//     if (result !== false) {
//       modal.style.display = "block";
//     }
//   }
// });

// // === Ctrl+K triggers getInputs ===
// $(document).on('keydown', async function(event) {
//   if (event.ctrlKey && event.which == "75") {
//     await getInputs();
//   }
// });

