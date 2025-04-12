export default class SuccessMessageHandler {
  static generic() {
    return 'Success.';
  }

  static operation() {
    return 'Operation successfully.';
  }

  static create(field: string) {
    return `${field} successfully created.`;
  }

  static delete(field: string) {
    return `${field} successfully deleted.`;
  }

  static update(field: string) {
    return `${field} successfully updated.`;
  }

  static custom(message: string) {
    return `${message}.`;
  }
}
