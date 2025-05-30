import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Phone, Building, UserPlus } from 'lucide-react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { useAuthStore } from '../store/authStore';
import type { UserRole } from '../store/authStore';
import { z } from 'zod';

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
  companyName: z.string().optional(),
  companyAddress: z.string().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const Register: React.FC = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [accountType, setAccountType] = useState<UserRole>('passenger');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    companyAddress: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const validatedData = registerSchema.parse(formData);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Create user in auth store
      login({
        id: '1',
        email: validatedData.email,
        name: validatedData.name,
        role: accountType,
        companyName: accountType === 'company' ? validatedData.companyName : undefined,
        companyId: accountType === 'company' ? '1' : undefined,
      });

      navigate(accountType === 'company' ? '/company-dashboard' : '/');
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      } else {
        setError('Registration failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Create your account</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
            sign in to your existing account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div className="flex justify-center space-x-4">
              <button 
                className={`px-4 py-2 rounded-lg flex-1 text-center font-medium ${
                  accountType === 'passenger' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                }`}
                onClick={() => setAccountType('passenger')}
              >
                Passenger
              </button>
              <button 
                className={`px-4 py-2 rounded-lg flex-1 text-center font-medium ${
                  accountType === 'company' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                }`}
                onClick={() => setAccountType('company')}
              >
                Taxi Company
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-error-50 text-error-700 p-3 rounded-md text-sm">
                  {error}
                </div>
              )}

              <Input 
                name="name"
                label="Full name" 
                placeholder="Your name" 
                value={formData.name}
                onChange={handleInputChange}
                leftIcon={<User className="h-5 w-5" />}
                required
              />
              
              <Input 
                name="email"
                label="Email address" 
                type="email" 
                placeholder="your@email.com" 
                value={formData.email}
                onChange={handleInputChange}
                leftIcon={<Mail className="h-5 w-5" />}
                required
              />
              
              <Input 
                name="phone"
                label="Phone number" 
                type="tel" 
                placeholder="(555) 123-4567" 
                value={formData.phone}
                onChange={handleInputChange}
                leftIcon={<Phone className="h-5 w-5" />}
                required
              />
              
              {accountType === 'company' && (
                <>
                  <Input 
                    name="companyName"
                    label="Company name" 
                    placeholder="Your company name" 
                    value={formData.companyName}
                    onChange={handleInputChange}
                    leftIcon={<Building className="h-5 w-5" />}
                    required
                  />
                  
                  <Input 
                    name="companyAddress"
                    label="Company address" 
                    placeholder="Company address" 
                    value={formData.companyAddress}
                    onChange={handleInputChange}
                    required
                  />
                </>
              )}
              
              <Input 
                name="password"
                label="Password" 
                type="password"
                placeholder="••••••••" 
                value={formData.password}
                onChange={handleInputChange}
                leftIcon={<Lock className="h-5 w-5" />}
                helperText="Must be at least 8 characters"
                required
              />
              
              <Input 
                name="confirmPassword"
                label="Confirm password" 
                type="password"
                placeholder="••••••••" 
                value={formData.confirmPassword}
                onChange={handleInputChange}
                leftIcon={<Lock className="h-5 w-5" />}
                required
              />
              
              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  I agree to the{' '}
                  <Link to="/terms" className="font-medium text-primary-600 hover:text-primary-500">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="font-medium text-primary-600 hover:text-primary-500">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              
              <Button 
                type="submit" 
                variant="primary" 
                fullWidth 
                leftIcon={<UserPlus className="h-5 w-5" />}
                isLoading={isLoading}
              >
                Create account
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;