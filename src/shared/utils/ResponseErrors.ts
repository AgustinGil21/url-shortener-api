export class ResponseErrors {
  static generic() {
    return { status: 400, message: `Error.` };
  }

  static unexpected() {
    return { status: 400, message: `Unexpected error.` };
  }

  static internal() {
    return { status: 500, message: `Internal server error.` };
  }

  static notFound(value: string) {
    return { status: 404, message: `${value} not found.` };
  }

  static get(value: string) {
    return { status: 400, message: `Could not get ${value}.` };
  }

  static delete(value: string) {
    return { status: 400, message: `Could not delete ${value}.` };
  }

  static create(value: string) {
    return { status: 400, message: `Could not create ${value}.` };
  }

  static edit(value: string) {
    return { status: 400, message: `Could not update ${value} data.` };
  }

  static operation() {
    return { status: 400, message: 'Could not complete operation.' };
  }
}
