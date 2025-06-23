# Microsoft ToDo Clone - Task Organizer

A modern web application for organizing tasks with an interface similar to Microsoft ToDo, built with vanilla JavaScript and ES6 modules.

## 🚀 Features

- ✅ Task management by lists/categories
- ✅ Modern responsive interface
- ✅ Data persistence in localStorage
- ✅ Category filtering (My Day, Personal, Work, etc.)
- ✅ Mark tasks as completed
- ✅ Task deletion
- ✅ Collapsible sidebar on mobile

## 📁 Project Structure
```
Microsoft-ToDo-Clone/ 
├── index.html # Main page 
├── styles.css # CSS styles 
├── js/ 
│    ├── app.js # Application entry point 
│    ├── events.js # Event handling and interaction logic 
│    ├── storage.js # localStorage functions and utilities
│    └── ui.js # DOM rendering and manipulation functions 
└── README.md # Documentation

```

## 🔧 Modular Architecture

### `app.js` - Entry Point
- Imports and initializes the application
- Waits for DOM to be ready before executing

### `events.js` - Event Logic
- Handles all application state
- Sets up all event listeners
- Coordinates user interactions

### `storage.js` - Data Persistence
- Functions for saving/loading tasks from localStorage
- Date formatting utilities
- Configuration constants

### `ui.js` - User Interface
- Functions for rendering tasks to DOM
- Interface elements updates
- Visual state manipulation

## 🎯 Functionalities

### Task Management
- **Add tasks**: Form with text input and list selector
- **Complete tasks**: Checkbox to mark as completed
- **Delete tasks**: Delete button on each task
- **Filter by list**: Sidebar and selector to switch between categories

### Interface
- **Sidebar**: Navigation between lists with icons
- **Responsive**: Hamburger menu on mobile devices
- **Completed tasks**: Collapsible section to view finished tasks
- **Current date**: Shows today's date in English format

### Persistence
- **localStorage**: Tasks are automatically saved
- **List state**: Remembers last selected list
- **Task data**: ID, text, status, creation date, and list

## 🚀 How to Use

1. Open `index.html` in your browser or use a local server like Live Server
2. The application will load automatically
3. Use the bottom form to add new tasks
4. Select a list from the sidebar or selector
5. Mark tasks as completed or delete them as needed

## 🛠️ Technologies

- **HTML5**: Semantic structure
- **CSS3**: Modern styles with flexbox and grid
- **JavaScript ES6+**: Modules, arrow functions, destructuring
- **Font Awesome**: Interface icons
- **localStorage**: Client-side data persistence

## 📱 Compatibility

- Modern browsers with ES6 modules support
- Responsive design for mobile, tablets, and desktop
- Works offline (except for Font Awesome icons)

## 🔄 Data Flow

1. **Initialization**: `app.js` → `events.js` → load data → render UI
2. **Add task**: User → `events.js` → `storage.js` → `ui.js`
3. **Complete/Delete**: User → `events.js` → `storage.js` → `ui.js`
4. **Change list**: User → `events.js` → `ui.js`

This modular architecture makes the code maintainable, scalable, and easy to understand.

## 📄 License

This project is under the MIT License. See the `LICENSE` file for more details.

### Attributions
- Font Awesome - For icons
- Microsoft To Do - For design inspiration
