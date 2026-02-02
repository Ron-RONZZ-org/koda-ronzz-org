# koda-ronzz-org

Ghost blog repository for read.ronzz.org

## Features

### Markmap Button

The ease theme supports adding a markmap visualization link to individual posts.

**How to use:**

1. In Ghost Admin, edit a post
2. Go to the post settings (gear icon)
3. Add a custom field:
   - Field name: `markmap_url`
   - Value: URL to your markmap visualization
4. Save and publish

The markmap button will automatically appear in the post header when `markmap_url` is set.

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

