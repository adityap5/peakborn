'use client';

import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import { EnquiryFormData } from '@/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export interface HeroEnquiryFormProps {
  onSubmitSuccess?: (data: EnquiryFormData) => Promise<void> | void;
  className?: string;
}

export function HeroEnquiryForm({ onSubmitSuccess, className = '' }: HeroEnquiryFormProps) {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    consentAgreed: false,
    honeypot: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.consentAgreed) {
      newErrors.consentAgreed = 'Please agree to be contacted regarding your enquiry.';
    }

    // Bot detection via honeypot
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
        // Simulated submission latency
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission failed', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`p-6 sm:p-7 rounded-2xl bg-white text-brand-dark border border-line shadow-xl text-center flex flex-col items-center justify-center min-h-[360px] ${className}`}>
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2">
          Thank You!
        </h3>
        <p className="text-sm text-gray-600 mb-6 max-w-xs">
          We have received your trip inquiry. One of our destination specialists will reach out to you within 24 hours.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ fullName: '', phone: '', email: '', consentAgreed: false, honeypot: '' });
          }}
        >
          Send Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <div className={`p-6 sm:p-7 rounded-2xl bg-white/95 text-brand-dark border border-line shadow-xl backdrop-blur-xs ${className}`}>
      <div className="mb-5">
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-dark tracking-tight">
          Plan My India Trip
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
          Share your details to receive a free customized itinerary and quote from our local specialists.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
        {/* Honeypot field for bot suppression */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="hero-hp">Leave this empty</label>
          <input
            id="hero-hp"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.honeypot || ''}
            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="hero-name" className="block text-xs font-semibold text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="hero-name"
            type="text"
            placeholder="e.g. Eleanor Vance"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            error={errors.fullName}
            disabled={isLoading}
          />
        </div>

        <div>
          <label htmlFor="hero-phone" className="block text-xs font-semibold text-gray-700 mb-1">
            Phone / WhatsApp <span className="text-red-500">*</span>
          </label>
          <Input
            id="hero-phone"
            type="tel"
            placeholder="e.g. +44 7123 456789"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            error={errors.phone}
            disabled={isLoading}
          />
        </div>

        <div>
          <label htmlFor="hero-email" className="block text-xs font-semibold text-gray-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <Input
            id="hero-email"
            type="email"
            placeholder="e.g. eleanor@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            error={errors.email}
            disabled={isLoading}
          />
        </div>

        <div>
          <label className="flex items-start gap-2.5 cursor-pointer pt-1">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
              checked={formData.consentAgreed}
              onChange={(e) => setFormData({ ...formData, consentAgreed: e.target.checked })}
              disabled={isLoading}
            />
            <span className="text-xs text-gray-600 leading-snug">
              I agree to be contacted about my holiday enquiry.
            </span>
          </label>
          {errors.consentAgreed && (
            <p className="text-xs text-red-600 mt-1">{errors.consentAgreed}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full justify-center mt-2 font-bold shadow-md"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </>
          )}
        </Button>

        <div className="flex items-center justify-center gap-1.5 pt-2 text-[11px] text-gray-500">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Your information is safe and never shared.</span>
        </div>
      </form>
    </div>
  );
}
