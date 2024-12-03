import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-start">
        <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
        <div>
          <h3 className="font-semibold text-lg mb-1">Phone</h3>
          <p className="text-gray-600">Emergency: (800) 555-0911</p>
          <p className="text-gray-600">General: (800) 555-0000</p>
        </div>
      </div>

      <div className="flex items-start">
        <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
        <div>
          <h3 className="font-semibold text-lg mb-1">Email</h3>
          <p className="text-gray-600">info@diligentsecurity.com</p>
          <p className="text-gray-600">support@diligentsecurity.com</p>
        </div>
      </div>

      <div className="flex items-start">
        <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
        <div>
          <h3 className="font-semibold text-lg mb-1">Address</h3>
          <p className="text-gray-600">
            123 Security Plaza<br />
            Suite 500<br />
            Los Angeles, CA 90001
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <Clock className="w-6 h-6 text-primary mr-4 mt-1" />
        <div>
          <h3 className="font-semibold text-lg mb-1">Hours of Operation</h3>
          <p className="text-gray-600">24/7 Emergency Response</p>
          <p className="text-gray-600">Office: Mon-Fri 9:00 AM - 6:00 PM</p>
        </div>
      </div>
    </div>
  );
};