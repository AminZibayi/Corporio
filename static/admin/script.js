// In the Name of God, the Creative, the Originator

var env = {
  siteId: "oir-1rlfsaocyg",
  local: false,
};

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

var uuid = uuidv4();
var script = document.createElement("script");
script.src = "https://app.forestry.io/admin/forestry.min.js?hash=" + uuid;
script.id = "forestry-admin";
document.body.appendChild(script);

var link = document.createElement("link");
link.type = "text/css";
link.rel = "stylesheet";
link.href = "https://app.forestry.io/admin/main.css?hash=" + uuid;
document.head.appendChild(link);
