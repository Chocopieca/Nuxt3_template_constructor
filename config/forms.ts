export const contactFormConfig = {
  fields: {
    name: {
      label: 'Name',
      placeholder: 'Your name',
      type: 'text',
      required: true
    },
    email: {
      label: 'Email',
      placeholder: 'example@email.com',
      type: 'email',
      required: true
    },
    title: {
      label: 'Subject',
      placeholder: 'Message subject',
      type: 'text',
      required: true
    },
    message: {
      label: 'Message',
      placeholder: 'Write your message here...',
      type: 'textarea',
      required: true
    }
  },
  submitButton: {
    text: 'Send',
    loadingText: 'Sending...'
  },
  errorMessage: 'An error occurred. Please try again.'
} 