export interface TaxiCompany {
  id: number;
  name: string;
  description: string;
  logo: string;
  rating: number;
  reviewCount: number;
  location: string;
  availability: string;
  fleetSize: number;
  featured: boolean;
  phone: string;
  email: string;
  services: string[];
  priceRange: string;
}

export interface Booking {
  id: number;
  userId: number;
  companyId: number;
  pickupLocation: string;
  destination: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled';
  fare: number;
  paymentStatus: 'pending' | 'paid';
  passengers: number;
  notes?: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: 'customer' | 'company' | 'admin';
  companyId?: number;
}