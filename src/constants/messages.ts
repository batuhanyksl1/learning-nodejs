export const Messages = {
  // Success messages
  SUCCESS: {
    USER_CREATED: "User created successfully",
    USER_UPDATED: "User updated successfully",
    USER_DELETED: "User deleted successfully",
    LOGIN_SUCCESS: "Login successful",
    LOGOUT_SUCCESS: "Logout successful",
    REGISTER_SUCCESS: "Registration successful",
  },

  // Error messages
  ERROR: {
    USER_NOT_FOUND: "User not found",
    USER_ALREADY_EXISTS: "User already exists",
    INVALID_CREDENTIALS: "Invalid email or password",
    UNAUTHORIZED: "Unauthorized access",
    FORBIDDEN: "Access forbidden",
    VALIDATION_FAILED: "Validation failed",
    INTERNAL_ERROR: "Internal server error",
    NO_TOKEN: "No token provided",
    INVALID_TOKEN: "Invalid or expired token",
  },

  // Validation messages
  VALIDATION: {
    NAME_REQUIRED: "Name is required",
    NAME_MIN_LENGTH: "Name must be at least 2 characters",
    EMAIL_REQUIRED: "Email is required",
    EMAIL_INVALID: "Invalid email format",
    PASSWORD_REQUIRED: "Password is required",
    PASSWORD_MIN_LENGTH: "Password must be at least 6 characters",
    AGE_MIN: "Age must be at least 1",
  },
} as const;
