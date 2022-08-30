class ApiError extends Error {
  status: number;
  message: string;

  constructor(status: number = 500, message: string) {
    super();
    this.status = status;
    this.message = message;
  }

  static badRequest(message: string) {
    return new ApiError(404, message);
  }

  static badInput(message: string | undefined) {
    return new ApiError(422, message || 'Invalid input');
  }

  static internal(message: string = 'Ooooop, something went wrong') {
    return new ApiError(500, message);
  }

  static forbidden(message: string) {
    return new ApiError(403, message);
  }
}

export { ApiError };
