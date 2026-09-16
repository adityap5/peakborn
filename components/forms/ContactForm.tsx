'use client';

import React, { useState } from 'react';
import { CheckCircle2, Loader2, Send, ShieldCheck } from 'lucide-react';
import { EnquiryFormData } from '@/types';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export interface ContactFormProps {
  onSubmitSuccess?: (data: EnquiryFormData) => Promise<void> | void;
  className?: string;
}

export function ContactForm({ onSubmitSuccess, className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    duration: '1-2 Weeks',
    preferredStyle: 'Culture & Heritage',
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
      newErrors.fullName = 'Please provide your full name.';
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      newErrors.phone = 'Please provide a valid phone number.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.consentAgreed) {
      newErrors.consentAgreed = 'You must agree to our privacy policy to proceed.';
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
      console.error('Contact form submission failed', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`p-8 sm:p-10 rounded-2xl bg-white border border-line shadow-sm text-center ${className}`}>
        <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl font-bold mb-2 text-brand-dark">
          Message Received!
        </h3>
        <p className="text-sm text-gray-600 mb-6 max-w-md mx-auto leading-relaxed">
          Thank you for reaching out to us. Our senior trip planner will review your preferences and contact you via email or phone with a tailored proposal.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              fullName: '',
              phone: '',
              email: '',
              duration: '1-2 Weeks',
              preferredStyle: 'Culture & Heritage',
              travelDate: '',
              numberOfTravelers: 2,
              specialRequirements: '',
              consentAgreed: false,
              honeypot: '',
            });
          }}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className={`p-6 sm:p-8 rounded-2xl bg-white border border-line shadow-sm ${className}`}>
      <div className="mb-6">
        <h3 className="font-serif text-2xl font-bold text-brand-dark tracking-tight">
          Tell Us About Your Dream Trip
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          Fill out the details below and we will design a personalized holiday plan to match your interests.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Honeypot */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="contact-hp">Leave blank</label>
          <input
            id="contact-hp"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.honeypot || ''}
            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className="block text-xs font-semibold text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <Input
              id="contact-name"
              type="text"
              placeholder="e.g. John Doe"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              error={errors.fullName}
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <Input
              id="contact-email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={errors.email}
              disabled={isLoading}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-phone" className="block text-xs font-semibold text-gray-700 mb-1">
              Phone / WhatsApp <span className="text-red-500">*</span>
            </label>
            <Input
              id="contact-phone"
              type="tel"
              placeholder="+1 555 123 4567"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              error={errors.phone}
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="contact-date" className="block text-xs font-semibold text-gray-700 mb-1">
              Estimated Travel Dates
            </label>
            <Input
              id="contact-date"
              type="text"
              placeholder="e.g. November 2026"
              value={formData.travelDate || ''}
              onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
              disabled={isLoading}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-duration" className="block text-xs font-semibold text-gray-700 mb-1">
              Preferred Trip Duration
            </label>
            <select
              id="contact-duration"
              className="flex h-11 w-full rounded-md border border-line bg-white px-3.5 py-2 text-sm text-brand-dark shadow-sm focus-visible:outline-none focus-visible:border-brand-primary focus-visible:ring-2 focus-visible:ring-brand-primary/20"
              value={formData.duration || '1-2 Weeks'}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              disabled={isLoading}
            >
              <option value="Under 1 Week">Under 1 Week (3 - 6 Days)</option>
              <option value="1-2 Weeks">1 - 2 Weeks (7 - 14 Days)</option>
              <option value="2-3 Weeks">2 - 3 Weeks (15 - 21 Days)</option>
              <option value="3+ Weeks">3+ Weeks (22+ Days)</option>
            </select>
          </div>

          <div>
            <label htmlFor="contact-style" className="block text-xs font-semibold text-gray-700 mb-1">
              Primary Travel Interest
            </label>
            <select
              id="contact-style"
              className="flex h-11 w-full rounded-md border border-line bg-white px-3.5 py-2 text-sm text-brand-dark shadow-sm focus-visible:outline-none focus-visible:border-brand-primary focus-visible:ring-2 focus-visible:ring-brand-primary/20"
              value={formData.preferredStyle || 'Culture & Heritage'}
              onChange={(e) => setFormData({ ...formData, preferredStyle: e.target.value })}
              disabled={isLoading}
            >
              <option value="Culture & Heritage">Culture & Heritage</option>
              <option value="Wildlife & Safari">Wildlife & Safari</option>
              <option value="Beaches & Backwaters">Beaches & Backwaters</option>
              <option value="Mountains & Nature">Mountains & Nature</option>
              <option value="Luxury Journeys">Luxury Journeys</option>
              <option value="Honeymoon & Romance">Honeymoon & Romance</option>
              <option value="Family Holidays">Family Holidays</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-700 mb-1">
            Trip Preferences or Inquiries
          </label>
          <Textarea
            id="contact-message"
            placeholder="Tell us about destinations you have in mind, accommodation preferences, pacing, or any special requirements..."
            value={formData.specialRequirements || ''}
            onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
            disabled={isLoading}
            rows={4}
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
              I agree to be contacted by Peakborn Holidays regarding this travel inquiry.
            </span>
          </label>
          {errors.consentAgreed && (
            <p className="text-xs text-red-600 mt-1">{errors.consentAgreed}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full justify-center font-bold"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending Details...</span>
            </>
          ) : (
            <>
              <span>Submit Travel Enquiry</span>
              <Send className="w-4 h-4 ml-1" />
            </>
          )}
        </Button>

        <div className="flex items-center justify-center gap-1.5 pt-2 text-[11px] text-gray-500">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Your personal details are treated with strict confidentiality.</span>
        </div>
      </form>
    </div>
  );
}
