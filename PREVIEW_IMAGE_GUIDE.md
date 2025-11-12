# WhatsApp/Instagram Preview Setup

## ✅ Meta Tags Added
Open Graph tags ab Layout.jsx mein add ho gaye hain.

## 📸 Preview Image Required

**Important:** `public/preview.jpg` ko replace karo apni image se:

### Image Requirements:
- **Size:** 1200 x 630 pixels (minimum)
- **Format:** JPG or PNG
- **Content:** Apna logo, tagline, ya portfolio screenshot

### Quick Options:

1. **Canva se banao:**
   - Template: "Facebook Post" (1200x630)
   - Add: "AURA FARMERING" text + logo
   - Download as JPG

2. **Ya existing image use karo:**
   - Koi bhi portfolio screenshot
   - Resize to 1200x630

3. **Replace file:**
   ```
   public/preview.jpg ← Apni image yahan rakho
   ```

## 🚀 Deploy & Test

1. Deploy karo:
   ```bash
   vercel --prod
   ```

2. Test karo:
   - WhatsApp: https://debugger.openweb.dev
   - Facebook: https://developers.facebook.com/tools/debug/

3. WhatsApp mein link share karo - preview dikhega! ✅

## 📝 Note
Agar preview nahi dikha, toh:
- Cache clear karne ke liye debugger use karo
- 5-10 minutes wait karo
- Link dobara share karo
