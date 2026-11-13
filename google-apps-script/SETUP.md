# USA leads → "Website Leads" Google Sheet + email

The USA page sends each enquiry to the site's own `/api/enquiry` function
(`netlify/functions/enquiry.mjs`). That function adds the USA token and forwards the lead to the
shared Tutee Connect Apps Script (`Code.gs`), which writes it to the **USA Leads** tab and emails it
to business@tuteeconnect.com. The Apps Script URL and token never reach the browser.

If the function is not configured yet (or fails), the form falls back to the Web3Forms email, so no
enquiry is lost.

## One-time setup

1. **Apps Script** (the existing project that already serves the other countries):
   paste in this `Code.gs` (it only adds the USA to the country list), then **Deploy → Manage
   deployments → Edit → New version** so the live Web app runs the new code. The /exec URL stays the same.
2. Make a new long random value (30+ letters and numbers). Paste it into `setUSAToken()`, run that
   function once, then delete the value from the code again. Run `checkTokens()`: it should say
   `USA: own token (LEADS_TOKEN_USA)`.
3. Optional: run `setupUSALeads()` to create the formatted tab now (it is also created with the first lead),
   and `testUSALead()` to add one sample row and email (delete the row afterwards).
4. **Netlify** → the USA site → Site configuration → Environment variables:
   - `APPS_SCRIPT_URL` = the Web app URL ending in `/exec`
   - `APPS_SCRIPT_TOKEN` = the same value you saved with `setUSAToken()`

   Then redeploy the site.
5. Submit the form on the live site once. A row appears in **USA Leads** and an email arrives.

The USA never accepts the shared `LEADS_TOKEN`: until step 2 is done, USA leads are refused by the
sheet and go by the Web3Forms email instead.

## What lands in the sheet

| Column | From the USA form |
|---|---|
| Full Name, Phone Number, Email, State | the form fields |
| Shortlisted Universities | the "Universities" dropdown (shortlist) |
| Course, Preferred Call Time | the form fields |
| Lead Source | `USA Landing Page – <which form>` (counselling card, quick callback, University Atlas shortlist) |
| Note on the Full Name cell | the eligibility-check answers (study level, field, intake), when the visitor took it |
