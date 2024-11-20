# RAI (Responsible AI) Website

This project is designed to build a website focused on Responsible AI.

## Forking the Repository

To contribute to this project, you can fork the repository:

1. **Fork the repository**: Click the "Fork" button at the top right corner of the repository page on GitHub: [RAI Repository](https://github.com/iSaacSigei/RAI.git).

2. **Clone your forked repository**:
   Open your terminal and run the following command, replacing `your-username` with your GitHub username:

   ```bash
   git clone git@github.com:your-username/RAI.git

In the project directory, you can run:
### `npm install`
### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes, and any lint errors will appear in the console.

### `npm run build`

Builds the app for production to the `build` folder.  
It bundles React in production mode and optimizes the build for better performance.

The build is minified, and the filenames include the hashes. Your app is ready for deployment!

### Learn More

To learn more about React, visit the official [React documentation](https://reactjs.org/).

## Project File Structure

```bash
src/
├───components/
│   ├───Admin/         # Admin-related components ------- For blog and events updates
│   └───Client/        # Client-side components
│       ├───About.js           # Gideon - About page
│       ├───Blog.js            # Duncan - Blog page
│       ├───Contact.js         # Gideon - Contact page
│       ├───Events.js          # Duncan - Events page
│       ├───Footer.js          # Duncan - Footer section for landing page
│       ├───Gallery.js         # Gitonga - Gallery section
│       ├───OurTeam.js         # Eyinda - Team page (for all team members including ambassadors)
│       ├───LandingPage/       # Landing page sections
│       │   ├───Courses.js         # Isaac - Courses section
│       │   ├───FirstPage.js       # Isaac - First page section
│       │   ├───JoinUs.js          # Duncan - Join Us section
│       │   ├───OurGallery.js      # Isaac - Gallery Page
│       │   ├───OurMission.js      # Gideon - Our Mission section
│       │   ├───OurPartners.js     # Gitonga - Our Partners section
│       │   ├───SecondPage.js      # Isaac - Second page section
│       │   ├───Team.js            # Gideon - Core-Team section
│       │   ├───Testimonials.js    # Felix - Testimonials section
│       ├───Navbar.js          # Isaac - Navbar component
│       ├───Resources.js       # Isaac - Resources page
│       ├───WhoWeServe.js      # Unassigned (formerly Services)
│       ├───CoursesPage.js     # Isaac - Courses Page
│       ├───CourseCard.js      # Isaac - Part of Courses Page
│       ├───RelatedCourses.js  # Component for related courses
│       ├───VideoModal.jsx     # Component for video modals
├───images/            # Folder for image assets
└───styles/            # Global and component-specific styles

```
## Color Codes
button background #227AFF, headers #212529, foote bg #173780