import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Mail, Phone, MapPin, Clock, Car, Upload, Check } from 'lucide-react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const CompanyRegistration: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Register Your Taxi Company</h1>
            <p className="text-xl text-gray-600">
              Join our platform and connect with more customers
            </p>
          </div>
          
          <div className="bg-white shadow-sm rounded-xl overflow-hidden">
            <div className="p-8">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Company Information</h2>
                  <span className="text-sm text-gray-500">Step 1 of 3</span>
                </div>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input 
                      label="Company Name" 
                      placeholder="Your taxi company name" 
                      leftIcon={<Building className="h-5 w-5" />}
                      required
                    />
                    
                    <Input 
                      label="Business Registration Number" 
                      placeholder="Registration/License number" 
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input 
                      label="Email Address" 
                      type="email" 
                      placeholder="company@example.com" 
                      leftIcon={<Mail className="h-5 w-5" />}
                      required
                    />
                    
                    <Input 
                      label="Phone Number" 
                      type="tel" 
                      placeholder="(555) 123-4567" 
                      leftIcon={<Phone className="h-5 w-5" />}
                      required
                    />
                  </div>
                  
                  <Input 
                    label="Company Address" 
                    placeholder="Full address" 
                    leftIcon={<MapPin className="h-5 w-5" />}
                    required
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="label">Company Logo</label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                        <div className="space-y-1 text-center">
                          <Upload className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500"
                            >
                              <span>Upload a file</span>
                              <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="label">Operating Hours</label>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <select className="input">
                            <option>24/7</option>
                            <option>Custom</option>
                          </select>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-5 w-5 text-gray-400" />
                          <span className="text-sm text-gray-600">24 hours, 7 days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="label">Company Description</label>
                    <textarea 
                      rows={4} 
                      className="input" 
                      placeholder="Tell customers about your taxi service, coverage area, and specialties..."
                      required
                    ></textarea>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Fleet Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input 
                        label="Fleet Size" 
                        type="number" 
                        placeholder="Number of vehicles" 
                        leftIcon={<Car className="h-5 w-5" />}
                        required
                      />
                      
                      <div>
                        <label className="label">Vehicle Types</label>
                        <div className="mt-1 space-y-2">
                          <div className="flex items-center">
                            <input
                              id="sedan"
                              name="vehicle_types"
                              type="checkbox"
                              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                            />
                            <label htmlFor="sedan" className="ml-2 block text-sm text-gray-700">
                              Sedan
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="suv"
                              name="vehicle_types"
                              type="checkbox"
                              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                            />
                            <label htmlFor="suv" className="ml-2 block text-sm text-gray-700">
                              SUV
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="van"
                              name="vehicle_types"
                              type="checkbox"
                              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                            />
                            <label htmlFor="van" className="ml-2 block text-sm text-gray-700">
                              Van
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="luxury"
                              name="vehicle_types"
                              type="checkbox"
                              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                            />
                            <label htmlFor="luxury" className="ml-2 block text-sm text-gray-700">
                              Luxury
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Subscription Plan</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-500 hover:bg-primary-50 cursor-pointer">
                        <div className="flex justify-between mb-2">
                          <h4 className="font-medium text-gray-900">Basic Plan</h4>
                          <span className="text-sm bg-gray-100 px-2 py-1 rounded-full text-gray-700">$49/month</span>
                        </div>
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-600">Standard listing</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-600">Booking management</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-600">Customer reviews</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="border-2 border-primary-500 rounded-lg p-4 bg-primary-50 relative">
                        <div className="absolute -top-3 -right-3 bg-accent-400 text-primary-900 text-xs font-bold px-3 py-1 rounded-full">
                          RECOMMENDED
                        </div>
                        <div className="flex justify-between mb-2">
                          <h4 className="font-medium text-gray-900">Premium Plan</h4>
                          <span className="text-sm bg-primary-100 px-2 py-1 rounded-full text-primary-700">$99/month</span>
                        </div>
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-600">Featured listing</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-600">Priority in search results</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-600">Advanced analytics</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-600">Promotional badge</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-6">
                    <Button type="submit" variant="primary" size="lg">
                      Continue to Verification
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegistration;