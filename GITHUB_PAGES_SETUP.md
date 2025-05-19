# Setting Up GitHub Pages for Your AI Presentation

Follow these steps to host your AI presentation on GitHub Pages:

## 1. Create a GitHub Repository

If you haven't already:

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository `AIPresentation`
4. Make it public
5. Click "Create repository"

## 2. Push Your Code to GitHub

In your local repository directory, run the following commands:

```bash
# Initialize git repository (if not already done)
git init

# Add all files to git
git add .

# Commit the files
git commit -m "Initial commit of AI presentation"

# Add the remote repository
git remote add origin https://github.com/YourUsername/AIPresentation.git

# Push to GitHub
git push -u origin main
```

Replace `YourUsername` with your actual GitHub username.

## 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select "main" branch
5. Click "Save"

## 4. Access Your Presentation

After a few minutes, your presentation will be available at:
`https://YourUsername.github.io/AIPresentation/`

Replace `YourUsername` with your actual GitHub username.

## 5. Updating Your Presentation

Whenever you make changes to your presentation:

1. Commit your changes locally:
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

2. Push to GitHub:
   ```bash
   git push
   ```

Your GitHub Pages site will automatically update with the new content.

## Troubleshooting

- If your presentation doesn't appear, check that GitHub Pages is enabled correctly
- Ensure all file paths in your HTML are relative, not absolute
- Check the GitHub Pages section in Settings for any error messages
