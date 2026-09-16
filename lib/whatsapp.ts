import { companyData } from '@/data/company';
import { EnquiryFormData } from '@/types';

/**
 * Returns the sanitized numeric international phone string for WhatsApp wa.me links.
 */
export function getCleanWhatsAppNumber(): string {
  const num = companyData.whatsappNumber || companyData.phone || '917900740963';
  return num.replace(/[^0-9]/g, '');
}

/**
 * Formats a comprehensive Contact Page enquiry into a clean, structured WhatsApp message.
 */
export function formatContactEnquiryMessage(data: EnquiryFormData): string {
  const parts: string[] = [
    '*NEW TRAVEL ENQUIRY - PEAKBORN HOLIDAYS*',
    '----------------------------------------',
    `*Name:* ${data.fullName.trim()}`,
    `*Phone:* ${data.phone.trim()}`,
    `*Email:* ${data.email.trim()}`,
  ];

  if (data.travelDate && data.travelDate.trim()) {
    parts.push(`*Travel Date:* ${data.travelDate.trim()}`);
  }

  if (data.numberOfTravelers) {
    parts.push(`*Travelers:* ${data.numberOfTravelers}`);
  }

  if (data.duration && data.duration.trim()) {
    parts.push(`*Duration:* ${data.duration.trim()}`);
  }

  if (data.preferredStyle && data.preferredStyle.trim()) {
    parts.push(`*Preferred Theme:* ${data.preferredStyle.trim()}`);
  }

  if (data.specialRequirements && data.specialRequirements.trim()) {
    parts.push(`*Special Requests:* ${data.specialRequirements.trim()}`);
  }

  parts.push('----------------------------------------');
  parts.push('_Sent via Peakborn Holidays website (peakbornholidays.com)_');

  return parts.join('\n');
}

/**
 * Formats a Tour Package Quote Request into a clean WhatsApp message.
 */
export function formatTourEnquiryMessage(tourTitle: string, data: EnquiryFormData): string {
  const parts: string[] = [
    '*TOUR PACKAGE ENQUIRY - PEAKBORN HOLIDAYS*',
    '----------------------------------------',
    `*Package:* ${tourTitle}`,
    `*Name:* ${data.fullName.trim()}`,
    `*Phone:* ${data.phone.trim()}`,
    `*Email:* ${data.email.trim()}`,
  ];

  if (data.travelDate && data.travelDate.trim()) {
    parts.push(`*Travel Date:* ${data.travelDate.trim()}`);
  }

  if (data.numberOfTravelers) {
    parts.push(`*Travelers:* ${data.numberOfTravelers}`);
  }

  if (data.specialRequirements && data.specialRequirements.trim()) {
    parts.push(`*Custom Requests:* ${data.specialRequirements.trim()}`);
  }

  parts.push('----------------------------------------');
  parts.push('_Sent via Peakborn Holidays website (peakbornholidays.com)_');

  return parts.join('\n');
}

/**
 * Formats a Homepage Quick Hero Enquiry into a clean WhatsApp message.
 */
export function formatHeroEnquiryMessage(data: EnquiryFormData): string {
  const parts: string[] = [
    '*QUICK TRIP ENQUIRY - PEAKBORN HOLIDAYS*',
    '----------------------------------------',
    `*Name:* ${data.fullName.trim()}`,
    `*Phone:* ${data.phone.trim()}`,
    `*Email:* ${data.email.trim()}`,
  ];

  parts.push('----------------------------------------');
  parts.push('_Sent via Peakborn Holidays website (peakbornholidays.com)_');

  return parts.join('\n');
}

/**
 * Generates the full WhatsApp wa.me link with encoded message.
 */
export function getWhatsAppUrl(messageText: string): string {
  const cleanPhone = getCleanWhatsAppNumber();
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(messageText)}`;
}
