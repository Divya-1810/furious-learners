// app/utils/otpStore.js

const otpStore = new Map();

/**
 * Structure:
 * {
 *   email: {
 *     otp: "123456",
 *     expiresAt: 1713378980000,
 *     userData: {
 *       name, email, password, role, dob, gender, phoneNumber
 *     }
 *   }
 * }
 */

export function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
}

export default otpStore;
