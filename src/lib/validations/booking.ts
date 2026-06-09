import * as z from 'zod'

// Shared Zod schema for workshop booking validation (client + server)
export const bookingSchema = z.object({
  contactName: z.string().min(2, 'Name is required'),
  designation: z.string().min(1, 'Please select a designation'),
  collegeName: z.string().min(2, 'College name is required'),
  collegeCity: z.string().min(2, 'City is required'),
  collegeState: z.string().min(1, 'State is required'),
  officialEmail: z.string().email('Invalid email address').refine(val => val.includes('@'), { message: 'Must contain @' }),
  whatsappNumber: z.string().regex(/^[0-9]{10}$/, 'Must be a 10-digit number'),
  workshopTopic: z.string().min(1, 'Please select a topic'),
  preferredDate: z.string().refine((val) => {
    if (!val) return false
    const date = new Date(val)
    const minDate = new Date()
    minDate.setDate(minDate.getDate() + 14)
    minDate.setHours(0, 0, 0, 0)
    return date >= minDate
  }, { message: 'Date must be at least 14 days from today' }),
  alternateDate: z.string().optional().refine((val) => {
    if (!val) return true
    return true // Can be further validated dynamically in form for ordering
  }, { message: 'Invalid alternate date' }),
  expectedStudents: z.string().min(1, 'Please select expected student count'),
  venue: z.enum(['On-Campus', 'Online'], { message: 'Please select a venue' }),
  additionalNotes: z.string().max(500, 'Notes must be under 500 characters').optional(),
  referralSource: z.string().min(1, 'Please let us know how you found us'),
})

export type BookingFormData = z.infer<typeof bookingSchema>

export const STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 
  'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  // UTs
  'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 
  'Lakshadweep', 'Delhi', 'Puducherry', 'Ladakh', 'Jammu and Kashmir'
]

export const TOPICS = [
  { value: 'iot-esp32', label: 'IoT with ESP32' },
  { value: 'robotics-embedded', label: 'Robotics & Embedded Systems' },
  { value: 'cubesat-design', label: 'CubeSat Design & Build' },
  { value: 'plc-automation', label: 'PLC Automation' },
  { value: 'vfd-motor-drives', label: 'VFD & Motor Drives' },
  { value: 'online-webinar', label: 'Online Webinar (any topic)' }
]
