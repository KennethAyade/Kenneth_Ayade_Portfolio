import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function generateResumePDF() {
  console.log('🚀 Starting PDF generation...');
  
  try {
    const doc = new jsPDF();
    
    // Professional color scheme
    const primaryColor = [30, 64, 175]; // Dark blue
    const secondaryColor = [75, 85, 99]; // Gray
    
    // Layout constants
    const margins = { top: 20, left: 20, right: 20, bottom: 20 };
    const pageWidth = 210; // A4 width in mm
    const leftColumn = margins.left;
    const rightColumn = 115;
    const columnWidth = 90;
    
    let currentY = margins.top;
    
    // Header Section with professional styling
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(0, 0, pageWidth, 45, 'F');
    
    // Name in white on blue background
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(26);
    doc.setFont(undefined, 'bold');
    doc.text('KENNETH AYADE', leftColumn, currentY + 15);
    
    // Title
    doc.setFontSize(14);
    doc.setFont(undefined, 'normal');
    doc.text('Full-Stack Developer | App/Cloud Support Associate', leftColumn, currentY + 25);
    
    // Contact information in white
    doc.setFontSize(10);
    doc.text('Email: ayadekennethorland13@gmail.com', leftColumn, currentY + 35);
    doc.text('LinkedIn: linkedin.com/in/kenneth-ayade | Location: Cebu, Philippines', leftColumn, currentY + 42);
    
    // Reset text color to black for body content
    doc.setTextColor(0, 0, 0);
    currentY = 55;
    
    // Left Column
    let leftY = currentY;
    
    // Professional Summary with accent line
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('PROFESSIONAL SUMMARY', leftColumn, leftY);
    
    // Blue accent line under section title
    doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setLineWidth(0.5);
    doc.line(leftColumn, leftY + 2, leftColumn + 60, leftY + 2);
    
    leftY += 10;
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(9);
    doc.setFont(undefined, 'normal');
    
    const summaryText = 'Dedicated Full-Stack Developer and recent graduate from Cebu Institute of Technology University with comprehensive expertise in WordPress development, modern web technologies, and enterprise cloud solutions. Currently serving as App/Cloud Support Associate at Accenture, bringing enterprise-level experience to development projects.';
    const splitSummary = doc.splitTextToSize(summaryText, columnWidth);
    doc.text(splitSummary, leftColumn, leftY);
    leftY += splitSummary.length * 4 + 8;
    
    // Professional Experience
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('PROFESSIONAL EXPERIENCE', leftColumn, leftY);
    doc.line(leftColumn, leftY + 2, leftColumn + 60, leftY + 2);
    leftY += 10;
    
    // Job 1
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    doc.text('App/Cloud Support Associate', leftColumn, leftY);
    leftY += 5;
    
    doc.setFontSize(9);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
    doc.text('Accenture | 2024 - Present', leftColumn, leftY);
    leftY += 7;
    
    doc.setTextColor(0, 0, 0);
    const job1Points = [
      '• Supporting enterprise cloud infrastructure and applications',
      '• Troubleshooting and resolving complex technical issues',
      '• Maintaining 99.9% uptime for critical business systems'
    ];
    job1Points.forEach(point => {
      doc.text(point, leftColumn, leftY);
      leftY += 5;
    });
    leftY += 8;
    
    // Job 2
    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    doc.text('Team Leader & Junior Web Developer', leftColumn, leftY);
    leftY += 5;
    
    doc.setFontSize(9);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
    doc.text('Creative Solutions | 2023 - 2024', leftColumn, leftY);
    leftY += 7;
    
    doc.setTextColor(0, 0, 0);
    const job2Points = [
      '• Led development team for multiple WordPress projects',
      '• Developed custom themes and plugins for diverse clients',
      '• Implemented secure payment processing systems'
    ];
    job2Points.forEach(point => {
      doc.text(point, leftColumn, leftY);
      leftY += 5;
    });
    leftY += 8;
    
    // Education
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('EDUCATION', leftColumn, leftY);
    doc.line(leftColumn, leftY + 2, leftColumn + 60, leftY + 2);
    leftY += 10;
    
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    doc.text('Bachelor\'s Degree in Information Technology', leftColumn, leftY);
    leftY += 5;
    
    doc.setFontSize(9);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
    doc.text('Cebu Institute of Technology University (CIT-U) | 2024', leftColumn, leftY);
    
    // Right Column
    let rightY = currentY;
    
    // Featured Projects
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('FEATURED PROJECTS', rightColumn, rightY);
    doc.line(rightColumn, rightY + 2, rightColumn + 60, rightY + 2);
    rightY += 10;
    
    const projects = [
      {
        title: 'Blue Payment Systems',
        tech: 'WordPress • Custom PHP • Payment APIs',
        url: 'bluepaymentsystems.com',
        desc: 'Comprehensive fintech platform with 99.9% uptime'
      },
      {
        title: 'Global Marketing Network',
        tech: 'WordPress • Custom Themes • Analytics',
        url: 'globalmktgnetwork.com',
        desc: '40% increase in client engagement through optimization'
      },
      {
        title: 'Wearcon E-commerce',
        tech: 'WordPress • WooCommerce • Mobile-First',
        url: 'wearcon.com',
        desc: '98% mobile performance score, 35% conversion increase'
      }
    ];
    
    projects.forEach((project, index) => {
      // Project title
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(10);
      doc.setFont(undefined, 'bold');
      doc.text(project.title, rightColumn, rightY);
      rightY += 5;
      
      // Technology stack
      doc.setFontSize(8);
      doc.setFont(undefined, 'normal');
      doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      doc.text(project.tech, rightColumn, rightY);
      rightY += 4;
      
      // URL
      doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
      doc.text(project.url, rightColumn, rightY);
      rightY += 4;
      
      // Description
      doc.setTextColor(0, 0, 0);
      const descLines = doc.splitTextToSize(project.desc, columnWidth);
      doc.text(descLines, rightColumn, rightY);
      rightY += descLines.length * 4 + 8;
    });
    
    // Technical Skills
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('TECHNICAL SKILLS', rightColumn, rightY);
    doc.line(rightColumn, rightY + 2, rightColumn + 60, rightY + 2);
    rightY += 10;
    
    const skillCategories = [
      {
        title: 'Frontend Technologies',
        skills: ['React.js', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'Tailwind CSS']
      },
      {
        title: 'Backend Technologies',
        skills: ['Java Spring Boot', '.NET C#', 'Python', 'COBOL', 'REST APIs']
      },
      {
        title: 'WordPress Ecosystem',
        skills: ['Custom Themes', 'Plugin Development', 'WooCommerce', 'Payment APIs']
      }
    ];
    
    skillCategories.forEach(category => {
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(9);
      doc.setFont(undefined, 'bold');
      doc.text(category.title, rightColumn, rightY);
      rightY += 5;
      
      doc.setFontSize(8);
      doc.setFont(undefined, 'normal');
      doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
      const skillsText = category.skills.join(' • ');
      const skillLines = doc.splitTextToSize(skillsText, columnWidth);
      doc.text(skillLines, rightColumn, rightY);
      rightY += skillLines.length * 4 + 6;
    });
    
    // Key Achievements
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('KEY ACHIEVEMENTS', rightColumn, rightY);
    doc.line(rightColumn, rightY + 2, rightColumn + 60, rightY + 2);
    rightY += 10;
    
    const achievements = [
      '5+ successful WordPress projects delivered in 2024',
      '99.9% uptime maintained across all deployed applications',
      '40% increase in client engagement (Global Marketing)',
      '35% conversion rate improvement (Wearcon)',
      'Led cross-functional development teams effectively'
    ];
    
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(8);
    doc.setFont(undefined, 'normal');
    achievements.forEach(achievement => {
      doc.text(`• ${achievement}`, rightColumn, rightY);
      rightY += 4;
    });
    
    // Save PDF
    const pdfPath = path.join(__dirname, '../public/resume.pdf');
    const pdfBuffer = doc.output('arraybuffer');
    fs.writeFileSync(pdfPath, Buffer.from(pdfBuffer));
    
    console.log('✅ Professional PDF generated successfully!');
    console.log(`📄 Location: ${pdfPath}`);
    
    // Check file size
    const stats = fs.statSync(pdfPath);
    console.log(`📊 File size: ${(stats.size / 1024).toFixed(2)} KB`);
    
  } catch (error) {
    console.error('❌ Error generating PDF:', error);
    process.exit(1);
  }
}

// Run the function
generateResumePDF();