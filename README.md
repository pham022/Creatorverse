# WEB103 Prework - Creatorverse

Submitted by: **Anh Pham**

About this web app: **Creatorverse is a full-stack content creator management application that allows users to view, add, edit, and delete content creators. Built with React, React Router, and Supabase, it features a responsive card-based design with a beautiful color system and smooth animations.**

Time spent: **25** hours

## Required Features

The following **required** functionality is completed:

- [x] **A logical component structure in React is used to create the frontend of the app**
  - Components: ShowCreators, ViewCreator, AddCreator, EditCreator, Card
  - Proper separation of concerns with pages and components directories
  - Reusable Card component for displaying creator information
  
- [x] **At least five content creators are displayed on the homepage of the app**
  - Creators fetched from Supabase database
  - Displayed in a responsive grid layout
  - Shows "Let's create the first creator!" when database is empty
  
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
  - Card displays: name, description (limited to 2 lines), "Visit Channel" link
  - Image shown when available with gradient placeholder
  - All information clearly visible and organized
  
- [x] **API calls use the async/await design pattern via Axios or fetch()**
  - All Supabase queries use async/await
  - Examples: fetchCreators(), fetchCreator(), handleSubmit()
  - Proper error handling with try/catch blocks
  
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
  - ViewCreator page shows full creator details
  - Large image display
  - Complete description
  - Clickable "Visit Channel" link
  
- [x] **Each content creator has their own unique URL**
  - Route: `/creator/:id`
  - Uses React Router useParams() to get ID from URL
  - Different for each creator
  
- [x] **The user can edit a content creator to change their name, url, or description**
  - EditCreator page with pre-filled form
  - All fields editable: name, description, url, imageURL
  - Supabase UPDATE query saves changes
  - Success message and redirect to home
  
- [x] **The user can delete a content creator**
  - Delete button on each card
  - Confirmation dialog before deletion
  - Supabase DELETE query removes from database
  - Card immediately removed from grid
  
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**
  - AddCreator form page with all fields
  - Name is required, others are optional
  - Supabase INSERT query adds to database
  - New creator appears on grid immediately

## Optional Features

The following **optional** features are implemented:

- [x] ~~Picocss is used to style HTML elements~~ Custom CSS provides better control and more professional design
- [x] **The content creator items are displayed in a creative format, like cards instead of a list**
  - Beautiful card design with rounded corners
  - Responsive CSS Grid layout (auto-fill columns)
  - Hover effects that lift the card
  - Professional spacing and shadows
  
- [x] **An image of each content creator is shown on their content creator card**
  - 220px tall image container
  - Gradient placeholder for missing images
  - Zoom effect on card hover
  - Smooth transitions

## Additional Features Implemented

* [x] **Professional Color System** - 4-color palette (Cream, Turquoise, Coral, Yellow) with 25% distribution
* [x] **React Router Integration** - Full page routing with useParams and useNavigate hooks
* [x] **Loading States** - Shows "Loading..." while fetching data
* [x] **Error Handling** - Displays error messages when API calls fail
* [x] **Form Validation** - Requires creator name, validates URLs
* [x] **Responsive Design** - Works on mobile, tablet, and desktop
* [x] **Smooth Animations** - Hover effects, transitions, and transformations
* [x] **Accessibility** - ARIA labels, semantic HTML, focus states
* [x] **Success Feedback** - Alert messages on successful actions
* [x] **Confirmation Dialogs** - Prevents accidental deletion
* [x] **Styled Buttons** - Color-coded: Turquoise (View), Yellow (Edit), Coral (Delete)
* [x] **Visit Channel Link** - External links with animated arrow icon
* [x] **Image Zoom on Hover** - Interactive image preview effect
* [x] **Card Border Styling** - Turquoise border that changes to Coral on hover
* [x] **Professional Header** - Gradient header with CREATORVERSE title and action buttons
* [x] **Statistics Dashboard Ready** - Structure supports adding creator statistics
* [x] **Search/Filter Ready** - Component structure supports future search functionality
* [x] **Dark Mode Ready** - CSS variables allow easy dark mode implementation

## Technical Stack

**Frontend:**
- React.js (Functional components with hooks)
- React Router v6 (useParams, useNavigate)
- CSS3 (Gradients, flexbox, grid, animations)
- JavaScript ES6+ (async/await, destructuring)

**Backend:**
- Supabase (PostgreSQL database)
- Supabase JavaScript client library

**Dev Tools:**
- Vite (Fast build tool)
- Git (Version control)
- GitHub (Repository hosting)

## Database Schema

