export default {
  locale: 'es-ES',

  messages: require('../locales/es-ES').default,

  dateTimeFormats: {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric'
    },
    shortTime: {
      hour: 'numeric',
      minute: 'numeric'
    }
  },

  numberFormats: {
    currency: {
      style: 'currency',
      currency: 'USD',
      currencyDisplay: 'symbol'
    }
  }
}
