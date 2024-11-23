export interface User {
  id: string;
  email: string;
  role: 'donor' | 'beneficiary' | 'delivery' | 'admin';
  name: string;
  createdAt: string;
}

export interface DonationCenter {
  id: string;
  name: string;
  address: string;
  city: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  operatingHours: string;
  contactNumber: string;
  capacity: number;
  currentStock: number;
}

export interface Donation {
  id: string;
  donorId: string;
  centerId: string;
  items: {
    name: string;
    quantity: number;
    unit: string;
    expiryDate?: string;
  }[];
  status: 'pending' | 'accepted' | 'in-transit' | 'delivered';
  createdAt: string;
  updatedAt: string;
}

export interface Volunteer {
  id: string;
  userId: string;
  availability: {
    days: string[];
    timeSlots: string[];
  };
  skills: string[];
  experience: string;
  status: 'pending' | 'approved' | 'active' | 'inactive';
}