```sql
CREATE TABLE creators (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  description TEXT,
  url TEXT,
  imageURL TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

## Project Structure

```
src/
├── client.js              # Supabase configuration
├── App.jsx               # Main app with routes
├── App.css               # Global styles
├── components/
│   ├── Card.jsx          # Creator card component
│   └── Card.css          # Card styling
└── pages/
    ├── ShowCreators.jsx  # Homepage with creator grid
    ├── ShowCreators.css
    ├── ViewCreator.jsx   # Single creator details
    ├── ViewCreator.css
    ├── AddCreator.jsx    # Add new creator form
    ├── EditCreator.jsx   # Edit creator form
    └── CreatorForm.css   # Form styling
```

## Routes

- `/` - ShowCreators (homepage with grid of all creators)
- `/creator/:id` - ViewCreator (single creator details page)
- `/add` - AddCreator (form to add new creator)
- `/edit/:id` - EditCreator (form to edit creator)

## Key Features Breakdown

### CRUD Operations
- **Create** - Add new creators via form
- **Read** - View all creators on grid, single creator on detail page
- **Update** - Edit creator information via form
- **Delete** - Remove creators with confirmation

### User Experience
- Responsive design (mobile-first)
- Loading states while fetching
- Error messages for failed operations
- Success feedback for completed actions
- Smooth animations and transitions
- Accessible navigation and forms
- Beautiful gradient header
- Professional color scheme

### Code Quality
- Component-based architecture
- Proper state management with hooks
- Async/await for API calls
- Error handling throughout
- Clean, readable code
- Proper separation of concerns

## Video Walkthrough

Here's a walkthrough of implemented required features:

- Homepage with creator grid & clicking card to view details
<img width="400" height="225" alt="view-creator" src="https://github.com/user-attachments/assets/0697712e-7a8c-43d2-b0d7-4672f77f5c8f" />

- Adding a new creator
<img width="400" height="225" alt="create-creator" src="https://github.com/user-attachments/assets/3e6eb708-fd45-46c2-8db3-27732c355278" />

- Editing creator info
<img width="400" height="225" alt="edit-creator" src="https://github.com/user-attachments/assets/c37b1af4-f6cc-4b2c-bf62-0f184e51bf37" />

- Deleting a creator
<img width="400" height="225" alt="delete-creator" src="https://github.com/user-attachments/assets/60ea5bb4-6689-4e7c-8b46-27c09e0d39c2" />

- Responsive design on mobile
<img width="400" height="225" alt="mobile-view" src="https://github.com/user-attachments/assets/293c152b-9c75-4cf7-9b4b-85d0872e5bd3" />

Note: GIF created with **ScreenToGif** (Windows) or **Kap** (macOS)

## Challenges & Solutions

### Challenge 1: Button Spacing in Cards
**Problem:** Delete button text was wrapping to multiple lines, causing layout issues.
**Solution:** Reduced button font size (0.75rem), added line-height: 1.2, and used white-space: nowrap to keep buttons single-line.

### Challenge 2: Dynamic Creator ID in Routes
**Problem:** ViewCreator and EditCreator needed to get creator ID from URL.
**Solution:** Used React Router's useParams() hook to extract ID from URL path (/creator/:id).

### Challenge 3: Form Pre-filling in Edit Page
**Problem:** EditCreator needed to load current data into form fields.
**Solution:** Used useEffect to fetch creator data on component mount, then setFormData with the retrieved values.

### Challenge 4: Color System Consistency
**Problem:** Old color system (blue, orange, red) didn't align with design palette.
**Solution:** Created new 4-color system (Turquoise, Coral, Yellow, Cream) with CSS variables for easy maintenance.

### Challenge 5: Responsive Card Layout
**Problem:** Cards needed to adapt to different screen sizes without breaking.
**Solution:** Used CSS Grid with auto-fill: `grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))` for automatic responsive columns.

## Lessons Learned

1. **Component Reusability** - Card component is used throughout the app, reducing code duplication
2. **State Management** - Proper use of useState and useEffect for data fetching and updates
3. **Routing** - React Router enables smooth navigation without page reloads
4. **Database Design** - Supabase makes it easy to build full-stack apps with PostgreSQL
5. **CSS Grid** - Perfect for responsive card layouts
6. **Async/Await** - Cleaner than callbacks for asynchronous operations
7. **Error Handling** - Try/catch blocks prevent crashes and show helpful messages

## Future Enhancements

- Search/filter creators by name or description
- Favorites/bookmarks system
- Creator categories or tags
- Image upload to Supabase storage
- User authentication for personal creator lists

## Notes

This project was built as part of CodePath's WEB103 prework. It demonstrates full-stack development skills including:
- Frontend: React with modern hooks and routing
- Backend: Supabase PostgreSQL database
- Design: Responsive UI with professional styling
- Git: Version control and collaboration

All required features are fully implemented and tested. The app is fully functional and ready for use. Additional stretch features were added to demonstrate advanced capabilities.

## License

Copyright 2024 Anh Pham

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
