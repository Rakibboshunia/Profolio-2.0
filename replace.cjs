const fs = require('fs');
const files = ['d:/Boshu/Rakib.dev/src/sections/About.jsx', 'd:/Boshu/Rakib.dev/src/pages/AboutPage.jsx'];

const replacement = `  const codeLines = [
    [
      { text: "const ", cls: "text-blue-400 font-bold" },
      { text: "developer", cls: "text-white" },
      { text: " = {", cls: "text-gray-400" },
    ],
    [
      { text: "  name", cls: "text-[#79b8ff]" },
      { text: ": ", cls: "text-gray-400" },
      { text: "'Md. Al Rakeb Rasel Boshunia'", cls: "text-[#9ecbff]" },
      { text: ",", cls: "text-gray-400" },
    ],
    [
      { text: "  role", cls: "text-[#79b8ff]" },
      { text: ": ", cls: "text-gray-400" },
      { text: "'Full Stack Developer'", cls: "text-[#9ecbff]" },
      { text: ",", cls: "text-gray-400" },
    ],
    [
      { text: "  languages", cls: "text-[#79b8ff]" },
      { text: ": ", cls: "text-gray-400" },
      { text: "['C', 'C++', 'JavaScript', 'TypeScript']", cls: "text-[#f97583]" },
      { text: ",", cls: "text-gray-400" },
    ],
    [
      { text: "  frontend", cls: "text-[#79b8ff]" },
      { text: ": ", cls: "text-gray-400" },
      { text: "['React.js', 'Next.js', 'Tailwind', 'Bootstrap']", cls: "text-[#f97583]" },
      { text: ",", cls: "text-gray-400" },
    ],
    [
      { text: "  reactEco", cls: "text-[#79b8ff]" },
      { text: ": ", cls: "text-gray-400" },
      { text: "['Hooks', 'Context API', 'TanStack']", cls: "text-[#f97583]" },
      { text: ",", cls: "text-gray-400" },
    ],
    [
      { text: "  backend", cls: "text-[#79b8ff]" },
      { text: ": ", cls: "text-gray-400" },
      { text: "['Node.js', 'Express.js', 'REST API', 'JWT']", cls: "text-[#f97583]" },
      { text: ",", cls: "text-gray-400" },
    ],
    [
      { text: "  databases", cls: "text-[#79b8ff]" },
      { text: ": ", cls: "text-gray-400" },
      { text: "['MongoDB', 'MySQL', 'Prisma']", cls: "text-[#f97583]" },
      { text: ",", cls: "text-gray-400" },
    ],
    [
      { text: "  api", cls: "text-[#79b8ff]" },
      { text: ": ", cls: "text-gray-400" },
      { text: "['Axios', 'Fetch API', 'JSON Handling']", cls: "text-[#f97583]" },
      { text: ",", cls: "text-gray-400" },
    ],
    [
      { text: "  devTools", cls: "text-[#79b8ff]" },
      { text: ": ", cls: "text-gray-400" },
      { text: "['Git', 'GitHub', 'VS Code', 'NPM', 'Postman', 'Vercel', 'Figma']", cls: "text-[#f97583]" },
      { text: ",", cls: "text-gray-400" },
    ],
    [
      { text: "  aiTools", cls: "text-[#79b8ff]" },
      { text: ": ", cls: "text-gray-400" },
      { text: "['Cursor AI', 'Claude Code', 'ChatGPT', 'Antigravity', 'GitHub Copilot', 'DeepSeek', 'Grok']", cls: "text-[#f97583]" },
      { text: ",", cls: "text-gray-400" },
    ],
    [
      { text: "  experience", cls: "text-[#79b8ff]" },
      { text: ": ", cls: "text-gray-400" },
      { text: "'1.5+ Years'", cls: "text-[#9ecbff]" },
      { text: ",", cls: "text-gray-400" },
    ],
    [
      { text: "  education", cls: "text-[#79b8ff]" },
      { text: ": ", cls: "text-gray-400" },
      { text: "'B.Sc in CSE'", cls: "text-[#9ecbff]" },
      { text: ",", cls: "text-gray-400" },
    ],
    [
      { text: "  open", cls: "text-[#79b8ff]" },
      { text: ": ", cls: "text-gray-400" },
      { text: "true", cls: "text-[#79b8ff] font-bold" },
      { text: ",", cls: "text-gray-400" },
    ],
    [
      { text: "};", cls: "text-gray-400" },
    ],
    [],
    [
      { text: "developer", cls: "text-white" },
      { text: ".", cls: "text-gray-400" },
      { text: "buildSomethingGreat", cls: "text-[#b392f0]" },
      { text: "();", cls: "text-gray-400" },
    ],
  ];`;

for (let file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const startIdx = content.indexOf('  const codeLines = [');
  const endMarker = '  ];';
  const endIdx = content.indexOf(endMarker, startIdx);
  if (startIdx !== -1 && endIdx !== -1) {
    content = content.substring(0, startIdx) + replacement + content.substring(endIdx + endMarker.length);
  }
  
  content = content.replace(/aspect-\[4\/5\]/g, 'min-h-[500px] h-auto lg:h-[650px]');
  
  fs.writeFileSync(file, content, 'utf8');
}
