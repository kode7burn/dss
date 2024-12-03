import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

interface FormData {
  step: number;
  basicInfo: {
    name: string;
    email: string;
    phone: string;
  };
  serviceSelection: string[];
  projectDetails: {
    requirements: string;
    timeline: string;
  };
  budget: string;
  comments: string;
}

const initialFormData: FormData = {
  step: 1,
  basicInfo: {
    name: '',
    email: '',
    phone: '',
  },
  serviceSelection: [],
  projectDetails: {
    requirements: '',
    timeline: '',
  },
  budget: '',
  comments: '',
};

const services = [
  'Event Security',
  'Commercial Security',
  'Residential Security',
  'Private Security',
  'Cybersecurity',
];

const budgetRanges = [
  'Under $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  'Over $50,000',
];

export const QuoteForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    setFormData((prev) => ({
      ...prev,
      step: prev.step + 1,
    }));
  };

  const handlePrevious = () => {
    setFormData((prev) => ({
      ...prev,
      step: prev.step - 1,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission logic here
  };

  const renderStep = () => {
    switch (formData.step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-xl font-semibold mb-6">Basic Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.basicInfo.name}
                  onChange={(e) =>
                    updateFormData('basicInfo', {
                      ...formData.basicInfo,
                      name: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.basicInfo.email}
                  onChange={(e) =>
                    updateFormData('basicInfo', {
                      ...formData.basicInfo,
                      email: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.basicInfo.phone}
                  onChange={(e) =>
                    updateFormData('basicInfo', {
                      ...formData.basicInfo,
                      phone: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                />
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-xl font-semibold mb-6">Service Selection</h3>
            <div className="space-y-3">
              {services.map((service) => (
                <label
                  key={service}
                  className="flex items-center p-4 border rounded-md cursor-pointer hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    checked={formData.serviceSelection.includes(service)}
                    onChange={(e) => {
                      const newSelection = e.target.checked
                        ? [...formData.serviceSelection, service]
                        : formData.serviceSelection.filter((s) => s !== service);
                      updateFormData('serviceSelection', newSelection);
                    }}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <span className="ml-3">{service}</span>
                </label>
              ))}
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-xl font-semibold mb-6">Project Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Requirements
                </label>
                <textarea
                  value={formData.projectDetails.requirements}
                  onChange={(e) =>
                    updateFormData('projectDetails', {
                      ...formData.projectDetails,
                      requirements: e.target.value,
                    })
                  }
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Timeline
                </label>
                <input
                  type="text"
                  value={formData.projectDetails.timeline}
                  onChange={(e) =>
                    updateFormData('projectDetails', {
                      ...formData.projectDetails,
                      timeline: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="e.g., 3 months, 1 year"
                  required
                />
              </div>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-xl font-semibold mb-6">Budget Range</h3>
            <div className="space-y-3">
              {budgetRanges.map((range) => (
                <label
                  key={range}
                  className="flex items-center p-4 border rounded-md cursor-pointer hover:bg-gray-50"
                >
                  <input
                    type="radio"
                    name="budget"
                    value={range}
                    checked={formData.budget === range}
                    onChange={(e) => updateFormData('budget', e.target.value)}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                  />
                  <span className="ml-3">{range}</span>
                </label>
              ))}
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-xl font-semibold mb-6">Additional Comments</h3>
            <div>
              <textarea
                value={formData.comments}
                onChange={(e) => updateFormData('comments', e.target.value)}
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                placeholder="Any additional information you'd like to share..."
              />
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-semibold mb-2">Quote Request Submitted!</h3>
        <p className="text-gray-600">
          Thank you for your interest. Our team will contact you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`flex items-center ${
                step !== 5 ? 'flex-1' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step <= formData.step
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {step}
              </div>
              {step !== 5 && (
                <div
                  className={`flex-1 h-1 mx-2 ${
                    step < formData.step ? 'bg-primary' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 shadow-lg">
        <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>

        <div className="flex justify-between mt-8">
          {formData.step > 1 && (
            <button
              type="button"
              onClick={handlePrevious}
              className="flex items-center px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </button>
          )}
          {formData.step < 5 ? (
            <button
              type="button"
              onClick={handleNext}
              className="flex items-center px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 ml-auto"
            >
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          ) : (
            <button
              type="submit"
              className="flex items-center px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 ml-auto"
            >
              Submit Quote Request
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};