import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Calendar, Clock, Users, CreditCard, AlertCircle } from 'lucide-react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { mockTaxiCompanies } from '../data/mockData';

const BookingForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const companyId = parseInt(id || '1');
  
  const company = mockTaxiCompanies.find(c => c.id === companyId) || mockTaxiCompanies[0];
  
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  
  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Book a Ride with {company.name}</h1>
            <p className="text-gray-600">Fill in the details below to complete your booking</p>
          </div>
          
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center">
              {[...Array(totalSteps)].map((_, index) => (
                <React.Fragment key={index}>
                  {/* Step Circle */}
                  <div className={`relative flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    index + 1 === currentStep
                      ? 'border-primary-600 bg-primary-600 text-white'
                      : index + 1 < currentStep
                      ? 'border-primary-600 bg-white text-primary-600'
                      : 'border-gray-300 bg-white text-gray-500'
                  }`}>
                    {index + 1 < currentStep ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <span className="text-sm font-medium">{index + 1}</span>
                    )}
                  </div>
                  
                  {/* Connector */}
                  {index < totalSteps - 1 && (
                    <div className={`flex-1 h-0.5 mx-2 ${
                      index + 1 < currentStep ? 'bg-primary-600' : 'bg-gray-300'
                    }`}></div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm font-medium text-gray-900">Ride Details</span>
              <span className="text-sm font-medium text-center text-gray-900">Passenger Info</span>
              <span className="text-sm font-medium text-right text-gray-900">Payment</span>
            </div>
          </div>
          
          <div className="bg-white shadow-sm rounded-xl overflow-hidden">
            <div className="p-8">
              {/* Step 1: Ride Details */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Ride Details</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <Input 
                        label="Pickup Location" 
                        placeholder="Enter your pickup address"
                        leftIcon={<MapPin className="h-5 w-5" />}
                        required
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <Input 
                        label="Destination" 
                        placeholder="Enter your destination"
                        leftIcon={<MapPin className="h-5 w-5" />}
                        required
                      />
                    </div>
                    
                    <div>
                      <Input 
                        label="Date" 
                        type="date"
                        leftIcon={<Calendar className="h-5 w-5" />}
                        required
                      />
                    </div>
                    
                    <div>
                      <Input 
                        label="Time" 
                        type="time"
                        leftIcon={<Clock className="h-5 w-5" />}
                        required
                      />
                    </div>
                    
                    <div>
                      <Input 
                        label="Number of Passengers" 
                        type="number"
                        min="1"
                        max="8"
                        defaultValue="1"
                        leftIcon={<Users className="h-5 w-5" />}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="label">Vehicle Type</label>
                      <select className="input">
                        <option>Standard Sedan</option>
                        <option>SUV</option>
                        <option>Luxury</option>
                        <option>Van</option>
                      </select>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="label">Additional Notes</label>
                      <textarea 
                        className="input" 
                        rows={3}
                        placeholder="Any special requirements or instructions for the driver..."
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="pt-6 flex justify-end">
                    <Button 
                      variant="primary" 
                      onClick={handleNextStep}
                    >
                      Continue to Passenger Info
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 2: Passenger Information */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Passenger Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Input 
                        label="First Name" 
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    
                    <div>
                      <Input 
                        label="Last Name" 
                        placeholder="Your last name"
                        required
                      />
                    </div>
                    
                    <div>
                      <Input 
                        label="Email" 
                        type="email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <Input 
                        label="Phone Number" 
                        type="tel"
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="save-info"
                            name="save-info"
                            type="checkbox"
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="save-info" className="font-medium text-gray-700">
                            Save my information for future bookings
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 flex justify-between">
                    <Button 
                      variant="secondary" 
                      onClick={handlePrevStep}
                    >
                      Back
                    </Button>
                    <Button 
                      variant="primary" 
                      onClick={handleNextStep}
                    >
                      Continue to Payment
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 3: Payment */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment Details</h2>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h3 className="font-medium text-gray-900 mb-2">Ride Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Company:</span>
                        <span className="font-medium">{company.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Vehicle Type:</span>
                        <span className="font-medium">Standard Sedan</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date & Time:</span>
                        <span className="font-medium">June 15, 2025 at 10:00 AM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Base Fare:</span>
                        <span className="font-medium">$25.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Service Fee:</span>
                        <span className="font-medium">$2.50</span>
                      </div>
                      <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between">
                        <span className="font-medium text-gray-900">Total:</span>
                        <span className="font-bold text-primary-700">$27.50</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-4">Select Payment Method</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          id="payment-card"
                          name="payment-method"
                          type="radio"
                          checked
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                        />
                        <label htmlFor="payment-card" className="ml-3 flex items-center">
                          <CreditCard className="h-5 w-5 text-gray-500 mr-2" />
                          <span className="font-medium text-gray-700">Credit/Debit Card</span>
                        </label>
                      </div>
                      
                      <div className="ml-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <Input 
                            label="Card Number" 
                            placeholder="1234 5678 9012 3456"
                            required
                          />
                        </div>
                        
                        <div>
                          <Input 
                            label="Expiration Date" 
                            placeholder="MM/YY"
                            required
                          />
                        </div>
                        
                        <div>
                          <Input 
                            label="CVC" 
                            placeholder="123"
                            required
                          />
                        </div>
                        
                        <div className="md:col-span-2">
                          <Input 
                            label="Cardholder Name" 
                            placeholder="Name on card"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-200 mt-4 pt-4">
                        <div className="flex items-center">
                          <input
                            id="payment-cash"
                            name="payment-method"
                            type="radio"
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                          />
                          <label htmlFor="payment-cash" className="ml-3">
                            <span className="font-medium text-gray-700">Pay with Cash</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-accent-50 border border-accent-200 rounded-lg p-4 flex items-start">
                    <AlertCircle className="h-5 w-5 text-accent-500 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-sm text-accent-700">
                      You won't be charged until your ride is confirmed. Cancellations made at least 1 hour before pickup are free.
                    </p>
                  </div>
                  
                  <div className="pt-6 flex justify-between">
                    <Button 
                      variant="secondary" 
                      onClick={handlePrevStep}
                    >
                      Back
                    </Button>
                    <Button 
                      variant="primary"
                    >
                      Complete Booking
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Check = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default BookingForm;