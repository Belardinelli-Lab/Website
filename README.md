# Brain Plasticity Laboratory Website

This is the official website for the Brain Plasticity Laboratory at CIMeC (Center for Mind/Brain Sciences), University of Trento.

## Team Members

- **Paolo Belardinelli** - Principal Investigator
- **Melissa Null** - PhD Candidate
- **Jacopo Schenetti** - Research Assistant
- **Chiara Giannina Leu** - Post-Doctoral Researcher
- **Elena Mongiardini** - Post-Doctoral Researcher
- **Martina Placeholder** - Intern

## Research Focus

Our laboratory focuses on understanding how brain responses to external stimuli are affected by ongoing brain states and developing optimal brain state-dependent, closed-loop real-time network stimulation techniques.

### Research Directions

1. **Non-invasive Real-Time Brain State Dependent Stimulation**
2. **Brain Plasticity Mechanisms with a Focus on Stroke**
3. **Anatomical and Functional Correlates of Aging**

## Website Features

- **Responsive Design**: Works on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Navigation**: Smooth scrolling and active section highlighting
- **Team Section**: Professional team member profiles
- **Research Overview**: Comprehensive research information
- **Collaborations**: Information about ongoing partnerships
- **Contact Information**: Easy access to lab contact details

## Technical Information

### Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with grid, flexbox, and animations
- **JavaScript**: Interactive functionality and smooth user experience
- **Font Awesome**: Professional iconography
- **Google Fonts**: Typography (Inter font family)

### File Structure

```
Website/
├── index.html              # Main HTML file
├── styles/
│   └── main.css            # Main stylesheet
├── scripts/
│   └── main.js             # JavaScript functionality
├── Pictures/
│   ├── Logos/
│   │   ├── CIMeC.webp      # CIMeC logo
│   │   └── Unitn.jpg       # University of Trento logo
│   └── Team members/
│       └── Paolo Belardinelli.jpeg  # Team member photos
└── README.md               # This file
```

## How to Run Locally

1. **Using Node.js (Recommended)**:
   ```bash
   cd "Website Directory"
   npx http-server -p 8080
   ```
   Then open http://localhost:8080 in your browser

2. **Using Python**:
   ```bash
   cd "Website Directory"
   python -m http.server 8080
   ```
   Then open http://localhost:8080 in your browser

3. **Using Live Server (VS Code)**:
   - Install the "Live Server" extension in VS Code
   - Right-click on index.html and select "Open with Live Server"

## Adding Team Member Photos

To add photos for team members who currently have placeholders:

1. Add the photo to the `Pictures/Team members/` folder
2. Update the HTML in the team section of `index.html`
3. Replace the placeholder div with an img tag:
   ```html
   <div class="member-photo">
       <img src="Pictures/Team members/[MemberName].jpg" alt="[Member Name]">
   </div>
   ```

## Customization

### Colors
The main color scheme can be adjusted in `styles/main.css`:
- Primary: #3498db (blue)
- Secondary: #2c3e50 (dark blue-gray)
- Accent: #667eea to #764ba2 (gradient)

### Fonts
Currently using Inter font family. To change fonts, update the Google Fonts import in the HTML head section.

### Content Updates
- Research information: Update the content in the relevant sections of `index.html`
- Publications: The publications section currently links to the external university database
- Contact information: Update the contact section with current details

## Future Enhancements

### Planned Features
1. **Dynamic Publications Loading**: Integration with university publication API
2. **News/Blog Section**: For laboratory updates and announcements
3. **Research Gallery**: Visual showcase of research activities
4. **Event Calendar**: Information about seminars and conferences
5. **Multi-language Support**: Italian language version
6. **Contact Form**: Direct contact functionality

### Technical Improvements
1. **SEO Optimization**: Meta tags, structured data
2. **Performance Optimization**: Image optimization, lazy loading
3. **Analytics Integration**: Google Analytics or similar
4. **Content Management**: Admin panel for easy content updates

## Contact

For website-related questions or updates, please contact:
- **Lab Contact**: Paolo.belardinelli@unitn.it
- **Lab Page**: https://www.cimec.unitn.it/node/1593

## License

This website is created for the Brain Plasticity Laboratory at CIMeC, University of Trento. All content is proprietary to the laboratory and university.

---

*Website developed November 2024*
