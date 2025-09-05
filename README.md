# CarbonMRV India

**CarbonMRV India** is a scalable, farmer-centric MRV (Monitoring, Reporting, and Verification) platform designed for agroforestry and rice-based carbon projects in India. It enables smallholder farmers to participate in carbon markets by combining mobile data collection, satellite remote sensing, and AI/ML-powered carbon calculations.

## Features

- **Farmer-Friendly Data Collection:** GPS/QR-coded plot registration, geotagged photos, voice-based inputs, offline-first mobile access.
- **Remote Sensing & GIS Integration:** Sentinel-1 SAR for rice flooding, Sentinel-2 optical imagery for canopy monitoring, optional drone imagery.
- **AI/ML Carbon Calculators:** Automated biomass, soil carbon, and methane emission estimation.
- **Automated MRV Reports:** Registry-ready reports in PDF/JSON compliant with Verra/Gold Standard protocols.
- **Role-Based Dashboards:** Separate dashboards for farmers, aggregators, verifiers, and buyers.
- **Secure Payments:** Direct UPI/bank payouts to farmers for carbon credits.

## Intended Users

- **Farmers/Smallholders:** Register plots, provide field data, and receive carbon credits.
- **Aggregators/Project Developers:** Manage farmer groups, aggregate data, and generate reports.
- **Verifiers/Auditors:** Audit field and satellite data, verify carbon credits.
- **Buyers/Financiers:** Access verified credits and invest in sustainable projects.

## Technology Stack

- **Frontend:** Next.js, TailwindCSS
- **Backend:** Python (FastAPI/Django), Node.js
- **Database:** PostgreSQL with PostGIS
- **Remote Sensing:** Sentinel-1 & Sentinel-2, optional drones
- **AI/ML:** Scikit-learn, XGBoost, PyTorch
- **Cloud Hosting:** Vercel (frontend), AWS/GCP (backend & data pipelines)
- **Payments:** UPI/Bank integration

## How It Works

1. **Data Collection:** Farmers register plots, capture geotagged photos, and submit voice inputs.
2. **Remote Sensing Integration:** Satellite and drone data are used to monitor vegetation and flooded areas.
3. **Carbon Calculations:** AI/ML models estimate biomass, soil carbon, and methane emissions.
4. **Verification & Reporting:** Automated registry-ready MRV reports are generated.
5. **Payouts:** Verified carbon credits are paid to farmers securely.

## Impact

- Enables **smallholders to access carbon finance**.
- Promotes **climate-smart agriculture** and sustainable land use.
- Reduces **MRV costs** and improves transparency.
- Scalable to **national and international smallholder landscapes**.

## License

MIT License

---

