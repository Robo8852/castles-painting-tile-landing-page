# Castle's Custom Painting & Tile - Backend Handover Guide

## Quick Reference (For Chris)

### Important Websites - Save These Bookmarks
- **Admin Panel**: [Your Website URL Here]/admin
- **Encore Billing**: https://app.encore.dev (for paying hosting bills)
- **Email Service**: https://resend.com (for checking email usage)
- **GitHub Repository**: https://github.com/castlespaintingandtile-cli/castle-paint-tile

### Login Information
- **Admin Password**: castle2025
- **Encore/Resend**: Check your email for login details

### Who to Call for Help
- **Technical Issues**: Leo Reyes - 718-200-1368
- **Email Questions**: leoreyes@costadelsol.com
- **Billing Questions**: Call Leo first

### Monthly Costs
- **Hosting**: $0-20 (depending on website traffic)
- **Email Service**: $0 (free up to 3,000 emails/month)

---

## Detailed Handover Procedure

### Accounts Overview

#### 1. Encore.dev (Hosting & Database)
- **Purpose**: Keeps your website running 24/7
- **Account**: ✅ Already connected via your Google (castlespaintingandtile@gmail.com)
- **Cost**: Free during development, then usage-based (usually $0-20/month)
- **Billing**: Your credit card on file
- **What you need to do**: Pay monthly bill when you receive it

#### 2. Resend.com (Email Service)
- **Purpose**: Sends contact form emails to Castlecpti@hotmail.com
- **Cost**: Free for up to 3,000 emails per month
- **Billing**: Your credit card on file
- **What you need to do**: Monitor usage, upgrade if needed

### Admin Dashboard Functions

#### Viewing Contact Form Submissions
1. Go to [Your Website URL Here]/admin
2. Enter password: castle2025
3. View all customer inquiries
4. Click on any submission to see details

#### What Each Contact Form Shows
- Customer name, email, phone
- Service type they're interested in
- Message details
- Date and time received

#### Exporting Contacts (Optional)
1. View contacts in admin panel
2. Copy and paste data into Excel/CSV for your records
3. Includes name, phone, email, project type, and message

### Troubleshooting Guide

#### If Website is Down
1. First: Check if it's just your device - try your phone
2. If still down: Call Leo at 718-200-1368
3. Don't worry - all data is backed up

#### If Contact Form Isn't Working
1. Test it yourself with a dummy submission
2. Check if you receive the email
3. If not working: Call Leo at 718-200-1368

#### If You Can't Access Admin Panel
1. Double-check password: castle2025
2. Clear your browser cache
3. Try incognito/private mode
4. Call Leo at 718-200-1368 if still locked out

### Monthly Maintenance Tasks

#### What to Check Each Month
1. **Website is working**: Visit your homepage
2. **Contact form works**: Send a test submission
3. **Admin access**: Log in to admin panel
4. **Bills**: Pay any Encore/Resend invoices

#### What Developer Handles (If You Have Maintenance Package)
- Security updates
- Performance monitoring
- Backup management
- Technical issues

### Emergency Procedures

#### Website Completely Down
- **Step 1**: Don't panic - your data is safe
- **Step 2**: Call or text Leo at 718-200-1368 (business hours 9am-6pm, Mon-Fri)
- **Step 3**: Leo will respond within 4 business hours and fix within 24 business hours

#### Can't Access Important Accounts
- **Step 1**: Check your password manager
- **Step 2**: Try password reset
- **Step 3**: Call Leo at 718-200-1368 for help

#### Suspicious Activity
- **Step 1**: Call Leo at 718-200-1368 immediately
- **Step 2**: Leo will secure all accounts
- **Step 3**: Change all passwords

### Contact Information Sheet

**Primary Contact (Technical Issues):**
- Developer: Leo Reyes
- Phone: 718-200-1368
- Email: leoreyes@costadelsol.com
- Business Hours: 9am-6pm, Monday-Friday
- Response Time: Within 4 business hours

**Service Providers (For Billing Questions):**
- Encore Support: Through their website
- Resend Support: Through their website

### Security Best Practices

#### Password Safety
- Use a password manager (LastPass, 1Password)
- Enable two-factor authentication when available
- Never share passwords via email
- Change passwords every 6 months

#### Website Security
- Keep your login details private
- Report suspicious activity immediately
- Only developer should make technical changes

### Growth and Scaling

#### When to Upgrade Services
- Website traffic increases significantly
- Need to send more than 3,000 emails/month
- Want to add new features

#### Process for Changes
1. Discuss needs with developer
2. Get quote for additional work
3. Developer implements changes
4. Training on new features

---

## Developer Notes

### Technical Architecture
- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Encore.dev (Node.js + PostgreSQL)
- **Email**: Resend.com API
- **Database**: PostgreSQL (hosted on Encore)

### Deployment Information
- **Production URL**: [Encore deployment URL]
- **Repository**: [GitHub repository URL]
- **Domain**: [Domain registrar and management]

### Backup and Recovery
- **Database**: Daily automatic backups via Encore
- **Code**: Version controlled in GitHub
- **Recovery Time**: Typically 1-2 hours

### Monitoring and Alerts
- **Uptime**: Encore provides basic monitoring
- **Email Delivery**: Resend provides delivery reports
- **Custom Monitoring**: Available in maintenance package

---

*This document is designed for non-technical users. For technical details, refer to the technical documentation or contact the developer.*