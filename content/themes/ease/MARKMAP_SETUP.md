# Markmap Button Setup Guide

This guide explains how to add a markmap visualization link to your Ghost posts.

## What is Markmap?

Markmap is a tool that visualizes markdown documents as interactive mind maps. This theme supports adding a link to your markmap visualization directly in the post header.

## Setup Instructions

### Step 1: Edit Your Post

1. Log in to Ghost Admin
2. Navigate to your post or create a new one
3. Click the settings icon (⚙️) in the top right corner

### Step 2: Add Code Injection

1. In the post settings panel, scroll down to find "Code injection"
2. Click on "Code injection" to expand the section
3. In the "Post Header" field, add the following HTML:

```html
<meta name="markmap-url" content="https://your-markmap-url.com">
```

Replace `https://your-markmap-url.com` with the actual URL of your markmap visualization.

### Step 3: Save and Publish

1. Click "Save" to save your changes
2. Publish or update your post

The markmap button will automatically appear below the post title and above the featured image with the text "Vidigi markmapon".

## Example

If your markmap is hosted at `https://markmap.example.com/my-visualization`, add this to the Post Header:

```html
<meta name="markmap-url" content="https://markmap.example.com/my-visualization">
```

## Troubleshooting

**Button doesn't appear:**
- Verify the meta tag is in the "Post Header" section (not Post Footer)
- Check that the meta tag name is exactly `markmap-url` (case-sensitive)
- Ensure the content attribute has a valid URL
- Clear your browser cache and reload the page

**Button appears but link is wrong:**
- Double-check the URL in the content attribute
- Make sure there are no extra spaces or characters

## Technical Details

The markmap button implementation uses:
- A meta tag in the post header for configuration
- JavaScript to dynamically create the button
- CSS styling defined in `assets/css/blog/post.css`

The button only appears on individual post pages, not on archive pages or the homepage.
