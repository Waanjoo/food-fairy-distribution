import mongoose from 'mongoose';

const donationCenterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  coordinates: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
  },
  operatingHours: { type: String, required: true },
  contactNumber: { type: String, required: true },
  capacity: { type: Number, required: true },
  currentStock: { type: Number, default: 0 }
});

export const DonationCenter = mongoose.model('DonationCenter', donationCenterSchema);