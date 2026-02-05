# koda-ronzz-org

Ghost blog repository for kodo.ronzz.org

## Features

### Markmap Button

The ease theme supports adding a markmap visualization link to individual posts.

**How to use:**

1. In Ghost Admin, edit a post
2. Go to the post settings (gear icon)  
3. Click on "Code injection"
4. In the "Post Header" section, add:
   ```html
   <meta name="markmap-url" content="YOUR_MARKMAP_URL_HERE">
   ```
   Replace `YOUR_MARKMAP_URL_HERE` with the actual URL to your markmap visualization
5. Save and publish

The markmap button will automatically appear in the post header when the meta tag is present.

## Repository Structure

- `content/themes/ease/` - Active Ghost theme with markmap support
- `content/themes/dawn/` - Alternative theme
- `content/images/` - Uploaded images
- `content/settings/` - Ghost settings (routes, etc.)

## Development

This repository tracks only theme files and content. The following are excluded via `.gitignore`:
- Ghost installation files (`versions/`)
- Database files (`content/data/`)
- Log files (`content/logs/`)
- Generated assets (`content/public/`)
- Theme build artifacts (`*/assets/built/`)

