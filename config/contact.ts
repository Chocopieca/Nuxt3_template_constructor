import { contactConfig as siteContactConfig } from './site'

// Re-export contact info from site config
export const contactConfig = {
  items: [
    {
      icon: 'i-heroicons-map-pin',
      title: 'Address',
      content: [
        siteContactConfig.location.address.street,
        `${siteContactConfig.location.address.city} ${siteContactConfig.location.address.state} ${siteContactConfig.location.address.postcode}`,
        siteContactConfig.location.address.country
      ]
    },
    {
      icon: 'i-heroicons-clock',
      title: 'Business Hours',
      content: [
        `${siteContactConfig.workingHours.days}: ${siteContactConfig.workingHours.hours}`
      ]
    },
    {
      icon: 'i-heroicons-phone',
      title: 'Phone',
      content: [siteContactConfig.phone]
    },
    {
      icon: 'i-heroicons-envelope',
      title: 'Email',
      content: [siteContactConfig.email]
    }
  ]
}