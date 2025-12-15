type LogLevel = "info" | "warn" | "error" | "debug";

const colors = {
  info: "\x1b[36m",
  warn: "\x1b[33m",
  error: "\x1b[31m",
  debug: "\x1b[35m",
  reset: "\x1b[0m",
};

function formatMessage(level: LogLevel, message: string): string {
  const timestamp = new Date().toISOString();
  return `${colors[level]}[${timestamp}] [${level.toUpperCase()}]${colors.reset} ${message}`;
}

export const logger = {
  info: (message: string, ...args: unknown[]) => {
    console.log(formatMessage("info", message), ...args);
  },

  warn: (message: string, ...args: unknown[]) => {
    console.warn(formatMessage("warn", message), ...args);
  },

  error: (message: string, ...args: unknown[]) => {
    console.error(formatMessage("error", message), ...args);
  },

  debug: (message: string, ...args: unknown[]) => {
    if (process.env.NODE_ENV === "development") {
      console.log(formatMessage("debug", message), ...args);
    }
  },
};
