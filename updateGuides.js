const fs = require('fs');
const path = require('path');

const filePath = '/Users/taverncreative030322/Library/Mobile Documents/com~apple~CloudDocs/TavernCreative iCloud/Clients/Business Customers/Business Sorted Kent/GEM Services/website/src/lib/data/guides.ts';

let content = fs.readFileSync(filePath, 'utf8');

// Replace "This comprehensive SEO guide provides expert advice"
content = content.replace(/This comprehensive SEO guide provides expert advice/g, 'This guide provides helpful advice');

// Replace long block:
const targetQuote = 'Effective eradication requires professional methods tailored to the specific pest. We use a combination of advanced treatments, including commercial-grade baits, specialized dusting formulations, and powerful trapping systems designed for rapid response. For complex cases like deep structural nests or heavy commercial infestations, we apply specialized techniques to neutralize the colony safely without putting occupants or pets at risk. We also utilize tracking dusts to map exact travel routes, ensuring the core nest is targeted.';

const newText = 'We provide safe and effective pest treatments tailored to the specific problem. Whether you need an emergency wasp nest removal or reliable rodent control, we use proven methods to resolve the issue quickly. Our safe and discreet services prioritize safety for your family and pets while ensuring the problem is fully dealt with so you can get back to normal.';

content = content.split(targetQuote).join(newText);

fs.writeFileSync(filePath, content);
console.log('guides.ts updated successfully.');
