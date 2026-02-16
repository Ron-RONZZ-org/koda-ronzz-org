# Markmap Button Setup Guide

This guide explains how to add a markmap visualization link to your Ghost posts and pages.

## What is Markmap?

Markmap is a tool that visualizes markdown documents as interactive mind maps. This theme supports adding a link to your markmap visualization directly in the post or page header.

## Setup Instructions

### Step 1: Edit Your Post or Page

1. Log in to Ghost Admin
2. Navigate to your post/page or create a new one
3. Click the settings icon (⚙️) in the top right corner

### Step 2: Add Custom Field

1. In the post/page settings panel, scroll down to find "Custom fields" section
2. Add a new custom field:
   - **Field name:** `markmap_url` (Ghost will make this available in templates as `custom_markmap_url`)
   - **Field value:** Your markmap visualization URL (e.g., `https://markmap.example.com/my-visualization`)

### Step 3: Save and Publish

1. Click "Save" to save your changes
2. Publish or update your post/page

The markmap button will automatically appear below the post/page title with multilingual text in Esperanto, French, and English.

## Button Text

The button displays:
```
Vidi ĉi tiun kiel markmapon
Visualiser ce contenu en markmap
View this content in markmap form
```

## Example

If your markmap is hosted at `https://markmap.example.com/my-visualization`:

1. Add a custom field with name `markmap_url`
2. Set the value to `https://markmap.example.com/my-visualization`
3. Save and publish

## Troubleshooting

**Button doesn't appear:**
- Verify the custom field name is exactly `markmap_url` (case-sensitive)
- Check that the field value has a valid URL (must start with http:// or https://)
- Clear your browser cache and reload the page
- Make sure "Show title and feature image" is enabled (for pages)

**Button appears but link is wrong:**
- Double-check the URL in the custom field value
- Make sure there are no extra spaces or characters

## Technical Details

The markmap button implementation uses:
- A custom field (`markmap_url`) for per-post/page configuration
- JavaScript to dynamically create the button from the data attribute
- CSS styling defined in `assets/css/blog/post.css`

The button appears on individual post and page templates when the `markmap_url` custom field is set.
