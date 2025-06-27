import ghpages from "gh-pages";

const buildFolder = "dist/spa";
const customDomain = "digital-mafia.co.za";

ghpages.publish(
  buildFolder,
  {
    branch: "gh-pages",
    cname: customDomain,
  },
  (err) => {
    if (err) {
      console.error("Deploy failed:", err);
    } else {
      console.log("Deploy complete!");
    }
  },
);
