# Loading Screen Information

## 🎬 How to See the Loading Animation

The loading screen appears **only once per browser session** for the best user experience. To see it:

### Method 1: Open in a New Tab/Window
1. Copy this URL: `http://localhost:3000`
2. Open a **new incognito/private window**
3. Paste and visit the URL

### Method 2: Clear Session Storage
1. Open browser DevTools (F12 or Cmd+Option+I)
2. Go to Console tab
3. Type: `sessionStorage.clear()` and press Enter
4. Reload the page (Cmd+R or Ctrl+R)

### Method 3: Close and Reopen Browser
1. Close all browser windows
2. Open browser again
3. Visit `http://localhost:3000`

## ✨ Loading Screen Features

The loading animation includes:

### 1. Terminal Header
- Classic Mac-style window controls (red, yellow, green dots)
- **"TANAY.AI"** in glowing green terminal text
- Version number and year display

### 2. Loading Messages (Sequential)
Messages appear one by one:
- `> boot tanay.ai`
- `> initializing system...`
- `> loading AI modules...`
- `> connecting to neural networks...`
- `> fetching portfolio data...`
- `> compiling experience...`
- `> rendering interface...`
- `> system online...`

### 3. Progress Bar
- Smooth animated progress from 0% to 100%
- Glowing green progress bar with percentage display
- Takes 4-5 seconds to complete

### 4. Visual Effects
- Blinking cursor animation
- Bouncing dots loading indicator
- ASCII art logo at the bottom
- Fade-in animations for messages

### 5. Terminal Aesthetic
- Dark background (#0a0a0a)
- Green accent colors (#00ff00)
- Monospace font (JetBrains Mono)
- Command-line style interface

## ⏱️ Duration
- **Total Time:** 4-5 seconds
- **Progress Speed:** Smooth, natural increment
- **Message Interval:** ~550ms per message

## 🎯 User Experience
- Shows only on **first visit** in a browser session
- Subsequent page loads skip the animation (instant load)
- Resets when you close the browser or clear session storage
- Professional, engaging first impression for recruiters

## 🎨 Design Philosophy
Inspired by terminal boot sequences and AI system initialization, the loading screen:
- Sets the tone as a developer/AI engineer portfolio
- Creates anticipation and engagement
- Demonstrates attention to detail
- Adds personality to the site
- Matches the overall terminal aesthetic

## 💡 Pro Tip
When showing your portfolio to recruiters:
1. Open it in a fresh incognito window first
2. This ensures they see the full loading experience
3. Makes a memorable first impression!

