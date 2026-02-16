# Markmap Button Setup Guide

This guide explains how to add a markmap visualization link to your Ghost posts and pages.

## What is Markmap?

Markmap is a tool that visualizes markdown documents as interactive mind maps. This theme supports adding a link to your markmap visualization directly in the post or page header.

## Setup Instructions

### Step 1: Access Theme Settings

1. Log in to Ghost Admin
2. Navigate to **Settings** → **Design** → **Customize** (or click the **Customize** button)
3. This opens the theme settings panel

### Step 2: Set the Markmap URL

1. In the theme settings, find the **Markmap URL** field
2. Enter your markmap visualization URL (e.g., `https://markmap.example.com/my-visualization`)
3. To disable the button, simply leave this field blank

### Step 3: Save Changes

1. Click **Save** to apply your changes
2. The markmap button will now appear on all posts and pages (if a URL is provided)

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

1. Open theme settings (Settings → Design → Customize)
2. Find the **Markmap URL** field
3. Enter `https://markmap.example.com/my-visualization`
4. Save changes

The button will appear on all posts and pages.

## Troubleshooting

**Button doesn't appear:**
- Verify you've entered a URL in the theme settings
- Check that the URL is valid (must start with http:// or https://)
- Clear your browser cache and reload the page
- For pages: Make sure "Show title and feature image" is enabled in page settings

**Button appears but link is wrong:**
- Double-check the URL in theme settings
- Make sure there are no extra spaces or characters

## Technical Details

The markmap button implementation uses:
- A theme-level custom setting (`markmap_url`) configured in Settings → Design
- JavaScript to dynamically create the button from the data attribute
- CSS styling defined in `assets/css/blog/post.css`

The button appears on individual post and page templates when the `markmap_url` setting is provided.
