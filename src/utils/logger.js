/* eslint-disable no-console */
/**
 * Logger utility for consistent logging across the application
 * Replaces console statements with proper logging levels
 */

const isDevelopment = process.env.NODE_ENV === 'development';

/**
 * Logger class for structured logging
 */
class Logger {
  constructor(context = 'App') {
    this.context = context;
  }

  /**
   * Log error messages
   */
  error(message, ...args) {
    if (isDevelopment) {
      console.error(`[${this.context}] ERROR:`, message, ...args);
    }
    // In production, you might want to send to a logging service
  }

  /**
   * Log warning messages
   */
  warn(message, ...args) {
    if (isDevelopment) {
      console.warn(`[${this.context}] WARN:`, message, ...args);
    }
  }

  /**
   * Log info messages
   */
  info(message, ...args) {
    if (isDevelopment) {
      console.info(`[${this.context}] INFO:`, message, ...args);
    }
  }

  /**
   * Log debug messages
   */
  debug(message, ...args) {
    if (isDevelopment) {
      console.debug(`[${this.context}] DEBUG:`, message, ...args);
    }
  }
}

// Create default logger instance
const logger = new Logger();

export default logger;
export { Logger };