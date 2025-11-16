# Encore App Setup - Command Reference

## Quick Setup Commands

### 1. Navigate to Backend Directory
```bash
cd /home/leo-kings/Current\ Projects/castles-painting-tile-landing-page/backend
```

### 2. Login to Chris's Encore Account
```bash
# This should open browser for authentication
encore login

# Verify you're logged in as Chris
encore whoami
```

### 3. Create the Encore Application
```bash
# Create new app in Chris's account
encore app create castle-paint-tile-backend

# Choose the following when prompted:
# - Repository: castle-paint-tile
# - Owner: castlespaintingandtile-cli
# - Runtime: Node.js
# - Framework: Express/Custom
```

### 4. Link to GitHub Repository
```bash
# Link the local repo to Chris's GitHub
encore git link castlespaintingandtile-cli/castle-paint-tile

# Verify the link
encore git status
```

### 5. Set Up Environment Variables
```bash
# Set development environment variables
encore env set RESEND_API_KEY=your_resend_api_key_here --env dev
encore env set FROM_EMAIL=noreply@castlescustompainting.com --env dev
encore env set TO_EMAIL=Castlecpti@hotmail.com --env dev
encore env set FRONTEND_URL=http://localhost:5174 --env dev

# Set production environment variables
encore env set RESEND_API_KEY=your_resend_api_key_here --env prod
encore env set FROM_EMAIL=noreply@castlescustompainting.com --env prod
encore env set TO_EMAIL=Castlecpti@hotmail.com --env prod
encore env set FRONTEND_URL=https://your-production-domain.com --env prod
```

### 6. Test Locally (Optional)
```bash
# Run backend locally for testing
encore run --port=4000

# Test the API endpoints
curl http://localhost:4000/contact/list
curl -X POST http://localhost:4000/contact/submit \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","phone":"555-0123","email":"test@example.com","projectType":"interior-painting","message":"Test message"}'
```

### 7. Deploy to Production
```bash
# Deploy to Encore Cloud
encore deploy --env prod

# This will output the production URL like:
# https://castle-paint-tile-backend.encr.app
```

### 8. Verify Deployment
```bash
# Check deployment status
encore deploy status --env prod

# View production logs
encore logs --env prod

# Test production API
curl https://castle-paint-tile-backend.encr.app/contact/list
```

## Database Setup

### Database Schema (Already Created)
The backend includes this database schema:

```sql
CREATE TABLE contact_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  project_type VARCHAR(100) NOT NULL,
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Database Access
```bash
# Access database shell (useful for debugging)
encore db shell castle-paint-tile-backend

# View contact submissions
SELECT * FROM contact_submissions ORDER BY created_at DESC LIMIT 10;
```

## Frontend Integration Updates

### Update Frontend API URL
After deployment, update the frontend to use the production API:

```typescript
// In frontend/src/api/config.ts or similar
const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://castle-paint-tile-backend.encr.app'
  : 'http://localhost:4000';

export const API_ENDPOINTS = {
  submitContact: `${API_BASE_URL}/contact/submit`,
  getContacts: `${API_BASE_URL}/contact/list`,
};
```

## Monitoring and Debugging

### View Application Logs
```bash
# Stream logs in real-time
encore logs --env prod --follow

# View recent logs
encore logs --env prod --tail=50

# Filter by error level
encore logs --env prod --level=error
```

### Check Application Health
```bash
# Check app status
encore app status

# View metrics
encore metrics --env prod
```

## Common Troubleshooting Commands

### Reset Deployment
```bash
# Redeploy (useful if something goes wrong)
encore deploy --env prod --force

# Rollback to previous version
encore rollback --env prod
```

### Environment Variable Issues
```bash
# List all environment variables
encore env list --env prod

# Update a variable
encore env set RESEND_API_KEY=new_key --env prod

# Remove a variable
encore env unset OLD_VARIABLE --env prod
```

---

## Production Checklist

Before handing over to Chris, verify:

### ✅ Backend Functionality
- [ ] API endpoints respond correctly
- [ ] Database operations work
- [ ] Email notifications are sent
- [ ] Error handling works properly

### ✅ Integration Tests
- [ ] Contact form submits successfully
- [ ] Admin dashboard loads submissions
- [ ] Emails arrive at Castlecpti@hotmail.com
- [ ] Frontend connects to backend API

### ✅ Production Setup
- [ ] Custom domain configured (if desired)
- [ ] Billing alerts set up
- [ ] Monitoring enabled
- [ ] SSL certificates active

### ✅ Documentation
- [ ] Final API URLs documented
- [ ] Environment variables documented
- [ ] Emergency procedures documented
- [ ] Handover guide updated

---

## Expected URLs After Setup

**Production API:**
- Main API: `https://castle-paint-tile-backend.encr.app`
- Contact Submit: `https://castle-paint-tile-backend.encr.app/contact/submit`
- Contact List: `https://castle-paint-tile-backend.encr.app/contact/list`

**Development (Local):**
- Local API: `http://localhost:4000`
- Contact Submit: `http://localhost:4000/contact/submit`
- Contact List: `http://localhost:4000/contact/list`

---

*Once these commands are executed successfully, Chris will have a fully functional backend server running on port 4000 (via Encore's infrastructure) ready to handle contact form submissions and admin dashboard functionality.*