document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const size = document.getElementById("fontsize").value;
  const color = document.getElementById("fontcolor").value;

  // Apply CSS variables
  document.documentElement.style.setProperty("--fontsize", `${size}px`);
  document.documentElement.style.setProperty("--fontcolor", color);

  // Set cookies (valid for 7 days)
  document.cookie = `fontsize=${size};`;// max-age=${7 * 24 * 60 * 60}; path=/`;
  document.cookie = `fontcolor=${encodeURIComponent(color)};`;// max-age=${7 * 24 * 60 * 60}; path=/`;
});

// Apply saved preferences on page load
window.onload = () => {
  const fontsize = getCookie("fontsize") || 16;
  const fontcolor = getCookie("fontcolor") || "#000000";

  document.getElementById("fontsize").value = fontsize;
  document.getElementById("fontcolor").value = fontcolor;

  document.documentElement.style.setProperty("--fontsize", `${fontsize}px`);
  document.documentElement.style.setProperty("--fontcolor", fontcolor);
};

// Helper function to get cookie value
function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}
