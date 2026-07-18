export function expandQuery(query) {

    const q = query.toLowerCase();

    let expansion = "";

    // About / Introduction
    if (
        q.includes("yourself") ||
        q.includes("about") ||
        q.includes("who are you") ||
        q.includes("introduce")
    ) {
        expansion += `
about
introduction
background
basic information
education
career
experience
personality
goals
`;
    }

    // Skills
    if (
        q.includes("skill") ||
        q.includes("technology") ||
        q.includes("tech stack")
    ) {
        expansion += `
skills
languages
frameworks
backend
frontend
tools
technologies
`;
    }

    // Projects
    if (
        q.includes("project") ||
        q.includes("build") ||
        q.includes("portfolio")
    ) {
        expansion += `
projects
portfolio
applications
react
node
java
backend
frontend
`;
    }

    // Experience
    if (
        q.includes("experience") ||
        q.includes("work") ||
        q.includes("leadership")
    ) {
        expansion += `
experience
leadership
communities
clubs
internship
management
`;
    }

    // Education
    if (
        q.includes("education") ||
        q.includes("college") ||
        q.includes("university")
    ) {
        expansion += `
education
LPU
computer science
cgpa
degree
`;
    }

    // Return original query + extra keywords
    return `${query}\n\n${expansion}`.trim();
}