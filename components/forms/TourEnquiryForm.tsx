'use client';

import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Loader2, Send } from 'lucide-react';
import { EnquiryFormData } from '@/types';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export interface TourEnquiryFormProps {
  tourTitle?: string;
  tourSlug?: string;
  onSubmitSuccess?: (data: EnquiryFormData) => Promise<void> | void;
  className?: string;
}

export function TourEnquiryForm({
  tourTitle,
  tourSlug,
  onSubmitSuccess,
  className = '',
}: TourEnquiryFormProps) {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    tourTitle: tourTitle || '',
    tourSlug: tourSlug || '',
    travelDate: '',
    numberOfTravelers: 2,
    specialRequirements: '',
    consentAgreed: false,
    honeypot: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your name.';
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.consentAgreed) {
      newErrors.consentAgreed = 'Please consent to be contacted regarding this enquiry.';
    }

    if (formData.honeypot) {
      return false;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    try {
      if (onSubmitSuccess) {
        await onSubmitSuccess(formData);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
      setIsSubmitted(true);
    } catch (err) {
      console.error('Tour enquiry failed', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`p-6 sm:p-8 rounded-xl bg-white border border-line shadow-sm text-center ${className}`}>
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="font-serif text-xl font-bold mb-2">Quote Request Received</h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-6 max-w-sm mx-auto">
          Thank you for your interest in {tourTitle ? `the "${tourTitle}" package` : 'this package'}. Our destination specialist will get back to you with detailed pricing and day-by-day customization.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              fullName: '',
              phone: '',
              email: '',
              tourTitle: tourTitle || '',
              tourSlug: tourSlug || '',
              travelDate: '',
              numberOfTravelers: 2,
              specialRequirements: '',
              consentAgreed: false,
              honeypot: '',
            });
          }}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <div className={`p-6 sm:p-7 rounded-xl bg-white border border-line shadow-sm ${className}`}>
      <div className="mb-5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-brand-primary block mb-1">
          Custom Quote Request
        </span>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-dark tracking-tight">
          Enquire About This Tour
        </h3>
        {tourTitle && (
          <p className="text-xs text-gray-500 mt-1 font-medium">
            Selected: <span className="text-brand-dark font-semibold">{tourTitle}</span>
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Honeypot */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="tour-hp">Leave blank</label>
          <input
            id="tour-hp"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.honeypot || ''}
            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="tour-name" className="block text-xs font-semibold text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="tour-name"
            type="text"
            placeholder="Your Full Name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            error={errors.fullName}
            disabled={isLoading}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="tour-phone" className="block text-xs font-semibold text-gray-700 mb-1">
              Phone / WhatsApp <span className="text-red-500">*</span>
            </label>
            <Input
              id="tour-phone"
              type="tel"
              placeholder="e.g. +91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              error={errors.phone}
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="tour-email" className="block text-xs font-semibold text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <Input
              id="tour-email"
              type="email"
              placeholder="name@domain.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={errors.email}
              disabled={isLoading}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="tour-date" className="block text-xs font-semibold text-gray-700 mb-1">
              Approx. Travel Month / Date
            </label>
            <Input
              id="tour-date"
              type="text"
              placeholder="e.g. October 2026"
              value={formData.travelDate || ''}
              onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="tour-travelers" className="block text-xs font-semibold text-gray-700 mb-1">
              Number of Travelers
            </label>
            <Input
              id="tour-travelers"
              type="number"
              min="1"
              max="50"
              value={formData.numberOfTravelers || 2}
              onChange={(e) => setFormData({ ...formData, numberOfTravelers: parseInt(e.target.value, 10) || 1 })}
              disabled={isLoading}
            />
          </div>
        </div>

        <div>
          <label htmlFor="tour-req" className="block text-xs font-semibold text-gray-700 mb-1">
            Custom Requests / Questions
          </label>
          <Textarea
            id="tour-req"
            placeholder="Tell us about your preferred hotel style, pacing, or specific sights you wish to include..."
            value={formData.specialRequirements || ''}
            onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
            disabled={isLoading}
            rows={3}
          />
        </div>

        <div>
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
              checked={formData.consentAgreed}
              onChange={(e) => setFormData({ ...formData, consentAgreed: e.target.checked })}
              disabled={isLoading}
            />
            <span className="text-xs text-gray-600 leading-snug">
              I agree to receive a personalized quote and itinerary details regarding this inquiry.
            </span>
          </label>
          {errors.consentAgreed && (
            <p className="text-xs text-red-600 mt-1">{errors.consentAgreed}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full justify-center font-bold"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending Request...</span>
            </>
          ) : (
            <>
              <span>Request Tailored Quote</span>
              <Send className="w-4 h-4 ml-1" />
            </>
          )}
        </Button>

        <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] text-gray-500">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>No commitment required. Free custom itinerary planning.</span>
        </div>
      </form>
    </div>
  );
}
