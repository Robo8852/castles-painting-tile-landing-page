# Encore App Setup for Castle's Custom Painting & Tile

## Quick Setup Steps

### 1. Create Encore Application (in Chris's Account)

Since Chris is already logged into Encore via Google (`castlespaintingandtile@gmail.com`), you can now create the application:

#### Option A: Via Encore Dashboard
1. Go to https://app.encore.dev
2. Click "New Application"
3. **Application Name**: `castle-paint-tile-backend`
4. **Repository**: Link to `castlespaintingandtile-cli/castle-paint-tile`
5. **Runtime**: Node.js
6. **Framework**: Select "Express/Custom"
7. **Environment Variables**: Configure (see below)

#### Option B: Via Command Line
```bash
# Navigate to backend directory
cd backend

# Login to Chris's Encore account (if not already)
encore login

# Create the app
encore app create castle-paint-tile-backend

# Link to GitHub repository
encore git link castlespaintingandtile-cli/castle-paint-tile
```

### 2. Environment Variables Configuration

In Encore Dashboard → Settings → Environment Variables:

**Production Environment:**
```
# Email Service
RESEND_API_KEY=your_resend_api_key_here
FROM_EMAIL=noreply@castlescustompainting.com
TO_EMAIL=Castlecpti@hotmail.com

# Database (handled by Encore)
DATABASE_URL=your_encore_database_url_here

# CORS (for frontend)
FRONTEND_URL=https://your-production-domain.com
```

**Development Environment:**
```
# For local testing
RESEND_API_KEY=your_resend_api_key_here
FROM_EMAIL=noreply@castlescustompainting.com
TO_EMAIL=Castlecpti@hotmail.com
FRONTEND_URL=http://localhost:5174
```

### 3. Database Setup

Encore will automatically create a PostgreSQL database. You can:
1. View database in Encore Dashboard → Database
2. Run migrations automatically on deploy
3. Access database via Encore CLI: `encore db shell`

### 4. Deployment Process

#### Initial Deployment:
```bash
# Deploy backend to Encore
cd backend
encore deploy --env production
```

#### What Gets Deployed:
- ✅ Contact form API endpoints
- ✅ Email service integration
- ✅ Database schema and migrations
- ✅ Frontend static files
- ✅ API running on Encore's infrastructure

### 5. API Endpoints

After deployment, your API will be available at:
```
Production URL: https://castle-paint-tile-backend.encr.app
Contact Submit: POST /contact/submit
Contact List:   GET  /contact/list
```

### 6. Frontend Integration

Update frontend to use production API:
```javascript
// In frontend components, update API URL
const API_URL = 'https://castle-paint-tile-backend.encr.app';
```

### 7. Testing Checklist

Before and after deployment, test:

**✅ Contact Form Flow:**
1. User submits form on frontend
2. Frontend sends POST to `/contact/submit`
3. Backend saves to database
4. Backend sends email to Castlecpti@hotmail.com
5. Admin dashboard can retrieve submissions

**✅ Admin Dashboard Flow:**
1. Login with password: castle2025
2. Fetch contacts from `/contact/list`
3. Display submissions in admin panel

### 8. Custom Domain (Optional)

For production, you can set up custom domain:

**In Encore Dashboard:**
1. Go to Settings → Custom Domains
2. Add domain: `api.castlescustompainting.com`
3. Update DNS records (provided by Encore)
4. Update frontend API calls to use custom domain

### 9. Monitoring and Logs

**Monitor via Encore Dashboard:**
- API response times and errors
- Database performance
- Email delivery status
- Usage metrics and billing

**View Logs:**
```bash
# View recent logs
encore logs --env production

# Stream logs in real-time
encore logs --env production --follow
```

### 10. Billing Setup

**Chris needs to:**
1. Add credit card to Encore account
2. Set billing alerts
3. Choose plan (Free tier initially)

**Expected Costs:**
- Free tier: 1M requests/month, 1GB data transfer
- Paid tier: Based on actual usage
- Typical small business: $0-50/month

---

## Troubleshooting

### Common Issues:

**1. "Failed to deploy" errors**
- Check environment variables are set correctly
- Verify repository connection
- Check Encore service files are valid

**2. "Database connection failed"**
- Wait 1-2 minutes after first deploy
- Check DATABASE_URL environment variable
- Verify database is created in Encore dashboard

**3. "Email not sending"**
- Verify RESEND_API_KEY is valid
- Check TO_EMAIL is verified in Resend
- Check email logs in Encore dashboard

**4. "CORS errors"**
- Verify FRONTEND_URL environment variable
- Check frontend API calls use correct URL
- Ensure HTTPS in production

### Emergency Rollback:
```bash
# Rollback to previous deployment
encore rollback --env production
```

---

## Next Steps After Setup

1. **Test full contact form flow**
2. **Verify email notifications work**
3. **Test admin dashboard functionality**
4. **Set up monitoring alerts**
5. **Document final URLs for client**
6. **Handover documentation completion**

---

*This setup will give Chris a fully functional backend server hosted on Encore, integrated with his existing account and ready for production use.*