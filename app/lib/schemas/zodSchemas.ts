// src/lib/schemas/zodSchemas.ts
import { z } from "zod";

// Enum for Trip Status
export const TripStatusSchema = z.enum([
  "REQUESTED",
  "ACCEPTED",
  "COMPLETED",
  "CANCELLED",
]);

// User Schema
export const UserSchema = z.object({
  id: z.string().length(24), // MongoDB ObjectId length
  phone: z.string().min(10),
  name: z.string().optional(),
  profilePicture: z.string().optional(),
  email: z.string().email(),
  currentLat: z.number().optional(),
  currentLng: z.number().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// OTP Schema
export const OTPSchema = z.object({
  id: z.string().length(24),
  phone: z.string().min(10),
  code: z.string(),
  createdAt: z.date(),
  expiresAt: z.date(),
});

// Trip Schema
export const TripSchema = z.object({
  id: z.string().length(24),
  riderId: z.string().length(24),
  driverId: z.string().length(24).optional(),
  startLat: z.number(),
  startLng: z.number(),
  endLat: z.number().optional(),
  endLng: z.number().optional(),
  requestedAt: z.date(),
  acceptedAt: z.date().optional(),
  completedAt: z.date().optional(),
  status: TripStatusSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
});

// Chat Schema
export const ChatSchema = z.object({
  id: z.string().length(24),
  tripId: z.string().length(24),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// Message Schema
export const MessageSchema = z.object({
  id: z.string().length(24),
  chatId: z.string().length(24),
  senderId: z.string().length(24),
  text: z.string(),
  createdAt: z.date(),
});

// Exporting the types for front-end use
export type User = z.infer<typeof UserSchema>;
export type OTP = z.infer<typeof OTPSchema>;
export type Trip = z.infer<typeof TripSchema>;
export type Chat = z.infer<typeof ChatSchema>;
export type Message = z.infer<typeof MessageSchema>;
