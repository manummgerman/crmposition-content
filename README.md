# README.md - CRMPosition Content Delivery System

This repository contains a YouTube subscription verification system for the CRMPosition channel. It allows subscribers to access exclusive CRM training materials.

## Features

- YouTube subscription verification
- Categorized content for Salesforce, Adobe, and Microsoft Dynamics
- Search functionality
- Mobile-responsive design
- Secure access control

## How It Works

1. Users visit the landing page
2. They verify their YouTube subscription status
3. Once verified, they gain access to exclusive training materials

## Setup Instructions

### 1. YouTube API Configuration

To enable YouTube subscription verification, you need to set up OAuth credentials:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select your existing project
3. Enable the YouTube Data API v3
4. Create OAuth 2.0 credentials
5. Set the authorized JavaScript origins to your GitHub Pages URL (https://yourusername.github.io)
6. Set the authorized redirect URI to your verification page (https://yourusername.github.io/crmposition-content/verify.html)
7. Update the CLIENT_ID and API_KEY in verify.html with your credentials
8. Update the CHANNEL_ID in verify.html with your YouTube channel ID

### 2. Adding Content

To add new training materials:

1. Create HTML or PDF documents
2. Place them in the documents folder
3. Update the documents array in content.html to include your new materials

## Customization

- Update styles.css to change the appearance
- Modify index.html to update the landing page content
- Edit verify.html to customize the verification process
- Adjust content.html to change how documents are displayed

## License

© 2025 CRMPosition. All rights reserved.
