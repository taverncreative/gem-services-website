const fs = require('fs');

const path = '/Users/taverncreative030322/Library/Mobile Documents/com~apple~CloudDocs/TavernCreative iCloud/Clients/Business Customers/Business Sorted Kent/GEM Services/website/src/lib/data/guides.ts';

let content = fs.readFileSync(path, 'utf8');

function toSentenceCase(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Just modify JSON-like strings inside guides.ts if possible, or parse it using regex
// Since it's a TS array of objects: `export const guides = [...]`
// We can use regex to replace specific field values (title, intro, heading).

content = content.replace(/"title":\s*"([^"]+)"/g, (match, p1) => {
  return `"title": "${toSentenceCase(p1)}"`;
});

content = content.replace(/"heading":\s*"([^"]+)"/g, (match, p1) => {
  let sc = toSentenceCase(p1);
  return `"heading": "${sc}"`;
});

content = content.replace(/"intro":\s*"([^"]+)"/g, (match, p1) => {
    // We already replaced mass repetitive boilerplate, let's fix the Title Case inside the intro.
    // E.g., This guide provides helpful advice on solving How To Get Rid Of Rats In Your Garden issues...
    return `"intro": "${p1.replace(/solving\s(.*?)\sissues/i, (m, p2) => `solving ${toSentenceCase(p2)} issues`)}"`;
});

fs.writeFileSync(path, content);
console.log('Done modifying guides.ts');
